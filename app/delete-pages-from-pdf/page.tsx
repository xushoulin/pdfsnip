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
        text: "Yes. All processing happens locally in your browser with JavaScript. Your document is never uploaded to any server.",
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
        <h2>How to delete pages from a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your file.</b> Drag the PDF onto the box above — it opens locally, nothing is
            uploaded.
          </li>
          <li>
            <b>Mark pages for deletion.</b> Click page numbers, or type ranges such as <b>1-2, 8-10</b>
            .
          </li>
          <li>
            <b>Delete and download.</b> You get a new PDF with those pages removed. Your original file
            stays exactly as it was.
          </li>
        </ol>

        <h2>Tip: extract the pages you want to keep instead</h2>
        <p>
          If a document has 100 pages and you only need three, it is often faster to{" "}
          <a href="/">extract the pages you want</a> than to delete the 97 you don&apos;t. Same
          privacy, same quality.
        </p>

        <h2>Related tools</h2>
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
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
