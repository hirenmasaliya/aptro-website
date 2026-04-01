"use client";

import { useState } from "react";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  LifeBuoy
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form logic here
  };

  return (
    <main className="pt-32 pb-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            How can we help?
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Whether you’re a solo founder or a global enterprise, our team is 
            here to help you scale Aptro across your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Left Column: Contact Info & Support Links --- */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Quick Support Card */}
            <div className="p-8 rounded-4xl bg-blue-600/10 border border-blue-500/20 relative overflow-hidden group">
              <LifeBuoy className="absolute -right-4 -top-4 w-32 h-32 text-blue-500/10 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MessageSquare className="text-blue-400" size={20} />
                Technical Support
              </h3>
              <p className="text-sm text-blue-100/70 mb-6">
                Already a user? The fastest way to get help is through our dedicated Help Center.
              </p>
              <Link href="/help" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
                Visit Help Center <ArrowRight size={16} />
              </Link>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <ContactDetail 
                icon={<Mail size={20} />} 
                title="Email us" 
                detail="support@aptro.app" 
                sub="Response within 24 hours"
              />
              <ContactDetail 
                icon={<MapPin size={20} />} 
                title="Headquarters" 
                detail="Jetpur, Gujarat" 
                sub="India, 360370"
              />
            </div>

            {/* Global Reach Quote */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-sm text-gray-500 italic leading-relaxed">
                "Our support engineers aren't just experts in Aptro; they are experts in business logistics. We're here to help you solve problems, not just tickets."
              </p>
            </div>
          </div>

          {/* --- Right Column: The Contact Form --- */}
          <div className="lg:col-span-7">
            <div className="p-8 lg:p-12 rounded-[3rem] bg-[#0a0a0a] border border-white/5 relative">
              {submitted ? (
                <div className="py-20 text-center animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-400" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                  <p className="text-gray-400 mb-8">
                    Thanks for reaching out. A specialist will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-blue-400 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormInput label="Full Name" type="text" placeholder="John Doe" required />
                    <FormInput label="Business Email" type="email" placeholder="john@company.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm text-white appearance-none">
                      <option className="bg-[#0a0a0a]">General Inquiry</option>
                      <option className="bg-[#0a0a0a]">Sales & Enterprise</option>
                      <option className="bg-[#0a0a0a]">Partnerships</option>
                      <option className="bg-[#0a0a0a]">Technical Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your business needs..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm text-white resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-5 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all active:scale-95"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                  
                  <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest">
                    By submitting, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

// --- Sub-components for Cleanliness ---

function ContactDetail({ icon, title, detail, sub }: { icon: any, title: string, detail: string, sub: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-white/5 text-blue-400 border border-white/5">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
        <p className="text-lg text-gray-300 font-medium">{detail}</p>
        <p className="text-xs text-gray-500">{sub}</p>
      </div>
    </div>
  );
}

function FormInput({ label, type, placeholder, required }: { label: string, type: string, placeholder: string, required?: boolean }) {
  return (
    <div className="w-full">
      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm text-white placeholder:text-gray-700"
      />
    </div>
  );
}