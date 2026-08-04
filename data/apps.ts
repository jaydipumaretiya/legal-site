import { AppConfig } from "@/types/app";

export const apps: AppConfig[] = [
  {
    slug: "appmanager",
    name: "AppManager",
    description: "Modern Android Package Manager & System Diagnostic Tool",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "com.application.manager",
    category: "Tools & Utilities",
    icon: "Package",
    version: "1.1.0",
    lastUpdated: "August 2026",

    permissions: [
      "Query All Packages",
      "Package Usage Stats",
      "Kill Background Processes",
      "Post Notifications",
      "Read External Storage",
      "Write External Storage"
    ],

    collects: [
      "Installed applications list & metadata",
      "App usage & screen time diagnostics",
      "App storage breakdown (app, data, cache size)",
      "Mobile network data usage",
      "Extracted APK files (saved locally)",
      "Theme and sorting preferences"
    ],

    sharesData: false,
    sharesDataDetails: "AppManager does not sell, rent, or share any personal user data or installed application lists with third parties.",
    analytics: true,
    analyticsProvider: "Anonymized Firebase Crashlytics & Telemetry",
    ads: true,
    adsProvider: "Google Mobile Ads (AdMob) Adaptive Banner, Interstitial & App Open Ads",
    inAppPurchases: true,
    inAppPurchasesDetails: "Optional Pro Upgrade / Ad-Free lifetime license managed securely through Google Play Billing.",
    accountRequired: false,
    accountDeletion: false,

    faqs: [
      {
        question: "Does AppManager store my installed app list or APKs on a server?",
        answer: "No. All app package listing, storage statistics, screen time diagnostics, and extracted APK files are processed strictly locally on your device."
      },
      {
        question: "Why does AppManager request 'Usage Access' permission?",
        answer: "Android requires Usage Access permission so AppManager can compute screen time, app storage size breakdown, and mobile data usage."
      },
      {
        question: "Where are my extracted APK files saved?",
        answer: "Extracted APK files are saved locally on your device's internal storage under '/Android/data/com.application.manager/files/apks'."
      },
      {
        question: "How do In-App Purchases work in AppManager?",
        answer: "AppManager offers an optional In-App Purchase to unlock Pro features and remove ads permanently. All purchases are processed directly by Google Play Store billing."
      }
    ]
  }
];

export function getAppBySlug(slug: string): AppConfig | undefined {
  return apps.find((app) => app.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}
