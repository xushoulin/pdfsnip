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
        text: "Open the PDF in PDFSnip, type the page numbers you want into the range box (for example 2, 4-6), choose 90, 180 or 270 degrees and click Rotate. Leave the box empty to rotate every page. The rotation is written into the file, not just into the viewer.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my PDF still look sideways in some apps after rotating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are two different mechanisms. A real rotation changes the page's /Rotate attribute, which every conforming reader honours. But if a scanner wrote the image already turned inside an upright page, the page itself is not rotated and the app that displays it may ignore the mismatch. If a page looks right in one reader and wrong in another, the file is inconsistent rather than unrotated — rotating it again usually makes it worse.",
      },
    },
    {
      "@type": "Question",
      name: "Does rotating re-compress or reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Rotation only changes the page orientation attribute — no pixel is touched. JPEG images stay the same JPEG, text stays vector, and the file size changes by a few bytes.",
      },
    },
    {
      "@type": "Question",
      name: "Does the page get wider when I rotate it 90 degrees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visually yes, but the MediaBox is left alone. The viewer swaps the rendered width and height when it applies a 90 or 270 degree rotation, so an A4 portrait page displays as A4 landscape. Printing then follows the rotated orientation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rotate every page in a PDF at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Leave the page-range box empty and PDFSnip rotates the entire document. Rotation is cumulative: applying 90 degrees twice gives 180, so if a file is already rotated, work out the difference you need rather than the absolute angle.",
      },
    },
    {
      "@type": "Question",
      name: "Does rotating a PDF break text selection or search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The text layer and the reading order are untouched, so Ctrl+F still finds words. What changes is only how the page is laid out on screen. If you need the text layer re-flowed to match the new orientation — for example for OCR — that is a separate re-processing step.",
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
        <p>
          Almost always for one of five reasons. Knowing which one you have decides whether rotating
          will actually fix the file:
        </p>
        <ul>
          <li>
            A phone photo or <b>scan taken in portrait</b> while the page is landscape (or the
            reverse) — the most common case by far.
          </li>
          <li>
            A scanner or camera app that <b>failed to auto-detect orientation</b>, so it stored the
            image rotated but declared the page upright.
          </li>
          <li>
            Pages <b>exported from slides or spreadsheets</b> where the slide was designed in
            landscape and printed to a portrait page.
          </li>
          <li>
            A <b>mixed-orientation document</b> — a landscape table bound between portrait pages —
            where only a few pages need turning.
          </li>
          <li>
            A <b>JPEG with an EXIF orientation tag</b> converted to PDF by a tool that copied the
            pixels but dropped the tag, so the image lands on the page sideways.
          </li>
        </ul>

        <h2>How to rotate PDF pages</h2>
        <ol className="steps">
          <li>
            <b>Open your file</b> — drag it into the box above. It is read on your device and never
            uploaded.
          </li>
          <li>
            <b>Choose pages</b> (optional) and a rotation of 90°, 180° or 270°.
          </li>
          <li>
            <b>Rotate and download.</b> The rotation is permanently saved in the file, so it shows
            correctly in every PDF reader.
          </li>
        </ol>

        <h2>What the three angles actually do</h2>
        <p>
          PDF rotation is clockwise and always a multiple of 90°, because the page is described by a
          rectangle and a rotation value rather than by pixels. Applying the same angle twice is not
          idempotent — it adds up.
        </p>

        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Angle</th>
                <th>Visual result</th>
                <th>Typical cause you are fixing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="num">90°</td>
                <td>Quarter turn clockwise. Portrait becomes landscape.</td>
                <td>Page scanned from the left edge, text running bottom-to-top.</td>
              </tr>
              <tr>
                <td className="num">180°</td>
                <td>Upside down — the top of the page becomes the bottom.</td>
                <td>A sheet fed into the scanner the wrong way round.</td>
              </tr>
              <tr>
                <td className="num">270°</td>
                <td>Quarter turn counter-clockwise. Portrait becomes landscape the other way.</td>
                <td>Page scanned from the right edge, text running top-to-bottom.</td>
              </tr>
              <tr>
                <td className="num">0°</td>
                <td>Resets the page to its default orientation.</td>
                <td>Undoing a rotation that was applied by mistake.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          <b>Rotation is cumulative.</b> A page already carrying 90° that you rotate 90° again becomes
          180°, not 90°. If a file has been through another tool, rotate by the <i>difference</i> you
          need, not by the absolute angle.
        </div>

        <h2>View rotation vs saved rotation</h2>
        <p>
          Most PDF viewers have a &ldquo;rotate view&rdquo; button, but that only turns the page on{" "}
          <b>your screen</b> — close the file and it is sideways again. PDFSnip writes the new
          orientation <b>into the file itself</b> by changing the page&apos;s{" "}
          <code className="inline">/Rotate</code> entry, so the page is upright everywhere: in other
          readers, in email attachments, and when printed.
        </p>
        <p>
          That entry lives in the page dictionary and is inherited by the page tree, which has an
          important side effect: a reader that honours <code className="inline">/Rotate</code> and a
          reader that ignores it will disagree about the same file. If your PDF looks correct on your
          phone and rotated on your laptop, the file is inconsistent — not rotated. Applying another
          rotation makes the disagreement bigger.
        </p>

        <h2>&ldquo;I rotated it and it is still wrong&rdquo; — the double-rotation trap</h2>
        <p>
          This is the single most common support question about rotation, and it is worth explaining
          because it saves an hour of guessing.
        </p>
        <p>
          Some scanners and phone camera apps write a file where the <b>page is upright but the image
          inside it is turned</b>. The page says 0°, the pixels are rotated 90°. A correct viewer
          respects the page orientation, so you see a sideways page. Rotating the page 90° should fix
          it — and in a strict viewer it does. But a viewer that quietly auto-corrects based on the
          image content will now show the page rotated <i>the other way</i>.
        </p>
        <p>
          The reliable test: open the same file in two different applications. If both show it the
          same way, a normal rotation will fix it. If they disagree, the file has an internal
          contradiction and the fix is to flatten it — open it, print to PDF, and rotate the result.
        </p>

        <h2>How to know which pages to rotate</h2>
        <p>
          In a mixed document, do not rotate page by page by trial and error. Use the page thumbnails
          in the tool above: pages that need turning are usually obvious there because the thumbnail
          is rendered the same way a reader would render it. Write the numbers down, then apply one
          rotation to that set.
        </p>
        <p>
          Two rules of thumb from working with mixed scans:
        </p>
        <ul>
          <li>
            <b>Consecutive pages usually need the same angle.</b> A batch fed into a scanner the same
            way produces the same error; a whole 40-page annex is almost always uniformly rotated.
          </li>
          <li>
            <b>Landscape tables in a portrait document are often correct already.</b> Rotate those
            and you break them. Check whether the table is meant to be read by turning the sheet — the
            header and footer position tells you.
          </li>
        </ul>

        <h2>What rotation does not do</h2>
        <p>
          Setting expectations is more useful than a feature list, so here is what a rotation
          operation leaves alone:
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Property</th>
                <th>Affected?</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image quality and resolution</td>
                <td>No</td>
                <td>Pixels are never decoded. A 300 dpi scan stays 300 dpi.</td>
              </tr>
              <tr>
                <td>Text layer and search</td>
                <td>No</td>
                <td>Ctrl+F keeps working; the reading order is unchanged.</td>
              </tr>
              <tr>
                <td>File size</td>
                <td>Barely</td>
                <td>One number per page changes — a few bytes, not kilobytes.</td>
              </tr>
              <tr>
                <td>Printed output</td>
                <td>Yes</td>
                <td>Printers follow the new orientation, which is usually the point.</td>
              </tr>
              <tr>
                <td>Digital signature</td>
                <td>Broken</td>
                <td>Any rewrite invalidates it. Do not rotate signed documents.</td>
              </tr>
              <tr>
                <td>OCR text position</td>
                <td>No</td>
                <td>
                  Existing OCR boxes keep their original coordinates, so they may no longer line up
                  visually.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Rotating on a phone</h2>
        <p>
          There is nothing to install: any modern mobile browser runs the tool, including Safari on
          iOS and Chrome on Android. The browser handles the file through its own file picker, so the
          rotated PDF is saved to your Downloads folder or offered to another app as a share target.
          On iOS, choose &ldquo;Save to Files&rdquo; rather than previewing in place — the preview
          viewer caches the original orientation and makes it look as if nothing happened.
        </p>
        <p>
          One mobile caveat: a 90° rotation makes a portrait page wider than the screen, and some
          in-browser previews keep the old zoom level. Zoom out once after downloading if the result
          looks cropped.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I rotate just some pages of a PDF?</summary>
            <p>
              Type the pages into the range box, for example <b>2, 4-6</b>, choose an angle and click
              Rotate. Leave the box empty to rotate all pages.
            </p>
          </details>
          <details>
            <summary>Why does my PDF still look sideways after rotating?</summary>
            <p>
              If it looks right in one app and wrong in another, the file has an internal
              contradiction: the page is upright but the image inside it is turned. Rotating again
              makes it worse. Print the file to PDF first, then rotate the flattened copy.
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
            <summary>What is the difference between 90, 180 and 270 degrees?</summary>
            <p>
              90 turns the page a quarter turn clockwise, 180 flips it upside down, and 270 is a
              quarter turn counter-clockwise. Pick whichever angle makes the page upright.
            </p>
          </details>
          <details>
            <summary>Will rotating fix a sideways scanned page permanently?</summary>
            <p>
              Yes, in the sense that the file itself is changed. Unlike a PDF viewer&apos;s
              rotate-view button, the new orientation is stored in the document, so every reader and
              printer sees the corrected page.
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
          <li>
            <a href="/how-to-rotate-a-pdf">How to rotate a PDF</a> — the longer walkthrough with
            desktop alternatives.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
