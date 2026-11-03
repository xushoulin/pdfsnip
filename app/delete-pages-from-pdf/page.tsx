import type { Metadata } from "next";
import PdfTool from "../../components/PdfTool";

export const metadata: Metadata = {
  title: "Delete Pages from PDF Free — Remove Pages Online",
  description:
    "Delete pages from a PDF for free. Click the pages to remove or type ranges like 2-4, 9. Runs 100% in your browser — no upload, no signup, no watermark.",
  alternates: { canonical: "/delete-pages-from-pdf" },
  openGraph: {
    title: "Delete Pages from PDF — Free & Private",
    description:
      "Remove unwanted pages from any PDF. 100% in-browser, files never leave your device.",
    url: "/delete-pages-from-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I delete pages from a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the PDF in PDFSnip, click the pages you want to remove (or type ranges like 2-4, 9) and click Delete. A new PDF without those pages downloads instantly — the original file is not modified.",
      },
    },
    {
      "@type": "Question",
      name: "Is deleting PDF pages here private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All processing happens locally in your browser with JavaScript. Your document is never uploaded to any server, so even confidential pages stay on your device.",
      },
    },
    {
      "@type": "Question",
      name: "Can I delete pages from a scanned PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A scanned PDF is just a set of page images inside a PDF container, and pages are removed at the container level without touching the image data, so quality is preserved.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my original file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing changes. PDFSnip writes the result to a brand-new file and leaves your original PDF exactly as it was, so you can always go back to it.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a file size or page limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No artificial limit. Because everything runs on your own device, the only constraint is your device's available memory — a 500-page document simply takes a few seconds longer than a 5-page one.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on iPhone, Android and Chromebook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PDFSnip is a web page, not an app, so any modern mobile browser works. The cleaned PDF is saved to your Downloads or offered as a share target.",
      },
    },
  ],
};

export default function DeletePage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Delete Pages from PDF</h1>
        <p className="sub">
          Remove blank pages, ads or confidential sections — pick pages or type ranges like{" "}
          <b>2-4, 9</b>.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="delete" />
      </section>

      <article className="content">
        <h2>Common reasons to delete PDF pages</h2>
        <p>Most people reach for a page-deletion tool for one of these everyday situations:</p>
        <ul>
          <li>
            <b>Blank pages</b> left behind by a scanner or a bad print-to-PDF job.
          </li>
          <li>
            <b>Cover and back-cover pages</b> you don&apos;t need when emailing just the inner
            document.
          </li>
          <li>
            <b>Advertisement or flyleaf pages</b> pulled in from a downloaded report or eBook.
          </li>
          <li>
            <b>Confidential sections</b> you must strip out before sharing the rest of a file.
          </li>
          <li>
            <b>Duplicate pages</b> produced when a scanner feeds the same sheet twice.
          </li>
        </ul>

        <h2>How to delete pages from a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your file.</b> Drag the PDF onto the box above — it opens locally, nothing is
            uploaded.
          </li>
          <li>
            <b>Mark pages for deletion.</b> Click page numbers, or type ranges such as{" "}
            <b>1-2, 8-10</b>. You can mix single pages and ranges in any order.
          </li>
          <li>
            <b>Delete and download.</b> You get a new PDF with those pages removed. Your original file
            stays exactly as it was.
          </li>
        </ol>

        <h2>PDFSnip vs desktop software</h2>
        <p>You can delete pages in Adobe Acrobat or Preview, but a browser tool has real advantages:</p>
        <ul>
          <li>
            <b>No install, no license.</b> Acrobat is paid and Preview is Mac-only. PDFSnip runs in
            any browser, free, with no account.
          </li>
          <li>
            <b>Nothing leaves your device.</b> Cloud tools that say &quot;upload to delete&quot; send
            your document to a server. PDFSnip does not — the file is processed in your tab.
          </li>
          <li>
            <b>Works offline.</b> Once the page has loaded, you can switch off Wi-Fi and still delete
            pages.
          </li>
        </ul>

        <h2>Tip: extract the pages you want to keep instead</h2>
        <p>
          If a document has 100 pages and you only need three, it is often faster to{" "}
          <a href="/">extract the pages you want</a> than to delete the 97 you don&apos;t. Same
          privacy, same quality.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I delete pages from a PDF for free?</summary>
            <p>
              Open the PDF in PDFSnip, click the pages you want to remove (or type ranges like{" "}
              <b>2-4, 9</b>) and click Delete. A new PDF without those pages downloads instantly —
              the original file is not modified.
            </p>
          </details>
          <details>
            <summary>Is deleting PDF pages here private?</summary>
            <p>
              Yes. All processing happens locally in your browser with JavaScript. Your document is
              never uploaded to any server, so even confidential pages stay on your device.
            </p>
          </details>
          <details>
            <summary>Can I delete pages from a scanned PDF?</summary>
            <p>
              Yes. A scanned PDF is just a set of page images inside a PDF container, and pages are
              removed at the container level without touching the image data, so quality is preserved.
            </p>
          </details>
          <details>
            <summary>What happens to my original file?</summary>
            <p>
              Nothing changes. PDFSnip writes the result to a brand-new file and leaves your original
              PDF exactly as it was, so you can always go back to it.
            </p>
          </details>
          <details>
            <summary>Is there a file size or page limit?</summary>
            <p>
              No artificial limit. Because everything runs on your own device, the only constraint is
              your device&apos;s available memory — a 500-page document simply takes a few seconds
              longer than a 5-page one.
            </p>
          </details>
          <details>
            <summary>Does it work on iPhone, Android and Chromebook?</summary>
            <p>
              Yes. PDFSnip is a web page, not an app, so any modern mobile browser works. The cleaned
              PDF is saved to your Downloads or offered as a share target.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
