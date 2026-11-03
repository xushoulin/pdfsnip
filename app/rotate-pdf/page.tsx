import type { Metadata } from "next";
import PdfTool from "../../components/PdfTool";

export const metadata: Metadata = {
  title: "Rotate PDF Pages Free — Fix Sideways Scans Online",
  description:
    "Rotate PDF pages by 90, 180 or 270 degrees, for selected pages or the whole file. Free, no signup, and 100% in your browser — your PDF is never uploaded.",
  alternates: { canonical: "/rotate-pdf" },
  openGraph: {
    title: "Rotate PDF Pages — Free & Private",
    description:
      "Fix sideways scans in one click. Rotates in your browser — files never leave your device.",
    url: "/rotate-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I rotate just some pages of a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the PDF in PDFSnip, click the pages to rotate (or leave the range empty to rotate all pages), choose 90, 180 or 270 degrees and click Rotate. Rotation is saved into the file, not just the view.",
      },
    },
    {
      "@type": "Question",
      name: "Does rotating re-compress or reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Rotation only changes the page orientation attribute — the content is untouched, so quality is identical.",
      },
    },
  ],
};

export default function RotatePage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Rotate PDF Pages</h1>
        <p className="sub">
          Fix sideways scans in one click — rotate everything, or just the pages you pick.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="rotate" />
      </section>

      <article className="content">
        <h2>How to rotate PDF pages</h2>
        <ol className="steps">
          <li>
            <b>Open your file</b> — drag it into the box above, it never leaves your device.
          </li>
          <li>
            <b>Choose pages</b> (optional) and a rotation of 90°, 180° or 270°.
          </li>
          <li>
            <b>Rotate and download.</b> The rotation is permanently saved in the file, so it shows
            correctly in every PDF reader.
          </li>
        </ol>

        <h2>Related tools</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
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
