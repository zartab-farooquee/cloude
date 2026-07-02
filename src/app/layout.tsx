import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/seo";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI Automation Agency & Business Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AI Automation Agency",
    "AI Automation Services",
    "AI Chatbot Development",
    "Business Process Automation",
    "AI Workflow Automation",
    "WhatsApp Automation",
    "CRM Automation",
    "AI Solutions Company",
    "AI Agent Development",
    "Business Automation Services",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI Automation Agency`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI Automation Agency`,
    description: siteConfig.description,
    creator: siteConfig.social.twitterHandle,
    site: siteConfig.social.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060814" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <JsonLd
            data={[
              organizationSchema(),
              localBusinessSchema(),
              websiteSchema(),
            ]}
          />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
