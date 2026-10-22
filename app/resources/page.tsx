"use client";

import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  Sparkles,
  Download,
  Calculator,
  FileSpreadsheet,
  TrendingUp,
  Scale,
  PlayCircle,
  FileText,
  Mail,
  ChevronRight,
  Clock
} from "lucide-react";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

// Business-focused resource categories (Added hrefs)
const categories = [
  { 
    title: "Free Templates", 
    icon: <FileSpreadsheet size={24} className="text-emerald-600" />, 
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    count: "15 Downloads",
    href: "/resources/templates",
    links: [
      { label: "Excel Invoice Formats", href: "/resources/templates/excel-invoice" },
      { label: "Bulk Inventory Upload Sheet", href: "/resources/templates/bulk-inventory" },
      { label: "Standard Salary Slip PDF", href: "/resources/templates/salary-slip" }
    ]
  },
  { 
    title: "Tax & Compliance", 
    icon: <Scale size={24} className="text-indigo-600" />, 
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    count: "12 Guides",
    href: "/resources/tax",
    links: [
      { label: "2026 GST Rate Finder", href: "/tools/hsn-finder" },
      { label: "E-way Bill Rules Explained", href: "/resources/tax/eway-bills" },
      { label: "End of Year Filing Checklist", href: "/resources/tax/eofy-checklist" }
    ]
  },
  { 
    title: "Business Strategy", 
    icon: <TrendingUp size={24} className="text-orange-600" />, 
    bg: "bg-orange-50",
    border: "border-orange-100",
    count: "24 Articles",
    href: "/resources/strategy",
    links: [
      { label: "Optimizing Warehouse Layouts", href: "/resources/strategy/warehouse" },
      { label: "Managing Cashflow effectively", href: "/resources/strategy/cashflow" },
      { label: "B2B Sales Tactics", href: "/resources/strategy/b2b-sales" }
    ]
  },
];

// Free tools section (Added hrefs)
const freeTools = [
  {
    title: "GST Margin Calculator",
    desc: "Calculate inclusive and exclusive GST pricing, profit margins, and final selling prices instantly.",
    icon: <Calculator size={22} className="text-blue-600" />,
    action: "Open Calculator",
    href: "/tools/gst-calculator"
  },
  {
    title: "HSN / SAC Code Finder",
    desc: "Search our updated 2026 database to find the exact tax codes for your specific products and services.",
    icon: <Search size={22} className="text-blue-600" />,
    action: "Search Codes",
    href: "/tools/hsn-finder"
  }
];

// Thought-leadership articles (Added hrefs)
const featuredGuides = [
  {
    title: "The Ultimate Guide to Inventory Audits",
    desc: "Learn how to conduct painless physical stock reconciliations without halting your daily operations. A complete step-by-step breakdown.",
    category: "Operations",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80&w=800",
    href: "/resources/guides/inventory-audits"
  },
  {
    title: "Navigating Interstate GST (IGST)",
    desc: "A plain-English breakdown of how supply location rules affect your B2B tax liabilities across state lines.",
    category: "Compliance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    href: "/resources/guides/igst-navigation"
  }
];

export default function ResourcesPage() {
  return (
    <main className={`min-h-screen pt-24 pb-32 text-gray-900 font-sans bg-[#FDFDFD] selection:bg-blue-100 selection:text-blue-900 relative ${jakarta.className}`}>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.header 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-24 mt-8 grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 text-left">
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[13px] font-semibold tracking-wide border border-blue-100 mb-6">
              <Sparkles size={14} />
              Business Hub
            </motion.div>

            <motion.h1 variants={fadeUpItem} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.15] text-gray-900">
              Resources to grow <br/><span className="text-blue-600">your business.</span>
            </motion.h1>
            
            <motion.p variants={fadeUpItem} className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
              Discover free templates, powerful calculators, and expert guides designed specifically for wholesalers and retailers using Aptro.
            </motion.p>

            <motion.div variants={fadeUpItem} className="relative max-w-xl group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-600" size={20} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all text-base shadow-sm"
              />
            </motion.div>
          </div>

          {/* Featured Hero Resource */}
          <motion.div variants={fadeUpItem} className="lg:col-span-6 hidden lg:block">
            <Link href="/resources/webinars/eofy-audit" className="block rounded-3xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-200/50 group relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Resource" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[12px] font-bold uppercase tracking-wider rounded-md mb-4">
                  New Masterclass
                </span>
                <h2 className="text-3xl font-semibold text-white mb-3">End of Financial Year (EOFY) Audit Prep</h2>
                <p className="text-gray-200 mb-6 text-sm">A complete guide to reconciling your GST ledgers before March 31st.</p>
                <span className="flex items-center gap-2 text-white font-medium group-hover:text-blue-300 transition-colors">
                  <PlayCircle size={20} /> Watch Now
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.header>

        <hr className="border-gray-200 mb-20" />

        {/* --- Free Tools Section --- */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Interactive Tools</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {freeTools.map((tool, i) => (
              <motion.div variants={fadeUpItem} key={i}>
                <Link 
                  href={tool.href}
                  className="block p-8 rounded-[24px] bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex items-start gap-6 group cursor-pointer"
                >
                  <div className="w-16 h-16 shrink-0 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{tool.desc}</p>
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {tool.action} <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Categories Grid --- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: materialEasing }}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Browse by Category</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[24px] bg-white border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${cat.bg} opacity-50 pointer-events-none transition-transform group-hover:scale-150 duration-500`} />
                
                <div className={`w-14 h-14 ${cat.bg} ${cat.border} border rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                  {cat.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-6 text-gray-900 relative z-10">{cat.title}</h3>
                
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {cat.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-start gap-3 group/link">
                        <ChevronRight size={16} className="text-gray-300 group-hover/link:text-blue-500 mt-0.5 shrink-0 transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-gray-100 relative z-10">
                  <Link href={cat.href} className="text-sm font-semibold text-gray-900 flex items-center justify-between group-hover:text-blue-600 transition-colors">
                    Explore all {cat.count} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- Featured Articles (Visual Layout) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: materialEasing }}
          className="mb-24"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Latest Guides & Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredGuides.map((guide, i) => (
              <Link href={guide.href} key={i} className="block group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 border border-gray-200 aspect-[16/9] relative">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-[12px] font-bold uppercase tracking-wider rounded-md">
                        {guide.category}
                     </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {guide.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {guide.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {guide.desc}
                </p>
                
                <span className="text-sm font-semibold text-blue-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Read Guide <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* --- Newsletter CTA --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: materialEasing }}
            className="relative px-6 py-16 lg:p-20 rounded-[32px] bg-gray-900 border border-gray-800 text-center flex flex-col items-center overflow-hidden"
          >
            {/* Dark background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center w-full">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Mail size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                Join our business newsletter
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                Get the latest free templates, compliance updates, and growth strategies delivered straight to your inbox once a month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-5 py-3.5 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base"
                />
                <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shrink-0 shadow-lg shadow-blue-900/50">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-6">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}