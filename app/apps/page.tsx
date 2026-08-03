"use client";

import { useState } from "react";
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";
import Breadcrumb from "@/components/Breadcrumb";
import { Smartphone, Search } from "lucide-react";

export default function AppsPage() {
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
    <div className="min-h-screen bg-slate-50/50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Applications" }]} />

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 mb-3">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile Application Legal Directory
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                All Mobile Applications
              </h1>
              <p className="text-slate-600 text-base mt-2">
                Browse policies, support documentation, and account management tools for every application.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Pill Filters */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-sky-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
            <p className="text-slate-600 font-medium">No applications found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-sky-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
