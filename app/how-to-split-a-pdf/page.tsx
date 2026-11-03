import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Split a PDF (Free, No Software to Install)",
  description:
    "Break one PDF into separate files — a few pages, one file per page, or fixed-size chunks. Compare Preview, Adobe Acrobat, and a private browser tool, and pick the one that keeps your files local.",
  alternates: { canonical: "/how-to-split-a-pdf" },
  openGraph: {
    title: "How to Split a PDF (Free, No Software to Install)",
    description:
      "Divide one PDF into many — Preview, Acrobat, or a private browser tool. No install, no upload.",
    url: "/how-to-split-a-pdf",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On a Mac, you can export selected pages from Preview one at a time. On any device, open the PDFSnip split tool, choose 'every page', 'fixed pages per file', or a custom range, and download — all in the browser with no account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split a PDF into individual pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PDFSnip has a 'one file per page' mode that turns a 40-page document into 40 separate PDFs and downloads them automatically. Preview can do it too, but you export each page manually.",
      },
    },
    {
      "@type": "Question",
      name: "Is splitting a PDF private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a local method — Preview on Mac or PDFSnip in the browser — so your file is never uploaded. Cloud split tools send the document to a server; avoid them for contracts, statements, or medical records.",
      },
    },
  ],
};

export default function SplitGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Split a PDF</h1>
        <p className="sub">
          Break one PDF into separate files — no software to install, and nothing uploaded.
        </p>
      </div>

      <article className="content">
        <p>
          Splitting turns a single PDF into several smaller ones — filing each invoice from a scan
          batch, sending only the relevant section of a report, or breaking a large handbook into
          chapters. Here are the free ways to split a PDF, and which to avoid when the document is
          sensitive.
        </p>

        <h2>Method 1 — Preview on Mac (free, Mac-only)</h2>
        <ol className="steps">
          <li>
            Open the PDF in <b>Preview</b> and show the thumbnail sidebar.
          </li>
          <li>
            Select the pages you want as a new file.
          </li>
          <li>
            Drag them onto the desktop, or choose <b>File → Export as PDF</b> for the selection.
          </li>
          <li>
            Repeat for each group of pages you need.
          </li>
        </ol>
        <p>
          <i>Note:</i> this is Mac-only and you export each chunk manually, which is tedious for
          many files.
        </p>

        <h2>Method 2 — Adobe Acrobat (paid subscription)</h2>
        <ol className="steps">
          <li>
            Open the PDF in Acrobat and choose <b>Tools → Organize Pages</b>.
          </li>
          <li>
            Click <b>Split</b> and pick a method (by number of pages, file size, or top-level
            bookmarks).
          </li>
          <li>
            Click <b>Split</b> again to produce the output files.
          </li>
        </ol>
        <p>
          <i>Note:</i> the desktop app works locally; the Acrobat web tool uploads your file first.
          Acrobat also requires a paid plan.
        </p>

        <h2>Method 3 — PDFSnip, in any browser (free + private)</h2>
        <ol className="steps">
          <li>
            Open the <a href="/split-pdf">PDFSnip split tool</a>.
          </li>
          <li>
            Add your PDF — it opens locally on your device.
          </li>
          <li>
            Choose a mode: <b>every page</b>, <b>fixed pages per file</b>, or a <b>custom range</b>.
          </li>
          <li>
            Click <b>Split</b> — the result files download automatically, original untouched.
          </li>
        </ol>
        <p>
          This works on Windows, Mac, Linux, iOS and Android with no install, and your file is never
          uploaded.
        </p>

        <h2>Quick comparison</h2>
        <ul>
          <li>
            <b>Cost:</b> Preview and PDFSnip are free; Acrobat requires a subscription.
          </li>
          <li>
            <b>Platform:</b> Preview is Mac-only; Acrobat and PDFSnip work across devices.
          </li>
          <li>
            <b>Batch:</b> PDFSnip automates many outputs at once; Preview is one chunk at a time.
          </li>
          <li>
            <b>Privacy:</b> Preview and PDFSnip process locally; cloud split sites upload your file.
          </li>
        </ul>

        <h2>Which method should you pick?</h2>
        <p>
          On a Mac with just one or two chunks, <b>Preview</b> is fine. If you need many outputs at
          once, want it to work on any device, or must guarantee the file never leaves your machine,
          use <a href="/split-pdf">PDFSnip</a>. Avoid cloud split tools for confidential documents.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I split a PDF for free?</summary>
            <p>
              On a Mac, you can export selected pages from Preview one at a time. On any device, open
              the PDFSnip split tool, choose &quot;every page&quot;, &quot;fixed pages per file&quot;,
              or a custom range, and download — all in the browser with no account.
            </p>
          </details>
          <details>
            <summary>Can I split a PDF into individual pages?</summary>
            <p>
              Yes. PDFSnip has a &quot;one file per page&quot; mode that turns a 40-page document into
              40 separate PDFs and downloads them automatically. Preview can do it too, but you export
              each page manually.
            </p>
          </details>
          <details>
            <summary>Is splitting a PDF private?</summary>
            <p>
              Use a local method — Preview on Mac or PDFSnip in the browser — so your file is never
              uploaded. Cloud split tools send the document to a server; avoid them for contracts,
              statements, or medical records.
            </p>
          </details>
        </div>

        <h2>Related free tools</h2>
        <ul>
          <li>
            <a href="/split-pdf">Split a PDF (the tool)</a>
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">Extract vs Split vs Delete</a>
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
