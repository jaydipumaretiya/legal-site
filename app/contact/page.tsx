import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";
import { Mail, HelpCircle, ShieldCheck, Globe, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { apps } from "@/data/apps";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Developer Support",
  description: `Contact developer support and legal inquiries for ${COMPANY_INFO.name} mobile applications.`,
  alternates: {
    canonical: `${COMPANY_INFO.baseUrl}/contact`,
  },
  openGraph: {
    title: `Contact & Developer Support | ${COMPANY_INFO.name}`,
    description: `Get support or submit privacy requests for ${COMPANY_INFO.name} mobile applications.`,
    url: `${COMPANY_INFO.baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-8 lg:py-12">
      <StructuredData type="Organization" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ label: "Contact & Support" }]} />

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Developer Support &amp; Legal Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How can we help you?
          </h1>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Reach out directly to the {COMPANY_INFO.name} team for technical assistance, bug reports, data privacy requests, or general inquiries.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Customer Support Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">App Support Team</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For app bugs, troubleshooting, account issues, or feature suggestions across any of our applications.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={`mailto:${COMPANY_INFO.supportEmail}`}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>{COMPANY_INFO.supportEmail}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-slate-400 text-center">Response within 24-48 hours</p>
            </div>
          </div>

          {/* Legal & Privacy Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Privacy & Compliance</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For GDPR/CCPA data requests, account deletion requests, or formal privacy inquiries.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={`mailto:${COMPANY_INFO.contactEmail}`}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>{COMPANY_INFO.contactEmail}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-slate-400 text-center">Data Protection Officer</p>
            </div>
          </div>

          {/* Corporate Website Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Official Website</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn more about {COMPANY_INFO.name}, our team, software portfolio, and latest mobile app releases.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={COMPANY_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>{COMPANY_INFO.website.replace("https://", "")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-slate-400 text-center">Official Portal</p>
            </div>
          </div>
        </div>

        {/* Quick Links to App-Specific Support */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-sky-600" />
            App-Specific Support Desks
          </h2>
          <p className="text-sm text-slate-600">
            If you need help with a particular app, choose your application below for tailored FAQ guides and account deletion instructions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={`/apps/${app.slug}/support`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 text-slate-800 hover:text-sky-700 text-xs font-semibold transition-all"
              >
                <span>{app.name} Support</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
