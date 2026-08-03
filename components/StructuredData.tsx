import { AppConfig, COMPANY_INFO } from "@/types/app";

interface StructuredDataProps {
  type: "Organization" | "SoftwareApplication" | "WebSite";
  app?: AppConfig;
}

export default function StructuredData({ type, app }: StructuredDataProps) {
  let schemaData: Record<string, unknown> = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY_INFO.name,
      legalName: COMPANY_INFO.legalName,
      url: COMPANY_INFO.baseUrl,
      logo: `${COMPANY_INFO.baseUrl}/icon.png`,
      contactPoint: {
        "@type": "ContactPoint",
        email: COMPANY_INFO.supportEmail,
        contactType: "Customer Support",
      },
    };
  } else if (type === "SoftwareApplication" && app) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: app.name,
      operatingSystem: "Android, iOS",
      applicationCategory: app.category || "MobileApplication",
      description: app.description,
      author: {
        "@type": "Organization",
        name: app.developer,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      softwareVersion: app.version || "1.0.0",
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${COMPANY_INFO.name} Legal Center`,
      url: COMPANY_INFO.baseUrl,
      description: "Privacy Policies, Terms of Service, Account Deletion and Support for WP InfoTech applications.",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
