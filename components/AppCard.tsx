import Link from "next/link";
import { AppConfig } from "@/types/app";
import {
  ShieldCheck,
  FileText,
  HelpCircle,
  Trash2,
  ChevronRight,
  AlarmClock,
  FileText as FileTextIcon,
  Activity,
  Scan,
  Package,
  Smartphone,
  Puzzle,
  CheckCircle2,
  Lock,
  CreditCard
} from "lucide-react";

interface AppCardProps {
  app: AppConfig;
}

export default function AppCard({ app }: AppCardProps) {
  // Helper to resolve icon component dynamically
  const renderAppIcon = () => {
    switch (app.icon) {
      case "Package":
        return <Package className="w-7 h-7 text-sky-600" />;
      case "AlarmClock":
        return <AlarmClock className="w-7 h-7 text-sky-600" />;
      case "FileText":
        return <FileTextIcon className="w-7 h-7 text-indigo-600" />;
      case "Activity":
        return <Activity className="w-7 h-7 text-emerald-600" />;
      case "Scan":
        return <Scan className="w-7 h-7 text-amber-600" />;
      case "Puzzle":
        return <Puzzle className="w-7 h-7 text-purple-600" />;
      default:
        return <Smartphone className="w-7 h-7 text-sky-600" />;
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative">
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
              {renderAppIcon()}
            </div>
            <div>
              <Link href={`/apps/${app.slug}`} className="hover:text-sky-600 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  {app.name}
                  <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </h3>
              </Link>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{app.packageName}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          {app.description}
        </p>

        {/* Key Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
            app.accountRequired ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
          }`}>
            {app.accountRequired ? (
              <>
                <Lock className="w-3 h-3" /> Account Required
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3 h-3" /> No Account Needed
              </>
            )}
          </span>

          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
            app.ads ? "bg-slate-100 text-slate-700" : "bg-sky-50 text-sky-700 border border-sky-200"
          }`}>
            {app.ads ? "Ad Supported" : "No Ads"}
          </span>

          {app.inAppPurchases && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CreditCard className="w-3 h-3" /> In-App Purchases
            </span>
          )}

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
            {app.permissions.length} Permissions
          </span>
        </div>
      </div>

      {/* Quick Action Document Grid */}
      <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
        <Link
          href={`/apps/${app.slug}/privacy`}
          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-medium transition-colors border border-slate-100 hover:border-sky-200"
        >
          <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
          <span className="truncate">Privacy Policy</span>
        </Link>

        <Link
          href={`/apps/${app.slug}/terms`}
          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-medium transition-colors border border-slate-100 hover:border-sky-200"
        >
          <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
          <span className="truncate">Terms of Service</span>
        </Link>

        <Link
          href={`/apps/${app.slug}/support`}
          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-medium transition-colors border border-slate-100 hover:border-sky-200"
        >
          <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="truncate">Support & FAQ</span>
        </Link>

        <Link
          href={`/apps/${app.slug}/delete-account`}
          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-700 font-medium transition-colors border border-slate-100 hover:border-rose-200"
        >
          <Trash2 className="w-4 h-4 text-rose-600 shrink-0" />
          <span className="truncate">Delete Account</span>
        </Link>
      </div>
    </div>
  );
}
