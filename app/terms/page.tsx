import { Metadata } from "next";
import LegalDocLayout from "@/components/LegalDocLayout";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";

export const metadata: Metadata = {
  title: "Global Terms of Service",
  description: `Global Terms of Service governing ${COMPANY_INFO.name} websites and mobile software applications.`,
  alternates: {
    canonical: `${COMPANY_INFO.baseUrl}/terms`,
  },
  openGraph: {
    title: `Global Terms of Service | ${COMPANY_INFO.name}`,
    description: `Terms of Service and legal agreements for ${COMPANY_INFO.name}.`,
    url: `${COMPANY_INFO.baseUrl}/terms`,
  },
};

export default function GlobalTermsPage() {
  const toc = [
    { id: "terms-acceptance", title: "1. Acceptance of Terms" },
    { id: "use-of-services", title: "2. Authorized Use of Services" },
    { id: "intellectual-property", title: "3. Intellectual Property Rights" },
    { id: "disclaimers", title: "4. Disclaimers & Warranties" },
    { id: "limitation-liability", title: "5. Limitation of Liability" },
    { id: "contact-legal", title: "6. Legal Inquiries" },
  ];

  return (
    <LegalDocLayout
      title="Global Terms of Service"
      subtitle={`Legal agreements and terms governing the use of ${COMPANY_INFO.name} digital platforms and software applications.`}
      lastUpdated="August 2026"
      breadcrumbItems={[{ label: "Global Terms of Service" }]}
      toc={toc}
    >
      <StructuredData type="Organization" />

      <section id="terms-acceptance" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-slate-700 leading-relaxed">
          These Terms of Service constitute a legally binding agreement between you and <strong>{COMPANY_INFO.legalName}</strong> (&quot;{COMPANY_INFO.name}&quot;). By accessing our website, downloading our mobile applications, or utilizing our software tools, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
        </p>
      </section>

      <section id="use-of-services" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          2. Authorized Use of Services
        </h2>
        <p className="text-slate-700 leading-relaxed">
          You are granted a non-exclusive, non-transferable, revocable license to access our applications strictly in compliance with applicable platform store guidelines (Google Play Terms of Service, Apple Media Services Terms) and these Terms.
        </p>
      </section>

      <section id="intellectual-property" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          3. Intellectual Property Rights
        </h2>
        <p className="text-slate-700 leading-relaxed">
          All patents, copyrights, trademarks, trade secrets, software source code, brand assets, and UI components remain the exclusive intellectual property of <strong>{COMPANY_INFO.legalName}</strong>. Unauthorized reproduction, modification, or distribution is strictly prohibited.
        </p>
      </section>

      <section id="disclaimers" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          4. Disclaimers & Warranties
        </h2>
        <p className="text-slate-700 leading-relaxed uppercase text-xs font-semibold tracking-wider bg-slate-100 p-4 rounded-xl text-slate-800">
          Our services and applications are provided &quot;as is&quot; without any express or implied warranties of performance, uninterrupted availability, or fitness for a specific purpose.
        </p>
      </section>

      <section id="limitation-liability" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          5. Limitation of Liability
        </h2>
        <p className="text-slate-700 leading-relaxed">
          To the maximum extent permitted under applicable law, {COMPANY_INFO.name} shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our applications or services.
        </p>
      </section>

      <section id="contact-legal" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          6. Legal Inquiries
        </h2>
        <p className="text-slate-700 leading-relaxed">
          For legal notices or inquiries regarding these Terms, please contact:
        </p>
        <p className="text-sm font-semibold text-slate-900">
          {COMPANY_INFO.name} Legal Department – <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-sky-600 underline">{COMPANY_INFO.contactEmail}</a>
        </p>
      </section>
    </LegalDocLayout>
  );
}
