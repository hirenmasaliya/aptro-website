"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ChevronDown, 
    ArrowRight,
    Star,
    Zap,
    Crown,
    Briefcase,
    Clock,
    CreditCard,
    CheckCircle
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Plus Jakarta Sans acts as a great stand-in for Apple's San Francisco when tracked tightly
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

// Explicitly cast as a const tuple so TS knows it's exactly 4 numbers (Cubic Bezier)
const appleEase = [0.16, 1, 0.3, 1] as const;

const commissionPlans = [
    { plan: "Standard Plan", price: "₹99", rate: "30%", earn: "₹29.70", icon: Star },
    { plan: "Pro Plan", price: "₹199", rate: "40%", earn: "₹79.60", icon: Zap, popular: true },
    { plan: "Max Plan", price: "₹249", rate: "50%", earn: "₹124.50", icon: Crown },
];

const faqs = [
    { q: "Is there any registration fee?", a: "No. Joining the program is completely free with zero hidden charges." },
    { q: "Do I need sales experience?", a: "Not at all. We provide comprehensive basic training and sales materials to get you started." },
    { q: "Is there a monthly target?", a: "There are no compulsory targets. You work on your own schedule and earn based on your actual conversions." },
    { q: "How do I receive my commission?", a: "Commissions are credited after successful payment verification and transferred directly to your provided Bank or UPI account." }
];

