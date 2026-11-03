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
  },
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
      </body>
    </html>
  );
}
