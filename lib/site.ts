// Central site configuration. Change SITE_URL here when you move to a real domain.
export const SITE_URL = "https://pdfsnip.shoulin.shop";
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
  { href: "/add-page-numbers-to-pdf", label: "Page Numbers" },
  { href: "/jpg-to-pdf", label: "JPG to PDF" },
];

// All public routes, used by the sitemap.
export const routes = [
  "",
  "/delete-pages-from-pdf",
  "/rotate-pdf",
  "/merge-pdf",
  "/split-pdf",
  "/add-page-numbers-to-pdf",
  "/jpg-to-pdf",
  "/extract-pages-from-pdf-in-chrome",
  "/extract-pages-from-pdf-on-mac",
  "/extract-vs-split-vs-delete-pages",
  "/how-to-remove-pages-from-a-pdf",
  "/how-to-merge-pdf-files",
  "/how-to-rotate-a-pdf",
  "/how-to-split-a-pdf",
  "/how-to-extract-pages-from-pdf",
  "/how-to-add-page-numbers-to-a-pdf",
  "/how-to-convert-jpg-to-pdf",
  "/about",
  "/privacy",
];
