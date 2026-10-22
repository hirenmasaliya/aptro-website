"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ArrowLeft,
  Copy,
  Check,
  ShieldCheck,
  FileText,
  X,
  ChevronDown,
  ListFilter,
  Zap,
  ClipboardCheck,
  Layers,
  BadgePercent,
  Receipt,
  RotateCcw,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/*  Rates follow GST 2.0 (effective 22 Sep 2025): 0%, 5%, 18%, 40%            */
/*  plus special rates (3% gold/jewellery). Always verify on the GST portal.   */
/* -------------------------------------------------------------------------- */

type CodeType = "HSN" | "SAC";

interface HsnItem {
  code: string;
  type: CodeType;
  category: string;
  description: string;
  gst: string; // display text
  rates: number[]; // used for filtering
  covers: string;
  examples: string[];
  note?: string;
}

const hsnDatabase: HsnItem[] = [
  // Apparel & textiles
  {
    code: "6109", type: "HSN", category: "Apparel & textiles",
    description: "T-shirts, singlets and other vests, knitted or crocheted",
    gst: "5% / 18%", rates: [5, 18],
    covers: "Knitted or crocheted T-shirts, vests and singlets for men, women and children.",
    examples: ["Cotton T-shirt", "Polo shirt", "Sleeveless vest"],
    note: "Rate depends on the sale value per piece: 5% up to ₹2,500, 18% above.",
  },
  {
    code: "6204", type: "HSN", category: "Apparel & textiles",
    description: "Women's or girls' suits, ensembles, jackets, dresses, skirts",
    gst: "5% / 18%", rates: [5, 18],
    covers: "Woven (not knitted) women's and girls' outerwear such as suits, dresses and skirts.",
    examples: ["Kurta set", "Dress", "Women's blazer"],
    note: "Rate depends on the sale value per piece: 5% up to ₹2,500, 18% above.",
  },
  {
    code: "5208", type: "HSN", category: "Apparel & textiles",
    description: "Woven fabrics of cotton, containing 85% or more cotton by weight",
    gst: "5%", rates: [5],
    covers: "Plain-weave cotton fabric sold by the metre or roll, before stitching.",
    examples: ["Cotton cloth roll", "Shirting fabric"],
  },

  // Electronics & IT
  {
    code: "8471", type: "HSN", category: "Electronics & IT",
    description: "Automatic data processing machines and units thereof (Computers, Laptops)",
    gst: "18%", rates: [18],
    covers: "Laptops, desktops, tablets, servers, keyboards, mice, printers and scanners.",
    examples: ["Laptop", "Desktop PC", "Computer keyboard"],
  },
  {
    code: "8517", type: "HSN", category: "Electronics & IT",
    description: "Telephone sets, smartphones, and other transmission apparatus",
    gst: "18%", rates: [18],
    covers: "Smartphones, routers, modems, switches and network equipment.",
    examples: ["Smartphone", "Wi-Fi router", "Network switch"],
  },
  {
    code: "8528", type: "HSN", category: "Electronics & IT",
    description: "Monitors, projectors and television receivers",
    gst: "18%", rates: [18],
    covers: "LED and LCD TVs, computer monitors and projectors.",
    examples: ["LED TV", "Computer monitor", "Projector"],
    note: "Large TVs moved from 28% to 18% under GST 2.0.",
  },

  // Home appliances
  {
    code: "8415", type: "HSN", category: "Home appliances",
    description: "Air conditioning machines",
    gst: "18%", rates: [18],
    covers: "Split and window air conditioners and their parts.",
    examples: ["Split AC", "Window AC"],
    note: "Moved from 28% to 18% under GST 2.0.",
  },
  {
    code: "8418", type: "HSN", category: "Home appliances",
    description: "Refrigerators, freezers and other refrigerating equipment",
    gst: "18%", rates: [18],
    covers: "Domestic and commercial refrigerators, deep freezers and chillers.",
    examples: ["Double-door fridge", "Deep freezer"],
  },
  {
    code: "8450", type: "HSN", category: "Home appliances",
    description: "Household or laundry-type washing machines",
    gst: "18%", rates: [18],
    covers: "Fully automatic, semi-automatic and top or front-load washing machines.",
    examples: ["Front-load washer", "Semi-automatic washer"],
  },

  // Furniture
  {
    code: "9403", type: "HSN", category: "Furniture",
    description: "Other furniture and parts thereof (Office & Home Wooden/Metal Furniture)",
    gst: "18%", rates: [18],
    covers: "Office desks, wardrobes, beds, shelves and other non-seating furniture.",
    examples: ["Office desk", "Steel almirah", "Wooden bed"],
  },
  {
    code: "9401", type: "HSN", category: "Furniture",
    description: "Seats (whether or not convertible into beds) and parts thereof",
    gst: "18%", rates: [18],
    covers: "Chairs, sofas, stools and office seating.",
    examples: ["Office chair", "Sofa set"],
  },

  // Food & grocery
  {
    code: "1006", type: "HSN", category: "Food & grocery",
    description: "Rice (Branded/Packaged or Unbranded)",
    gst: "0% / 5%", rates: [0, 5],
    covers: "Paddy, husked, milled and parboiled rice.",
    examples: ["Basmati rice", "Loose rice"],
    note: "Loose, unbranded rice is nil-rated. Pre-packaged and labelled rice attracts 5%.",
  },
  {
    code: "0401", type: "HSN", category: "Food & grocery",
    description: "Milk and cream, not concentrated nor containing added sugar",
    gst: "0%", rates: [0],
    covers: "Fresh and pasteurised milk, including UHT milk.",
    examples: ["Packaged milk", "Fresh cream"],
  },
  {
    code: "0405", type: "HSN", category: "Food & grocery",
    description: "Butter and other fats and oils derived from milk; dairy spreads",
    gst: "5%", rates: [5],
    covers: "Butter, ghee and milk-fat spreads.",
    examples: ["Butter", "Desi ghee"],
    note: "Reduced from 12% under GST 2.0.",
  },
  {
    code: "0902", type: "HSN", category: "Food & grocery",
    description: "Tea, whether or not flavoured",
    gst: "5%", rates: [5],
    covers: "Black, green and flavoured tea in leaf or bag form.",
    examples: ["Tea leaves", "Green tea bags"],
  },

  // Beverages & tobacco
  {
    code: "2202", type: "HSN", category: "Beverages & tobacco",
    description: "Waters with added sugar or flavour; aerated and carbonated beverages",
    gst: "40%", rates: [40],
    covers: "Soft drinks, carbonated and caffeinated beverages.",
    examples: ["Cola", "Energy drink"],
    note: "Moved from 28% + cess to the 40% rate under GST 2.0.",
  },
  {
    code: "2402", type: "HSN", category: "Beverages & tobacco",
    description: "Cigars, cheroots, cigarillos and cigarettes",
    gst: "40%", rates: [40],
    covers: "Tobacco and tobacco-substitute cigarettes and cigars.",
    examples: ["Cigarettes", "Cigars"],
    note: "Additional compensation cess or levy may apply. Check the current notification.",
  },

  // Healthcare
  {
    code: "3004", type: "HSN", category: "Healthcare",
    description: "Medicaments consisting of mixed or unmixed products for therapeutic uses",
    gst: "5% / 0%", rates: [5, 0],
    covers: "Packaged medicines for human or veterinary use, in measured doses.",
    examples: ["Paracetamol tablets", "Antibiotic syrup"],
    note: "Most medicines are at 5%. Notified life-saving drugs are nil-rated.",
  },

  // Personal care
  {
    code: "3401", type: "HSN", category: "Personal care",
    description: "Soap, organic surface-active products and preparations for use as soap",
    gst: "5%", rates: [5],
    covers: "Bath soap, liquid soap and soap bars.",
    examples: ["Bathing soap", "Hand wash"],
    note: "Reduced from 18% under GST 2.0.",
  },
  {
    code: "3305", type: "HSN", category: "Personal care",
    description: "Preparations for use on the hair (shampoo, hair oil)",
    gst: "5%", rates: [5],
    covers: "Shampoos, conditioners, hair oils and hair dyes.",
    examples: ["Shampoo", "Coconut hair oil"],
    note: "Reduced from 18% under GST 2.0.",
  },

  // Vehicles
  {
    code: "8703", type: "HSN", category: "Vehicles",
    description: "Motor cars and other motor vehicles principally designed for transport of persons",
    gst: "18% / 40%", rates: [18, 40],
    covers: "Passenger cars, SUVs and other vehicles designed to carry people.",
    examples: ["Hatchback", "Sedan", "SUV"],
    note: "Small cars (within length and engine limits) are 18%. Larger cars and SUVs are 40%.",
  },
  {
    code: "8711", type: "HSN", category: "Vehicles",
    description: "Motorcycles (including mopeds) and cycles fitted with an auxiliary motor",
    gst: "18% / 40%", rates: [18, 40],
    covers: "Two-wheelers, scooters and mopeds.",
    examples: ["125cc scooter", "500cc motorcycle"],
    note: "Up to 350cc is 18%. Above 350cc is 40%.",
  },

  // Building materials
  {
    code: "2523", type: "HSN", category: "Construction",
    description: "Portland cement, aluminous cement, slag cement and similar hydraulic cements",
    gst: "18%", rates: [18],
    covers: "Bagged and bulk cement of all grades.",
    examples: ["OPC cement", "PPC cement"],
    note: "Reduced from 28% under GST 2.0.",
  },
  {
    code: "9954", type: "SAC", category: "Construction",
    description: "Construction services (building, civil engineering, special trade work)",
    gst: "18%", rates: [18],
    covers: "Contract construction, renovation, painting, plumbing and electrical installation work.",
    examples: ["Building contract", "Interior fit-out"],
    note: "Some works contracts for government or affordable housing have different rates.",
  },

  // Jewellery
  {
    code: "7113", type: "HSN", category: "Jewellery",
    description: "Articles of jewellery and parts thereof, of precious metal",
    gst: "3%", rates: [3],
    covers: "Gold, silver and platinum jewellery.",
    examples: ["Gold necklace", "Silver anklet"],
    note: "Making charges are billed separately under SAC 9988 at 5%.",
  },

  // Books & paper
  {
    code: "4901", type: "HSN", category: "Books & paper",
    description: "Printed books, brochures, leaflets and similar printed matter",
    gst: "0%", rates: [0],
    covers: "Printed books, educational textbooks and brochures.",
    examples: ["School textbook", "Novel"],
  },

  // Professional & business services
  {
    code: "9983", type: "SAC", category: "Professional services",
    description: "Other professional, technical and business services (IT, Consulting)",
    gst: "18%", rates: [18],
    covers: "Software development, IT consulting, design, legal, accounting and advisory work.",
    examples: ["Website development", "IT consulting", "Software maintenance"],
  },
  {
    code: "9985", type: "SAC", category: "Professional services",
    description: "Support services (staffing, security, cleaning, travel arrangement)",
    gst: "18%", rates: [18],
    covers: "Manpower supply, security, housekeeping and travel agent services.",
    examples: ["Staffing agency", "Security guards"],
  },
  {
    code: "9988", type: "SAC", category: "Professional services",
    description: "Manufacturing services on physical inputs owned by others (Job work)",
    gst: "5% / 18%", rates: [5, 18],
    covers: "Job work such as stitching, printing, polishing and processing of goods you do not own.",
    examples: ["Garment stitching job work", "Metal polishing"],
    note: "Rate depends on the goods being worked on. Textile job work is generally 5%.",
  },
  {
    code: "9987", type: "SAC", category: "Professional services",
    description: "Maintenance, repair and installation services (except construction)",
    gst: "18%", rates: [18],
    covers: "Repair and servicing of machinery, computers, vehicles and appliances.",
    examples: ["AC servicing", "Laptop repair"],
  },

  // Real estate & rental
  {
    code: "9972", type: "SAC", category: "Real estate & rental",
    description: "Real estate services (Rental or leasing services)",
    gst: "18%", rates: [18],
    covers: "Renting or leasing of commercial property, offices and shops.",
    examples: ["Office rent", "Shop lease"],
    note: "Residential rent has specific conditions. Check whether the tenant is GST-registered.",
  },
  {
    code: "9973", type: "SAC", category: "Real estate & rental",
    description: "Leasing or rental services without an operator",
    gst: "18%", rates: [18],
    covers: "Renting out machinery, vehicles, equipment and computers without an operator.",
    examples: ["Equipment rental", "Car rental without driver"],
  },

  // Transport, hospitality
  {
    code: "9963", type: "SAC", category: "Transport & hospitality",
    description: "Accommodation, food and beverage services",
    gst: "5% / 18%", rates: [5, 18],
    covers: "Hotel stays, restaurants, catering and takeaway food service.",
    examples: ["Hotel room", "Catering"],
    note: "Hotel room rate depends on the declared tariff per night.",
  },
  {
    code: "9965", type: "SAC", category: "Transport & hospitality",
    description: "Goods transport services",
    gst: "5% / 18%", rates: [5, 18],
    covers: "Transport of goods by road, rail, air or sea, including courier services.",
    examples: ["Truck freight", "Courier"],
    note: "Goods Transport Agency (GTA) services may be taxed at 5% or 18% depending on the option chosen.",
  },

  // Finance, telecom, education
  {
    code: "9971", type: "SAC", category: "Finance, telecom & education",
    description: "Financial and related services",
    gst: "18%", rates: [18],
    covers: "Banking charges, loan processing fees, payment gateway fees and insurance-related services.",
    examples: ["Loan processing fee", "Payment gateway charges"],
  },
  {
    code: "9984", type: "SAC", category: "Finance, telecom & education",
    description: "Telecommunications, broadcasting and information supply services",
    gst: "18%", rates: [18],
    covers: "Mobile and broadband plans, data services and cloud hosting.",
    examples: ["Broadband plan", "Mobile recharge"],
  },
  {
    code: "9992", type: "SAC", category: "Finance, telecom & education",
    description: "Education services",
    gst: "0% / 18%", rates: [0, 18],
    covers: "Schooling, coaching, training and online courses.",
    examples: ["Coaching classes", "Corporate training"],
    note: "Services by recognised schools and institutions are exempt. Private coaching is 18%.",
  },
];

