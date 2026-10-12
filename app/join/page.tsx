"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
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
    Sparkles,
    AlertCircle
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; 

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

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

const commissionPlans = [
    { plan: "Standard Affiliate", price: "₹99", activation: "₹50", recurring: "₹10", icon: Star },
    { plan: "Pro Partner", price: "₹199", activation: "₹100", recurring: "₹20", icon: Zap, popular: true },
    { plan: "Max Agency", price: "₹249", activation: "₹150", recurring: "₹50", icon: Crown },
];

const faqs = [
    { q: "Is there any registration fee for this student partner program?", a: "No. Joining the Aptro student affiliate program is completely free with zero hidden charges. We want you to earn, not pay." },
    { q: "Do I need prior B2B sales experience?", a: "Not at all. We provide comprehensive SaaS training and marketing materials to help you pitch local MSMEs and shops successfully." },
    { q: "Is there a monthly target or forced schedule?", a: "There are no compulsory targets. This is the best part-time job for students—you work on your own schedule and earn based on your actual software conversions." },
    { q: "How do I receive my affiliate commissions?", a: "Commissions are credited after successful payment verification from the merchant and transferred directly to your provided Bank account or UPI ID." }
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
        <main className={`min-h-screen pt-20 pb-20 bg-[#F8F9FA] text-[#202124] selection:bg-[#D3E3FD] selection:text-[#041E49] overflow-x-hidden relative ${jakarta.className}`}>
            
            {/* --- HERO SECTION --- */}
            {/* SEO Fix: Changed to <header> */}
            <header className="relative w-full pt-12 md:pt-24 pb-20 flex flex-col items-center">
                
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#E8F0FE]/50 to-transparent" />
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-6"
                >
                    <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6">
                        <Sparkles size={16} aria-hidden="true" className="text-[#1A73E8]" />
                        Top Student Affiliate Program in India
                    </motion.div>
                    
                    {/* SEO Fix: Embedded high-value keywords naturally in H1 */}
                    <motion.h1 
                        variants={fadeUpItem}
                        className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1F1F1F] mb-6 leading-[1.15]"
                    >
                        Earn money while you study. <br className="hidden md:block" />
                        <span className="text-[#1A73E8]">On your own schedule.</span>
                    </motion.h1>
                    
                    {/* SEO Fix: Included B2B SaaS keywords in H2 equivalent */}
                    <motion.p 
                        variants={fadeUpItem}
                        className="text-[16px] md:text-[18px] text-[#5F6368] max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Help local retail shops and businesses digitize their billing with the Aptro Business App. Turn your free time into passive income with our industry-leading SaaS commission program. Zero upfront investment required.
                    </motion.p>
                    
                    <motion.div 
                        variants={fadeUpItem}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <button 
                            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                            aria-label="Scroll to student partner application form"
                            className="px-8 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                        >
                            Apply Now
                        </button>

                        <Link 
                            href="/how-it-works" 
                            aria-label="Learn how the Aptro student partner program works"
                            className="px-8 py-3.5 bg-white border border-[#DADCE0] text-[#1A73E8] hover:bg-[#F8F9FA] rounded-full font-medium text-[15px] transition-colors flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                        >
                            See how it works <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </header>

            {/* --- COMMISSION PLANS --- */}
            {/* SEO Fix: Added aria-labelledby */}
            <section aria-labelledby="commission-heading" className="max-w-[1200px] mx-auto px-6 py-16 relative z-10">
                <div className="text-center mb-14">
                    <h2 id="commission-heading" className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4">SaaS Partner Commission Structure</h2>
                    <p className="text-[16px] text-[#5F6368] max-w-2xl mx-auto">Earn a massive one-time activation reward per shop, plus recurring passive income every time they renew their billing subscription.</p>
                </div>
                
                {/* SEO Fix: Swapped Grid to an unordered list */}
                <ul className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto list-none p-0 m-0">
                    {commissionPlans.map((plan, idx) => {
                        const Icon = plan.icon;
                        const isPopular = plan.popular;

                        return (
                            <motion.li 
                                initial={{ opacity: 0, y: 24 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, margin: "-50px" }} 
                                transition={{ duration: 0.5, ease: materialEasing, delay: idx * 0.1 }}
                                key={plan.plan}
                                className={`relative flex flex-col items-center text-center p-8 rounded-[24px] bg-white transition-shadow duration-300 hover:shadow-md ${
                                    isPopular 
                                    ? 'border-2 border-[#1A73E8] shadow-sm' 
                                    : 'border border-[#DADCE0]'
                                }`}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1A73E8] text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                        Most Popular
                                    </div>
                                )}
                                
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${isPopular ? 'bg-[#E8F0FE] text-[#1A73E8]' : 'bg-[#F1F3F4] text-[#5F6368]'}`}>
                                    <Icon size={24} aria-hidden="true" />
                                </div>

                                <h3 className="text-[20px] font-medium mb-1 text-[#1F1F1F]">{plan.plan}</h3>
                                <p className="text-[14px] text-[#5F6368] mb-8">{plan.price} merchant membership</p>
                                
                                <div className="w-full h-px mb-8 bg-[#DADCE0]" aria-hidden="true" />
                                
                                <p className="font-medium text-[12px] uppercase tracking-wider mb-2 text-[#5F6368]">Instant Activation</p>
                                <div className="text-4xl font-normal text-[#1F1F1F] mb-2">
                                    {plan.activation}
                                </div>
                                <p className="text-[14px] mb-8 text-[#5F6368]">One-time per business setup</p>
                                
                                <div className="mt-auto w-full pt-6 border-t border-[#DADCE0]">
                                    <p className="text-[13px] text-[#5F6368] mb-1">Plus Lifetime Recurring</p>
                                    <p className="font-medium text-[18px] text-[#1A73E8]">
                                        {plan.recurring} <span className="text-[13px] text-[#5F6368] font-normal">/ renewal</span>
                                    </p>
                                </div>
                            </motion.li>
                        )
                    })}
                </ul>
            </section>

            {/* --- BENTO BENEFITS (Material Cards) --- */}
            <section aria-label="Student Partner Benefits" className="max-w-[1200px] mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Big Tile */}
                    <motion.article 
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: materialEasing }}
                        className="md:col-span-2 bg-white rounded-[24px] border border-[#DADCE0] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="max-w-xl">
                            <h3 className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4 leading-tight">
                                Zero financial investment. <br/>
                                <span className="text-[#1A73E8]">Infinite earning potential.</span>
                            </h3>
                            <p className="text-[16px] text-[#5F6368] leading-relaxed">
                                Start earning immediately without spending a single rupee. All you need is your smartphone, college networking skills, and a drive to introduce modern GST software to local markets.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                           <div className="w-32 h-32 bg-[#E8F0FE] rounded-full flex items-center justify-center text-[#1A73E8]">
                               <CreditCard size={64} aria-hidden="true" />
                           </div>
                        </div>
                    </motion.article>

                    {/* Small Tile 1 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: materialEasing, delay: 0.1 }}
                        className="bg-[#E6F4EA] rounded-[24px] p-10 border border-[#CEEAD6] text-center flex flex-col items-center"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#1E8E3E] mb-6 shadow-sm">
                            <Clock size={32} aria-hidden="true" />
                        </div>
                        <h4 className="text-[22px] font-medium text-[#0D652D] mb-3">Work on your own terms.</h4>
                        <p className="text-[#137333] text-[15px]">No fixed agency hours. Fit software sales perfectly around your college classes and university exams.</p>
                    </motion.article>

                    {/* Small Tile 2 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: materialEasing, delay: 0.2 }}
                        className="bg-white border border-[#DADCE0] rounded-[24px] p-10 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-[#FCE8E6] rounded-full flex items-center justify-center text-[#D93025] mb-6">
                            <Briefcase size={32} aria-hidden="true" />
                        </div>
                        <h4 className="text-[22px] font-medium text-[#1F1F1F] mb-3">Real B2B experience.</h4>
                        <p className="text-[#5F6368] text-[15px]">Build your corporate resume with practical B2B software sales, marketing, and client networking skills.</p>
                    </motion.article>
                </div>
            </section>

            {/* --- REGISTRATION FORM --- */}
            <section id="registration-form" aria-labelledby="form-heading" className="max-w-[760px] mx-auto px-6 py-16 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: materialEasing }}
                    className="bg-white border border-[#DADCE0] rounded-[24px] p-8 md:p-12 shadow-sm"
                >
                    <div className="text-center mb-10">
                        <h2 id="form-heading" className="text-3xl font-normal text-[#1F1F1F] mb-3">Apply to be a Partner</h2>
                        <p className="text-[15px] text-[#5F6368]">Fill out the details below to generate your student affiliate ID.</p>
                    </div>

                    {submitStatus === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#F8F9FA] p-10 rounded-[16px] text-center border border-[#DADCE0]"
                        >
                            <div className="w-16 h-16 bg-[#E6F4EA] text-[#1E8E3E] rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={32} aria-hidden="true" />
                            </div>
                            <h3 className="text-2xl font-normal text-[#1F1F1F] mb-3">Application Received</h3>
                            <p className="text-[#5F6368] text-[15px] mb-8">
                                Thank you for applying to the Aptro Affiliate Program. We are reviewing your application.
                            </p>
                            <div className="bg-white p-6 rounded-[12px] inline-block border border-[#DADCE0] shadow-sm">
                                <p className="text-[12px] text-[#5F6368] uppercase tracking-wider font-medium mb-1">Your Temporary ID</p>
                                <p className="text-2xl font-mono text-[#1F1F1F]">{tempId}</p>
                            </div>
                            <p className="text-[14px] text-[#5F6368] mt-8 mb-8 max-w-sm mx-auto leading-relaxed">
                                Keep this ID safe. You will receive an email once your final Partner ID is generated upon approval.
                            </p>
                            
                            <button
                                onClick={() => router.push('/partner/dashboard')}
                                className="px-6 py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[14px] transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Go to Dashboard <ArrowRight size={18} aria-hidden="true" />
                            </button>
                        </motion.div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            
                            {submitStatus === 'error' && (
                                <div role="alert" className="bg-[#FCE8E6] text-[#C5221F] p-4 rounded-[8px] text-[14px] font-medium border border-[#FAD2CF] flex items-center gap-3">
                                    <AlertCircle size={20} className="shrink-0" aria-hidden="true" />
                                    {errorMessage}
                                </div>
                            )}

                            {/* Section 1 */}
                            <fieldset className="space-y-5">
                                <legend className="text-[18px] font-medium text-[#1F1F1F] mb-4 border-b border-[#DADCE0] pb-2 w-full text-left">Personal Information</legend>
                                
                                <div>
                                    <label htmlFor="fullName" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="mobile" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Mobile Number</label>
                                        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Email Address</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="dob" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Date of Birth</label>
                                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                    <div>
                                        <label htmlFor="gender" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Gender</label>
                                        <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4] appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235F6368%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[length:16px_16px] pr-10" required disabled={isLoading}>
                                            <option value="" disabled>Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="address" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Full Address</label>
                                    <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4] min-h-[100px] resize-none" required disabled={isLoading}/>
                                </div>
                            </fieldset>

                            {/* Section 2 */}
                            <fieldset className="space-y-5 pt-2">
                                <legend className="text-[18px] font-medium text-[#1F1F1F] mb-4 border-b border-[#DADCE0] pb-2 w-full text-left">Academic Details</legend>
                                <div>
                                    <label htmlFor="college" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">College / University Name</label>
                                    <input type="text" id="college" name="college" value={formData.college} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="course" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Course & Department</label>
                                        <input type="text" id="course" name="course" value={formData.course} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                    <div>
                                        <label htmlFor="studentId" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Student ID Number</label>
                                        <input type="text" id="studentId" name="studentId" value={formData.studentId} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                </div>
                            </fieldset>

                            {/* Section 3 */}
                            <fieldset className="space-y-5 pt-2">
                                <legend className="text-[18px] font-medium text-[#1F1F1F] mb-4 border-b border-[#DADCE0] pb-2 w-full text-left">Payout Details</legend>
                                <div>
                                    <label htmlFor="accHolder" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Account Holder Name</label>
                                    <input type="text" id="accHolder" name="accHolder" value={formData.accHolder} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="bankName" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Bank Name</label>
                                        <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                    <div>
                                        <label htmlFor="accNum" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">Account Number</label>
                                        <input type="text" id="accNum" name="accNum" value={formData.accNum} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="ifsc" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">IFSC Code</label>
                                        <input type="text" id="ifsc" name="ifsc" value={formData.ifsc} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" required disabled={isLoading}/>
                                    </div>
                                    <div>
                                        <label htmlFor="upi" className="block text-[13px] font-medium text-[#5F6368] mb-1.5 ml-1">UPI ID (Optional)</label>
                                        <input type="text" id="upi" name="upi" value={formData.upi} onChange={handleInputChange} className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DADCE0] text-[#202124] text-[15px] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-colors disabled:bg-[#F1F3F4]" disabled={isLoading}/>
                                    </div>
                                </div>
                            </fieldset>

                            {/* Agreement */}
                            <div className="pt-4 pb-2">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded-[4px] border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8] cursor-pointer" required disabled={isLoading}/>
                                    <span className="text-[14px] text-[#5F6368] leading-relaxed group-hover:text-[#1F1F1F] transition-colors">
                                        I confirm that the provided information is accurate. I understand this is a performance-based affiliate partnership and agree to follow Aptro's ethical SaaS marketing guidelines.
                                    </span>
                                </label>
                            </div>

                            {/* Submit CTA */}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className={`w-full py-3 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[15px] transition-colors flex justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
            <section aria-labelledby="faq-heading" className="max-w-[700px] mx-auto px-6 py-16 relative z-10">
                <div className="text-center mb-10">
                    <h2 id="faq-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F]">Student Affiliate FAQs</h2>
                </div>
                <div className="border-t border-[#DADCE0]">
                    {faqs.map((faq, idx) => (
                        <article key={idx} className="border-b border-[#DADCE0]">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                aria-expanded={openFaq === idx}
                                className="w-full py-5 text-left flex justify-between items-center focus:outline-none group"
                            >
                                <h3 className="text-[16px] font-medium text-[#1F1F1F] group-hover:text-[#1A73E8] transition-colors m-0">{faq.q}</h3>
                                <ChevronDown 
                                    className={`text-[#5F6368] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#1A73E8]' : 'group-hover:text-[#1A73E8]'}`} 
                                    size={20} 
                                    aria-hidden="true"
                                />
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: materialEasing }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-[15px] text-[#5F6368] leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}