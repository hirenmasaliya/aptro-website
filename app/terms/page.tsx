"use client";

import { Scale } from "lucide-react";
import LegalLayout, { Bullets, Callout } from "../components/LegalLayout";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      body: (
        <>
          <p>
            By accessing or using the Aptro App ("Aptro", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <Callout title="Age Requirement">
            You must be at least 13 years old to use Aptro. If you are under 18, you must have your parent or guardian's permission to use the service.
          </Callout>
        </>
      ),
    },
    {
      id: "account",
      title: "Your Aptro Account",
      body: (
        <>
          <p>
            You may need to create an account to use some of our features. You are responsible for safeguarding your account, and you agree to notify us immediately of any unauthorized use of your account.
          </p>
          <Bullets 
            tone="do"
            items={[
              "Provide accurate and complete registration information.",
              "Keep your password secure and confidential.",
              "Update your information if it changes."
            ]}
          />
        </>
      ),
    },
    {
      id: "usage",
      title: "Acceptable Use",
      body: (
        <>
          <p>
            We want Aptro to be a safe and productive environment. You agree not to misuse the Aptro services or help anyone else do so. 
          </p>
          <Bullets 
            tone="dont"
            items={[
              "Do not probe, scan, or test the vulnerability of any system.",
              "Do not breach or otherwise circumvent any security or authentication measures.",
              "Do not interfere with or disrupt any user, host, or network.",
              "Do not sell, resell, or lease the Aptro services unless explicitly authorized."
            ]}
          />
        </>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      body: (
        <p>
          We may suspend or terminate your access to Aptro at any time, for any reason, including if we reasonably believe you have violated these Terms. We will make reasonable efforts to notify you before termination, unless doing so would cause us legal liability or harm others.
        </p>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      body: (
        <p>
          To the maximum extent permitted by law, Aptro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
        </p>
      ),
    }
  ];

  return (
    <LegalLayout
      icon={Scale} // Valid lucide icon passed here
      title="Terms of Service"
      subtitle="The rules that govern your use of the Aptro App and our services."
      version="1.0"
      effectiveDate="27 October 2026"
      effectiveIso="2026-10-27"
      summary={{
        heading: "Aptro Terms at a Glance",
        points: [
          "You own your data, and we do not sell it.",
          "Do not misuse our services or try to hack our systems.",
          "We can suspend your account if you violate these rules.",
          "Our liability is legally limited."
        ]
      }}
      sections={sections}
      footerLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/contact", label: "Contact Us" },
      ]}
    />
  );
}