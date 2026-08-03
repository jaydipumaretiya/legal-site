"use client";

import { ReactNode } from "react";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import { Printer, Copy, Check, ArrowUp } from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/types/app";

interface LegalDocLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  appName?: string;
  breadcrumbItems: BreadcrumbItem[];
  toc?: { id: string; title: string }[];
  children: ReactNode;
}

export default function LegalDocLayout({
  title,
  subtitle,
  lastUpdated = "August 2026",
  appName,
  breadcrumbItems,
  toc,
  children,
}: LegalDocLayoutProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Document Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              {appName && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  {appName}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {title}
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                {subtitle}
              </p>
              <div className="pt-2 text-xs text-slate-400 font-medium">
                Last Updated: <span className="text-slate-700 font-semibold">{lastUpdated}</span>
              </div>
            </div>

            {/* Quick Document Action Buttons */}
            <div className="flex items-center gap-2 shrink-0 no-print">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-sm font-semibold transition-all shadow-2xs"
                title="Print Legal Document"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-sm font-semibold transition-all shadow-2xs"
                title="Copy Link"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Content Body & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Legal Text Document */}
          <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs print-content prose prose-slate max-w-none">
            {children}

            {/* Bottom Scroll To Top Button */}
            <div className="pt-8 mt-12 border-t border-slate-100 flex items-center justify-between no-print text-sm">
              <span className="text-slate-500">Official {COMPANY_INFO.name} Legal Document</span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-semibold"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </main>

          {/* Table of Contents Sidebar */}
          {toc && toc.length > 0 && (
            <aside className="lg:col-span-4 sticky top-24 no-print hidden lg:block">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  On This Page
                </h3>
                <nav className="space-y-2 text-sm">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-slate-600 hover:text-sky-600 hover:pl-1 transition-all py-1 font-medium truncate"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
