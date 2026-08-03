import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/types/app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${COMPANY_INFO.baseUrl}/sitemap.xml`,
  };
}
