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
  Send,
  Info
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Material Design standard easing
const materialEasing = [0.2, 0, 0, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
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
    <main className="min-h-screen pt-24 pb-32 bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <motion.div variants={fadeUpItem} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E8E3E]"></span>
              </span>
              Support Online
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-[#1F1F1F]"
          >
            How can we help you?
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[16px] text-[#444746] leading-relaxed max-w-xl mx-auto"
          >
            Whether you need technical assistance, have a billing question, or want to explore partnership opportunities, we're here for you.
          </motion.p>
        </motion.div>

        {/* --- Quick Contact Cards (Horizontal Grid) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1, ease: materialEasing }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          <ContactCard 
            icon={<Mail size={22} />} 
            title="Email Us" 
            detail="aptrosuppor@gmail.com" 
            href="mailto:aptrosuppor@gmail.com"
          />
          <ContactCard 
            icon={<MapPin size={22} />} 
            title="Headquarters" 
            detail="Gujarat, India" 
          />
          <ContactCard 
            icon={<Clock size={22} />} 
            title="Response Time" 
            detail="Under 24 Hours" 
          />
        </motion.div>

        {/* --- The Form Container --- */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2, ease: materialEasing }}
        >
          {/* Priority Support Banner - Material Info Card */}
          <div className="mb-6 bg-[#E8F0FE] text-[#1967D2] px-5 py-4 rounded-[16px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#D2E3FC]">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="shrink-0" />
              <span className="text-[14px] font-medium">Are you an existing customer?</span>
            </div>
            <Link 
              href="/login" 
              className="text-[14px] font-medium text-[#1A73E8] hover:text-[#1557B0] hover:bg-[#1A73E8]/10 px-4 py-2 rounded-full transition-colors flex items-center gap-2 self-start sm:self-auto shrink-0"
            >
              Login for Priority <ArrowRight size={16} />
            </Link>
          </div>

          <div className="p-8 md:p-10 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: materialEasing }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-[#E6F4EA] text-[#1E8E3E] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl font-normal mb-3 text-[#1F1F1F]">Message Sent Successfully</h2>
                  <p className="text-[16px] text-[#444746] mb-8 max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our support team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-white border border-[#DADCE0] hover:bg-[#F8F9FA] hover:text-[#1A73E8] text-[#1F1F1F] rounded-full text-[14px] font-medium transition-colors"
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
                  transition={{ duration: 0.4 }}
                >
                  {/* Error Message Display */}
                  {errorMessage && (
                    <div className="p-4 bg-[#FCE8E6] text-[#C5221F] rounded-[12px] flex items-start gap-3 text-[14px] font-medium border border-[#FAD2CF]">
                      <AlertCircle size={20} className="shrink-0" />
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
                  
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-[#444746] ml-1">How can we help?</label>
                    <div className="relative group">
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#DADCE0] hover:border-[#1F1F1F] rounded-[8px] px-4 py-3.5 focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all text-[16px] text-[#1F1F1F] appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Sales & Pricing">Sales & Pricing</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5F6368]">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-[#444746] ml-1">Message Details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please share the details of your request..."
                      className="w-full bg-white border border-[#DADCE0] hover:border-[#1F1F1F] rounded-[8px] px-4 py-3.5 focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all text-[16px] text-[#1F1F1F] resize-none placeholder:text-[#5F6368]"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto sm:px-8 py-3 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[14px] flex items-center justify-center gap-2 transition-colors disabled:bg-[#DADCE0] disabled:text-[#9AA0A6] disabled:cursor-not-allowed float-right"
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
                    <div className="clear-both"></div>
                  </div>
                  
                  <p className="text-[13px] text-[#5F6368] mt-6">
                    By submitting this form, you agree to our <Link href="/privacy" className="text-[#1A73E8] hover:underline">Privacy Policy</Link>.
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
    <div className="flex flex-col items-center justify-center text-center p-6 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-[13px] font-medium text-[#5F6368] mb-1">{title}</h4>
      <p className="text-[15px] text-[#1F1F1F] font-medium">{detail}</p>
    </div>
  );

  if (href) {
    return <a href={href} className="block h-full">{content}</a>;
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
    <div className="w-full space-y-1.5">
      <label className="text-[14px] font-medium text-[#444746] ml-1">{label}</label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white border border-[#DADCE0] hover:border-[#1F1F1F] rounded-[8px] px-4 py-3.5 focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all text-[16px] text-[#1F1F1F] placeholder:text-[#5F6368]"
      />
    </div>
  );
}