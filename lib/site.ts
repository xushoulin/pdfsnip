// Central site configuration. Change SITE_URL here when you move to a real domain.
export const SITE_URL = "https://pdfsnip.app.workbuddy.host";
export const SITE_NAME = "PDFSnip";
export const GSC_VERIFICATION = "VsERTC8HWMQ45eZu0mFROldUdP4bgHbsTfGV7daiEVo";

// Google AdSense publisher ID (account-level). Replace if you use a different account.
export const ADSENSE_CLIENT = "pub-2622415797490761";

// Top navigation (short labels)
export const navTools = [
  { href: "/", label: "Extract" },
  { href: "/delete-pages-from-pdf", label: "Delete" },
  { href: "/rotate-pdf", label: "Rotate" },
  { href: "/merge-pdf", label: "Merge" },
  { href: "/split-pdf", label: "Split" },
];

// All public routes, used by the sitemap.
export const routes = [
  "",
  "/delete-pages-from-pdf",
  "/rotate-pdf",
  "/merge-pdf",
  "/split-pdf",
  "/extract-pages-from-pdf-in-chrome",
  "/extract-pages-from-pdf-on-mac",
  "/extract-vs-split-vs-delete-pages",
  "/about",
  "/privacy",
];
