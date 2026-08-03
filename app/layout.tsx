import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/types/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.baseUrl),
  title: {
    default: `${COMPANY_INFO.name} Legal Center`,
    template: `%s | ${COMPANY_INFO.name} Legal Center`,
  },
  description: "Privacy Policies, Terms of Service, Account Deletion instructions, and Support for all Enlistech mobile applications.",
  keywords: [
    "Enlistech",
    "Legal Center",
    "Privacy Policy",
    "Terms of Service",
    "Account Deletion",
    "Mobile Apps",
    "Support",
    "App Compliance"
  ],
  authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.baseUrl }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.baseUrl,
    title: `${COMPANY_INFO.name} Legal Center`,
    description: "Official Privacy, Terms, Support, and Legal portal for all Enlistech mobile applications.",
    siteName: `${COMPANY_INFO.name} Legal Center`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} Legal Center`,
    description: "Privacy Policies, Terms of Service, Account Deletion, and Support for all Enlistech applications.",
    creator: "@enlistech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-slate-900 flex flex-col`}>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
