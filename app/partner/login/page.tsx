"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, ShieldCheck, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function PartnerLoginPage() {
    const router = useRouter();
    
    // Step state: 1 = Identifier, 2 = Password
    const [step, setStep] = useState<1 | 2>(1);
    const [isFirstTime, setIsFirstTime] = useState(false);
    
    // Form fields
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // UI states
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://aptro-admin.vercel.app";

    const handleCheckIdentifier = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            console.log(`${BASE_URL}/api/partner/auth/check`);
            const res = await fetch(`${BASE_URL}/api/partner/auth/check`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ identifier: identifier.trim() }), // Trim whitespace
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Invalid Partner ID or Email.");

            setIsFirstTime(data.isFirstTime);
            setStep(2);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // --- STEP 2: Login or Create Password ---
    const handleSubmitPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (isFirstTime && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (isFirstTime && password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setIsLoading(true);

        try {
            const endpoint = isFirstTime 
                ? `${BASE_URL}/api/partner/auth/setup` 
                : `${BASE_URL}/api/partner/auth/login`;
                
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", 
                body: JSON.stringify({ identifier: identifier.trim(), password }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Authentication failed.");

            // OPTIONAL: If your API returns a token in the JSON body instead of cookies, save it here:
            // if (data.token) localStorage.setItem("partner_token", data.token);

            setSuccessMessage(isFirstTime ? "Account setup complete! Redirecting..." : "Welcome back! Redirecting...");
            
            // Brief delay for UX so they see the success message
            setTimeout(() => {
                router.push("/partner/dashboard");
            }, 800);

        } catch (err: any) {
            setError(err.message);
            setIsLoading(false); // Only set to false on error, so spinner stays during redirect
        }
    };

    // Reset function for the Back button
    const handleBack = () => {
        setStep(1); 
        setPassword(""); 
        setConfirmPassword(""); 
        setError("");
        setSuccessMessage("");
    };

    return (
        <main className={`min-h-screen bg-[#FBFBFD] flex items-center justify-center p-6 ${jakarta.className} selection:bg-[#0071E3] selection:text-white`}>
            {/* Background decorative blur */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0071E3]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0071E3]/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[440px] relative z-10"
            >
                {/* Branding Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#0071E3] to-[#42A5F5] rounded-2xl shadow-lg shadow-blue-500/20 mb-6 text-white font-bold text-2xl">
                        A
                    </div>
                    <h1 className="text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-2">
                        Partner Portal
                    </h1>
                    <p className="text-[15px] text-[#86868B]">
                        Sign in to your Student Business Partner account
                    </p>
                </div>

                {/* Main Login Card */}
                <div className="bg-white border border-[#D2D2D7] rounded-[24px] p-8 shadow-sm overflow-hidden relative">
                    
                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-2 bg-[#F5F5F7] text-[#424245] py-2 px-4 rounded-lg mb-8 text-[13px] font-semibold w-fit mx-auto border border-[#E5E5EA]">
                        <ShieldCheck size={16} className="text-emerald-500" />
                        Authorized Partners Only
                    </div>

                    {/* Dynamic Messages */}
                    {error && (
                        <div className="bg-red-50 text-red-600 border border-red-200 text-[13px] font-medium p-3 rounded-xl text-center mb-5">
                            {error}
                        </div>
                    )}
                    {successMessage && (
                        <div className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[13px] font-medium p-3 rounded-xl text-center mb-5 flex items-center justify-center gap-2">
                            <CheckCircle2 size={16} />
                            {successMessage}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {/* ---------------- STEP 1 ---------------- */}
                        {step === 1 && (
                            <motion.form 
                                key="step1"
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleCheckIdentifier} 
                                className="space-y-5"
                            >
                                <div className="space-y-2">
                                    <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-wide">
                                        Partner ID or Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868B]" size={18} />
                                        <input 
                                            type="text" 
                                            required
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            placeholder="APT-XXXX or name@college.edu"
                                            className="w-full bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl py-3.5 pl-12 pr-4 text-[15px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" disabled={isLoading || !identifier}
                                    className="w-full py-3.5 bg-[#0071E3] text-white font-semibold text-[16px] rounded-xl hover:bg-[#0077ED] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-blue-500/20 mt-2"
                                >
                                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : (
                                        <>Continue <ArrowRight size={18} /></>
                                    )}
                                </button>
                            </motion.form>
                        )}

                        {/* ---------------- STEP 2 ---------------- */}
                        {step === 2 && (
                            <motion.form 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleSubmitPassword} 
                                className="space-y-5"
                            >
                                {/* Back button & User Identifier Display */}
                                <div className="flex items-center gap-3 mb-6 bg-[#F5F5F7] p-3 rounded-xl border border-[#D2D2D7]">
                                    <button 
                                        type="button" 
                                        onClick={handleBack}
                                        className="p-1 hover:bg-[#E5E5EA] rounded-full transition-colors"
                                    >
                                        <ChevronLeft size={18} className="text-[#86868B]" />
                                    </button>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[12px] font-bold text-[#86868B] uppercase">Logging in as</p>
                                        <p className="text-[14px] font-semibold text-[#1D1D1F] truncate">{identifier}</p>
                                    </div>
                                </div>

                                {isFirstTime && (
                                    <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-xl text-sm mb-4 flex gap-3 items-start">
                                        <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                                        <p>This is your first time logging in! Please create a secure password for your Partner Account.</p>
                                    </div>
                                )}

                                {/* Password Input */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-wide">
                                            {isFirstTime ? "Create Password" : "Password"}
                                        </label>
                                        {!isFirstTime && (
                                            <button type="button" className="text-[13px] font-semibold text-[#0071E3] hover:underline">
                                                Forgot?
                                            </button>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868B]" size={18} />
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl py-3.5 pl-12 pr-12 text-[15px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all font-medium"
                                        />
                                        <button 
                                            type="button" onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password Input (First time only) */}
                                {isFirstTime && (
                                    <div className="space-y-2">
                                        <label className="block text-[13px] font-bold text-[#86868B] uppercase tracking-wide">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868B]" size={18} />
                                            <input 
                                                type={showPassword ? "text" : "password"} 
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl py-3.5 pl-12 pr-12 text-[15px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                )}

                                <button 
                                    type="submit" disabled={isLoading}
                                    className="w-full py-3.5 bg-[#0071E3] text-white font-semibold text-[16px] rounded-xl hover:bg-[#0077ED] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-blue-500/20 mt-2"
                                >
                                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : (
                                        isFirstTime ? "Complete Setup" : "Sign In"
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Footer Link */}
                <div className="text-center mt-8">
                    <p className="text-[14px] text-[#86868B]">
                        Not a partner yet?{" "}
                        <Link href="/partner/apply" className="font-semibold text-[#0071E3] hover:underline">
                            Submit an application
                        </Link>
                    </p>
                </div>
            </motion.div>
        </main>
    );
}