const categories = ["All categories", ...Array.from(new Set(hsnDatabase.map((i) => i.category)))];
const rateOptions = [0, 3, 5, 18, 40];
const quickSearches = ["Laptop", "Mobile", "Consulting", "Rice", "Rent", "Cement"];

/* -------------------------------------------------------------------------- */
/*  Static content                                                             */
/* -------------------------------------------------------------------------- */

const features = [
  {
    icon: Zap,
    title: "Instant search",
    body: "Type a code, a product name or a service. Results update as you type, with no page reloads.",
  },
  {
    icon: ListFilter,
    title: "Filter by type, rate and category",
    body: "Narrow the list to goods (HSN) or services (SAC), a specific GST rate, or a product category.",
  },
  {
    icon: BadgePercent,
    title: "GST 2.0 rates",
    body: "Rates reflect the 0%, 5%, 18% and 40% structure in force since 22 September 2025.",
  },
  {
    icon: Layers,
    title: "Details on every code",
    body: "Open any row to see what the code covers, real examples and rate conditions such as price thresholds.",
  },
  {
    icon: Copy,
    title: "One-click copy",
    body: "Copy the code, the code with its description, or the rate, ready to paste into an invoice.",
  },
  {
    icon: Receipt,
    title: "Built for Aptro invoices",
    body: "Use the same codes on your Aptro invoices so your GST filings match what you bill.",
  },
];

