import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import LegalDocLayout from "@/components/LegalDocLayout";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";
import { Mail, HelpCircle, Smartphone, CheckCircle2, LifeBuoy } from "lucide-react";

interface SupportParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SupportParams): Promise<Metadata> {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    return { title: "Support Not Found" };
  }

  const canonicalUrl = `${COMPANY_INFO.baseUrl}/apps/${app.slug}/support`;

  return {
    title: `${app.name} Support & FAQ`,
    description: `Official developer support, FAQs, and contact email for ${app.name} (${app.packageName}).`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} Support & FAQ | ${COMPANY_INFO.name}`,
      description: `Get help, read FAQs, and contact developer support for ${app.name}.`,
      url: canonicalUrl,
    },
  };
}

export default async function AppSupportPage({ params }: SupportParams) {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    notFound();
  }

  const defaultFaqs = [
    {
      question: `How do I update ${app.name} to the latest version?`,
      answer: `You can update ${app.name} anytime by visiting the Google Play Store or Apple App Store on your device, searching for "${app.name}", and tapping the "Update" button.`
    },
    {
      question: "How do I report a bug or suggest a feature?",
      answer: `Please send an email to ${app.supportEmail} with details regarding your device model, OS version, and steps to reproduce the issue. We review all feedback promptly.`
    },
    {
      question: "Is there any subscription fee for using this application?",
      answer: `${app.name} details its pricing and features directly on the app store page. Any optional in-app purchases are managed through standard store billing.`
    }
  ];

  const appFaqs = app.faqs && app.faqs.length > 0 ? [...app.faqs, ...defaultFaqs] : defaultFaqs;

  const toc = [
    { id: "support-channels", title: "1. Direct Support Channels" },
    { id: "app-info", title: "2. Application & System Info" },
    { id: "faqs", title: "3. Frequently Asked Questions" },
    { id: "troubleshooting", title: "4. Common Troubleshooting Steps" },
  ];

  return (
    <LegalDocLayout
      title={`${app.name} Support Center`}
      subtitle={`Official developer help desk, FAQs, and technical support for ${app.name}.`}
      lastUpdated={app.lastUpdated || "August 2026"}
      appName={app.name}
      breadcrumbItems={[
        { label: "Applications", href: "/apps" },
        { label: app.name, href: `/apps/${app.slug}` },
        { label: "Support & FAQ" },
      ]}
      toc={toc}
    >
      <StructuredData type="SoftwareApplication" app={app} />

      <section id="support-channels" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          1. Direct Support Channels
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Need assistance with <strong>{app.name}</strong>? Our support team is here to help you resolve technical issues, answer billing questions, or assist with permissions.
        </p>

        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-md my-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <LifeBuoy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Email Developer Support</h3>
              <p className="text-xs text-sky-100">Average response time: within 24 hours</p>
            </div>
          </div>
          <p className="text-sm text-sky-100 leading-relaxed">
            Reach out to our customer care team directly from your email client:
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${app.supportEmail}?subject=Support Request for ${app.name} (v${app.version || "1.0.0"})`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-sky-700 hover:bg-sky-50 font-bold text-sm transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-sky-600" />
              <span>{app.supportEmail}</span>
            </a>
          </div>
        </div>
      </section>

      <section id="app-info" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          2. Application & System Info
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Reference information for support requests:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">App Version</span>
            <p className="text-sm font-semibold text-slate-900">{app.version || "1.0.0"}</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Package Identifier</span>
            <p className="text-xs font-mono font-semibold text-sky-700">{app.packageName}</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Developer</span>
            <p className="text-sm font-semibold text-slate-900">{app.developer}</p>
          </div>
        </div>
      </section>

      <section id="faqs" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          3. Frequently Asked Questions
        </h2>
        <div className="space-y-4 my-4">
          {appFaqs.map((faq, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-slate-600 pl-7 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="troubleshooting" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          4. Common Troubleshooting Steps
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700 space-y-1">
            <p className="font-bold text-slate-900">App crashing or failing to launch?</p>
            <p>Restart your mobile device, ensure your OS is updated, and check if an app update is available in your app store.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700 space-y-1">
            <p className="font-bold text-slate-900">Missing notifications or background alarms?</p>
            <p>Go to OS Device Settings &gt; Battery Optimization and ensure {app.name} is set to &quot;Unrestricted&quot; or &quot;Allow Background Usage&quot;.</p>
          </div>
        </div>
      </section>
    </LegalDocLayout>
  );
}
