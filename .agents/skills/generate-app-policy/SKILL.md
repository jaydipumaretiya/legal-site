---
name: generate-app-policy
description: Instructions for AI agents to generate standard privacy policies, terms of service, support, and account deletion metadata objects for mobile apps in the Enlistech Legal Site.
---

# Generate App Policy & Legal Configuration Skill

Use this skill when you want an AI agent to generate an application configuration object (`AppConfig`) for a new mobile application to be hosted on the **Enlistech Legal Center** (`https://legal.enlistech.com`).

---

## 1. Information Required from User

When adding a new mobile application, collect or specify the following details:

1. **App Name**: (e.g. "VoiceMemo")
2. **Description**: (e.g. "Smart Voice Recorder & Audio Transcriber")
3. **Category**: (e.g. "Productivity", "Utilities", "Health & Fitness", "Business Tools")
4. **Package Name**: (e.g. "com.enlistech.voicememo")
5. **Icon Name**: Lucide icon identifier (e.g. `Mic`, `AlarmClock`, `FileText`, `Activity`, `Scan`, `Smartphone`)
6. **Device Permissions**: List of system permissions requested (e.g., `Microphone Access`, `Storage Access`, `Notifications`)
7. **Data Collected**: List of data types collected (e.g., `Voice recordings (local)`, `App usage metrics`)
8. **Third-Party Data Sharing**: `true` or `false`
9. **Analytics Status**: `true` or `false` (Provider name if true, e.g. "Firebase Crashlytics")
10. **Advertising Status**: `true` or `false` (Ad networks if true, e.g. ["Google AdMob"])
11. **Account Requirement**: `true` or `false`
12. **Account Deletion**: `true` or `false` (Include in-app deletion steps if true)
13. **FAQs**: 2–3 frequently asked questions specific to the app.

---

## 2. Output Format (TypeScript Object)

The AI Agent MUST format the output as a valid `AppConfig` object to be added to `data/apps.ts`:

```typescript
{
  slug: "<app-slug>", // Lowercase hyphenated string (e.g. "voicememo")
  name: "<App Name>",
  description: "<Short description>",
  developer: "Enlistech",
  supportEmail: "support@enlistech.com",
  website: "https://legal.enlistech.com",
  packageName: "<package-id>",
  category: "<Category>",
  icon: "<LucideIconName>",
  version: "1.0.0",
  lastUpdated: "<Current Month & Year>",

  permissions: [
    "<Permission 1>",
    "<Permission 2>"
  ],

  collects: [
    "<Data Collected 1>",
    "<Data Collected 2>"
  ],

  sharesData: false, // or true
  sharesDataDetails: "Description of third-party sharing or 'Does not sell, rent, or share personal data.'",
  analytics: true, // or false
  analyticsProvider: "Anonymized Telemetry / Firebase",
  ads: false, // or true
  adNetworks: [], // e.g. ["Google AdMob"] if ads: true
  accountRequired: false, // or true
  accountDeletion: false, // or true
  accountDeletionSteps: [
    // Include steps if accountRequired: true
  ],

  faqs: [
    {
      question: "<App specific question?>",
      answer: "<Clear response.>"
    }
  ]
}
```

---

## 3. Workflow for AI Agent

1. Read `data/apps.ts` to locate the `apps` array.
2. Append the newly generated `AppConfig` object to the array.
3. Save `data/apps.ts`.
4. Run `npm run build` to verify that Next.js pre-renders all 5 new pages automatically (`/apps/<slug>`, `/privacy`, `/terms`, `/support`, `/delete-account`).
