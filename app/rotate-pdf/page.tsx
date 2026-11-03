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
    {
      "@type": "Question",
      name: "Can I rotate every page in a PDF at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Leave the page-range box empty and PDFSnip rotates the entire document. It is the fastest way to fix a file where every page was scanned in the wrong direction.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between 90, 180 and 270 degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "90 turns the page a quarter turn clockwise, 180 flips it upside down, and 270 is a quarter turn counter-clockwise. Pick whichever angle makes the page upright.",
      },
    },
    {
      "@type": "Question",
      name: "Will rotating fix a sideways scanned page permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlike a PDF viewer's rotate-view button (which only turns the display on your screen), PDFSnip writes the new orientation into the file, so the page is upright in every reader and when printed.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on iPhone, Android and Chromebook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any modern mobile browser works — there is nothing to install. The rotated PDF is saved to your Downloads or offered as a share target.",
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
        <h2>Why PDF pages end up sideways</h2>
        <p>It happens to almost everyone, usually for one of these reasons:</p>
        <ul>
          <li>
            A phone photo or <b>scan taken in portrait</b> but the page is landscape (or vice versa).
          </li>
          <li>
            A scanner or camera app that <b>failed to auto-detect orientation</b>.
          </li>
          <li>
            Pages <b>exported from slides or spreadsheets</b> that were created sideways.
          </li>
          <li>
            A mixed-orientation document where <b>only some pages</b> need turning.
          </li>
        </ul>

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

        <h2>View rotation vs saved rotation</h2>
        <p>
          Most PDF viewers have a &quot;rotate view&quot; button, but that only turns the page on{" "}
          <b>your screen</b> — close the file and it is sideways again. PDFSnip writes the new
          orientation <b>into the file itself</b>, so the page is upright everywhere: in other
          readers, in email attachments, and when printed.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I rotate just some pages of a PDF?</summary>
            <p>
              Open the PDF in PDFSnip, click the pages to rotate (or leave the range empty to rotate
              all pages), choose 90, 180 or 270 degrees and click Rotate. Rotation is saved into the
              file, not just the view.
            </p>
          </details>
          <details>
            <summary>Does rotating re-compress or reduce quality?</summary>
            <p>
              No. Rotation only changes the page orientation attribute — the content is untouched, so
              quality is identical.
            </p>
          </details>
          <details>
            <summary>Can I rotate every page in a PDF at once?</summary>
            <p>
              Yes. Leave the page-range box empty and PDFSnip rotates the entire document. It is the
              fastest way to fix a file where every page was scanned in the wrong direction.
            </p>
          </details>
          <details>
            <summary>What is the difference between 90, 180 and 270 degrees?</summary>
            <p>
              90 turns the page a quarter turn clockwise, 180 flips it upside down, and 270 is a
              quarter turn counter-clockwise. Pick whichever angle makes the page upright.
            </p>
          </details>
          <details>
            <summary>Will rotating fix a sideways scanned page permanently?</summary>
            <p>
              Yes. Unlike a PDF viewer&apos;s rotate-view button (which only turns the display on your
              screen), PDFSnip writes the new orientation into the file, so the page is upright in
              every reader and when printed.
            </p>
          </details>
          <details>
            <summary>Does it work on iPhone, Android and Chromebook?</summary>
            <p>
              Yes. Any modern mobile browser works — there is nothing to install. The rotated PDF is
              saved to your Downloads or offered as a share target.
            </p>
          </details>
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
            <a href="/merge-pdf">Merge PDF files</a>
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
