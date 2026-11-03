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
    {
      "@type": "Question",
      name: "How many PDFs can I merge at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no fixed limit. Because merging happens on your own device, you can combine dozens of files as long as your device has enough memory; very large combined documents simply take a little longer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose the page order before merging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After adding files, use the up and down arrow buttons to reorder them. The combined PDF follows exactly the order you set — there is no automatic sorting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I merge password-protected PDFs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDFSnip can merge files that are not password-protected. Encrypted or permission-restricted PDFs must be unlocked in their source app first, because the tool never sends them anywhere to be decrypted.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on iPhone, Android and Chromebook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any modern mobile browser works — there is nothing to install. The combined PDF is saved to your Downloads or offered as a share target.",
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
        <h2>When you'll want to merge PDFs</h2>
        <p>Combining separate PDFs into one is one of the most common document tasks:</p>
        <ul>
          <li>
            <b>Signed pages or scans</b> that arrived as separate files and need to be one attachment.
          </li>
          <li>
            <b>Chapters or sections</b> exported individually that belong in a single report.
          </li>
          <li>
            <b>Invoices or statements</b> from different months you want archived as one file.
          </li>
          <li>
            <b>Application packets</b> — résumé, cover letter and portfolio in a fixed sequence.
          </li>
        </ul>

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

        <h2>Merging in the browser vs desktop software</h2>
        <p>
          Adobe Acrobat can merge PDFs, but it is paid and tied to one machine. A browser-based
          merger like PDFSnip needs no license and no install, and — importantly — your files are
          never uploaded, which matters when the documents are contracts, tax forms or medical
          records.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I merge PDF files for free?</summary>
            <p>
              Add two or more PDFs in PDFSnip, arrange them with the arrow buttons, and click Merge. A
              single combined PDF downloads instantly. It is free, with no watermark and no signup.
            </p>
          </details>
          <details>
            <summary>Is it safe to merge confidential PDFs here?</summary>
            <p>
              Yes. Merging runs entirely in your browser — your files are never uploaded to any
              server, so confidential documents stay on your device.
            </p>
          </details>
          <details>
            <summary>How many PDFs can I merge at once?</summary>
            <p>
              There is no fixed limit. Because merging happens on your own device, you can combine
              dozens of files as long as your device has enough memory; very large combined documents
              simply take a little longer.
            </p>
          </details>
          <details>
            <summary>Can I choose the page order before merging?</summary>
            <p>
              Yes. After adding files, use the up and down arrow buttons to reorder them. The combined
              PDF follows exactly the order you set — there is no automatic sorting.
            </p>
          </details>
          <details>
            <summary>Can I merge password-protected PDFs?</summary>
            <p>
              PDFSnip can merge files that are not password-protected. Encrypted or
              permission-restricted PDFs must be unlocked in their source app first, because the tool
              never sends them anywhere to be decrypted.
            </p>
          </details>
          <details>
            <summary>Does it work on iPhone, Android and Chromebook?</summary>
            <p>
              Yes. Any modern mobile browser works — there is nothing to install. The combined PDF is
              saved to your Downloads or offered as a share target.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
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
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
