import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Rotate a PDF — 5 Methods, and Why It Sometimes Doesn't Stick",
  description:
    "Rotate PDF pages with Preview, Acrobat, the browser, qpdf or pdftk — and understand why a rotated page sometimes still looks sideways in another app.",
  alternates: { canonical: "/how-to-rotate-a-pdf" },
  openGraph: {
    title: "How to Rotate a PDF — 5 Methods Compared",
    description: "Five ways to rotate pages, plus the reason rotation sometimes fails to stick.",
    url: "/how-to-rotate-a-pdf",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I rotate a PDF permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rotate the page and then save the file. In Preview that means Tools > Rotate Right followed by Command-S; in a browser tool the rotation is written into the downloaded copy; on the command line qpdf writes it with --rotate. Rotating the view without saving changes nothing in the document.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my rotated PDF still look sideways in another app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because some scanners store the image rotated while declaring the page upright. Viewers that honour the page's /Rotate value show one thing, viewers that auto-correct from image content show another. The file has an internal contradiction, and flattening it by printing to PDF is the reliable fix.",
      },
    },
    {
      "@type": "Question",
      name: "Does rotating a PDF in Preview save automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Preview marks the document as edited and the rotation only exists in the open window until you save. Closing without saving discards it — which is the most common reason people report that rotation did not work.",
      },
    },
    {
      "@type": "Question",
      name: "How do I rotate a PDF from the command line?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With qpdf: qpdf in.pdf out.pdf --rotate=+90:1-5 rotates pages 1 to 5 clockwise by 90 degrees. With pdftk: pdftk in.pdf cat 1-5east output out.pdf, where east is 90 degrees clockwise, west 270, south 180 and north 0.",
      },
    },
    {
      "@type": "Question",
      name: "Does rotating reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Rotation is a page-level attribute, not an image transformation, so no pixel is re-encoded. The file size changes by a few bytes.",
      },
    },
  ],
};

