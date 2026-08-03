import { Metadata } from "next";
import LegalDocLayout from "@/components/LegalDocLayout";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";

export const metadata: Metadata = {
  title: "Global Privacy Policy",
  description: `Global Privacy Policy for ${COMPANY_INFO.name} and all mobile software applications.`,
  alternates: {
    canonical: `${COMPANY_INFO.baseUrl}/privacy`,
  },
  openGraph: {
    title: `Global Privacy Policy | ${COMPANY_INFO.name}`,
    description: `Official Privacy Policy governing ${COMPANY_INFO.name} operations, software, and services.`,
    url: `${COMPANY_INFO.baseUrl}/privacy`,
  },
};

export default function GlobalPrivacyPage() {
  const toc = [
    { id: "overview", title: "1. Scope & Overview" },
    { id: "data-collection", title: "2. Data We Collect" },
    { id: "use-of-data", title: "3. How We Use Data" },
    { id: "security", title: "4. Information Security" },
    { id: "user-rights", title: "5. Your Privacy Rights" },
    { id: "contact", title: "6. Contact Us" },
  ];

  return (
    <LegalDocLayout
      title="Global Privacy Policy"
      subtitle={`Comprehensive Privacy Policy covering all products, services, and mobile applications developed by ${COMPANY_INFO.name}.`}
      lastUpdated="August 2026"
      breadcrumbItems={[{ label: "Global Privacy Policy" }]}
      toc={toc}
    >
      <StructuredData type="Organization" />

      <section id="overview" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          1. Scope & Overview
        </h2>
        <p className="text-slate-700 leading-relaxed">
          This Global Privacy Policy governs the data privacy practices of <strong>{COMPANY_INFO.legalName}</strong> (&quot;{COMPANY_INFO.name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). It applies to all mobile software applications published across Google Play, Apple App Store, our corporate website (<a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="text-sky-600 underline">{COMPANY_INFO.website}</a>), and our Legal Center (<a href={COMPANY_INFO.baseUrl} className="text-sky-600 underline">{COMPANY_INFO.baseUrl}</a>).
        </p>
      </section>

      <section id="data-collection" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          2. Data We Collect
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We process minimal data necessary to deliver high-quality mobile utility, productivity, health, and business applications:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
          <li><strong>Application-Specific Data:</strong> Data parameters specifically requested by individual apps (detailed in each application&apos;s specific Privacy Policy).</li>
          <li><strong>Device & Telemetry Data:</strong> Anonymized OS version, hardware model, language settings, and crash diagnostics collected via telemetry SDKs to resolve bugs.</li>
          <li><strong>Support Communication:</strong> Email addresses and details provided when contacting our support channels.</li>
        </ul>
      </section>

      <section id="use-of-data" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          3. How We Use Data
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We use processed information solely to maintain, optimize, and protect our applications, respond to user inquiries, fulfill legal obligations, and ensure software stability.
        </p>
      </section>

      <section id="security" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          4. Information Security
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We implement rigorous security controls including SSL/TLS encryption, secure database access restrictions, and routine security audits. We do not sell or monetize personal user records.
        </p>
      </section>

      <section id="user-rights" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          5. Your Privacy Rights
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Depending on your jurisdiction (e.g. GDPR, CCPA/CPRA), you have the right to access, rectify, port, or request permanent deletion of your personal data. You may exercise these rights by submitting an email to <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-sky-600 underline font-semibold">{COMPANY_INFO.contactEmail}</a>.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          6. Contact Us
        </h2>
        <p className="text-slate-700 leading-relaxed">
          For inquiries regarding this policy or our privacy practices, please reach out to:
        </p>
        <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-2 text-sm">
          <p className="font-bold text-base text-sky-400">{COMPANY_INFO.legalName}</p>
          <p>Privacy & Data Protection Officer</p>
          <p>Legal Email: <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="underline text-sky-300">{COMPANY_INFO.contactEmail}</a></p>
          <p>Support Email: <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="underline text-sky-300">{COMPANY_INFO.supportEmail}</a></p>
        </div>
      </section>
    </LegalDocLayout>
  );
}
