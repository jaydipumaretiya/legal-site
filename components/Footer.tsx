import Link from "next/link";
import { ShieldCheck, Mail, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/types/app";
import { apps } from "@/data/apps";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Branding Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Official Legal Center, Privacy Policies, Terms of Service, Account Deletion and Developer Support portal for all {COMPANY_INFO.name} mobile applications.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.supportEmail}
              </a>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal Documents
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Global Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Global Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Applications */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Mobile Apps
            </h3>
            <ul className="space-y-2 text-sm">
              {apps.map((app) => (
                <li key={app.slug}>
                  <Link
                    href={`/apps/${app.slug}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <span>{app.name}</span>
                    <span className="text-xs text-slate-500">({app.category || "App"})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Data Protection
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We are committed to user privacy and data security. Our applications adhere to standard COPPA, GDPR, and app store compliance standards.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-sky-400 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Legal Portal
              </span>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
