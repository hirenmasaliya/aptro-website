"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
    ChevronDown, 
    ArrowRight,
    Star,
    Zap,
    Crown,
    Briefcase,
    Clock,
    CreditCard,
    CheckCircle,
    Sparkles
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; 

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

// Premium smooth easing
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Updated to reflect the final Two-Tier Commission Structure
const commissionPlans = [
    { plan: "Standard Plan", price: "₹99", activation: "₹50", recurring: "₹10", icon: Star },
    { plan: "Pro Plan", price: "₹199", activation: "₹100", recurring: "₹20", icon: Zap, popular: true },
    { plan: "Max Plan", price: "₹249", activation: "₹150", recurring: "₹50", icon: Crown },
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
        <main className={`min-h-screen pt-24 pb-20 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative tracking-tight ${jakarta.className}`}>
            
            {/* --- Ambient Background --- */}
            <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-16 md:pt-32 pb-24 flex flex-col items-center">
                
                {/* Background Image Container seamlessly blended into UI */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.2, ease: premiumEasing }}
                    className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                >
                    <Image
                        src="/images/students_banner.png"
                        alt="A group of diverse college students collaborating happily on a modern campus."
                        fill
                        className="object-cover object-top opacity-50 mix-blend-luminosity"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/80 to-slate-50" />
                    <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply" />
                </motion.div>

                {/* Content Container */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-6"
                >
                    <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-6 shadow-sm">
                        <Sparkles size={12} className="text-blue-500" />
                        Student Business Partner Program
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeUpItem}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-zinc-950 mb-6 leading-[1.05]"
                    >
                        Earn while you learn. <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent italic pr-2 pb-2">On your own terms.</span>
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeUpItem}
                        className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
                    >
                        Help local businesses digitize their operations with Aptro. Turn your free time into income with industry-leading commissions and zero upfront investment.
                    </motion.p>
                    
                    <motion.div 
                        variants={fadeUpItem}
                        className="flex flex-col sm:flex-row items-center gap-5"
                    >
                        <button 
                            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Apply Now
                        </button>

                        <Link href="/how-it-works" className="px-8 py-4 bg-white/50 backdrop-blur-md border border-zinc-200/80 text-zinc-950 hover:bg-white hover:border-zinc-300 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 group shadow-sm active:scale-[0.98]">
                            See how it works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-zinc-400 group-hover:text-blue-600" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* --- COMMISSION PLANS --- */}
            <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-4">Commission Structure</h2>
                    <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto">Earn a massive one-time activation reward, plus recurring passive income every time they renew.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {commissionPlans.map((plan, idx) => {
                        const Icon = plan.icon;
                        const isPopular = plan.popular;

                        return (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, margin: "-50px" }} 
                                transition={{ duration: 0.8, ease: premiumEasing, delay: idx * 0.1 }}
                                key={plan.plan}
                                className={`relative flex flex-col items-center text-center p-10 pt-12 rounded-[2rem] transition-all duration-500 group ${
                                    isPopular 
                                    ? 'bg-zinc-950 text-white shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] border-[8px] border-zinc-950 hover:-translate-y-1' 
                                    : 'bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:bg-white hover:-translate-y-1'
                                }`}
                            >
                                {isPopular && (
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent opacity-50 rounded-[1.5rem] pointer-events-none" />
                                )}

                                {isPopular && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm border border-blue-500/20 backdrop-blur-md">
                                        Most Popular
                                    </div>
                                )}
                                
                                <Icon size={32} className={`${isPopular ? 'text-blue-400' : 'text-zinc-950'} mb-6 relative z-10`} strokeWidth={1.5} />
                                <h3 className={`text-2xl font-bold mb-2 relative z-10 ${isPopular ? "text-white" : "text-zinc-950"}`}>{plan.plan}</h3>
                                <p className={`mb-8 relative z-10 font-medium ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>{plan.price} membership</p>
                                
                                <div className={`w-full h-px mb-8 relative z-10 ${isPopular ? "bg-white/10" : "bg-zinc-200/80"}`} />
                                
                                <p className={`font-semibold text-xs uppercase tracking-widest mb-2 relative z-10 ${isPopular ? "text-zinc-400" : "text-zinc-400"}`}>Activation</p>
                                <div className={`text-5xl font-bold tracking-tighter leading-none mb-2 relative z-10 ${isPopular ? "text-white" : "text-zinc-950"}`}>
                                    {plan.activation}
                                </div>
                                <p className={`font-medium mb-8 relative z-10 ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>One-time per business</p>
                                
                                <div className={`mt-auto w-full pt-6 border-t relative z-10 ${isPopular ? "border-white/10" : "border-zinc-200/80"}`}>
                                    <p className={`text-sm font-medium mb-1 ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>Plus Recurring</p>
                                    <p className={`font-bold text-xl ${isPopular ? "text-blue-400" : "text-blue-600"}`}>
                                        {plan.recurring} <span className={`text-sm font-medium ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>/ renewal</span>
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* --- BENTO BENEFITS --- */}
            <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Big Tile */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: premiumEasing }}
                        className="md:col-span-2 bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
                    >
                        <div className="max-w-xl">
                            <h3 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-4 leading-tight">
                                Zero investment. <br/>
                                <span className="text-blue-600">Infinite potential.</span>
                            </h3>
                            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
                                Start earning immediately without spending a single rupee. All you need is your smartphone, communication skills, and a drive to succeed.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                           <CreditCard size={120} className="text-zinc-200" strokeWidth={1} />
                        </div>
                    </motion.div>

                    {/* Small Tile 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: premiumEasing, delay: 0.1 }}
                        className="bg-zinc-950 rounded-[2rem] p-10 md:p-12 text-center flex flex-col items-center shadow-xl border border-zinc-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 pointer-events-none" />
                        <Clock size={48} className="text-blue-400 mb-6 relative z-10" strokeWidth={1.5} />
                        <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 relative z-10">Work on your terms.</h4>
                        <p className="text-zinc-400 font-medium relative z-10">No fixed hours. Fit it perfectly around your college classes and exams.</p>
                    </motion.div>

                    {/* Small Tile 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: premiumEasing, delay: 0.2 }}
                        className="bg-blue-50 border border-blue-100 rounded-[2rem] p-10 md:p-12 text-center flex flex-col items-center shadow-sm"
                    >
                        <Briefcase size={48} className="text-blue-600 mb-6" strokeWidth={1.5} />
                        <h4 className="text-2xl md:text-3xl font-bold text-blue-950 tracking-tight mb-3">Real experience.</h4>
                        <p className="text-blue-800/70 font-medium">Build your resume with practical B2B sales and networking skills.</p>
                    </motion.div>
                </div>
            </section>

            {/* --- REGISTRATION FORM --- */}
            <section id="registration-form" className="max-w-[700px] mx-auto px-6 py-24 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: premiumEasing }}
                    className="bg-white/70 backdrop-blur-xl border border-zinc-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight mb-4">Create your Partner ID.</h2>
                        <p className="text-lg text-zinc-500 font-medium">Please provide your details below.</p>
                    </div>

                    {submitStatus === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-slate-50 p-10 rounded-[2rem] text-center border border-zinc-200/80"
                        >
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-200">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-950 mb-4 tracking-tight">Application Received</h3>
                            <p className="text-zinc-500 font-medium mb-8">
                                Thank you for applying. We are reviewing your application.
                            </p>
                            <div className="bg-white p-6 rounded-2xl inline-block border border-zinc-200/80 shadow-sm">
                                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-2">Your Temporary ID</p>
                                <p className="text-2xl font-bold text-zinc-950 font-mono tracking-wider">{tempId}</p>
                            </div>
                            <p className="text-sm text-zinc-500 font-medium mt-8 mb-8 max-w-sm mx-auto leading-relaxed">
                                Keep this ID safe. You will receive an email once your final Partner ID is generated upon approval.
                            </p>
                            
                            <button
                                onClick={() => router.push('/partner/dashboard')}
                                className="px-8 py-4 w-full bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] active:scale-[0.98]"
                            >
                                Go to Dashboard <ArrowRight size={18} className="text-zinc-400" />
                            </button>
                        </motion.div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            
                            {submitStatus === 'error' && (
                                <div className="bg-rose-50 text-rose-600 p-5 rounded-2xl text-sm font-bold border border-rose-100 shadow-sm flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                                    {errorMessage}
                                </div>
                            )}

                            {/* Section 1 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-4 border-b border-zinc-200/80 pb-3">Personal Information</h3>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile Number" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                    <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all appearance-none shadow-sm" required disabled={isLoading}>
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                
                                <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Full Address" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 min-h-[120px] resize-none shadow-sm" required disabled={isLoading}/>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-4 border-b border-zinc-200/80 pb-3">Academic Details</h3>
                                <input type="text" name="college" value={formData.college} onChange={handleInputChange} placeholder="College / University Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" name="course" value={formData.course} onChange={handleInputChange} placeholder="Course & Department" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                    <input type="text" name="studentId" value={formData.studentId} onChange={handleInputChange} placeholder="Student ID Number" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-4 border-b border-zinc-200/80 pb-3">Payout Details</h3>
                                <input type="text" name="accHolder" value={formData.accHolder} onChange={handleInputChange} placeholder="Account Holder Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} placeholder="Bank Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                    <input type="text" name="accNum" value={formData.accNum} onChange={handleInputChange} placeholder="Account Number" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" name="ifsc" value={formData.ifsc} onChange={handleInputChange} placeholder="IFSC Code" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" required disabled={isLoading}/>
                                    <input type="text" name="upi" value={formData.upi} onChange={handleInputChange} placeholder="UPI ID (Optional)" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-zinc-200/80 text-zinc-950 text-base font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm" disabled={isLoading}/>
                                </div>
                            </div>

                            {/* Agreement */}
                            <div className="pt-4 pb-2">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 cursor-pointer" required disabled={isLoading}/>
                                    <span className="text-sm text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-700 transition-colors">
                                        I confirm that the provided information is accurate. I understand this is a performance-based partnership and agree to follow Aptro's ethical marketing guidelines.
                                    </span>
                                </label>
                            </div>

                            {/* Submit CTA */}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className={`w-full py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold text-base transition-all duration-300 flex justify-center items-center shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] active:scale-[0.98] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <section className="max-w-[700px] mx-auto px-6 py-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="border-t border-zinc-200/80">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-zinc-200/80">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                            >
                                <span className="text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                                <ChevronDown 
                                    className={`text-zinc-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`} 
                                    size={20} 
                                />
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: premiumEasing }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-base text-zinc-500 font-medium leading-relaxed">
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