export default function JoinPage() {
    const router = useRouter(); 
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    
    // Form State
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        dob: "",
        gender: "",
        address: "",
        college: "",
        course: "",
        studentId: "",
        accHolder: "",
        bankName: "",
        accNum: "",
        ifsc: "",
        upi: "",
    });
    
    // UI State
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [tempId, setTempId] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');
        setErrorMessage("");

        try {
            const response = await fetch('/api/partner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setTempId(data.tempId);
                
                // Optional: If you want an automatic redirect after 5 seconds instead of waiting for a click
                setTimeout(() => {
                    router.push('/partner/dashboard');
                }, 5000);
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage("Failed to connect to the server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className={`min-h-screen bg-white pt-24 pb-20 selection:bg-[#0071E3] selection:text-white ${jakarta.className}`}>
            
            {/* --- HERO SECTION --- */}
            {/* Changed wrapper to w-full so the background spans the entire screen */}
            <section className="relative w-full pt-16 md:pt-32 pb-24 flex flex-col items-center overflow-hidden">
                
                {/* Background Image Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.2, ease: appleEase }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/students_banner.png"
                        alt="A group of diverse college students collaborating happily on a modern campus, using laptops and smartphones."
                        fill
                        className="object-cover object-top opacity-60" /* Increased opacity so it's visible */
                        priority
                    />
                    {/* Fixed Gradient: Fades perfectly so the image shows in the middle, but blends into the page below */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
                </motion.div>

                {/* Content Container */}
                <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: appleEase }}
                        className="text-[#E57A00] font-semibold tracking-wide text-sm md:text-base mb-4"
                    >
                        Student Business Partner Program
                    </motion.h2>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
                        className="text-5xl md:text-[80px] font-bold tracking-tight text-[#1D1D1F] mb-6 leading-[1.05]"
                    >
                        Earn while you learn. <br className="hidden md:block" />
                        <span className="text-[#86868B]">On your own terms.</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
                        className="text-[19px] md:text-[21px] text-[#1D1D1F] max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
                    >
                        Help local businesses digitize their operations with Aptro. Turn your free time into income with industry-leading commissions and zero upfront investment.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: appleEase, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <button 
                            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full font-medium text-[17px] transition-colors duration-300 shadow-lg shadow-blue-500/20"
                        >
                            Apply Now
                        </button>
                        <a href="#how-it-works" className="text-[#0066CC] hover:underline text-[17px] font-medium flex items-center gap-1 group">
                            See how it works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* --- COMMISSION PLANS --- */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-[#D2D2D7] relative z-10 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-4">Which plan is right for them?</h2>
                    <p className="text-[21px] text-[#86868B] font-medium">Earn up to 50% commission for every business you onboard.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {commissionPlans.map((plan, idx) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, margin: "-50px" }} 
                                transition={{ duration: 0.8, ease: appleEase, delay: idx * 0.1 }}
                                key={plan.plan}
                                className="flex flex-col items-center text-center p-10 pt-12 rounded-[24px] bg-[#F5F5F7]"
                            >
                                <Icon size={32} className="text-[#1D1D1F] mb-6" strokeWidth={1.5} />
                                <h3 className="text-[24px] font-semibold text-[#1D1D1F] mb-1">{plan.plan}</h3>
                                <p className="text-[#1D1D1F] mb-8">{plan.price} membership</p>
                                
                                <div className="w-full h-[1px] bg-[#D2D2D7] mb-8" />
                                
                                <p className="text-[#86868B] font-semibold text-[14px] uppercase tracking-widest mb-2">You Earn</p>
                                <div className="text-[48px] font-bold text-[#1D1D1F] tracking-tighter leading-none mb-2">
                                    {plan.rate}
                                </div>
                                <p className="text-[#1D1D1F] font-medium mb-8">Commission Cut</p>
                                
                                <div className="mt-auto">
                                    <p className="text-[#86868B] text-[14px] mb-1">Example per sale</p>
                                    <p className="text-[#1D1D1F] font-semibold text-[21px]">{plan.earn}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* --- BENTO BENEFITS --- */}
            <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24 relative z-10 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Big Tile */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase }}
                        className="md:col-span-2 bg-[#F5F5F7] rounded-[24px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
                    >
                        <div className="max-w-xl">
                            <h3 className="text-[32px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight mb-4 leading-tight">
                                Zero investment. <br/>Infinite potential.
                            </h3>
                            <p className="text-[19px] text-[#86868B] font-medium">
                                Start earning immediately without spending a single rupee. All you need is your smartphone, communication skills, and a drive to succeed.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                           <CreditCard size={120} className="text-[#1D1D1F]/10" strokeWidth={1} />
                        </div>
                    </motion.div>

                    {/* Small Tile 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
                        className="bg-[#1D1D1F] rounded-[24px] p-10 md:p-12 text-center flex flex-col items-center"
                    >
                        <Clock size={48} className="text-white mb-6" strokeWidth={1.5} />
                        <h4 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight mb-3">Work on your terms.</h4>
                        <p className="text-[#86868B] text-[17px]">No fixed hours. Fit it perfectly around your college classes and exams.</p>
                    </motion.div>

                    {/* Small Tile 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
                        className="bg-[#F5F5F7] rounded-[24px] p-10 md:p-12 text-center flex flex-col items-center"
                    >
                        <Briefcase size={48} className="text-[#1D1D1F] mb-6" strokeWidth={1.5} />
                        <h4 className="text-[24px] md:text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-3">Real experience.</h4>
                        <p className="text-[#86868B] text-[17px]">Build your resume with practical B2B sales and networking skills.</p>
                    </motion.div>
                </div>
            </section>

            {/* --- REGISTRATION FORM --- */}
            <section id="registration-form" className="max-w-[700px] mx-auto px-6 py-24 relative z-10 bg-white">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-[40px] font-bold text-[#1D1D1F] tracking-tight mb-4">Create your Partner ID.</h2>
                        <p className="text-[19px] text-[#86868B] font-medium">Please provide your details below.</p>
                    </div>

                    {submitStatus === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#F5F5F7] p-12 rounded-[24px] text-center border border-[#D2D2D7]"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-[28px] font-bold text-[#1D1D1F] mb-4">Application Received</h3>
                            <p className="text-[17px] text-[#86868B] mb-8">
                                Thank you for applying. We are reviewing your application.
                            </p>
                            <div className="bg-white p-6 rounded-[14px] inline-block border border-[#D2D2D7]">
                                <p className="text-[14px] text-[#86868B] uppercase tracking-wider font-semibold mb-1">Your Temporary ID</p>
                                <p className="text-[24px] font-bold text-[#1D1D1F] font-mono">{tempId}</p>
                            </div>
                            <p className="text-[14px] text-[#86868B] mt-8 mb-8 max-w-sm mx-auto">
                                Keep this ID safe. You will receive an email once your final Partner ID is generated upon approval.
                            </p>
                            
                            <button
                                onClick={() => router.push('/partner/dashboard')}
                                className="px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-[14px] font-medium text-[17px] transition-colors duration-300 inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                            >
                                Go to Dashboard <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            
                            {submitStatus === 'error' && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-[14px] text-[15px] font-medium border border-red-100">
                                    {errorMessage}
                                </div>
                            )}

                            {/* Section 1 */}
                            <div className="space-y-4">
                                <h3 className="text-[21px] font-semibold text-[#1D1D1F] tracking-tight mb-4 border-b border-[#D2D2D7] pb-3">Personal Information</h3>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile Number" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                    <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors appearance-none" required disabled={isLoading}>
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                
                                <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Full Address" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B] min-h-[120px] resize-none" required disabled={isLoading}/>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-4 pt-6">
                                <h3 className="text-[21px] font-semibold text-[#1D1D1F] tracking-tight mb-4 border-b border-[#D2D2D7] pb-3">Academic Details</h3>
                                <input type="text" name="college" value={formData.college} onChange={handleInputChange} placeholder="College / University Name" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" name="course" value={formData.course} onChange={handleInputChange} placeholder="Course & Department" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                    <input type="text" name="studentId" value={formData.studentId} onChange={handleInputChange} placeholder="Student ID Number" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-4 pt-6">
                                <h3 className="text-[21px] font-semibold text-[#1D1D1F] tracking-tight mb-4 border-b border-[#D2D2D7] pb-3">Payout Details</h3>
                                <input type="text" name="accHolder" value={formData.accHolder} onChange={handleInputChange} placeholder="Account Holder Name" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} placeholder="Bank Name" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                    <input type="text" name="accNum" value={formData.accNum} onChange={handleInputChange} placeholder="Account Number" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" name="ifsc" value={formData.ifsc} onChange={handleInputChange} placeholder="IFSC Code" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" required disabled={isLoading}/>
                                    <input type="text" name="upi" value={formData.upi} onChange={handleInputChange} placeholder="UPI ID (Optional)" className="w-full px-5 py-4 rounded-[14px] bg-[#F5F5F7] border border-transparent text-[#1D1D1F] text-[17px] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors placeholder:text-[#86868B]" disabled={isLoading}/>
                                </div>
                            </div>

                            {/* Agreement */}
                            <div className="pt-6 pb-2">
                                <label className="flex items-start gap-4 cursor-pointer">
                                    <input type="checkbox" className="mt-1 w-5 h-5 accent-[#0071E3] cursor-pointer" required disabled={isLoading}/>
                                    <span className="text-[14px] text-[#86868B] leading-relaxed">
                                        I confirm that the provided information is accurate. I understand this is a performance-based partnership and agree to follow Aptro's ethical marketing guidelines.
                                    </span>
                                </label>
                            </div>

                            {/* Submit CTA */}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className={`w-full py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-[14px] font-medium text-[17px] transition-colors flex justify-center items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : "Submit Application"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </section>

            {/* --- FAQS --- */}
            <section className="max-w-[700px] mx-auto px-6 py-24 border-t border-[#D2D2D7] relative z-10 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold text-[#1D1D1F] tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="border-t border-[#D2D2D7]">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-[#D2D2D7]">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                            >
                                <span className="text-[19px] font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">{faq.q}</span>
                                <ChevronDown 
                                    className={`text-[#86868B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                                    size={20} 
                                />
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-[17px] text-[#86868B] leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}