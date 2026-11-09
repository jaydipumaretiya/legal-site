import { AppConfig } from "@/types/app";

export const apps: AppConfig[] = [
  {
    slug: "arrowescape",
    name: "Arrow Escape",
    description: "Relaxing arrow puzzle: tap each arrow to slide it off the board",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "com.enlistech.arrow.escape.game",
    category: "Games – Puzzle",
    icon: "Puzzle",
    version: "1.0",
    lastUpdated: "November 2026",

    permissions: [
      "Internet",
      "Network State",
      "Advertising ID",
      "App Tracking Transparency (iOS, optional)"
    ],

    collects: [
      "Game progress (levels, stars, hints, streaks, daily challenge results, event badges), stored locally only",
      "Name you type for name-shaped boards, stored locally only",
      "Sound and vibration preferences",
      "Ad consent choices (Google User Messaging Platform)",
      "Advertising ID / IDFA (IDFA only if you allow tracking), IP address, device and app info, collected by Google AdMob to serve and measure ads",
      "Ad interaction and diagnostic data, collected by Google AdMob"
    ],

    sharesData: true,
    sharesDataDetails: "Arrow Escape does not sell your data and has no servers of its own. To show ads, the Google Mobile Ads SDK (AdMob) and ad partners serving through AdMob mediation (such as Meta Audience Network) receive device identifiers, IP address and ad interaction data under their own privacy policies. In the EEA, UK and other regions that require it, ads are only requested after you give consent, and you can change your choice anytime under Settings > Ad privacy choices.",
    analytics: true,
    analyticsProvider: "",
    ads: true,
    adsProvider: "Google Mobile Ads (AdMob) Rewarded & Interstitial Ads, with Meta Audience Network via AdMob mediation",
    inAppPurchases: true,
    inAppPurchasesDetails: "Optional one-time \"Remove Ads\" purchase that permanently removes interstitial ads (optional rewarded ads stay available). Payments are processed entirely by Google Play Billing or the Apple App Store; Arrow Escape never sees or stores your payment details. The app only receives confirmation of which products you own, keeps that on your device, and lets you restore purchases on a new device from Settings > Restore purchases.",
    accountRequired: false,
    accountDeletion: false,
    faqs: [
      {
        question: "Does Arrow Escape store my progress on a server?",
        answer: "No. Your levels, stars, hints, streaks and the name you use for name boards are saved only on your device. Uninstalling the app or using Settings > Reset progress deletes them."
      },
      {
        question: "Why does Arrow Escape show ads and what data do they use?",
        answer: "Ads keep the game free. Google AdMob uses your device's advertising ID, IP address and basic device info to show and measure ads. On iOS, personalised ads use your IDFA only if you allow tracking when asked."
      },
      {
        question: "How can I change my ad privacy choices?",
        answer: "Where consent is required (EEA, UK and some US states), open Settings > Ad privacy choices. On Android you can also reset or delete your advertising ID in system settings; on iOS, turn off tracking under Settings > Privacy & Security > Tracking."
      },
      {
        question: "What happens when I share a board code or daily result?",
        answer: "Share codes and results are plain text created on your device and sent through your phone's share sheet only when you choose to share. Arrow Escape does not upload them anywhere."
      },
      {
        question: "Do I need an account?",
        answer: "No. Arrow Escape has no sign-up or login, so there is no account to delete. Your data stays on your device."
      },
      {
        question: "How does the Remove Ads purchase work?",
        answer: "It is an optional one-time purchase that removes the ads shown between levels forever. Payment is handled by Google Play or the App Store. On a new phone, open Settings > Restore purchases with the same store account."
      }
    ],

    // ---- NEW optional fields (this app needs them; useful for every app that runs ads) ----
    platforms: ["Android", "iOS"],
    iosBundleId: "com.enlistech.arrow.escape.game.ArrowEscape",
    thirdParties: [
      { name: "Google AdMob", purpose: "Advertising", policyUrl: "https://policies.google.com/privacy" },
      { name: "Google User Messaging Platform", purpose: "Consent management", policyUrl: "https://policies.google.com/privacy" },
      { name: "Meta Audience Network", purpose: "Advertising (via AdMob mediation)", policyUrl: "https://www.facebook.com/privacy/policy" },
      { name: "Google Play Games Services / Apple Game Center", purpose: "Leaderboards (your gamer name and scores are visible to other players; optional)", policyUrl: "https://policies.google.com/privacy" },
      { name: "Google Firebase Remote Config", purpose: "Remote app settings (no personal data, uses a random installation ID)", policyUrl: "https://firebase.google.com/support/privacy" }
    ],
    consent: "In the EEA, UK and some US states a consent form is shown before any ads are requested. On iOS, tracking is only used if you allow it (App Tracking Transparency).",
    userControls: [
      "Settings > Reset progress: deletes all game data on the device",
      "Settings > Ad privacy choices: change ad consent (shown where required)",
      "iOS Settings > Privacy & Security > Tracking",
      "Android Settings > Privacy > Ads: reset or delete your advertising ID"
    ],
    dataRetention: "Game data stays on the device until you reset progress or uninstall. Ad data is kept by Google and its ad partners under their own policies.",
    childrenPrivacy: "Arrow Escape is not directed at children under 13 and does not knowingly collect their personal data."
  },
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
  },
  {
    slug: "typeflow",
    name: "TypeFlow: Phone Keyboard for TV",
    description: "Seamless wireless keyboard, voice dictation, and smart remote typing tool for Android TV & Google TV.",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "app.enlistech.typeflow",
    category: "Tools & Utilities",
    icon: "Keyboard",
    version: "1.0.0",
    lastUpdated: "August 2026",

    permissions: [
      "Internet & Local Network",
      "Access Wi-Fi State",
      "Change Wi-Fi Multicast State (mDNS / NSD Discovery)",
      "Camera (QR Code TV Pairing)",
      "Record Audio (Speech-to-Text Voice Typing)",
      "Nearby Wi-Fi Devices"
    ],

    collects: [
      "Paired TV IP addresses & encryption keys (stored strictly on-device)",
      "Saved quick phrases & typing snippets (stored locally in DataStore)",
      "Active text input / clipboard items temporarily held in memory during live transmission",
      "UI and theme preferences (Dark mode, haptic feedback settings)"
    ],

    sharesData: false,
    sharesDataDetails: "TypeFlow does not transmit, log, sell, or share your keystrokes, voice recordings, clipboard data, or TV pairing details with external servers or third parties. All communication occurs strictly peer-to-peer over your local encrypted Wi-Fi network.",
    analytics: false,
    analyticsProvider: "None (Zero telemetry / tracking)",
    ads: false,
    adsProvider: "None",
    inAppPurchases: false,
    inAppPurchasesDetails: "No in-app purchases required.",
    accountRequired: false,
    accountDeletion: false,

    faqs: [
      {
        question: "Does TypeFlow send my keystrokes, passwords, or voice input to the cloud?",
        answer: "No. All text input, voice dictation (processed via on-device Android Speech Recognizer), and clipboard transfers are sent strictly peer-to-peer over your local encrypted Wi-Fi network directly to your Android TV."
      },
      {
        question: "Why does TypeFlow require Camera permission?",
        answer: "Camera access is used solely to scan the QR code displayed on your TV screen for instant, zero-configuration local network pairing."
      },
      {
        question: "Why does TypeFlow require Record Audio permission?",
        answer: "Microphone access is used only when you explicitly press the Voice Typing button to convert speech into text on your phone before sending it to your TV."
      },
      {
        question: "Does TypeFlow require creating an account or logging in?",
        answer: "No. TypeFlow works completely offline and locally without requiring any user registration, accounts, or cloud logins."
      }
    ]
  },
  {
    slug: "typeflow-tv",
    name: "TypeFlow TV: Remote Keyboard IME",
    description: "Android TV Input Method (IME) & Accessibility Service that receives real-time text input directly from your phone.",
    developer: "Enlistech",
    supportEmail: "support@enlistech.com",
    website: "https://legal.enlistech.com",
    packageName: "app.enlistech.typeflow.tv",
    category: "Tools & Utilities",
    icon: "Tv",
    version: "1.0.0",
    lastUpdated: "August 2026",

    permissions: [
      "Internet & Local Network (Local WebSocket Server)",
      "Access Wi-Fi State",
      "Change Wi-Fi Multicast State (Network Service Discovery Broadcast)",
      "Bind Input Method Service (IME Text Insertion)",
      "Bind Accessibility Service (Universal Smart Text Insertion)"
    ],

    collects: [
      "Authorized paired phone IDs & cryptographic auth tokens (saved locally)",
      "Local WebSocket server configuration & port bindings",
      "IME & typing preferences"
    ],

    sharesData: false,
    sharesDataDetails: "TypeFlow TV operates completely offline on your local network. It does not record keystrokes or share TV usage statistics, screen contents, or search queries with any third-party servers.",
    analytics: false,
    analyticsProvider: "None (Zero telemetry / tracking)",
    ads: false,
    adsProvider: "None",
    inAppPurchases: false,
    inAppPurchasesDetails: "No in-app purchases required.",
    accountRequired: false,
    accountDeletion: false,

    faqs: [
      {
        question: "Why does TypeFlow TV require Input Method (IME) or Accessibility permissions?",
        answer: "Android TV requires IME and Accessibility permissions to allow TypeFlow TV to inject text into focused input fields in streaming apps, search bars, and web browsers when received from your phone."
      },
      {
        question: "Does TypeFlow TV log or store passwords entered into streaming apps?",
        answer: "No. Keystrokes and text inputs are directly committed to the active application's input field in real time and are immediately discarded from memory."
      },
      {
        question: "Can someone on another network connect to my TV?",
        answer: "No. TypeFlow TV binds to your local private network (LAN) only and requires initial QR pairing with mutual cryptographic handshake verification."
      },
      {
        question: "Does TypeFlow TV collect telemetry or viewing habits?",
        answer: "No. TypeFlow TV collects zero analytics, telemetry, or app usage diagnostics."
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
