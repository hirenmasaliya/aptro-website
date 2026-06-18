"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Headphones,
  MessageSquare,
  Loader2,
  AlertCircle,
  Clock,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Premium smooth easing
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Failed to send message.");
      }

      setFormData({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" });
      setSubmitted(true);
      
    } catch (error: any) {
      console.error("API Error:", error);
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-36 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-hidden">
      
      {/* Premium Minimal Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #18181b 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* --- Left Column: Context & Information --- */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-40">
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                variants={fadeUpItem}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8"
              >
                <MessageSquare size={14} />
                Global Support
              </motion.div>
              
              <motion.h1 
                variants={fadeUpItem}
                className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.05]"
              >
                Let's start a <br />
                <span className="text-zinc-400 italic">conversation.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUpItem}
                className="text-lg text-zinc-500 leading-relaxed font-medium mb-12"
              >
                Whether you have a question about enterprise migration, technical documentation, or partnership opportunities, our architecture team is ready to assist.
              </motion.p>
            </motion.div>

            {/* Direct Channels */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: premiumEasing }}
              className="space-y-4"
            >
              <ContactCard 
                icon={<Mail size={20} />} 
                title="Direct Email" 
                detail="support@aptro.app" 
                subtext="Expect a comprehensive response within 24 hours."
                href="mailto:support@aptro.app"
              />
              <ContactCard 
                icon={<MapPin size={20} />} 
                title="Headquarters" 
                detail="Jetpur, Gujarat, India" 
                subtext="Operating 09:00 - 18:00 IST (Mon-Fri)."
              />
              <ContactCard 
                icon={<Clock size={20} />} 
                title="Response SLA" 
                detail="99.9% Ticket Resolution" 
                subtext="Enterprise clients receive 1-hour priority routing."
              />
            </motion.div>

            {/* Priority Support Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: premiumEasing }}
              className="p-8 rounded-[2rem] bg-zinc-950 text-white relative overflow-hidden group shadow-xl"
            >
              <Headphones className="absolute -right-4 -top-4 w-32 h-32 opacity-5 text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={18} className="text-zinc-400" />
                  <h3 className="text-lg font-semibold text-white">Existing Customer?</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                  Active license holders receive priority routing. Please authenticate via your dashboard to submit a secure ticket.
                </p>
                <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300 transition-colors group/link">
                  Access Support Portal <ArrowRight size={16} className="text-zinc-500 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* --- Right Column: The Form --- */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: premiumEasing }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-zinc-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: premiumEasing }}
                    className="py-20 text-center flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <div className="w-16 h-16 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4 text-zinc-950 tracking-tight">Transmission Secured.</h2>
                    <p className="text-zinc-500 mb-10 max-w-sm font-medium leading-relaxed">
                      Thank you for reaching out. Our engineering or support team will review your inquiry and respond shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3.5 bg-[#FAFAFA] hover:bg-zinc-100 border border-zinc-200/80 text-zinc-950 rounded-full text-sm font-medium transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Error Message Display */}
                    {errorMessage && (
                      <div className="p-4 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center gap-3 text-sm font-medium border border-zinc-200">
                        <AlertCircle size={18} className="text-zinc-500" />
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput 
                        label="First Name" 
                        name="firstName"
                        type="text" 
                        placeholder="Enter first name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                      <FormInput 
                        label="Last Name" 
                        name="lastName"
                        type="text" 
                        placeholder="Enter last name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <FormInput 
                      label="Corporate Email" 
                      name="email"
                      type="email" 
                      placeholder="name@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500 pl-1">Inquiry Type</label>
                      <div className="relative">
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl px-5 py-4 focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all text-sm font-medium text-zinc-950 appearance-none cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Sales & Enterprise Pricing">Sales & Enterprise Pricing</option>
                          <option value="Technical Architecture">Technical Architecture</option>
                          <option value="Partnership & Integration">Partnership & Integration</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                          <ArrowRight size={16} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500 pl-1">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Please provide specifics regarding your deployment or question..."
                        className="w-full bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl px-5 py-4 focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all text-sm font-medium text-zinc-950 resize-none placeholder:text-zinc-400"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-zinc-950 text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-zinc-500 font-medium mt-6">
                      By transmitting this form, you acknowledge our <Link href="/privacy" className="text-zinc-950 hover:underline">Privacy Protocol</Link>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}

// --- Specialized Sub-components ---

function ContactCard({ icon, title, detail, subtext, href }: { icon: any, title: string, detail: string, subtext: string, href?: string }) {
  const content = (
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 shadow-sm transition-colors duration-300 hover:bg-white hover:border-zinc-300">
      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 text-zinc-950 flex items-center justify-center shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-zinc-950 mb-0.5 tracking-tight">{title}</h4>
        <p className="text-sm text-zinc-600 font-medium mb-2">{detail}</p>
        <p className="text-xs text-zinc-400 font-medium">{subtext}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }

  return content;
}

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function FormInput({ label, type, name, placeholder, value, onChange, required }: FormInputProps) {
  return (
    <div className="w-full space-y-2">
      <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500 pl-1">{label}</label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl px-5 py-4 focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all text-sm font-medium text-zinc-950 placeholder:text-zinc-400"
      />
    </div>
  );
}