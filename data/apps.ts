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
  },
  {
    slug: "datamanager",
    name: "Data Usage Manager",
    description: "Advanced Data Usage Monitor & Network Statistics Tracker",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "app.internet.data.usage.manager",
    category: "Tools & Utilities",
    icon: "Activity",
    version: "2.0.0",
    lastUpdated: "August 2026",

    permissions: [
      "Package Usage Stats",
      "Query All Packages",
      "Post Notifications",
      "Foreground Service (Data Sync)",
      "Access Network & Wi-Fi State",
      "Receive Boot Completed",
      "Internet",
      "Billing"
    ],
    collects: [
      "Per-app network data usage (Mobile & Wi-Fi)",
      "Installed application list & metadata",
      "Historical usage statistics (Stored locally)",
      "Network connection details (SSID, SIM operator)",
      "Device identifiers (Anonymized for ads/analytics)",
      "User preferences (Theme, Language)"
    ],
    sharesData: false,
    sharesDataDetails: "Data Usage Manager does not sell or share your personal usage statistics. Non-identifiable device data may be used by Google services for ad delivery and crash reporting.",
    analytics: true,
    analyticsProvider: "Anonymized Firebase Crashlytics & Telemetry",
    ads: true,
    adsProvider: "Google Mobile Ads (AdMob) - Banners & Interstitials",
    inAppPurchases: true,
    inAppPurchasesDetails: "Optional Premium Upgrade to remove ads and unlock advanced historical filters.",
    accountRequired: false,
    accountDeletion: false,
    faqs: [
      {
        question: "Does the app store my usage data on a server?",
        answer: "No. Your network statistics and app usage history are processed and stored strictly locally on your device. We prioritize your privacy above all else."
      },
      {
        question: "How do In-App Purchases work?",
        answer: "We offer an optional 'Pro' upgrade which removes all advertisements permanently. This is a one-time purchase managed securely by the Google Play Store."
      },
      {
        question: "Why does the app contain ads?",
        answer: "Advertisements help us keep the core features of Data Usage Manager free for everyone. You can remove them at any time via the Premium upgrade in Settings."
      },
      {
        question: "What data is collected for Ads and Analytics?",
        answer: "We only collect anonymized technical data (like device model and crash logs) to improve app stability. No actual usage statistics or internet activity is ever uploaded."
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
