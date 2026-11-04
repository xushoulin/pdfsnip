import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Add Page Numbers to a PDF (Free, Without Acrobat)",
  description:
    "Three ways to number PDF pages — Adobe Acrobat, Mac Preview or a private browser tool. Compare cost, privacy and accuracy, then pick the one that fits your document.",
  alternates: { canonical: "/how-to-add-page-numbers-to-a-pdf" },
  openGraph: {
    title: "How to Add Page Numbers to a PDF (Free, Without Acrobat)",
    description:
      "Number PDF pages without installing anything. Three methods compared — including a private in-browser option with no upload.",
    url: "/how-to-add-page-numbers-to-a-pdf",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I add page numbers to a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use PDFSnip in any browser: open the file, choose a position and format such as 1 / 12, then download the numbered PDF. It is free, needs no account, and the file never leaves your device.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add page numbers without Adobe Acrobat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Acrobat Pro can insert headers and footers, but it is a paid subscription. Mac users can combine a Pages or Preview workaround, and browser tools such as PDFSnip write the numbers directly into the PDF with no software installed.",
      },
    },
    {
      "@type": "Question",
      name: "Why do my page numbers appear sideways?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The pages carry a rotation flag, which is common in phone scans. A tool that ignores this flag draws the number in the unrotated coordinate space, so it lands sideways or outside the visible area. PDFSnip reads the flag and places the number upright in the correct corner.",
      },
    },
  ],
};

export default function AddPageNumbersGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Add Page Numbers to a PDF</h1>
        <p className="sub">
          Three ways to number a PDF — what each one costs, what it does to your files, and which to
          use for contracts, scans and print jobs.
        </p>
      </div>

      <article className="content">
        <p>
          Numbering a PDF sounds trivial until you try it. The document is already finished, so you
          cannot go back to Word and insert a field — you need a tool that writes numbers onto the
          existing file. There are three realistic options, and they differ a lot in cost, privacy
          and how well they handle scanned pages.
        </p>

        <h2>Method 1 — Adobe Acrobat Pro (paid, full control)</h2>
        <p>
          Acrobat&apos;s <b>Edit PDF → Header &amp; Footer → Add</b> dialog is the most configurable
          option: arbitrary text, date stamps, alternating margins and page-range rules. It is also
          the most expensive — Acrobat Pro is a recurring subscription — and it requires installing
          desktop software on every machine you work from.
        </p>
        <p>
          <b>Best for:</b> organisations that already license Acrobat and need complex running
          headers, not just numbers.
        </p>

        <h2>Method 2 — Mac Preview / Pages (free, but fiddly)</h2>
        <p>
          Preview cannot stamp numbers onto an existing PDF directly. The usual workaround is to
          export the pages as images, drop them into Pages, add a footer and export back to PDF — which
          re-compresses every page and degrades scans. It also only exists on macOS.
        </p>
        <p>
          <b>Best for:</b> a one-off page or two on a Mac, where quality loss does not matter.
        </p>

        <h2>Method 3 — PDFSnip in your browser (free, private, no install)</h2>
        <p>
          PDFSnip writes a text layer onto each page using pdf-lib, entirely inside the browser tab.
          Nothing is uploaded, so it is safe for contracts, invoices and medical records. You get six
          positions, four formats (<code>1</code>, <code>1 / 12</code>, <code>Page 1</code>,{" "}
          <code>Page 1 of 12</code>), a custom start number, adjustable font size and margin, and an
          option to skip the cover page.
        </p>
        <p>
          Because only a few kilobytes of text are added, the original images and text stay
          byte-for-byte identical — no re-compression, no quality loss.
        </p>
        <p>
          <b>Best for:</b> almost everything else: contracts, reports, scanned bundles, print-ready
          files.
        </p>

        <h2>Step by step: numbering a PDF in the browser</h2>
        <ol className="steps">
          <li>
            <b>Open the tool</b> — go to{" "}
            <a href="/add-page-numbers-to-pdf">Add Page Numbers to PDF</a> and drop your file in.
          </li>
          <li>
            <b>Pick the position</b> — bottom centre is the convention for reports; bottom right is
            common for legal documents.
          </li>
          <li>
            <b>Pick the format</b> — use <code>Page 7 of 12</code> when the total page count matters
            (contracts), plain <code>7</code> when it does not.
          </li>
          <li>
            <b>Adjust</b> the start number, font size and margin. Tick <i>Skip the cover page</i> if
            page one is a title page.
          </li>
          <li>
            <b>Download</b> — the numbered file saves straight to your device.
          </li>
        </ol>

        <h2>Common problems and how to avoid them</h2>
        <p>
          <b>Numbers landing sideways.</b> Scanned PDFs often carry a rotation flag. Tools that ignore
          it stamp the number in the unrotated space, so it appears rotated 90°. PDFSnip compensates
          for the flag, which is why numbers on phone scans come out upright.
        </p>
        <p>
          <b>Numbering that starts at 1 on a continuation file.</b> If your PDF is part two of a
          printed document, set the start number to the page after the last one in part one.
        </p>
        <p>
          <b>Cover page counted as page 1.</b> Tick <i>Skip the cover page</i>: the cover stays clean
          and the total count excludes it, so &ldquo;of 12&rdquo; refers to the twelve numbered
          pages.
        </p>
        <p>
          <b>Numbers hidden under a scan edge.</b> Increase the margin from 28pt to 36–40pt if the
          scanner cropped the page tight.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I add page numbers to a PDF for free?</summary>
            <p>
              Use PDFSnip in any browser: open the file, choose a position and format such as{" "}
              <code>1 / 12</code>, then download the numbered PDF. It is free, needs no account, and
              the file never leaves your device.
            </p>
          </details>
          <details>
            <summary>Can I add page numbers without Adobe Acrobat?</summary>
            <p>
              Yes. Acrobat Pro can insert headers and footers, but it is a paid subscription. Mac
              users can use a Pages workaround, and browser tools such as PDFSnip write the numbers
              directly into the PDF with no software installed.
            </p>
          </details>
          <details>
            <summary>Why do my page numbers appear sideways?</summary>
            <p>
              The pages carry a rotation flag, which is common in phone scans. A tool that ignores the
              flag draws the number in the unrotated coordinate space, so it lands sideways. PDFSnip
              reads the flag and places the number upright in the correct corner.
            </p>
          </details>
        </div>

        <h2>Related reading</h2>
        <ul>
          <li>
            <a href="/add-page-numbers-to-pdf">Add page numbers to a PDF (tool)</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a> — fix sideways scans before numbering
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — combine files, then number the result
          </li>
          <li>
            <a href="/split-pdf">Split a PDF</a> — separate chapters before numbering each one
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
