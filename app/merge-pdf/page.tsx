import type { Metadata } from "next";
import MergeTool from "../../components/MergeTool";

export const metadata: Metadata = {
  title: "Merge PDF Files Free — Combine PDFs Online",
  description:
    "Merge PDF files online for free. Add multiple PDFs, drag them into any order and combine into one document. 100% in your browser — no upload, no signup, no watermark.",
  alternates: { canonical: "/merge-pdf" },
  openGraph: {
    title: "Merge PDF Files — Free & Private",
    description:
      "Combine multiple PDFs into one, in any order. 100% in-browser — files never leave your device.",
    url: "/merge-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I merge PDF files for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add two or more PDFs in PDFSnip, arrange them with the arrow buttons, and click Merge. A single combined PDF downloads instantly. It is free, with no watermark and no signup.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to merge confidential PDFs here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Merging runs entirely in your browser — your files are never uploaded to any server, so confidential documents stay on your device.",
      },
    },
  ],
};

export default function MergePage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Merge PDF Files</h1>
        <p className="sub">
          Combine several PDFs into one document — in exactly the order you want.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <MergeTool />
      </section>

      <article className="content">
        <h2>How to merge PDF files</h2>
        <ol className="steps">
          <li>
            <b>Add your files.</b> Drop or choose two or more PDFs — they open locally on your device.
          </li>
          <li>
            <b>Set the order.</b> Use the ↑ and ↓ buttons until the sequence is right.
          </li>
          <li>
            <b>Merge and download.</b> One combined PDF, with every page at original quality.
          </li>
        </ol>

        <h2>Related tools</h2>
        <ul>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
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
