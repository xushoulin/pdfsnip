import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Merge PDF Files (Free, No Software to Install)",
  description:
    "Free ways to combine PDFs into one file — Preview on Mac, Adobe Acrobat, or a private browser tool. Pick the method that keeps your documents off the cloud.",
  alternates: { canonical: "/how-to-merge-pdf-files" },
  openGraph: {
    title: "How to Merge PDF Files (Free, No Software to Install)",
    description:
      "Combine several PDFs into one — on Mac, with Acrobat, or in any browser. No install, no upload.",
    url: "/how-to-merge-pdf-files",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I merge PDFs for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On a Mac, Preview can combine PDFs by dragging files into its thumbnail sidebar. On any device, PDFSnip merges PDFs in the browser with no account and no install. Both are free.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose the page order before merging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In Preview you drag thumbnails into place; in PDFSnip you use the up and down arrow buttons. The combined file follows the order you set.",
      },
    },
    {
      "@type": "Question",
      name: "Is merging PDFs private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a local method — Preview on Mac or PDFSnip in the browser — so your files are never uploaded. Cloud merge tools send your documents to a server; avoid them for confidential files.",
      },
    },
  ],
};

export default function MergeGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Merge PDF Files</h1>
        <p className="sub">
          Free ways to combine PDFs into one — no software to install, and nothing uploaded.
        </p>
      </div>

      <article className="content">
        <p>
          Combining several PDFs into one file is an everyday task — signed scans, report chapters,
          monthly statements. Here are the free ways to merge PDFs, and which to avoid when the
          documents are sensitive.
        </p>

        <h2>Method 1 — Preview on Mac (free, Mac-only)</h2>
        <ol className="steps">
          <li>
            Open one PDF in <b>Preview</b>.
          </li>
          <li>
            Show the thumbnail sidebar: <b>View → Thumbnails</b>.
          </li>
          <li>
            Drag other PDF files from Finder into the sidebar, or use <b>Edit → Insert → Page from
            File</b>.
          </li>
          <li>
            Drag thumbnails to set the order, then <b>Save</b>.
          </li>
        </ol>
        <p>
          <i>Note:</i> this is Mac-only, and &quot;Insert → Page from File&quot; adds every page of
          the source file.
        </p>

        <h2>Method 2 — Adobe Acrobat (paid subscription)</h2>
        <ol className="steps">
          <li>
            Open Acrobat and choose <b>Tools → Combine Files</b>.
          </li>
          <li>
            Add your PDFs and drag to reorder.
          </li>
          <li>
            Click <b>Combine</b> and save.
          </li>
        </ol>
        <p>
          <i>Note:</i> the desktop app works locally, but the web version uploads your files — avoid
          it for confidential documents. Acrobat also requires a paid plan.
        </p>

        <h2>Method 3 — PDFSnip, in any browser (free + private)</h2>
        <ol className="steps">
          <li>
            Open the <a href="/merge-pdf">PDFSnip merge tool</a>.
          </li>
          <li>
            Add two or more PDFs — they open locally on your device.
          </li>
          <li>
            Use the ↑ / ↓ buttons to set the order.
          </li>
          <li>
            Click <b>Merge</b> — one combined PDF downloads at original quality.
          </li>
        </ol>
        <p>
          This runs on Windows, Mac, Linux, iOS and Android with no install, and your files are never
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
            <b>Privacy:</b> Preview and PDFSnip process locally; cloud merge sites upload your files.
          </li>
          <li>
            <b>Best for:</b> a quick job on a Mac (Preview), or any device with guaranteed no-upload
            (PDFSnip).
          </li>
        </ul>

        <h2>Which method should you pick?</h2>
        <p>
          On a Mac with a simple job, <b>Preview</b> is fastest. If you want it to work on any device,
          need no install, and guarantee the files never leave your machine, use{" "}
          <a href="/merge-pdf">PDFSnip</a>. Avoid cloud merge tools for contracts, tax forms or
          medical records.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I merge PDFs for free?</summary>
            <p>
              On a Mac, Preview can combine PDFs by dragging files into its thumbnail sidebar. On any
              device, PDFSnip merges PDFs in the browser with no account and no install. Both are
              free.
            </p>
          </details>
          <details>
            <summary>Can I choose the page order before merging?</summary>
            <p>
              Yes. In Preview you drag thumbnails into place; in PDFSnip you use the up and down arrow
              buttons. The combined file follows the order you set.
            </p>
          </details>
          <details>
            <summary>Is merging PDFs private?</summary>
            <p>
              Use a local method — Preview on Mac or PDFSnip in the browser — so your files are never
              uploaded. Cloud merge tools send your documents to a server; avoid them for confidential
              files.
            </p>
          </details>
        </div>

        <h2>Related free tools</h2>
        <ul>
          <li>
            <a href="/merge-pdf">Merge PDF files (the tool)</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
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
