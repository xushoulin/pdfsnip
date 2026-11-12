import type { Metadata } from "next";
import ImageToPdfTool from "../../components/ImageToPdfTool";

export const metadata: Metadata = {
  title: "JPG to PDF — Convert Images to PDF Free, No Upload",
  description:
    "Turn JPG and PNG images into one PDF. Choose A4, US Letter or a page that fits each image, set the margin and order, and download. Runs entirely in your browser.",
  alternates: { canonical: "/jpg-to-pdf" },
  openGraph: {
    title: "JPG to PDF — Free & Private",
    description: "Combine JPG and PNG images into one PDF without uploading anything.",
    url: "/jpg-to-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert JPG images to a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add one or more JPG or PNG files, choose a page size and margin, arrange the order and click Convert. Each image becomes one page in a single PDF, which downloads to your device.",
      },
    },
    {
      "@type": "Question",
      name: "Does converting to PDF reduce image quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The JPEG data is embedded into the PDF as-is rather than decoded and re-compressed, so the pixels are identical to the source file. What changes is only the container and the page it sits on.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my iPhone photo look sideways or cropped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Phone cameras store photos in a fixed sensor orientation and record a rotation flag in the EXIF block. Not every converter reads that flag. If a page comes out turned, rotate the source image first or rotate the page afterwards with the Rotate tool.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert HEIC photos from an iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not directly — this tool accepts JPG and PNG. On iPhone, open Settings, Camera, Formats and choose Most Compatible so new photos are saved as JPG, or export the existing ones as JPEG from Photos.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my PDF so much bigger than the images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It should not be much bigger, because the images are not re-compressed. A 10-photo PDF is roughly the sum of the photo files plus a few kilobytes of structure. If the total is huge, the photos themselves are large — reduce them before converting, not after.",
      },
    },
    {
      "@type": "Question",
      name: "Which page size should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose A4 or US Letter for documents that will be printed on standard paper, and Fit page to image for screenshots, receipts and anything where whitespace would look wrong. Fit removes the concept of a fixed sheet: each page becomes exactly the size of its image.",
      },
    },
  ],
};

