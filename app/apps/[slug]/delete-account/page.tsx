import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import LegalDocLayout from "@/components/LegalDocLayout";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";
import { CheckCircle2, ShieldCheck, Mail, AlertTriangle, Trash2, Smartphone } from "lucide-react";

interface DeleteAccountParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DeleteAccountParams): Promise<Metadata> {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    return { title: "Account Deletion Not Found" };
  }

  const canonicalUrl = `${COMPANY_INFO.baseUrl}/apps/${app.slug}/delete-account`;

  return {
    title: `${app.name} Account Deletion Instructions`,
    description: `Account deletion policies and instructions for ${app.name} (${app.packageName}).`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} Account Deletion | ${COMPANY_INFO.name}`,
      description: `Data deletion instructions for ${app.name}. Learn how to request permanent account erasure.`,
      url: canonicalUrl,
    },
  };
}

export default async function AppDeleteAccountPage({ params }: DeleteAccountParams) {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    notFound();
  }

  const toc = app.accountRequired
    ? [
        { id: "overview", title: "1. Overview & Rights" },
        { id: "in-app-steps", title: "2. In-App Deletion Steps" },
        { id: "email-request", title: "3. Email Request Option" },
        { id: "data-retention", title: "4. Data Retention & Purge Policy" },
      ]
    : [
        { id: "no-account-notice", title: "1. Account Deletion Notice" },
        { id: "local-storage", title: "2. Local Device Storage Details" },
        { id: "how-to-reset", title: "3. Clearing Local Application Data" },
      ];

  return (
    <LegalDocLayout
      title={`${app.name} Account Deletion`}
      subtitle={`User data management and account deletion guidelines for ${app.name}.`}
      lastUpdated={app.lastUpdated || "August 2026"}
      appName={app.name}
      breadcrumbItems={[
        { label: "Applications", href: "/apps" },
        { label: app.name, href: `/apps/${app.slug}` },
        { label: "Delete Account" },
      ]}
      toc={toc}
    >
      <StructuredData type="SoftwareApplication" app={app} />

      {!app.accountRequired ? (
        /* Display specified exact text when accountRequired is false */
        <div className="space-y-8">
          <section id="no-account-notice" className="space-y-4">
            <div className="bg-sky-50 border border-sky-200 rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3 text-sky-700">
                <CheckCircle2 className="w-8 h-8 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  This application does not require an account. No account deletion is necessary.
                </h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed pl-11">
                <strong>{app.name}</strong> operates without mandatory user registration, profile creation, password requirements, or remote account infrastructure. Your identity and personal information are never stored on our cloud servers.
              </p>
            </div>
          </section>

          <section id="local-storage" className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Local Device Storage Details
            </h2>
            <p className="text-slate-700 leading-relaxed">
              All settings, preferences, logs, and custom configurations inside <strong>{app.name}</strong> are saved strictly on your local device filesystem. Because we do not maintain a user account database for this application, there is no remote profile to erase.
            </p>
          </section>

          <section id="how-to-reset" className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Clearing Local Application Data
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you wish to remove all local data stored by <strong>{app.name}</strong> from your smartphone or tablet, you can do so immediately:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-sky-600" />
                  Android Instructions
                </h3>
                <ol className="list-decimal pl-5 text-xs text-slate-600 space-y-1">
                  <li>Open <strong>Settings</strong> &gt; <strong>Apps</strong> on your device.</li>
                  <li>Select <strong>{app.name}</strong> from your installed apps list.</li>
                  <li>Tap <strong>Storage &amp; Cache</strong>.</li>
                  <li>Tap <strong>Clear Data</strong> and <strong>Clear Cache</strong>.</li>
                  <li>Uninstall the app to complete full removal.</li>
                </ol>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                  iOS Instructions
                </h3>
                <ol className="list-decimal pl-5 text-xs text-slate-600 space-y-1">
                  <li>Press and hold the <strong>{app.name}</strong> icon on your home screen.</li>
                  <li>Select <strong>Remove App</strong> &gt; <strong>Delete App</strong>.</li>
                  <li>Confirm deletion. iOS automatically purges all app sandboxed data.</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* Display step-by-step account deletion instructions when accountRequired is true */
        <div className="space-y-8">
          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Overview & Data Rights
            </h2>
            <p className="text-slate-700 leading-relaxed">
              At {app.developer}, you have full control over your personal data. If you wish to delete your <strong>{app.name}</strong> user account and all associated cloud data, you may initiate permanent deletion at any time.
            </p>
          </section>

          <section id="in-app-steps" className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. In-App Deletion Steps
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You can instantly erase your account directly inside the application by performing the following steps:
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 my-4">
              {app.accountDeletionSteps && app.accountDeletionSteps.length > 0 ? (
                <ol className="space-y-3">
                  {app.accountDeletionSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                      <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <ol className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <span>Open <strong>{app.name}</strong> on your device.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <span>Navigate to <strong>Settings</strong> &gt; <strong>Account Profile</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <span>Select <strong>Delete Account</strong> and confirm your password.</span>
                  </li>
                </ol>
              )}
            </div>
          </section>

          <section id="email-request" className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Email Request Option
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you no longer have access to the mobile application or encounter difficulties logging in, you can submit a manual account deletion request to our support team:
            </p>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 my-4">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Mail className="w-5 h-5" />
                <span>Submit Manual Deletion Request</span>
              </div>
              <p className="text-xs text-slate-300">
                Send an email from your registered email address to <a href={`mailto:${app.supportEmail}`} className="text-sky-300 underline font-semibold">{app.supportEmail}</a> with the following details:
              </p>
              <div className="bg-slate-800 p-4 rounded-xl text-xs font-mono text-slate-200 space-y-1">
                <p><strong>Subject:</strong> Account Deletion Request - {app.name}</p>
                <p><strong>Registered Email:</strong> [Your Registered Email]</p>
                <p><strong>Package Name:</strong> {app.packageName}</p>
                <p><strong>Confirmation:</strong> I confirm that I want to permanently delete my account and all associated data.</p>
              </div>
              <a
                href={`mailto:${app.supportEmail}?subject=Account Deletion Request - ${app.name}&body=Please permanently delete my account and data associated with ${app.packageName}.`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Pre-Filled Deletion Email</span>
              </a>
            </div>
          </section>

          <section id="data-retention" className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Data Retention & Purge Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Upon account deletion, all personal identifiers, synced records, user logs, and cloud storage files linked to your profile are permanently erased from our production databases within <strong>48 hours</strong>. Backup archives are overwritten within 30 days.
            </p>
          </section>
        </div>
      )}
    </LegalDocLayout>
  );
}
