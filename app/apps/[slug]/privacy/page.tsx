import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import LegalDocLayout from "@/components/LegalDocLayout";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";
import { ShieldCheck, CheckCircle2, AlertTriangle, Lock, CreditCard } from "lucide-react";

interface PrivacyParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PrivacyParams): Promise<Metadata> {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    return { title: "Privacy Policy Not Found" };
  }

  const canonicalUrl = `${COMPANY_INFO.baseUrl}/apps/${app.slug}/privacy`;

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy Policy for ${app.name} developed by ${app.developer}. Learn about data collection, device permissions, security, and user privacy rights.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} Privacy Policy | ${COMPANY_INFO.name}`,
      description: `Official Privacy Policy for ${app.name}. Transparency on permissions, data collected, analytics, and security.`,
      url: canonicalUrl,
    },
  };
}

export default async function AppPrivacyPage({ params }: PrivacyParams) {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    notFound();
  }

  const toc = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-collected", title: "2. Information We Collect" },
    { id: "permissions-used", title: "3. Device Permissions Used" },
    { id: "analytics", title: "4. Analytics & Telemetry" },
    { id: "advertising", title: "5. Advertising & Monetization" },
    { id: "in-app-purchases", title: "6. In-App Purchases & Subscriptions" },
    { id: "data-sharing", title: "7. Data Sharing & Disclosure" },
    { id: "data-security", title: "8. Data Security & Protection" },
    { id: "children-privacy", title: "9. Children's Privacy (COPPA)" },
    { id: "policy-changes", title: "10. Changes to this Policy" },
    { id: "contact-us", title: "11. Contact Information" },
  ];

  return (
    <LegalDocLayout
      title={`${app.name} Privacy Policy`}
      subtitle={`Official Privacy Policy governing the use of ${app.name} (${app.packageName}) published by ${app.developer}.`}
      lastUpdated={app.lastUpdated || "August 2026"}
      appName={app.name}
      breadcrumbItems={[
        { label: "Applications", href: "/apps" },
        { label: app.name, href: `/apps/${app.slug}` },
        { label: "Privacy Policy" },
      ]}
      toc={toc}
    >
      <StructuredData type="SoftwareApplication" app={app} />

      <section id="introduction" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          1. Introduction
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Welcome to the Privacy Policy for <strong>{app.name}</strong> (&quot;the Application&quot;), developed and operated by <strong>{app.developer}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your privacy and ensuring you have a positive experience when using our mobile software.
        </p>
        <p className="text-slate-700 leading-relaxed">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you download, install, and use <strong>{app.name}</strong> (Package Name: <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-sky-700 font-mono">{app.packageName}</code>). Please read this document carefully. If you do not agree with the terms of this policy, please do not access or use the Application.
        </p>
      </section>

      <section id="information-collected" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          2. Information We Collect
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Depending on how you configure and interact with <strong>{app.name}</strong>, we may process specific data items necessary to provide core application features:
        </p>
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 my-4">
          <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">
            Data Elements Processed:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
            {app.collects.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {!app.accountRequired && (
          <p className="text-slate-700 text-sm italic bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200">
            <strong>Local Storage Notice:</strong> {app.name} does not require account registration. Personal preferences and app configurations remain stored locally on your device unless synchronized by your device&apos;s OS backup.
          </p>
        )}
      </section>

      <section id="permissions-used" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          3. Device Permissions Used
        </h2>
        <p className="text-slate-700 leading-relaxed">
          To fulfill its functional capabilities, <strong>{app.name}</strong> requests the following hardware and software permissions from your operating system:
        </p>
        <div className="space-y-3 my-4">
          {app.permissions.map((perm, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{perm}</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Requested solely to enable normal operation of {app.name} capabilities on your smartphone or tablet.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="analytics" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          4. Analytics & Telemetry
        </h2>
        <p className="text-slate-700 leading-relaxed">
          {app.analytics ? (
            <>
              We utilize anonymized diagnostic analytics ({app.analyticsProvider || "Firebase Crashlytics / App Performance Monitoring"}) to understand application crash logs, performance bottlenecks, and general usage patterns. This information contains no personally identifiable data and is used strictly to improve app stability.
            </>
          ) : (
            <>
              <strong>{app.name}</strong> does not collect or transmit third-party analytics telemetry or behavioral tracking events.
            </>
          )}
        </p>
      </section>

      <section id="advertising" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          5. Advertising & Monetization
        </h2>
        <p className="text-slate-700 leading-relaxed">
          {app.ads ? (
            <>
              This application is supported by third-party advertising services {app.adsProvider ? `(${app.adsProvider})` : app.adNetworks ? `(${app.adNetworks.join(", ")})` : ""}. These advertising partners may process non-personal device indicators (such as Advertising ID) to serve contextual and interest-based advertisements in compliance with platform ad policies.
            </>
          ) : (
            <>
              <strong>{app.name} is completely ad-free.</strong> We do not integrate commercial advertising networks, pop-ups, banner ads, or tracking SDKs.
            </>
          )}
        </p>
      </section>

      <section id="in-app-purchases" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          6. In-App Purchases & Subscriptions
        </h2>
        <p className="text-slate-700 leading-relaxed">
          {app.inAppPurchases ? (
            <>
              {app.inAppPurchasesDetails || `${app.name} offers optional In-App Purchases or premium feature upgrades.`} All financial transactions and payment card details are processed directly and securely by the official app store billing platform (Google Play Billing / Apple In-App Purchase). We do not store or collect financial payment credentials on our servers.
            </>
          ) : (
            <>
              <strong>{app.name}</strong> does not offer paid in-app subscriptions or microtransactions.
            </>
          )}
        </p>
      </section>

      <section id="data-sharing" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          7. Data Sharing & Disclosure
        </h2>
        <p className="text-slate-700 leading-relaxed">
          {app.sharesData ? (
            app.sharesDataDetails || "Non-personal technical indicators may be processed by authorized infrastructure partners for app delivery and security."
          ) : (
            <>
              <strong>We do not sell, rent, trade, or share your personal data with third parties.</strong> Your data is treated as strictly confidential and is never commercialized.
            </>
          )}
        </p>
      </section>

      <section id="data-security" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          8. Data Security & Protection
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We implement industry-standard administrative, physical, and technical safeguards (including HTTPS TLS encryption in transit) to safeguard your data against unauthorized access, loss, alteration, or destruction.
        </p>
      </section>

      <section id="children-privacy" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          9. Children&apos;s Privacy (COPPA Compliance)
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Our Application does not knowingly solicit or collect personal information from children under the age of 13. If we become aware that personal data from a child under 13 has been collected without verifiable parental consent, we will promptly delete that information from our records.
        </p>
      </section>

      <section id="policy-changes" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          10. Changes to this Privacy Policy
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We reserve the right to update or modify this Privacy Policy at any time. When updates are made, we will revise the &quot;Last Updated&quot; date at the top of this document. Continued use of <strong>{app.name}</strong> after modifications indicates acceptance of the updated terms.
        </p>
      </section>

      <section id="contact-us" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          11. Contact Information
        </h2>
        <p className="text-slate-700 leading-relaxed">
          If you have questions, feedback, or privacy concerns regarding this policy or <strong>{app.name}</strong>, please contact our legal and support team:
        </p>
        <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-2 text-sm my-4">
          <p className="font-bold text-base text-sky-400">{app.developer} Legal Department</p>
          <p>Email: <a href={`mailto:${app.supportEmail}`} className="underline hover:text-sky-300">{app.supportEmail}</a></p>
          <p>Website: <a href={app.website} target="_blank" rel="noreferrer" className="underline hover:text-sky-300">{app.website}</a></p>
          <p>Package ID: <code className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">{app.packageName}</code></p>
        </div>
      </section>
    </LegalDocLayout>
  );
}
