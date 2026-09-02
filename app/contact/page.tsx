"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Loader2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Send
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
      // Replace with your actual API endpoint
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
    <main className="min-h-screen pt-28 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      
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
        {/* Subtle Brand Glow centered behind the form */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-50/60 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.div variants={fadeUpItem} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-zinc-600 text-xs font-bold uppercase tracking-widest border border-zinc-200/80 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Support Online
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-900"
          >
            How can we help you?
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[17px] text-zinc-500 leading-relaxed font-medium max-w-xl mx-auto"
          >
            Whether you need technical assistance, have a billing question, or want to explore partnership opportunities, we're here for you.
          </motion.p>
        </motion.div>

        {/* --- Quick Contact Cards (Horizontal Grid) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: premiumEasing }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <ContactCard 
            icon={<Mail size={20} />} 
            title="Email Us" 
            detail="aptrosuppor@gmail.com" 
            href="mailto:aptrosuppor@gmail.com"
          />
          <ContactCard 
            icon={<MapPin size={20} />} 
            title="Headquarters" 
            detail="Gujarat, India" 
          />
          <ContactCard 
            icon={<Clock size={20} />} 
            title="Response Time" 
            detail="Under 24 Hours" 
          />
        </motion.div>

        {/* --- The Form Container --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: premiumEasing }}
          className="relative"
        >
          {/* Priority Support Banner (Attached to top of form) */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-2.5 rounded-full flex items-center gap-3 shadow-lg z-20 w-fit whitespace-nowrap">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-[13px] font-semibold">Existing Customer?</span>
            <div className="w-px h-4 bg-zinc-700" />
            <Link href="/login" className="text-[13px] font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              Login for Priority <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-8 md:p-12 pt-14 rounded-[2.5rem] bg-white border border-zinc-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: premiumEasing }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8 border border-emerald-100 shadow-sm">
                    <CheckCircle2 size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-zinc-900 tracking-tight">Message Sent Successfully</h2>
                  <p className="text-[15px] text-zinc-500 mb-10 max-w-sm font-medium leading-relaxed">
                    Thank you for reaching out. A member of our support team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-zinc-900 rounded-full text-[14px] font-semibold transition-all active:scale-95"
                  >
                    Send Another Message
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
                    <div className="p-4 bg-red-50 text-red-900 rounded-2xl flex items-start gap-3 text-[14px] font-medium border border-red-100">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormInput 
                      label="First Name" 
                      name="firstName"
                      type="text" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                    <FormInput 
                      label="Last Name" 
                      name="lastName"
                      type="text" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <FormInput 
                    label="Email Address" 
                    name="email"
                    type="email" 
                    placeholder="john@company.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-bold text-zinc-700 pl-1">How can we help?</label>
                    <div className="relative group">
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-[15px] font-medium text-zinc-900 appearance-none cursor-pointer group-hover:bg-zinc-50"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Sales & Pricing">Sales & Pricing</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 group-hover:text-zinc-600 transition-colors">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-[13px] font-bold text-zinc-700 pl-1">Message Details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please share the details of your request..."
                      className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-[15px] font-medium text-zinc-900 resize-none placeholder:text-zinc-400 hover:bg-zinc-50"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-[12px] text-center text-zinc-400 font-medium mt-6">
                    By submitting this form, you agree to our <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900 underline underline-offset-2">Privacy Policy</Link>.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

// --- Specialized Sub-components ---

function ContactCard({ icon, title, detail, href }: { icon: any, title: string, detail: string, href?: string }) {
  const content = (
    <div className="flex flex-col items-center justify-center text-center p-6 rounded-[2rem] bg-white border border-zinc-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider mb-1">{title}</h4>
      <p className="text-[15px] text-zinc-900 font-semibold">{detail}</p>
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
    <div className="w-full space-y-2.5">
      <label className="text-[13px] font-bold text-zinc-700 pl-1">{label}</label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-[15px] font-medium text-zinc-900 placeholder:text-zinc-400 hover:bg-zinc-50"
      />
    </div>
  );
}