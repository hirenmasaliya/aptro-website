"use client";

import { useState } from "react";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  LifeBuoy,
  Globe,
  Clock
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Engineering Support
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]"
          >
            How can we <br /><span className="text-blue-600 italic">collaborate?</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Whether you are initializing a solo practice or orchestrating an 
            enterprise-scale migration, our technical architects are ready.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- Left Column: Context & Links --- */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Professional Service Card */}
            <div className="p-10 rounded-[3rem] bg-zinc-950 text-white shadow-2xl relative overflow-hidden group">
              <LifeBuoy className="absolute -right-8 -top-8 w-48 h-48 opacity-5 group-hover:rotate-12 transition-transform duration-1000" strokeWidth={1} />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 tracking-tighter flex items-center gap-3">
                  Technical Support
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-light">
                  Active license holders receive priority routing. The fastest resolution path is through our internal support terminal.
                </p>
                <Link href="/help" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors group/link">
                  Access Portal <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-12">
              <ContactDetail 
                icon={<Mail size={20} strokeWidth={1.5} />} 
                title="Global Communications" 
                detail="support@aptro.app" 
                sub="SLA Response: < 24 Hours"
              />
              <ContactDetail 
                icon={<MapPin size={20} strokeWidth={1.5} />} 
                title="Operational Headquarters" 
                detail="Jetpur, Gujarat, IN" 
                sub="Regional Node: 360370"
              />
            </div>

            {/* Availability Metadata */}
            <div className="pt-10 border-t border-zinc-100 grid grid-cols-2 gap-8">
               <div className="flex items-center gap-3">
                  <Clock size={16} className="text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Live 24/7</span>
               </div>
               <div className="flex items-center gap-3">
                  <Globe size={16} className="text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Remote Worldwide</span>
               </div>
            </div>
          </div>

          {/* --- Right Column: The Form Terminal --- */}
          <div className="lg:col-span-7">
            <div className="p-10 lg:p-20 rounded-[4rem] bg-zinc-50 border border-zinc-100 shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle2 size={48} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Inquiry Received.</h2>
                    <p className="text-zinc-500 mb-10 max-w-xs mx-auto font-medium">
                      Our orchestration team has logged your request. Expect a briefing shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border-b-2 border-blue-600 pb-1"
                    >
                      Initialize New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-10">
                      <FormInput label="Full Name" type="text" placeholder="Hiren Masaliya" required />
                      <FormInput label="Commercial Email" type="email" placeholder="hiren@company.com" required />
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 ml-1">Inquiry Vector</label>
                      <div className="relative">
                        <select className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-blue-600 transition-colors text-sm font-bold text-zinc-950 appearance-none cursor-pointer">
                          <option>General Architecture</option>
                          <option>Enterprise Migration</option>
                          <option>Partnership Inquiry</option>
                          <option>Technical Incident</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                          <ArrowRight size={14} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 ml-1">Context / Requirements</label>
                      <textarea 
                        rows={5}
                        placeholder="Define your business objectives..."
                        className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-blue-600 transition-all text-sm font-bold text-zinc-950 resize-none placeholder:text-zinc-200"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-6 bg-zinc-950 text-white rounded-full font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-2xl shadow-zinc-200 active:scale-95 group"
                    >
                      Transmit Message
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-[9px] text-center text-zinc-400 font-bold uppercase tracking-[0.2em]">
                      By transmitting, you verify our <Link href="/privacy" className="text-blue-600 underline">Privacy Protocols</Link>
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- Specialized Sub-components ---

function ContactDetail({ icon, title, detail, sub }: { icon: any, title: string, detail: string, sub: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="p-4 rounded-2xl bg-zinc-50 text-blue-600 border border-zinc-100 shadow-sm transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-2">{title}</h4>
        <p className="text-xl text-zinc-950 font-black tracking-tighter">{detail}</p>
        <p className="text-xs text-zinc-400 font-medium mt-1">{sub}</p>
      </div>
    </div>
  );
}

function FormInput({ label, type, placeholder, required }: { label: string, type: string, placeholder: string, required?: boolean }) {
  return (
    <div className="w-full space-y-4">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 ml-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        required={required}
        className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-blue-600 transition-all text-sm font-bold text-zinc-950 placeholder:text-zinc-200"
      />
    </div>
  );
}