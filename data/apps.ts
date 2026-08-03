import { AppConfig } from "@/types/app";

export const apps: AppConfig[] = [
  {
    slug: "clocky",
    name: "Clocky",
    description: "Smart Alarm Clock & Sleep Assistant",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "com.enlistech.clocky",
    category: "Utilities & Productivity",
    icon: "AlarmClock",
    version: "2.4.0",
    lastUpdated: "August 2026",

    permissions: [
      "Notifications",
      "Alarm & Reminder",
      "Foreground Service",
      "Vibration Control",
      "Prevent Device from Sleeping"
    ],

    collects: [
      "Alarm settings",
      "Theme preferences",
      "Notification preferences",
      "Device timezone & locale"
    ],

    sharesData: false,
    sharesDataDetails: "Clocky does not sell, rent, or share any personal user data with third parties.",
    analytics: true,
    analyticsProvider: "Anonymized Firebase Crashlytics & Telemetry",
    ads: false,
    accountRequired: false,
    accountDeletion: false,

    faqs: [
      {
        question: "Does Clocky store my alarm data on a cloud server?",
        answer: "No. All your alarms, timers, and custom sleep schedules are stored strictly locally on your device."
      },
      {
        question: "Why does Clocky need 'Alarm & Reminder' permission?",
        answer: "Android and iOS require explicit schedule permissions so alarms can wake your device reliably even when silent mode or Do Not Disturb is enabled."
      },
      {
        question: "How do I back up my alarm preferences?",
        answer: "Since no account is required, backups are automatically handled by your system's standard OS device backup (iCloud / Google Drive)."
      }
    ]
  },
  {
    slug: "notey",
    name: "Notey",
    description: "Minimalist Markdown & Cloud Synced Notes",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "com.enlistech.notey",
    category: "Productivity",
    icon: "FileText",
    version: "1.8.2",
    lastUpdated: "July 2026",

    permissions: [
      "Internet Access",
      "Storage Access (Import/Export)",
      "Biometric Authentication (Optional Passcode)"
    ],

    collects: [
      "User Email address",
      "Encrypted note contents & titles",
      "Folder structure & tag metadata",
      "Device model and app crash diagnostics"
    ],

    sharesData: false,
    sharesDataDetails: "Your notes are encrypted in transit and at rest. Data is never shared with third-party marketers.",
    analytics: true,
    analyticsProvider: "Aggregated performance telemetry",
    ads: false,
    accountRequired: true,
    accountDeletion: true,
    accountDeletionSteps: [
      "Open the Notey app on your mobile device.",
      "Navigate to Settings > Account Profile.",
      "Scroll down to the Danger Zone and select 'Delete Account'.",
      "Confirm your account password to permanently purge all synced notes and user data from our servers.",
      "Alternatively, email support@enlistech.com from your registered email address with the subject 'Notey Account Deletion'."
    ],

    faqs: [
      {
        question: "Are my notes end-to-end encrypted?",
        answer: "Yes, Notey encrypts all notes using AES-256 before syncing with our secure cloud servers."
      },
      {
        question: "What happens when I delete my account?",
        answer: "All your cloud-synced notes, attachments, and profile credentials are immediately and permanently erased from our database within 24 hours."
      }
    ]
  },
  {
    slug: "fittrack",
    name: "FitTrack",
    description: "Daily Workout, Activity & Health Log",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "com.enlistech.fittrack",
    category: "Health & Fitness",
    icon: "Activity",
    version: "3.1.0",
    lastUpdated: "June 2026",

    permissions: [
      "Activity Recognition / Step Counter",
      "Location (GPS for outdoor running routes - optional)",
      "Health Connect / Apple Health Integration",
      "Push Notifications"
    ],

    collects: [
      "Account credentials (Name, Email)",
      "Workout logs, steps, and distance",
      "Optional height, weight, and fitness goals"
    ],

    sharesData: false,
    sharesDataDetails: "Fitness data is restricted to your account and is never sold to health insurers or advertisers.",
    analytics: true,
    analyticsProvider: "Anonymized App Analytics",
    ads: false,
    accountRequired: true,
    accountDeletion: true,
    accountDeletionSteps: [
      "Open FitTrack and go to Profile > Settings.",
      "Tap 'Account Security' > 'Request Data Erasure & Account Deletion'.",
      "Click 'Confirm Permanent Deletion'. All health records will be purged immediately.",
      "You can also contact support@enlistech.com for manual account deletion."
    ],

    faqs: [
      {
        question: "Does FitTrack write data to Apple Health / Google Health Connect?",
        answer: "Only if you grant explicit permission. You can revoke health sync at any time in your device system settings."
      }
    ]
  },
  {
    slug: "scannr",
    name: "Scannr",
    description: "HD PDF Scanner & OCR Text Extractor",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "com.enlistech.scannr",
    category: "Business Tools",
    icon: "Scan",
    version: "1.5.0",
    lastUpdated: "May 2026",

    permissions: [
      "Camera Access (Document Capture)",
      "Storage / Media Access (PDF export)",
      "Flashlight Control"
    ],

    collects: [
      "App feature usage metrics",
      "Crash reports & device specs",
      "Non-personalized advertising ID (if ad-supported mode)"
    ],

    sharesData: true,
    sharesDataDetails: "Non-personal ad unit identifiers may be processed by Google AdMob for ad serving.",
    analytics: true,
    analyticsProvider: "Google Analytics for Firebase",
    ads: true,
    adNetworks: ["Google AdMob"],
    accountRequired: false,
    accountDeletion: false,

    faqs: [
      {
        question: "Are scanned documents uploaded to any remote server?",
        answer: "No! All OCR processing and PDF rendering take place 100% on your device locally. Your documents never leave your phone."
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