export default function RotateGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Rotate a PDF</h1>
        <p className="sub">
          Five methods, the exact keystrokes, and the two reasons rotation appears not to work.
        </p>
      </div>

      <article className="content">
        <p className="byline">Last reviewed November 2026</p>

        <p>
          Rotating a PDF looks like the simplest operation there is, and it generates the most
          confusion — because there are two different things called &ldquo;rotate&rdquo;: turning the
          page on your screen, and changing the document. Only one of them survives closing the file.
        </p>

        <h2>Method 1 — Preview on macOS</h2>
        <ol className="steps">
          <li>Open the PDF in <b>Preview</b>.</li>
          <li>
            Go to the page you want turned. For a range, select thumbnails first with{" "}
            <span className="kbd">View → Thumbnails</span>.
          </li>
          <li>
            <b>Tools → Rotate Right</b> (<span className="kbd">⌘R</span>) or <b>Rotate Left</b>.
          </li>
          <li>
            <b>Save</b> with <span className="kbd">⌘S</span>.
          </li>
        </ol>
        <div className="note warn">
          <b>Step 4 is the step people skip.</b> Preview shows the rotation immediately, so it looks
          done. But until you save, the change exists only in the open window. Close the file, reopen
          it, and the page is sideways again — which is why &ldquo;rotating in Preview does not
          work&rdquo; is such a common complaint.
        </div>
        <p>
          Preview rotates whichever pages are selected in the sidebar. Select nothing and it rotates
          the page currently on screen.
        </p>

        <h2>Method 2 — Acrobat (desktop)</h2>
        <p>
          Open the file, choose <b>Tools → Organize Pages</b>, select the pages, then use the rotate
          buttons in the toolbar, and save. The desktop app turns the action into a real page
          attribute. The free web version can rotate too, but it uploads the file.
        </p>

        <h2>Method 3 — In the browser, without installing anything</h2>
        <p>
          The <a href="/rotate-pdf">rotate tool on this site</a> lets you type a page range, pick 90,
          180 or 270 degrees, and writes the rotation into the downloaded file. It works on Chromebooks
          and locked-down work machines, and the file is processed locally — nothing is uploaded.
        </p>
        <p>
          One practical advantage over desktop apps: you see the page thumbnails and the page numbers
          at the same time, so working out which pages of a 90-page scan are upside down takes seconds
          instead of scrolling.
        </p>

        <h2>Method 4 — qpdf on the command line</h2>
        <pre className="tbl-wrap">
          <code className="inline">
            {`# rotate pages 1-5 by 90 degrees clockwise
qpdf in.pdf out.pdf --rotate=+90:1-5

# rotate every page 180 degrees
qpdf in.pdf out.pdf --rotate=180:1-z

# rotate pages 2 and 7 counter-clockwise
qpdf in.pdf out.pdf --rotate=-90:2,7`}
          </code>
        </pre>
        <p>
          The syntax is <code className="inline">angle:page-range</code>, and the angle is relative:{" "}
          <code className="inline">+90</code> adds to the page&apos;s current rotation rather than
          setting it. Given a page already at 90, <code className="inline">+90</code> makes it 180.
        </p>

        <h2>Method 5 — pdftk, if you already have it</h2>
        <pre className="tbl-wrap">
          <code className="inline">{`pdftk in.pdf cat 1-5east output out.pdf`}</code>
        </pre>
        <p>
          The suffixes are compass directions rather than angles: <b>north</b> 0°, <b>east</b> 90°
          clockwise, <b>south</b> 180°, <b>west</b> 270°. pdftk is abandoned upstream and awkward to
          install on Apple Silicon, so treat it as a fallback.
        </p>

        <h2>Why rotation sometimes does not stick</h2>
        <p>Two completely different problems; the fix depends on which one you have.</p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Symptom</th>
                <th>Cause</th>
                <th>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Looks rotated, reverts after closing</td>
                <td>The change was never saved to the file.</td>
                <td>
                  Save (<span className="kbd">⌘S</span> / <span className="kbd">Ctrl+S</span>), or use
                  a tool that downloads a new file.
                </td>
              </tr>
              <tr>
                <td>Correct in one app, sideways in another</td>
                <td>
                  The page is upright but the image inside it is turned — the file contradicts itself.
                </td>
                <td>Flatten it: print to PDF, then rotate the flattened copy.</td>
              </tr>
              <tr>
                <td>Rotating again makes it worse</td>
                <td>Rotation accumulates rather than setting an absolute value.</td>
                <td>Work out the difference you need. Two 90° rotations equal 180°.</td>
              </tr>
              <tr>
                <td>Only some pages are wrong</td>
                <td>A mixed-orientation document.</td>
                <td>Use thumbnails to identify the pages, then rotate just those.</td>
              </tr>
              <tr>
                <td>Text upright but the page is landscape</td>
                <td>The page really is landscape; rotating makes the text sideways.</td>
                <td>Nothing to fix — this is the intended orientation.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Fixing it at the source, when you control the scan</h2>
        <ul>
          <li>
            <b>Set the orientation on the scanner</b>, not afterwards. Duplex feeders in particular
            produce alternating orientations when the second side is scanned upside down.
          </li>
          <li>
            <b>Use auto-rotate with care.</b> OCR-based auto-rotation gets short documents wrong,
            especially pages that are mostly a table or an image.
          </li>
          <li>
            <b>Do not re-photograph a rotated printout.</b> Turning the paper does not turn the text
            layer; it just adds another generation of blur.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I rotate a PDF permanently?</summary>
            <p>
              Rotate and then save. In Preview: Tools → Rotate Right, then{" "}
              <span className="kbd">⌘S</span>. A browser tool writes the rotation into the downloaded
              copy; qpdf writes it with <code className="inline">--rotate</code>.
            </p>
          </details>
          <details>
            <summary>Why does my rotated PDF still look sideways in another app?</summary>
            <p>
              The page and the image inside it disagree about orientation. Flatten the file by printing
              to PDF, then rotate the flattened copy.
            </p>
          </details>
          <details>
            <summary>Does rotating in Preview save automatically?</summary>
            <p>
              No. Until you save, the rotation lives only in the open window — the single most common
              reason people think it failed.
            </p>
          </details>
          <details>
            <summary>How do I rotate from the command line?</summary>
            <p>
              <code className="inline">qpdf in.pdf out.pdf --rotate=+90:1-5</code>, or{" "}
              <code className="inline">pdftk in.pdf cat 1-5east output out.pdf</code>.
            </p>
          </details>
          <details>
            <summary>Does rotating reduce quality?</summary>
            <p>No. It changes a page attribute, not the pixels. File size moves by a few bytes.</p>
          </details>
        </div>

        <h2>Related</h2>
        <ul>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a> — the tool, with the full angle reference.
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/extract-pages-from-pdf-on-mac">Extracting pages on a Mac</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