const steps = [
  {
    title: "Search for your item",
    body: "Enter the product or service name, or a code if you already have one. Try \"laptop\" or \"9983\".",
  },
  {
    title: "Narrow the list",
    body: "Pick goods or services, choose a GST rate, or select a category to remove codes that do not apply.",
  },
  {
    title: "Open the code to check details",
    body: "Read what it covers and any conditions. Some items, like apparel and hotel rooms, change rate by price.",
  },
  {
    title: "Copy it into your invoice",
    body: "Copy the code and rate, then add them to the line item on your invoice.",
  },
];

const turnoverRules = [
  { turnover: "Up to ₹1.5 crore", digits: "Optional for B2C. Check the current GSTR-1 reporting rules", note: "Smaller businesses have lighter reporting needs." },
  { turnover: "Up to ₹5 crore", digits: "4 digits", note: "Mandatory on B2B invoices." },
  { turnover: "Above ₹5 crore", digits: "6 digits", note: "Mandatory on all invoices, including B2C." },
  { turnover: "Exports and imports", digits: "8 digits", note: "Customs tariff uses the full 8-digit code." },
];

const comparison = [
  {
    label: "Full name",
    hsn: "Harmonized System of Nomenclature",
    sac: "Services Accounting Code",
  },
  { label: "Used for", hsn: "Physical goods and products", sac: "Services" },
  { label: "Length", hsn: "4, 6 or 8 digits", sac: "6 digits, always starting with 99" },
  { label: "Example", hsn: "8471 for laptops", sac: "9983 for IT consulting" },
  { label: "Maintained by", hsn: "World Customs Organization", sac: "Indian GST system" },
];

