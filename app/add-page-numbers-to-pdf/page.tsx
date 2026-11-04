import type { Metadata } from "next";
import PageNumbersTool from "../../components/PageNumbersTool";

export const metadata: Metadata = {
  title: "Add Page Numbers to PDF Free — No Upload, No Signup",
  description:
    "Add page numbers to any PDF in seconds. Choose position, format (1, 1/12, Page 1 of 12), font size and start number. 100% in your browser — your file is never uploaded.",
  alternates: { canonical: "/add-page-numbers-to-pdf" },
  openGraph: {
    title: "Add Page Numbers to PDF — Free & Private",
    description:
      "Number PDF pages in your browser: 6 positions, 4 formats, custom start number. No upload, no signup, no watermark.",
    url: "/add-page-numbers-to-pdf",
    type: "website",
  },
};

const faq = [
  {
    q: "How do I add page numbers to a PDF for free?",
    a: "Open the PDF in PDFSnip, pick a position and a format such as 1 / 12 or Page 1 of 12, then click Add page numbers. The numbered file downloads immediately. There is no signup, no watermark and no upload — everything runs in your browser.",
  },
  {
    q: "Can I start numbering from a page other than 1?",
    a: "Yes. Set the start number to anything you like (0, 1, 5, 12…). This is useful when a PDF is the second half of a printed document and should continue the earlier numbering.",
  },
  {
    q: "How do I skip the cover page when numbering?",
    a: "Tick Skip the cover page. The first page is left unnumbered and the numbering starts on page two, so the total count also excludes the cover.",
  },
  {
    q: "Does adding page numbers reduce PDF quality or file size?",
    a: "No. Page numbers are added as a small text layer on top of each page — the original content, images and quality are untouched. File size grows by only a few kilobytes.",
  },
  {
    q: "Will the numbers show up on scanned or rotated pages?",
    a: "Yes. PDFSnip detects pages that carry a rotation flag (common in phone scans) and draws the number upright in the correct corner, so it reads the same way as the rest of the file.",
  },
  {
    q: "Is it safe to number confidential documents here?",
    a: "Yes. There is no server involved: the PDF is read, modified and saved entirely inside your browser tab. Nothing is uploaded, stored or logged, which makes it safe for contracts, medical records and financial statements.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AddPageNumbersPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Add Page Numbers to PDF</h1>
        <p className="sub">
          Number every page in seconds — choose the corner, the format and where to start.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PageNumbersTool />
      </section>

      <article className="content">
        <h2>Why add page numbers to a PDF?</h2>
        <p>
          A PDF without page numbers is hard to work with the moment it leaves your screen. Page
          numbers are what let a reader say &ldquo;see page 7&rdquo;, let a reviewer cite an exact
          spot, and let a printer assemble sheets in the right order. They matter most in:
        </p>
        <ul>
          <li>
            <b>Contracts and legal packs</b> — every page needs a reference so nothing can be
            swapped or missed.
          </li>
          <li>
            <b>Academic papers and reports</b> — citations, tables of contents and appendices rely on
            numbering.
          </li>
          <li>
            <b>Scanned documents</b> — scans carry no numbering at all, so a 40-page scan becomes
            impossible to navigate.
          </li>
          <li>
            <b>Print-ready files</b> — you need to confirm the sheet count and check page order before
            sending to a printer.
          </li>
          <li>
            <b>Merged files</b> — when you combine several PDFs, numbering keeps the new document
            readable as one unit.
          </li>
        </ul>

        <h2>How to add page numbers to a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your PDF</b> — drag it into the box above. It stays on your device; nothing is
            uploaded.
          </li>
          <li>
            <b>Choose where and how</b> — position (six corners), format (<code>1</code>,{" "}
            <code>1 / 12</code>, <code>Page 1</code>, <code>Page 1 of 12</code>), font size and
            margin.
          </li>
          <li>
            <b>Set the start number</b> and tick <i>Skip the cover page</i> if your first page
            shouldn&apos;t be counted.
          </li>
          <li>
            <b>Click Add page numbers</b> and the numbered PDF downloads instantly.
          </li>
        </ol>

        <h2>Which format should you choose?</h2>
        <p>
          It depends on the document. A <b>plain number</b> (<code>7</code>) is quiet and works for
          almost anything. <b>7 / 12</b> is best when the reader needs to know how far through they
          are. <b>Page 7</b> reads well in formal reports, while <b>Page 7 of 12</b> is the safest
          choice for contracts, where the total page count itself is part of the agreement — it makes
          a missing page obvious at a glance.
        </p>

        <h2>Add page numbers without Acrobat or Word</h2>
        <p>
          Adobe Acrobat Pro can add headers and footers, but it is a paid subscription and requires
          installing desktop software. Microsoft Word can insert page numbers only if you still have
          the original <code>.docx</code> — it cannot number an existing PDF. PDFSnip works directly
          on the PDF you already have, in any modern browser, on Windows, macOS, Linux, iPhone,
          Android and Chromebook.
        </p>

        <h2>What about scanned documents and rotated pages?</h2>
        <p>
          Phone scans frequently store pages with a rotation flag instead of physically turning the
          content. A naive numbering tool then prints the number sideways or in the wrong corner.
          PDFSnip reads that flag and places the number in the visually correct position, upright —
          so the numbering matches what you see on screen and what comes out of the printer.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/how-to-add-page-numbers-to-a-pdf">Guide: numbering PDFs step by step</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
