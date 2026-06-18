"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  LifeBuoy,
  MessageSquare,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Component ---
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State matching your API structure
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
      // ✅ Call your external Support API endpoint
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Check if the API returned an error
      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Failed to send message.");
      }

      // Reset form and show success state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
      setSubmitted(true);
      
    } catch (error: any) {
      console.error("API Error:", error);
      // Display the specific error message from your API to the user
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-32 bg-zinc-50 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      
      {/* Soft Background Dynamics */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-50/60 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* --- Left Column: Context & Information --- */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-40">
            
            <div>
              <motion.div 
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200"
              >
                <MessageSquare size={14} />
                Get in touch
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tight mb-6"
              >
                Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">conversation.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="text-lg text-zinc-500 leading-relaxed font-medium"
              >
                Whether you have a question about pricing, need an enterprise migration, or just want to say hello—our team is ready to help.
              </motion.p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6">
              <ContactCard 
                icon={<Mail size={24} />} 
                title="Email Support" 
                detail="support@aptro.app" 
                subtext="Expect a reply within 24 hours."
                href="mailto:support@aptro.app"
              />
              <ContactCard 
                icon={<MapPin size={24} />} 
                title="Headquarters" 
                detail="Jetpur, Gujarat, India" 
                subtext="Available for scheduled visits."
              />
            </div>

            {/* Priority Support Card */}
            <div className="p-8 rounded-3xl bg-zinc-900 text-white relative overflow-hidden group shadow-lg">
              <LifeBuoy className="absolute -right-6 -top-6 w-32 h-32 opacity-5 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Existing Customer?</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                  Active license holders get priority routing. Log in to your dashboard to submit an authenticated ticket.
                </p>
                <Link href="/login" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                  Go to Support Portal <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

          {/* --- Right Column: The Form --- */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-zinc-200 shadow-xl shadow-zinc-200/20 relative"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-20 text-center flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                      <CheckCircle2 size={40} strokeWidth={2} />
                    </div>
                    <h2 className="text-3xl font-black mb-3 text-zinc-900">Message Sent!</h2>
                    <p className="text-zinc-500 mb-8 max-w-sm font-medium">
                      Thank you for reaching out. Our support team will review your inquiry and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full text-sm font-bold transition-colors"
                    >
                      Send another message
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
                  >
                    {/* Error Message Display */}
                    {errorMessage && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100">
                        <AlertCircle size={18} />
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
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
                      label="Work Email" 
                      name="email"
                      type="email" 
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 pl-1">How can we help?</label>
                      <div className="relative">
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm font-medium text-zinc-900 appearance-none cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Sales & Pricing">Sales & Pricing</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                          <ArrowRight size={16} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 pl-1">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us a little bit about your needs..."
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm font-medium text-zinc-900 resize-none placeholder:text-zinc-400"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-zinc-500 font-medium mt-6">
                      By submitting, you agree to our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
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
    <div className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm transition-shadow hover:shadow-md">
      <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-zinc-900 mb-1">{title}</h4>
        <p className="text-base text-zinc-600 font-medium mb-1">{detail}</p>
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
      <label className="text-sm font-bold text-zinc-900 pl-1">{label}</label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm font-medium text-zinc-900 placeholder:text-zinc-400"
      />
    </div>
  );
}