"use client";

import { useState } from "react";
import Link from "next/link";
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";
import { COMPANY_INFO } from "@/types/app";
import {
  ShieldCheck,
  Search,
  Sparkles,
  Smartphone,
  Lock,
  HelpCircle,
  FileCheck,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(apps.map((app) => app.category || "General")))];

  const filteredApps = apps.filter((app) => {
    const matchesQuery =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.packageName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || (app.category || "General") === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-100 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-100/80 text-sky-800 border border-sky-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Official Developer Legal & Compliance Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {COMPANY_INFO.name} <span className="text-sky-600">Legal Center</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Privacy, Terms, Support and Legal information for all our mobile applications.
            </p>

            {/* Search Input Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search application by name or package (e.g., Clocky)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base text-slate-900 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Directory Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Smartphone className="w-7 h-7 text-sky-600" />
              Our Mobile Applications
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Select an application below to view its specific Privacy Policy, Terms of Service, Support, or Account Deletion.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Application Cards Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <p className="text-slate-600 font-medium text-base">No mobile applications matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-sky-600 hover:text-sky-700 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Global Transparency & Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Data Protection Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Built with User Privacy & Security First
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At {COMPANY_INFO.name}, we believe in complete transparency. Every application we publish details exact permissions, data collection policies, and simple account deletion options.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-sky-400" />
                  <span>No hidden tracking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Encrypted data transit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>24/7 Developer Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all shadow-md shadow-sky-500/20"
              >
                <span>Company Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700"
              >
                <span>Contact Legal Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
