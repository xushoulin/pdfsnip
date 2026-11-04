import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL, SITE_NAME, GSC_VERIFICATION, ADSENSE_CLIENT } from "../lib/site";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PDFSnip — Free, Private PDF Page Tools",
    template: "%s | PDFSnip",
  },
  description:
    "Extract, delete, rotate, merge and split PDF pages — 100% in your browser. Your files are never uploaded, no signup, no watermark.",
  applicationName: SITE_NAME,
  verification: { google: GSC_VERIFICATION },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: "/og.png",
        alt: "PDFSnip — free, private, in-browser PDF tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDFSnip — Free, Private PDF Page Tools",
    description:
      "Extract, delete, rotate, merge and split PDF pages — 100% in your browser. Files never uploaded.",
    images: ["/og.png"],
  },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "Free, private PDF page tools — extract, delete, rotate, merge and split — that run 100% in your browser. No upload, no signup, no watermark.",
  email: "hello@pdfsnip.shoulin.shop",
  sameAs: ["https://github.com/xushoulin/pdfsnip"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@pdfsnip.shoulin.shop",
    contactType: "customer support",
  },
};

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        {/* Google AdSense auto ads. Client-only; no manual slots required. */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }} />
      </body>
    </html>
  );
}
