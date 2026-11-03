import type { Metadata } from "next";
import PdfTool from "../components/PdfTool";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Extract Pages from PDF Free — No Upload, No Signup",
  description:
    "Extract pages from a PDF in seconds, free. Pick pages visually or type a range like 3, 5, 7-10. Files are processed in your browser and never uploaded. No watermark, no signup.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Extract Pages from PDF — Free & Private",
    description:
      "Pick pages visually or type a range. 100% in-browser, your files never leave your device.",
    url: "/",
    type: "website",
  },
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDFSnip — Extract Pages from PDF",
  url: SITE_URL + "/",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free online tool to extract pages from a PDF. Works entirely in your browser — files are never uploaded to a server.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe to extract pages from a PDF online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With PDFSnip it is completely safe: the extraction runs inside your own browser with JavaScript, and your file is never uploaded to any server. It works even when you are offline.",
      },
    },
    {
      "@type": "Question",
      name: "How do I extract specific pages from a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open your PDF in PDFSnip, click the pages you want or type a range such as 3, 5, 7-10, then click Extract. A new PDF containing only those pages is downloaded to your device.",
      },
    },
    {
      "@type": "Question",
      name: "Does extracting pages reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pages are copied at original quality — text stays searchable and images keep their original resolution, because the pages are not re-rendered or re-compressed.",
      },
    },
    {
      "@type": "Question",
      name: "Is PDFSnip free? Is there a limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is free with no signup and no watermark. Because processing happens on your own device, the practical limit is your device's memory — very large PDFs simply take a little longer.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Extract Pages from PDF</h1>
        <p className="sub">
          Pick the pages you need — or type a range like <b>3, 5, 7-10</b> — and get a new PDF in
          seconds.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="extract" />
      </section>

      <article className="content">
        <div className="trust">
          <div className="item">
            <b>Private by design</b>
            <span>
              Processing happens locally in your browser. Your PDF never touches a server — it even
              works offline.
            </span>
          </div>
          <div className="item">
            <b>Original quality</b>
            <span>
              Pages are copied, not re-rendered. Text stays searchable, images keep full resolution.
            </span>
          </div>
          <div className="item">
            <b>Fast for big files</b>
            <span>
              No upload wait, no 50 MB limit. A 200-page document opens in the same time your PDF
              reader needs.
            </span>
          </div>
        </div>

        <h2>How to extract pages from a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your file.</b> Drag the PDF onto the box above or click to browse. It opens
            instantly on your device.
          </li>
          <li>
            <b>Select pages.</b> Click the page numbers, or type a range such as <b>2-5, 9</b>. Ranges
            can be in any order.
          </li>
          <li>
            <b>Extract and download.</b> Click “Extract pages” — a new PDF with only the selected
            pages is saved to your device. The original file is untouched.
          </li>
        </ol>

        <h2>Extract vs. split: which one do you need?</h2>
        <p>
          <b>Extracting</b> copies the pages you choose into one new PDF and leaves the original
          unchanged — ideal when you need pages 5–8 of a 200-page contract. <b>Splitting</b> divides
          a PDF into several files, for example one file per page. If that is what you are after, use
          our <a href="/split-pdf">Split PDF</a> tool instead.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is it safe to extract pages from a PDF online?</summary>
            <p>
              With PDFSnip, yes — because there is no “online” step. The tool runs entirely in your
              browser and your file is never sent anywhere. It even works with your Wi-Fi switched
              off.
            </p>
          </details>
          <details>
            <summary>Can I extract pages from a scanned PDF?</summary>
            <p>
              Yes. Scanned PDFs are just images inside a PDF container, and pages are copied as-is, at
              original quality.
            </p>
          </details>
          <details>
            <summary>Can I extract non-consecutive pages, like pages 2, 5 and 9?</summary>
            <p>
              Absolutely. Click each page you want, or type <b>2, 5, 9</b> in the range box. Mixed
              formats like <b>1-3, 7, 10-12</b> work too.
            </p>
          </details>
          <details>
            <summary>Will bookmarks and links survive?</summary>
            <p>
              Page content, text and images are preserved perfectly. Document-level bookmarks usually
              reference the original structure and are not carried over. Internal links between
              extracted pages may stop working.
            </p>
          </details>
          <details>
            <summary>Does it work on iPhone, Android and Chromebook?</summary>
            <p>
              Yes. Any modern browser works — there is nothing to install. On mobile, the extracted
              PDF is saved to your Downloads or offered as a share target.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a> — remove the pages you
            don&apos;t want.
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a> — fix sideways scans in one click.
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — combine several PDFs in any order.
          </li>
          <li>
            <a href="/split-pdf">Split a PDF</a> — one file per page or every N pages.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
