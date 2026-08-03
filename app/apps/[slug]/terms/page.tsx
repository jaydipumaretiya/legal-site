import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import LegalDocLayout from "@/components/LegalDocLayout";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";

interface TermsParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TermsParams): Promise<Metadata> {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    return { title: "Terms of Service Not Found" };
  }

  const canonicalUrl = `${COMPANY_INFO.baseUrl}/apps/${app.slug}/terms`;

  return {
    title: `${app.name} Terms of Service`,
    description: `Terms of Service and End User License Agreement (EULA) for ${app.name} developed by ${app.developer}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} Terms of Service | ${COMPANY_INFO.name}`,
      description: `Official Terms of Service for ${app.name}. Read software license conditions and user rules.`,
      url: canonicalUrl,
    },
  };
}

export default async function AppTermsPage({ params }: TermsParams) {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    notFound();
  }

  const toc = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "license", title: "2. Software License Grant" },
    { id: "restrictions", title: "3. User Conduct & Restrictions" },
    { id: "intellectual-property", title: "4. Intellectual Property Rights" },
    { id: "disclaimer", title: "5. Disclaimer of Warranties" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "termination", title: "7. Termination" },
    { id: "governing-law", title: "8. Governing Law" },
    { id: "contact", title: "9. Contact Information" },
  ];

  return (
    <LegalDocLayout
      title={`${app.name} Terms of Service`}
      subtitle={`End User License Agreement (EULA) and Terms of Service governing the use of ${app.name}.`}
      lastUpdated={app.lastUpdated || "August 2026"}
      appName={app.name}
      breadcrumbItems={[
        { label: "Applications", href: "/apps" },
        { label: app.name, href: `/apps/${app.slug}` },
        { label: "Terms of Service" },
      ]}
      toc={toc}
    >
      <StructuredData type="SoftwareApplication" app={app} />

      <section id="acceptance" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-slate-700 leading-relaxed">
          By downloading, installing, or accessing the <strong>{app.name}</strong> mobile application (&quot;Application&quot;), provided by <strong>{app.developer}</strong> (&quot;Licensor&quot; or &quot;we&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these Terms, do not install or use the Application.
        </p>
      </section>

      <section id="license" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          2. Software License Grant
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Subject to your compliance with these Terms, {app.developer} grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and execute a single copy of <strong>{app.name}</strong> (Package Name: <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-sky-700 font-mono">{app.packageName}</code>) on your personal mobile device strictly for personal, non-commercial purposes.
        </p>
      </section>

      <section id="restrictions" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          3. User Conduct & Restrictions
        </h2>
        <p className="text-slate-700 leading-relaxed">
          You agree not to, and will not permit others to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
          <li>Modify, translate, reverse engineer, decompile, or disassemble any portion of the Application.</li>
          <li>Rent, lease, lend, sell, redistribute, or sublicense the Application.</li>
          <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices contained in the Application.</li>
          <li>Use the Application for any unlawful purpose or in violation of any applicable local, state, or international laws.</li>
        </ul>
      </section>

      <section id="intellectual-property" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          4. Intellectual Property Rights
        </h2>
        <p className="text-slate-700 leading-relaxed">
          All title, ownership rights, and intellectual property rights in and to <strong>{app.name}</strong> (including all code, graphic assets, logos, and UI designs) are owned exclusively by <strong>{app.developer}</strong>. All rights not expressly granted to you are reserved.
        </p>
      </section>

      <section id="disclaimer" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          5. Disclaimer of Warranties
        </h2>
        <p className="text-slate-700 leading-relaxed uppercase text-xs tracking-wider bg-amber-50 p-4 rounded-xl text-amber-900 border border-amber-200">
          The Application is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranty of any kind, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </section>

      <section id="liability" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          6. Limitation of Liability
        </h2>
        <p className="text-slate-700 leading-relaxed">
          To the maximum extent permitted by applicable law, in no event shall {app.developer} be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use or inability to use <strong>{app.name}</strong>.
        </p>
      </section>

      <section id="termination" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          7. Termination
        </h2>
        <p className="text-slate-700 leading-relaxed">
          These Terms remain effective until terminated by you or {app.developer}. You may terminate these Terms at any time by uninstalling and deleting all copies of the Application from your device.
        </p>
      </section>

      <section id="governing-law" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          8. Governing Law
        </h2>
        <p className="text-slate-700 leading-relaxed">
          These Terms shall be governed by and construed in accordance with applicable governing software licensing laws without regard to conflict of law principles.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          9. Contact Information
        </h2>
        <p className="text-slate-700 leading-relaxed">
          If you have any questions regarding these Terms, please contact us at:
        </p>
        <p className="text-sm text-slate-800 font-semibold">
          {app.developer} Legal Department – <a href={`mailto:${app.supportEmail}`} className="text-sky-600 underline">{app.supportEmail}</a>
        </p>
      </section>
    </LegalDocLayout>
  );
}
