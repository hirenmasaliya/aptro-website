"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
  MailCheck,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

type Field = "fullName" | "email" | "password";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getPasswordScore(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 12) score++;
  return score; // 0 - 4
}

const STRENGTH_LABEL = ["Too short", "Weak", "Okay", "Good", "Strong"];
const STRENGTH_COLOR = ["#DADCE0", "#D93025", "#F29900", "#1A73E8", "#188038"];

const STEPS = [
  { title: "Create your account", text: "Takes under a minute." },
  { title: "Connect your tools", text: "Import data from the apps you already use." },
  { title: "Invite your team", text: "Work together from day one." },
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    fullName: false,
    email: false,
    password: false,
  });

  const score = useMemo(() => getPasswordScore(formData.password), [formData.password]);

  const errors: Record<Field, string> = {
    fullName: formData.fullName.trim().length < 2 ? "Enter your full name." : "",
    email: !EMAIL_RE.test(formData.email) ? "Enter a valid email, like name@company.com." : "",
    password: formData.password.length < 8 ? "Use at least 8 characters." : "",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setTouched((p) => ({ ...p, [e.target.name as Field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, password: true });
    if (errors.fullName || errors.email || errors.password) return;

    setIsLoading(true);
    // TODO: replace with your real signup request
    setTimeout(() => {
      setIsLoading(false);
      setIsDone(true);
    }, 1500);
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
    // Locked to the viewport: dvh handles mobile browser bars, nothing scrolls.
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
            Run your whole business from one workspace.
          </h1>
          <p className="mt-4 text-[15px] text-[#A8C7FA] leading-relaxed max-w-sm">
            Be up and running in minutes, with no setup call and no credit card.
          </p>

          {/* Real sequence, so numbering carries meaning here */}
          <ol className="mt-8 xl:mt-10 space-y-5 max-w-sm [@media(max-height:760px)]:hidden">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4 items-start">
                <span
                  className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-[13px] font-semibold ${
                    i === 0 ? "bg-white text-[#041E49]" : "border border-white/25 text-[#A8C7FA]"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className={`text-[15px] font-semibold ${i === 0 ? "text-white" : "text-white/85"}`}>{s.title}</p>
                  <p className="text-[13px] text-[#A8C7FA] leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-[13px] text-[#A8C7FA]">
          <CheckCircle2 size={16} className="text-[#81C995]" />
          <span>Trusted by 10,000+ businesses</span>
        </div>
      </aside>

      {/* ============ RIGHT: FORM (fixed height, 3 rows: top bar / form / legal) ============ */}
      <main className="flex-1 h-full grid grid-rows-[auto_1fr_auto] px-6 sm:px-10">
        {/* Top bar */}
        <header className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#5F6368] hover:text-[#1F1F1F] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
            >
              <ArrowLeft size={16} />
              Back to website
            </Link>
          </div>
          <p className="text-[13px] text-[#5F6368]">
            Have an account?{" "}
            <Link href="/login" className="font-semibold text-[#1A73E8] hover:text-[#1557B0] hover:underline">
              Log in
            </Link>
          </p>
        </header>

        {/* Form area: vertically centered, never scrolls */}
        <div className="min-h-0 flex items-center justify-center">
          <div className="w-full max-w-[400px]">
            {isDone ? (
              <div className="text-center" role="status">
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#E6F4EA] flex items-center justify-center">
                  <MailCheck className="text-[#188038]" size={26} />
                </div>
                <h2 className="text-[26px] font-semibold tracking-tight text-[#1F1F1F] mb-2">Check your email</h2>
                <p className="text-[15px] text-[#5F6368] leading-relaxed">
                  We sent a confirmation link to{" "}
                  <span className="font-medium text-[#1F1F1F]">{formData.email}</span>. Open it to activate your
                  workspace.
                </p>
                <button
                  type="button"
                  onClick={() => setIsDone(false)}
                  className="mt-6 text-[14px] font-medium text-[#1A73E8] hover:underline"
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-5 [@media(max-height:720px)]:mb-3">
                  <h2 className="text-[26px] sm:text-[28px] [@media(max-height:720px)]:text-[22px] font-semibold text-[#1F1F1F] tracking-tight">
                    Create your account
                  </h2>
                  <p className="mt-1 text-[14px] text-[#5F6368]">14-day free trial. No credit card required.</p>
                </div>

                <button
                  type="button"
                  className="w-full h-11 flex items-center justify-center gap-2.5 bg-white border border-[#DADCE0] rounded-xl text-[14px] font-medium text-[#1F1F1F] hover:bg-[#F8F9FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
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
                  <div>
                    <label htmlFor="fullName" className="block text-[13px] font-medium text-[#1F1F1F] mb-1">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      autoFocus
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Priya Sharma"
                      aria-invalid={touched.fullName && !!errors.fullName}
                      aria-describedby={touched.fullName && errors.fullName ? "fullName-error" : undefined}
                      className={inputClass("fullName")}
                    />
                    <FieldError field="fullName" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-[#1F1F1F] mb-1">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
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
                    <label htmlFor="password" className="block text-[13px] font-medium text-[#1F1F1F] mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="At least 8 characters"
                        aria-invalid={touched.password && !!errors.password}
                        aria-describedby="password-help"
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

                    {/* Fixed-height strength row so the layout never jumps */}
                    <div id="password-help" className="mt-2 flex items-center gap-2 h-4" aria-live="polite">
                      <div className="flex flex-1 gap-1">
                        {[1, 2, 3, 4].map((n) => (
                          <span
                            key={n}
                            className="h-1 flex-1 rounded-full transition-colors"
                            style={{
                              backgroundColor:
                                formData.password && score >= n ? STRENGTH_COLOR[score] : "#E8EAED",
                            }}
                          />
                        ))}
                      </div>
                      <span className="w-[62px] text-right text-[12px] text-[#5F6368]">
                        {formData.password ? STRENGTH_LABEL[score] : ""}
                      </span>
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
                        Creating account…
                      </>
                    ) : (
                      "Create account"
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Legal */}
        <footer className="h-14 flex items-center justify-center">
          <p className="text-[12px] text-[#5F6368] text-center">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-[#1A73E8] hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#1A73E8] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}