const faqs = [
  {
    q: "What is the difference between HSN and SAC?",
    a: "HSN codes classify physical goods. SAC codes classify services. Every item on a GST invoice needs one or the other, depending on whether you sell a product or a service.",
  },
  {
    q: "How many digits of the HSN code do I need on my invoice?",
    a: "Businesses with annual turnover up to ₹5 crore generally need 4 digits on B2B invoices. Above ₹5 crore, 6 digits are required. Exporters and importers use 8 digits. Rules can change, so confirm against the latest CBIC notification.",
  },
  {
    q: "Which GST rates are in force now?",
    a: "Since 22 September 2025, GST has four main rates: 0% (nil-rated), 5%, 18% and 40%. The older 12% and 28% slabs were largely removed. Gold and jewellery keep their own special rate of 3%.",
  },
  {
    q: "Why do some codes show two rates?",
    a: "The rate for the same code can depend on price, packaging or use. Apparel is 5% up to ₹2,500 per piece and 18% above. Rice is nil-rated loose but 5% when branded and packed. Open the row to see the condition.",
  },
  {
    q: "What if I pick the wrong code?",
    a: "A wrong code can lead to the wrong tax rate, notices from the department or mismatches in your returns. If you are unsure, check the GST portal rate finder or ask your tax professional before invoicing.",
  },
  {
    q: "Is this list complete?",
    a: "No. This directory covers common goods and services so you can find codes quickly. The full schedules are on the official GST portal and CBIC notifications, and they are the final authority.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HSNFinderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | CodeType>("All");
  const [rateFilter, setRateFilter] = useState<number | null>(null);
  const [category, setCategory] = useState("All categories");
  const [sortBy, setSortBy] = useState<"code" | "description">("code");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard can be blocked; fail silently */
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const hasFilters =
    searchQuery !== "" || typeFilter !== "All" || rateFilter !== null || category !== "All categories";

  const resetFilters = () => {
    setSearchQuery("");
    setTypeFilter("All");
    setRateFilter(null);
    setCategory("All categories");
  };

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return hsnDatabase
      .filter((item) => {
        const matchesQuery =
          q === "" ||
          item.code.includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.covers.toLowerCase().includes(q) ||
          item.examples.some((e) => e.toLowerCase().includes(q));
        const matchesType = typeFilter === "All" || item.type === typeFilter;
        const matchesRate = rateFilter === null || item.rates.includes(rateFilter);
        const matchesCategory = category === "All categories" || item.category === category;
        return matchesQuery && matchesType && matchesRate && matchesCategory;
      })
      .sort((a, b) =>
        sortBy === "code" ? a.code.localeCompare(b.code) : a.description.localeCompare(b.description)
      );
  }, [searchQuery, typeFilter, rateFilter, category, sortBy]);

  const hsnCount = hsnDatabase.filter((i) => i.type === "HSN").length;
  const sacCount = hsnDatabase.length - hsnCount;

  const chip = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
      active
        ? "bg-blue-600 border-blue-600 text-white"
        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900"
    }`;

  return (
    <main
      className={`min-h-screen pt-20 pb-32 text-gray-900 font-sans bg-[#FDFDFD] selection:bg-blue-100 selection:text-blue-900 ${jakarta.className}`}
    >
      <div className="max-w-[900px] mx-auto px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources & Tools
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[13px] font-semibold border border-blue-100 mb-4">
            <ShieldCheck size={14} /> Updated for GST 2.0 rates
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            HSN / SAC Code Finder
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Search harmonized system codes and service accounting codes, check the GST rate, and copy the right code
            onto your Aptro invoice.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>
              <strong className="text-gray-900 font-semibold">{hsnCount}</strong> goods codes (HSN)
            </span>
            <span>
              <strong className="text-gray-900 font-semibold">{sacCount}</strong> service codes (SAC)
            </span>
            <span>
              <strong className="text-gray-900 font-semibold">{categories.length - 1}</strong> categories
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-4 group">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
            size={20}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search HSN or SAC codes"
            placeholder="Search by code (e.g. 8471) or item description (e.g. Laptop)..."
            className="w-full bg-white border border-gray-200 hover:border-gray-300 focus:border-blue-500 rounded-2xl py-4 pl-12 pr-12 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Quick searches */}
        <div className="max-w-2xl mx-auto mb-10 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
          <span>Try:</span>
          {quickSearches.map((term) => (
            <button
              key={term}
              onClick={() => setSearchQuery(term)}
              className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-[13px] font-medium"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-5 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 mr-1">Type</span>
            {(["All", "HSN", "SAC"] as const).map((t) => (
              <button key={t} onClick={() => setTypeFilter(t)} className={chip(typeFilter === t)}>
                {t === "All" ? "All" : t === "HSN" ? "Goods (HSN)" : "Services (SAC)"}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 mr-1">GST rate</span>
            <button onClick={() => setRateFilter(null)} className={chip(rateFilter === null)}>
              Any
            </button>
            {rateOptions.map((r) => (
              <button key={r} onClick={() => setRateFilter(rateFilter === r ? null : r)} className={chip(rateFilter === r)}>
                {r}%
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-500">
              Category
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-500">
              Sort by
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "code" | "description")}
                className="bg-white border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="code">Code</option>
                <option value="description">Description</option>
              </select>
            </label>
            {hasFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                <RotateCcw size={14} /> Reset filters
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-3" aria-live="polite">
          Showing {filteredItems.length} of {hsnDatabase.length} codes
        </p>

        {/* Results List */}
        <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden mb-4">
          <div className="grid grid-cols-12 bg-gray-50/80 border-b border-gray-200 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">
            <div className="col-span-3 sm:col-span-2">Code</div>
            <div className="col-span-7 sm:col-span-8">Description</div>
            <div className="col-span-2 text-right">Standard GST</div>
          </div>

          <div className="divide-y divide-gray-100">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const key = `${item.type}-${item.code}`;
                const isOpen = expanded === key;
                return (
                  <div key={key} className="group">
                    <div className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50/50 transition-colors">
                      <div className="col-span-3 sm:col-span-2 font-mono font-semibold text-blue-600 flex items-center gap-2">
                        {item.code}
                        <button
                          onClick={() => handleCopy(item.code, `code-${key}`)}
                          className="text-gray-400 hover:text-gray-900 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1"
                          title="Copy code"
                          aria-label={`Copy code ${item.code}`}
                        >
                          {copiedKey === `code-${key}` ? (
                            <Check size={14} className="text-emerald-600" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>

                      <button
                        onClick={() => setExpanded(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        className="col-span-7 sm:col-span-8 pr-4 text-left flex items-start gap-2"
                      >
                        <span className="flex-1">
                          <span className="text-sm font-medium text-gray-900 block">{item.description}</span>
                          <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                            {item.type} Classification · {item.category}
                          </span>
                        </span>
                        <ChevronDown
                          size={16}
                          className={`mt-1 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div className="col-span-2 text-right font-semibold text-gray-700">
                        <span className="inline-block px-2.5 py-1 bg-gray-100 rounded-lg text-xs">{item.gst}</span>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 bg-gray-50/60 border-t border-gray-100">
                            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm pt-4">
                              <div>
                                <dt className="font-semibold text-gray-900 mb-1">What it covers</dt>
                                <dd className="text-gray-600 leading-relaxed">{item.covers}</dd>
                              </div>
                              <div>
                                <dt className="font-semibold text-gray-900 mb-1">Examples</dt>
                                <dd className="flex flex-wrap gap-1.5">
                                  {item.examples.map((ex) => (
                                    <span
                                      key={ex}
                                      className="px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-600 text-xs"
                                    >
                                      {ex}
                                    </span>
                                  ))}
                                </dd>
                              </div>
                              {item.note && (
                                <div className="sm:col-span-2 flex gap-2 rounded-xl bg-amber-50 border border-amber-100 px-3.5 py-3 text-amber-900">
                                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                                  <p className="leading-relaxed">{item.note}</p>
                                </div>
                              )}
                            </dl>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <button
                                onClick={() => handleCopy(`${item.code} - ${item.description}`, `full-${key}`)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors"
                              >
                                {copiedKey === `full-${key}` ? (
                                  <Check size={14} className="text-emerald-600" />
                                ) : (
                                  <Copy size={14} />
                                )}
                                Copy code and description
                              </button>
                              <button
                                onClick={() => handleCopy(item.gst, `rate-${key}`)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors"
                              >
                                {copiedKey === `rate-${key}` ? (
                                  <Check size={14} className="text-emerald-600" />
                                ) : (
                                  <Copy size={14} />
                                )}
                                Copy rate
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-gray-500">
                <FileText size={40} className="mx-auto text-gray-300 mb-3" />
                <p className="text-base font-medium">No matching HSN/SAC codes found.</p>
                <p className="text-xs text-gray-400 mt-1">
                  Try a broader keyword, a partial code, or reset the filters.
                </p>
                {hasFilters && (
                  <button
                    onClick={resetFilters}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <RotateCcw size={14} /> Reset filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed mb-20">
          This directory lists common codes for quick reference and is not a complete tariff. Rates can change by
          notification. Confirm the final code and rate on the official GST portal or with your tax professional before
          you invoice.
        </p>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">What you can do with this tool</h2>
          <p className="text-gray-500 mb-8 max-w-xl">
            Find the right classification once, then reuse it across every invoice you send.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to use */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">How to find your code</h2>
          <ol className="space-y-0 border-l border-gray-200 ml-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative pl-8 pb-8 last:pb-0">
                <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* HSN vs SAC */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">HSN and SAC at a glance</h2>
          <p className="text-gray-500 mb-6 max-w-xl">
            Use HSN when you sell products. Use SAC when you sell services.
          </p>
          <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200 text-left text-gray-500">
                  <th className="px-6 py-3.5 font-semibold w-1/4"></th>
                  <th className="px-6 py-3.5 font-semibold">HSN (goods)</th>
                  <th className="px-6 py-3.5 font-semibold">SAC (services)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <td className="px-6 py-3.5 font-medium text-gray-900">{row.label}</td>
                    <td className="px-6 py-3.5 text-gray-600">{row.hsn}</td>
                    <td className="px-6 py-3.5 text-gray-600">{row.sac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Invoice requirements */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-2">
            <ClipboardCheck size={22} className="text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight">How many digits your invoice needs</h2>
          </div>
          <p className="text-gray-500 mb-6 max-w-xl">
            The minimum HSN length on an invoice depends on your annual turnover.
          </p>
          <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200 text-left text-gray-500">
                  <th className="px-6 py-3.5 font-semibold">Annual turnover</th>
                  <th className="px-6 py-3.5 font-semibold">Minimum HSN digits</th>
                  <th className="px-6 py-3.5 font-semibold">Applies to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {turnoverRules.map((r) => (
                  <tr key={r.turnover}>
                    <td className="px-6 py-3.5 font-medium text-gray-900">{r.turnover}</td>
                    <td className="px-6 py-3.5 text-gray-700">{r.digits}</td>
                    <td className="px-6 py-3.5 text-gray-500">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Service invoices use the 6-digit SAC code. Check the latest CBIC notification for current limits.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Frequently asked questions</h2>
          <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm divide-y divide-gray-100 overflow-hidden">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{f.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed max-w-2xl">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[24px] bg-blue-600 text-white px-8 py-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Put the right code on every invoice</h2>
          <p className="text-blue-100 max-w-lg mx-auto mb-6 text-sm leading-relaxed">
            Save HSN and SAC codes against your products in Aptro, and they fill in automatically each time you bill.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            Create your first invoice <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}