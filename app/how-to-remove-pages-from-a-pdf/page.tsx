import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Remove Pages from a PDF (Without Adobe Acrobat)",
  description:
    "Step-by-step ways to delete pages from a PDF for free — using Preview on Mac, Chrome's print dialog, or a private browser tool. No Adobe subscription needed.",
  alternates: { canonical: "/how-to-remove-pages-from-a-pdf" },
  openGraph: {
    title: "How to Remove Pages from a PDF (Without Adobe Acrobat)",
    description:
      "Free methods to delete PDF pages on Mac, in Chrome, or in any browser — no Acrobat subscription.",
    url: "/how-to-remove-pages-from-a-pdf",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I remove pages from a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. On a Mac you can use Preview, in any browser you can use Chrome's print dialog, and PDFSnip works in any browser with no account. None of these require an Adobe Acrobat subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Will removing pages reduce the PDF's quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preview and PDFSnip copy the pages at original quality. Chrome's print-to-PDF method re-renders each page, which can soften scanned images and flatten fillable form fields.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to remove pages from a confidential PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a local method — Preview on Mac or PDFSnip in the browser — because the file never leaves your device. Avoid cloud tools that ask you to upload the PDF first, especially for contracts or financial documents.",
      },
    },
  ],
};

export default function RemovePagesGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Remove Pages from a PDF</h1>
        <p className="sub">
          Three free ways to delete pages — no Adobe Acrobat subscription required.
        </p>
      </div>

      <article className="content">
        <p>
          Need to strip a blank page, a cover sheet, or a confidential section out of a PDF? You do
          not need to buy Adobe Acrobat. Here are three free ways to remove pages, from the tool you
          already have to a private browser option.
        </p>

        <h2>Method 1 — Preview on Mac (free, but Mac-only)</h2>
        <ol className="steps">
          <li>
            Open the PDF in <b>Preview</b> (the default app for PDFs on macOS).
          </li>
          <li>
            Show the thumbnail sidebar: <b>View → Thumbnails</b>.
          </li>
          <li>
            Click the page(s) you want gone — hold <b>Cmd</b> to select several.
          </li>
          <li>
            Press <b>Delete</b>, or right-click → <b>Delete</b>.
          </li>
          <li>
            Save with <b>Cmd+S</b>.
          </li>
        </ol>
        <p>
          <i>Note:</i> Preview deletes in place, so saving overwrites the original. Duplicate the file
          first if you might want it back.
        </p>

        <h2>Method 2 — Chrome&apos;s print dialog (free, but re-renders)</h2>
        <ol className="steps">
          <li>
            Open the PDF in <b>Chrome</b> (or Edge / Brave).
          </li>
          <li>
            Press <b>Ctrl+P</b> (Windows) or <b>Cmd+P</b> (Mac).
          </li>
          <li>
            Set Destination to <b>Save as PDF</b>, then Pages → <b>Custom</b>.
          </li>
          <li>
            Type the pages you want to <b>keep</b> — e.g. <b>1-3, 5-9</b> — skipping the ones to
            remove.
          </li>
          <li>Save the new file.</li>
        </ol>
        <p>
          <i>Note:</i> this re-draws each page, which can soften scanned images and flatten fillable
          forms, and you cannot click thumbnails to pick pages visually.
        </p>

        <h2>Method 3 — PDFSnip, in any browser (free + private)</h2>
        <ol className="steps">
          <li>
            Open the <a href="/delete-pages-from-pdf">PDFSnip delete tool</a>.
          </li>
          <li>
            Drag your PDF in — it opens locally, nothing is uploaded.
          </li>
          <li>
            Click the pages to remove, or type ranges like <b>2-4, 9</b>.
          </li>
          <li>
            Click <b>Delete</b> — a new file downloads and your original is untouched.
          </li>
        </ol>
        <p>
          This works on Windows, Mac, Linux, iOS and Android, keeps original quality, and never
          uploads your document. It also works offline once the page is loaded.
        </p>

        <h2>Quick comparison</h2>
        <ul>
          <li>
            <b>Cost:</b> all three methods are free.
          </li>
          <li>
            <b>Platform:</b> Preview is Mac-only; Chrome and PDFSnip work in any modern browser.
          </li>
          <li>
            <b>Privacy:</b> Preview and PDFSnip process locally; cloud &quot;upload to delete&quot;
            sites send your file to a server — avoid those for sensitive documents.
          </li>
          <li>
            <b>Quality:</b> Preview and PDFSnip keep original pages; Chrome re-renders them.
          </li>
        </ul>

        <h2>Which method should you pick?</h2>
        <p>
          On a Mac with a simple file, <b>Preview</b> is the quickest. If you want it to work on any
          device, keep original quality, and guarantee the file is never uploaded, use{" "}
          <a href="/delete-pages-from-pdf">PDFSnip</a>. Steer clear of cloud tools that ask you to
          upload the PDF first when the document is confidential.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Can I remove pages from a PDF for free?</summary>
            <p>
              Yes. On a Mac you can use Preview, in any browser you can use Chrome&apos;s print
              dialog, and PDFSnip works in any browser with no account. None of these require an Adobe
              Acrobat subscription.
            </p>
          </details>
          <details>
            <summary>Will removing pages reduce the PDF&apos;s quality?</summary>
            <p>
              Preview and PDFSnip copy the pages at original quality. Chrome&apos;s print-to-PDF
              method re-renders each page, which can soften scanned images and flatten fillable form
              fields.
            </p>
          </details>
          <details>
            <summary>Is it safe to remove pages from a confidential PDF?</summary>
            <p>
              Use a local method — Preview on Mac or PDFSnip in the browser — because the file never
              leaves your device. Avoid cloud tools that ask you to upload the PDF first, especially
              for contracts or financial documents.
            </p>
          </details>
        </div>

        <h2>Related free tools</h2>
        <ul>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF (the tool)</a>
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
