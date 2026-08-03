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
  name: "Enlistech",
  legalName: "Enlistech Solutions",
  domain: "legal.enlistech.com",
  baseUrl: "https://legal.enlistech.com",
  supportEmail: "support@enlistech.com",
  contactEmail: "legal@enlistech.com",
  website: "https://enlistech.com"
};
