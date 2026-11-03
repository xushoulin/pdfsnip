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

        <h2>Related tools</h2>
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
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