export default function JpgToPdfPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>JPG to PDF</h1>
        <p className="sub">
          Turn photos and screenshots into one clean PDF — no upload, no watermark, no account.
        </p>
        <div className="badges">
          <span className="badge">JPG &amp; PNG</span>
          <span className="badge">No re-compression</span>
          <span className="badge">100% in your browser</span>
        </div>
      </div>

      <section className="tool-card">
        <ImageToPdfTool />
      </section>

      <article className="content">
        <h2>How to convert images to PDF</h2>
        <ol className="steps">
          <li>
            <b>Add your images.</b> JPG, JPEG and PNG are accepted, in any mix. They are read locally —
            a photo of an ID document never leaves your device.
          </li>
          <li>
            <b>Choose a page size and margin.</b> A4 or US Letter for printing; Fit page to image for
            screenshots and receipts.
          </li>
          <li>
            <b>Set the order</b> with the arrow buttons, then convert. One PDF downloads, one page per
            image.
          </li>
        </ol>

        <h2>Which page size, and why it changes the print result</h2>
        <p>
          A page size is not decoration. It decides how large the image appears when printed, because
          the image gets scaled to fit whatever box you chose.
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Page</th>
                <th>Best for</th>
                <th>Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A4</td>
                <td>210 × 297 mm, fixed</td>
                <td>Documents that will be printed or filed with other A4 paperwork.</td>
                <td>A panoramic photo gets large white bands above and below.</td>
              </tr>
              <tr>
                <td>US Letter</td>
                <td>216 × 279 mm, fixed</td>
                <td>Anything destined for a US printer or a US institution.</td>
                <td>Fixed sheet — the page imposes its aspect ratio on the image, as with A4.</td>
              </tr>
              <tr>
                <td>Fit page to image</td>
                <td>Exactly the image&apos;s size</td>
                <td>Screenshots, receipts, chat exports, single diagrams.</td>
                <td>Mixed page sizes if the images differ; may not print tidily.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="note">
          <b>Mixing photos in one document?</b> Use A4 with a 24 pt margin. Fitting each page to its
          image produces a document where page sizes change on every page, which looks chaotic when
          scrolled and impossible to bind.
        </div>

        <h2>The resolution maths, so you can predict the print quality</h2>
        <p>
          Resolution here means effective PPI: how many image pixels land in one inch of paper. Below
          about 150 PPI a print looks soft; 300 PPI is the standard for anything read at arm&apos;s
          length. Since A4 is 8.27 inches wide, a photo needs roughly 2,480 pixels of width to fill an
          A4 page at 300 PPI.
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Image pixels</th>
                <th>On A4 (8.27 in wide)</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="num">640 × 480</td>
                <td className="num">77 PPI</td>
                <td>Visible pixelation. Fine for a thumbnail, not for a document.</td>
              </tr>
              <tr>
                <td className="num">1280 × 960</td>
                <td className="num">155 PPI</td>
                <td>Acceptable for internal use, soft on close inspection.</td>
              </tr>
              <tr>
                <td className="num">2480 × 3508</td>
                <td className="num">300 PPI</td>
                <td>Print quality. This is exactly A4 at 300 DPI.</td>
              </tr>
              <tr>
                <td className="num">4032 × 3024 (phone)</td>
                <td className="num">487 PPI</td>
                <td>More than needed — the file is large with no visible gain.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A modern phone camera is comfortably above print quality, which is why phone photos of
          documents work so well. A screenshot is the opposite: a 1200-pixel-wide screenshot stretched
          to A4 paper is around 145 PPI, so screenshots belong on a fitted page.
        </p>

        <h2>Why the PDF is not larger than the images</h2>
        <p>
          Many converters decode each JPEG, draw it onto a canvas and re-encode it, which loses a
          generation of quality and often inflates the file. Here the JPEG bytes are embedded directly
          into the PDF as an image object, so the compressed data is byte-identical to your original.
        </p>
        <p>
          The practical consequence: a folder of ten 4 MB photos produces a PDF close to 40 MB. That
          is not a bug and not a reason to distrust the conversion — the size was always there. If you
          need a smaller file, reduce the images first (or export them at a lower quality from your
          photo app), because reducing after the fact means re-compressing inside the PDF.
        </p>

        <h2>Photos of documents: what actually improves readability</h2>
        <p>
          Scanning with a phone is normal now, and most of the quality comes from how you take the
          photo rather than from the conversion:
        </p>
        <ul className="checklist">
          <li>Shoot straight down, not at an angle — perspective correction is not something a PDF conversion can do.</li>
          <li>Fill the frame with the page. Cropping later is easy; recovering detail is not.</li>
          <li>Use daylight or a bright room, and stand so your own shadow falls outside the page.</li>
          <li>Turn off the flash. A flash on paper produces a bright hotspot that no converter can remove.</li>
          <li>Flatten the page. A curled sheet produces a gradient of blur across the text.</li>
        </ul>
        <p>
          If the result is a dark grey background instead of white, the exposure was wrong at capture
          time. Converting to PDF will not fix it, and neither will this tool — that is an image
          editing job.
        </p>

        <h2>iPhone photos: HEIC and the sideways problem</h2>
        <p>
          Two iPhone-specific issues come up constantly.
        </p>
        <p>
          <b>HEIC files are not accepted.</b> Apple saves photos in HEIC by default, and browser
          JavaScript cannot decode it reliably across platforms. Either set{" "}
          <span className="kbd">Settings → Camera → Formats → Most Compatible</span> so new photos are
          JPG, or export existing ones from the Photos app as JPEG before converting.
        </p>
        <p>
          <b>Sideways photos.</b> Cameras store the sensor image in one fixed orientation and record a
          rotation flag in the EXIF metadata. Applications that read EXIF display the photo upright;
          ones that do not, show it rotated. If a page comes out turned, the fastest fix is to rotate
          the page afterwards with the{" "}
          <a href="/rotate-pdf">Rotate PDF</a> tool — one click on the affected pages.
        </p>

        <h2>Common uses</h2>
        <ul>
          <li>
            <b>Expense receipts</b> — ten photos into one PDF that an accounting portal will accept.
            Use Fit page to image so each receipt is its own size.
          </li>
          <li>
            <b>Signed forms</b> — a photographed signature page combined with the original digital
            pages via <a href="/merge-pdf">Merge PDF</a>.
          </li>
          <li>
            <b>Portfolios</b> — A4 pages in order, with a 24 pt margin so nothing touches the edge.
          </li>
          <li>
            <b>Screenshots for a bug report</b> — Fit page, and the reader scrolls through them
            without white borders.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Does converting reduce image quality?</summary>
            <p>
              No. The JPEG data is embedded as-is instead of being re-encoded, so the pixels match the
              source file exactly.
            </p>
          </details>
          <details>
            <summary>Why does my photo look sideways?</summary>
            <p>
              Phone photos carry an EXIF rotation flag that not every converter honours. Rotate the
              page afterwards with the Rotate tool — it is one click and does not touch the pixels.
            </p>
          </details>
          <details>
            <summary>Can I convert HEIC from an iPhone?</summary>
            <p>
              Not directly. Set the camera to Most Compatible to get JPG, or export the photos as JPEG
              from the Photos app first.
            </p>
          </details>
          <details>
            <summary>Can I combine JPG and PNG in one PDF?</summary>
            <p>
              Yes, in any order. PNG is kept lossless; JPEG is embedded without re-encoding.
            </p>
          </details>
          <details>
            <summary>Is there a limit on how many images?</summary>
            <p>
              No fixed limit — memory is the practical ceiling. Fifty phone photos convert in a couple
              of seconds on a laptop and may strain a low-end phone.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — combine the result with existing PDFs.
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a> — fix sideways phone photos.
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/how-to-convert-jpg-to-pdf">How to convert JPG to PDF</a> — desktop alternatives.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
