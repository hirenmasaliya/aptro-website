"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
  LayoutDashboard,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";
const LOGIN_ENDPOINT = `${API_BASE}/api/auth/login`;
const GOOGLE_ENDPOINT = `${API_BASE}/api/auth/google`;
const DEFAULT_REDIRECT = "/dashboard";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

type Field = "email" | "password";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FEATURES = [
  { icon: LayoutDashboard, title: "Unified Workspace", text: "All your tools and data in one fast interface." },
  { icon: Zap, title: "High-Performance", text: "Global edge network with real-time syncing." },
  { icon: ShieldCheck, title: "Enterprise Security", text: "Encryption and role-based access built in." },
];

/** Only allow same-site relative redirects (prevents open-redirect abuse). */
function getSafeRedirect() {
  if (typeof window === "undefined") return DEFAULT_REDIRECT;
  const next = new URLSearchParams(window.location.search).get("next");
  return next && next.startsWith("/") && !next.startsWith("//") ? next : DEFAULT_REDIRECT;
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState<Record<Field, boolean>>({ email: false, password: false });

  const errors: Record<Field, string> = {
    email: !EMAIL_RE.test(formData.email) ? "Enter a valid email, like name@company.com." : "",
    password: !formData.password ? "Enter your password." : "",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerError("");
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setTouched((p) => ({ ...p, [e.target.name as Field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
        setErrorMsg(data.error || "Failed to log in.");
        setIsLoading(false);
        return;
      }

      if (data.idToken) {
        localStorage.setItem("aptro_token", data.idToken);
        localStorage.setItem("aptro_uid", data.uid);
        
        // 5. Redirect to the dashboard
        router.push("/dashboard"); 
      }
    
  } catch (error) {
    console.error("Network error during login", error);
    setIsLoading(false);
  }
};

  const handleGoogle = () => {
    window.location.href = GOOGLE_ENDPOINT;
  };

  const inputClass = (field: Field) =>
    `w-full h-11 px-3.5 bg-white border rounded-xl text-[14px] text-[#1F1F1F] placeholder:text-[#80868B] outline-none transition-shadow focus:ring-2 ${
      touched[field] && errors[field]
        ? "border-[#D93025] focus:ring-[#D93025]/30"
        : "border-[#DADCE0] focus:border-[#1A73E8] focus:ring-[#1A73E8]/30"
    }`;

  const FieldError = ({ field }: { field: Field }) =>
    touched[field] && errors[field] ? (
      <p id={`${field}-error`} role="alert" className="mt-1 flex items-center gap-1 text-[12px] text-[#D93025]">
        <AlertCircle size={13} className="shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  return (
    // Locked to the viewport: nothing scrolls.
    <div className={`h-dvh w-full overflow-hidden flex bg-white ${jakarta.className}`}>
      {/* ============ LEFT: BRAND PANEL (desktop only) ============ */}
      <aside className="hidden lg:flex w-[46%] max-w-[680px] h-full bg-[#041E49] text-white flex-col justify-between relative overflow-hidden p-10 xl:p-14">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-[25%] -left-[15%] w-[75%] h-[75%] rounded-full bg-[#1A73E8] opacity-20 blur-[110px]" />
          <div className="absolute -bottom-[20%] -right-[25%] w-[65%] h-[65%] rounded-full bg-[#D3E3FD] opacity-10 blur-[120px]" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center p-1.5">
            <Image src="/aptro_logo.png" alt="" width={28} height={28} className="object-contain" />
          </div>
          <span className="text-[20px] font-semibold tracking-tight">Aptro OS</span>
        </div>

        <div className="relative z-10">
          <h1 className="text-[34px] xl:text-[40px] leading-[1.15] font-semibold tracking-tight max-w-md">
            The operating system for modern business.
          </h1>
          <p className="mt-4 text-[15px] text-[#A8C7FA] leading-relaxed max-w-sm">
            Manage your teams, operations, and tools from one place.
          </p>

          <ul className="mt-8 xl:mt-10 space-y-5 max-w-sm [@media(max-height:760px)]:hidden">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center shrink-0">
                  <Icon className="text-[#D3E3FD]" size={19} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold">{title}</p>
                  <p className="text-[13px] text-[#A8C7FA] leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-[13px] text-[#A8C7FA]">
          <CheckCircle2 size={16} className="text-[#81C995]" />
          <span>Trusted by 10,000+ businesses</span>
        </div>
      </aside>

      {/* ============ RIGHT: FORM (top bar / form / footer) ============ */}
      <main className="flex-1 h-full grid grid-rows-[auto_1fr_auto] px-6 sm:px-10">
        <header className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#5F6368] hover:text-[#1F1F1F] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
          >
            <ArrowLeft size={16} />
            Back to website
          </Link>
          <p className="text-[13px] text-[#5F6368]">
            New to Aptro?{" "}
            <Link href="/signup" className="font-semibold text-[#1A73E8] hover:text-[#1557B0] hover:underline">
              Sign up free
            </Link>
          </p>
        </header>

        <div className="min-h-0 flex items-center justify-center">
          <div className="w-full max-w-[400px]">
            <div className="mb-5 [@media(max-height:720px)]:mb-3">
              <h2 className="text-[26px] sm:text-[28px] [@media(max-height:720px)]:text-[22px] font-semibold text-[#1F1F1F] tracking-tight">
                Welcome back
              </h2>
              <p className="mt-1 text-[14px] text-[#5F6368]">Sign in to continue to your workspace.</p>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              disabled={isLoading}
              className="w-full h-11 flex items-center justify-center gap-2.5 bg-white border border-[#DADCE0] rounded-xl text-[14px] font-medium text-[#1F1F1F] hover:bg-[#F8F9FA] disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="flex items-center gap-3 my-4 [@media(max-height:720px)]:my-3">
              <div className="flex-1 h-px bg-[#DADCE0]" />
              <span className="text-[12px] text-[#5F6368]">or use email</span>
              <div className="flex-1 h-px bg-[#DADCE0]" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-3.5 [@media(max-height:720px)]:space-y-2.5">
              {/* Server error (wrong password, rate limit, network, etc.) */}
              {serverError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-xl border border-[#F5C6C2] bg-[#FCE8E6] px-3.5 py-2.5 text-[13px] text-[#B3261E]"
                >
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-[#1F1F1F] mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@company.com"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                  className={inputClass("email")}
                />
                <FieldError field="email" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-[13px] font-medium text-[#1F1F1F]">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-[13px] font-medium text-[#1A73E8] hover:text-[#1557B0] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your password"
                    aria-invalid={touched.password && !!errors.password}
                    aria-describedby={touched.password && errors.password ? "password-error" : undefined}
                    className={`${inputClass("password")} pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-[#5F6368] hover:text-[#1F1F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <FieldError field="password" />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] disabled:bg-[#1A73E8]/70 disabled:cursor-not-allowed text-white text-[14px] font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
          </div>
        </div>

        <footer className="h-14 flex items-center justify-center">
          <p className="text-[12px] text-[#5F6368] text-center">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}

function setErrorMsg(arg0: any) {
    throw new Error("Function not implemented.");
}
