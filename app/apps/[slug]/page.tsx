import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getAppBySlug, getAllAppSlugs } from "@/data/apps";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";
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
  Lock,
  CheckCircle2,
  AlertCircle,
  CreditCard
} from "lucide-react";

interface AppSlugParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AppSlugParams): Promise<Metadata> {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    return {
      title: "App Not Found",
    };
  }

  const canonicalUrl = `${COMPANY_INFO.baseUrl}/apps/${app.slug}`;

  return {
    title: `${app.name} Legal Center & Policies`,
    description: `Privacy Policy, Terms of Service, Account Deletion instructions, and Support for ${app.name} (${app.packageName}) by ${app.developer}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} - Privacy, Terms & Support`,
      description: app.description,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function AppOverviewPage({ params }: AppSlugParams) {
  const resolvedParams = await params;
  const app = getAppBySlug(resolvedParams.slug);

  if (!app) {
    notFound();
  }

  const renderAppIcon = () => {
    switch (app.icon) {
      case "Package":
        return <Package className="w-10 h-10 text-sky-600" />;
      case "AlarmClock":
        return <AlarmClock className="w-10 h-10 text-sky-600" />;
      case "FileText":
        return <FileTextIcon className="w-10 h-10 text-indigo-600" />;
      case "Activity":
        return <Activity className="w-10 h-10 text-emerald-600" />;
      case "Scan":
        return <Scan className="w-10 h-10 text-amber-600" />;
      case "Puzzle":
        return <Puzzle className="w-10 h-10 text-purple-600" />;
      default:
        return <Smartphone className="w-10 h-10 text-sky-600" />;
    }
  };

  const actionCards = [
    {
      title: "Privacy Policy",
      subtitle: "Full disclosure of permissions, data collection, and security.",
      href: `/apps/${app.slug}/privacy`,
      icon: ShieldCheck,
      color: "bg-sky-50 text-sky-600 border-sky-100 hover:border-sky-300 hover:shadow-md",
      badge: "Essential",
    },
    {
      title: "Terms of Service",
      subtitle: "App usage terms, license agreement, and liability conditions.",
      href: `/apps/${app.slug}/terms`,
      icon: FileText,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100 hover:border-indigo-300 hover:shadow-md",
      badge: "Legal",
    },
    {
      title: "Support & FAQ",
      subtitle: "Frequently asked questions, version info, and support contact.",
      href: `/apps/${app.slug}/support`,
      icon: HelpCircle,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-300 hover:shadow-md",
      badge: "Help",
    },
    {
      title: "Delete Account",
      subtitle: app.accountRequired
        ? "Step-by-step instructions to delete your profile & data."
        : "No account is required. Details regarding local data storage.",
      href: `/apps/${app.slug}/delete-account`,
      icon: Trash2,
      color: "bg-rose-50 text-rose-600 border-rose-100 hover:border-rose-300 hover:shadow-md",
      badge: app.accountRequired ? "Action Required" : "No Account",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 lg:py-12">
      <StructuredData type="SoftwareApplication" app={app} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb
          items={[
            { label: "Applications", href: "/apps" },
            { label: app.name },
          ]}
        />

        {/* Hero App Badge Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                {renderAppIcon()}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {app.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                    {app.category || "Application"}
                  </span>
                </div>
                <p className="text-base text-slate-600 font-medium">
                  {app.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                  <span>Package: <strong className="text-slate-700">{app.packageName}</strong></span>
                  <span>•</span>
                  <span>Developer: <strong className="text-slate-700">{app.developer}</strong></span>
                  {app.version && (
                    <>
                      <span>•</span>
                      <span>Version: <strong className="text-slate-700">v{app.version}</strong></span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
              <a
                href={`mailto:${app.supportEmail}?subject=Inquiry regarding ${app.name}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm w-full"
              >
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>Contact Developer</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Action Cards Section */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
            Legal & Support Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actionCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color} border transition-colors`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        {card.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors flex items-center gap-2">
                        {card.title}
                        <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600 group-hover:translate-x-0.5 transition-transform">
                    <span>View {card.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* At-a-Glance Privacy & Permission Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            Compliance & Privacy At-a-Glance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Account Requirement</span>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 pt-1">
                {app.accountRequired ? (
                  <>
                    <Lock className="w-4 h-4 text-amber-600" /> Required
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Not Required
                  </>
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">In-App Purchases</span>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 pt-1">
                {app.inAppPurchases ? (
                  <>
                    <CreditCard className="w-4 h-4 text-emerald-600" /> Pro / In-App Items
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-slate-600" /> None
                  </>
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Analytics & Telemetry</span>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 pt-1">
                {app.analytics ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-sky-600" /> Anonymized Telemetry
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Disabled
                  </>
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Advertising</span>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 pt-1">
                {app.ads ? (
                  <>
                    <AlertCircle className="w-4 h-4 text-amber-600" /> Ad Supported
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Ad-Free
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
