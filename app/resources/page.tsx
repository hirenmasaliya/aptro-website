"use client";

import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  PlayCircle,
  Headphones
} from "lucide-react";
import Link from "next/link";

const categories = [
  { 
    title: "Onboarding", 
    icon: <Zap size={20} className="text-blue-600" />, 
    count: "12 Guides",
    links: ["Account Initialization", "The First Invoice", "Data Migration"]
  },
  { 
    title: "Workflow Logic", 
    icon: <BookOpen size={20} className="text-blue-600" />, 
    count: "8 Guides",
    links: ["Status Automation", "Batch Operations", "Logistics Tracking"]
  },
  { 
    title: "Governance", 
    icon: <ShieldCheck size={20} className="text-blue-600" />, 
    count: "5 Guides",
    links: ["Sovereign Encryption", "SSO Configuration", "Compliance Standards"]
  },
];

const featuredGuides = [
  {
    title: "Architecting Freelance Scale",
    desc: "A strategic roadmap for transitioning from solo practice to high-output agency models.",
    tag: "Strategy",
    readTime: "8 min read"
  },
  {
    title: "Automated Ledger Systems",
    desc: "Implementing recurring billing cycles that eliminate manual administrative debt.",
    tag: "Technical",
    readTime: "5 min read"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 bg-zinc-50 text-zinc-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Hero & Search Section --- */}
        <header className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            How can we help?
          </h1>
          <p className="text-lg text-zinc-500 mb-10">
            Search our knowledge base, watch tutorials, or browse our technical guides.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search documentation, guides, or videos..." 
              className="w-full bg-white border border-zinc-200 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-base shadow-sm placeholder:text-zinc-400"
            />
          </div>
        </header>

        {/* --- Categories Grid --- */}
        <section className="mb-32">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">{cat.title}</h3>
                <ul className="space-y-3 mb-6">
                  {cat.links.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                  View all {cat.count} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* --- Video Walkthroughs --- */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Video Tutorials</h2>
              <p className="text-zinc-500">Step-by-step visual guides.</p>
            </div>
            <a href="#" className="text-sm font-bold text-blue-600 hover:underline">
              View YouTube Channel
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Video */}
            <div className="rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-sm group">
              <div className="aspect-video bg-zinc-100 relative flex items-center justify-center">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RrvXUZAui9I?si=Wakogbx4HHUo1mnv&rel=0" 
                  title="Aptro App Overview" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-zinc-900 mb-1">The Aptro Masterclass</h4>
                <p className="text-sm text-zinc-500">Official Guide • 03:45</p>
              </div>
            </div>

            {/* Second Video */}
            <div className="rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-sm group">
              <div className="aspect-video bg-zinc-100 relative flex items-center justify-center">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JidfzxeW8W4?si=sJTZB_jPn0k9kSeR&rel=0" 
                  title="Aptro Ledger Deep Dive" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-zinc-900 mb-1">Ledger Deep Dive</h4>
                <p className="text-sm text-zinc-500">Tutorial • 08:22</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Featured Articles --- */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold tracking-tight mb-10">Featured Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
                    {guide.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900">{guide.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">{guide.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                  <span className="text-sm font-medium text-zinc-400">{guide.readTime}</span>
                  <Link href="#" className="text-sm font-bold text-zinc-900 flex items-center gap-1 hover:text-blue-600 transition-colors">
                    Read article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Support CTA --- */}
        <section className="p-12 md:p-16 rounded-[2.5rem] bg-blue-600 text-white text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
            <Headphones size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-blue-100 mb-8 max-w-lg text-lg">
            Our technical support team is available 24/7 to help you resolve any issues or answer specific questions.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-sm hover:bg-zinc-50 transition-colors"
          >
            Contact Support
          </Link>
        </section>

      </div>
    </main>
  );
}