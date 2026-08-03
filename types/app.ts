export interface AppConfig {
  slug: string;
  name: string;
  description: string;
  developer: string;
  supportEmail: string;
  website: string;
  packageName: string;
  category?: string;
  icon?: string;
  version?: string;
  lastUpdated?: string;

  permissions: string[];
  collects: string[];
  sharesData: boolean;
  sharesDataDetails?: string;
  analytics: boolean;
  analyticsProvider?: string;
  ads: boolean;
  adNetworks?: string[];
  accountRequired: boolean;
  accountDeletion: boolean;
  accountDeletionSteps?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const COMPANY_INFO = {
  name: "WP InfoTech",
  legalName: "WP InfoTech Solutions",
  domain: "legal.wpinfotech.com",
  baseUrl: "https://legal.wpinfotech.com",
  supportEmail: "support@wpinfotech.com",
  contactEmail: "legal@wpinfotech.com",
  website: "https://wpinfotech.com"
};
