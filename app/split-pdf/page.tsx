import type { Metadata } from "next";
import PdfTool from "../../components/PdfTool";

export const metadata: Metadata = {
  title: "Split PDF Online Free — Separate Pages",
  description:
    "Split a PDF online for free: one file per page, a file every N pages, or custom ranges. 100% in your browser — no upload, no signup, no watermark.",
  alternates: { canonical: "/split-pdf" },
  openGraph: {
    title: "Split PDF Online — Free & Private",
    description:
      "One file per page, every N pages, or custom ranges. 100% in-browser — files never leave your device.",
    url: "/split-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a PDF into separate pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the PDF in PDFSnip, choose 'One file per page' and click Split. Each page is saved as its own PDF and downloads to your device automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between splitting and extracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Splitting produces multiple files from one PDF; extracting copies selected pages into a single new PDF. If you only need a few pages as one document, use the Extract Pages tool instead.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split a PDF into custom ranges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Choose the 'custom ranges' mode and type something like 1-3, 5, 8-10. Each range becomes its own file — handy when you want a few specific sections rather than one file per page.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split a PDF every N pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The 'every N pages' mode turns a long document into chunks of equal size (for example every 10 pages), which is useful for email size limits or batch review.",
      },
    },
    {
      "@type": "Question",
      name: "Is splitting a large PDF here private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Splitting runs entirely in your browser, so the document is never uploaded. This matters for contracts, financial statements or anything confidential.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on iPhone, Android and Chromebook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any modern mobile browser works — there is nothing to install. Each split file is saved to your Downloads or offered as a share target.",
      },
    },
  ],
};

export default function SplitPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Split PDF Online</h1>
        <p className="sub">
          Separate a PDF into individual pages, fixed-size chunks, or custom ranges.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="split" />
      </section>

      <article className="content">
        <h2>Why split a PDF?</h2>
        <p>Splitting turns one bulky file into smaller, easier-to-handle pieces:</p>
        <ul>
          <li>
            <b>Share only part of a document</b> — send chapters 3-5 without leaking the rest.
          </li>
          <li>
            <b>Beat email size limits</b> by breaking a 200-page file into 20-page chunks.
          </li>
          <li>
            <b>Extract a single page</b> (a signature page, a receipt) without the whole file.
          </li>
          <li>
            <b>Batch review</b> — hand each section to a different reviewer as its own file.
          </li>
        </ul>

        <h2>How to split a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your file</b> — drag it in, it never leaves your device.
          </li>
          <li>
            <b>Pick a mode:</b> one file per page, a chunk every N pages, or specific pages only.
          </li>
          <li>
            <b>Split.</b> Each result downloads automatically as a separate PDF file.
          </li>
        </ol>

        <h2>Split vs extract: which one do you need?</h2>
        <p>
          Both break a PDF apart, but the output differs. <b>Splitting</b> creates{" "}
          <b>multiple files</b> — one per page, one per chunk, or one per range — which is ideal when
          each piece needs to live on its own. <b>Extracting</b> collects the pages you pick into a{" "}
          <b>single new PDF</b>, which is what you want when the goal is &quot;give me pages 4, 7 and
          9 as one file.&quot; If that is your case, use the <a href="/">Extract Pages</a> tool
          instead.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I split a PDF into separate pages?</summary>
            <p>
              Open the PDF in PDFSnip, choose &quot;One file per page&quot; and click Split. Each page
              is saved as its own PDF and downloads to your device automatically.
            </p>
          </details>
          <details>
            <summary>What is the difference between splitting and extracting?</summary>
            <p>
              Splitting produces multiple files from one PDF; extracting copies selected pages into a
              single new PDF. If you only need a few pages as one document, use the Extract Pages tool
              instead.
            </p>
          </details>
          <details>
            <summary>Can I split a PDF into custom ranges?</summary>
            <p>
              Yes. Choose the &quot;custom ranges&quot; mode and type something like{" "}
              <b>1-3, 5, 8-10</b>. Each range becomes its own file — handy when you want a few
              specific sections rather than one file per page.
            </p>
          </details>
          <details>
            <summary>Can I split a PDF every N pages?</summary>
            <p>
              Yes. The &quot;every N pages&quot; mode turns a long document into chunks of equal size
              (for example every 10 pages), which is useful for email size limits or batch review.
            </p>
          </details>
          <details>
            <summary>Is splitting a large PDF here private?</summary>
            <p>
              Yes. Splitting runs entirely in your browser, so the document is never uploaded. This
              matters for contracts, financial statements or anything confidential.
            </p>
          </details>
          <details>
            <summary>Does it work on iPhone, Android and Chromebook?</summary>
            <p>
              Yes. Any modern mobile browser works — there is nothing to install. Each split file is
              saved to your Downloads or offered as a share target.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/">Extract pages into one PDF</a>
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files back together</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
