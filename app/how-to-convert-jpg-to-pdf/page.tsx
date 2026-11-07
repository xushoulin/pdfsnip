import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Convert JPG to PDF — 3 Free Methods Compared",
  description:
    "Every practical way to turn JPG or PNG images into a PDF: in your browser (no upload), on Windows, on Mac and on your phone. Step-by-step, with privacy and quality compared.",
  alternates: { canonical: "/how-to-convert-jpg-to-pdf" },
  openGraph: {
    title: "How to Convert JPG to PDF — 3 Free Methods",
    description:
      "Browser, Windows, Mac and phone methods compared. Keep your photos private and your quality intact.",
    url: "/how-to-convert-jpg-to-pdf",
    type: "website",
  },
};

const faq = [
  {
    q: "What is the fastest way to convert JPG to PDF?",
    a: "A browser-based tool like PDFSnip is fastest for most people: drag the images in, reorder, click convert. There is nothing to install and, unlike most online converters, your images are never uploaded to a server.",
  },
  {
    q: "How do I convert JPG to PDF on Windows without extra software?",
    a: "Select the images in File Explorer, right-click and choose Print, then pick Microsoft Print to PDF as the printer and click Print. It works, but it re-renders the images (which can soften detail) and gives you little control over margins or page order beyond the print dialog.",
  },
  {
    q: "How do I convert JPG to PDF on a Mac?",
    a: "Open the images in Preview, select them all in the sidebar, then use File → Export as PDF. It is quick and offline, but Preview re-encodes the images and the export dialog offers no margin or per-page sizing control.",
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

export default function HowToConvertJpgToPdfPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Convert JPG to PDF</h1>
        <p className="sub">
          Three free ways to turn images into a PDF — and how they differ on privacy, quality and
          control.
        </p>
        <div className="badges">
          <span className="badge">No upload needed</span>
          <span className="badge">Windows · Mac · Phone</span>
          <span className="badge">Original quality</span>
        </div>
      </div>

      <article className="content">
        <h2>Method 1 — In your browser (recommended)</h2>
        <p>
          The fastest route for most people, and the only one that combines zero installation with
          zero upload. Our <a href="/jpg-to-pdf">JPG to PDF converter</a> runs entirely in your
          browser tab:
        </p>
        <ol className="steps">
          <li>
            Open the <a href="/jpg-to-pdf">JPG to PDF tool</a> and drop in your JPG or PNG images.
          </li>
          <li>Arrange the page order with the arrows — each image becomes one page.</li>
          <li>
            Pick a page size: A4 or US Letter with margins for printing, or fit-to-image for
            borderless pages.
          </li>
          <li>Click Convert to PDF. The file downloads immediately.</li>
        </ol>
        <p>
          Because the conversion happens on your own device, nothing is uploaded, queued or stored.
          The images are embedded at their original resolution — no recompression — so text in a
          scanned receipt stays as sharp as the photo you took.
        </p>

        <h2>Method 2 — On Windows (built-in)</h2>
        <p>Windows has a hidden converter inside the Print dialog:</p>
        <ol className="steps">
          <li>Select your images in File Explorer (Ctrl-click to pick several).</li>
          <li>Right-click and choose <b>Print</b>.</li>
          <li>
            In the printer dropdown, choose <b>Microsoft Print to PDF</b>.
          </li>
          <li>Pick a layout (full-page photo, or several per sheet), then click <b>Print</b>.</li>
          <li>Choose where to save the PDF.</li>
        </ol>
        <p>
          It works offline and needs no install, but it goes through the print pipeline: images are
          re-rendered (which can soften fine detail), and fine control over page order, orientation
          per image and exact margins is limited.
        </p>

        <h2>Method 3 — On Mac (Preview)</h2>
        <ol className="steps">
          <li>Open all your images at once in Preview.</li>
          <li>In the sidebar, select the thumbnails in the order you want.</li>
          <li>Choose <b>File → Export as PDF…</b> and save.</li>
        </ol>
        <p>
          Quick and offline, but Preview re-encodes the images during export (JPEG compression is
          applied again), and there is no way to set per-page margins or mix page sizes.
        </p>

        <h2>Method 4 — On your phone</h2>
        <p>
          On iPhone, select photos in the Photos app, tap the share icon and choose <b>Print</b>,
          then pinch-out on the preview thumbnail to turn it into a PDF you can save or share. On
          Android, open the images in Google Drive or your gallery app and use <b>Print → Save as
          PDF</b>. Handy in a pinch, but fiddly for more than a few images and with almost no
          layout control — if the photos are already on your computer, the browser method is far
          easier.
        </p>

        <h2>Which method should you use?</h2>
        <ul>
          <li>
            <b>Privacy-sensitive images</b> (IDs, medical, legal): the browser method — nothing
            leaves your device, and there is no server log to worry about.
          </li>
          <li>
            <b>Best quality</b>: the browser method — images are embedded at original resolution,
            not re-printed or re-encoded.
          </li>
          <li>
            <b>One quick image on Windows/Mac</b>: the built-in tools are fine when layout and
            sharpness don&apos;t matter.
          </li>
          <li>
            <b>Many images in a specific order</b>: the browser method — thumbnails, reordering and
            page-size control are built in.
          </li>
        </ul>

        <h2>Common pitfalls</h2>
        <ul>
          <li>
            <b>Quality loss</b> — methods that go through a &ldquo;print&rdquo; pipeline rasterise
            and recompress your images. If the text in a scan must stay crisp, embed the original
            images instead.
          </li>
          <li>
            <b>Wrong page order</b> — Explorer and Finder selection order is not always the order
            you expect. Check the order in the tool before converting.
          </li>
          <li>
            <b>Unexpected cropping</b> — &ldquo;fill page&rdquo; layouts crop image edges. Use a
            fit-with-margin layout when the whole image must be visible.
          </li>
          <li>
            <b>HEIC/WebP files</b> — iPhone HEIC and Android WebP are not JPG/PNG. Export them as
            JPG or PNG first, then convert.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <h2>Related</h2>
        <ul>
          <li>
            <a href="/jpg-to-pdf">JPG to PDF converter — the tool</a>
          </li>
          <li>
            <a href="/merge-pdf">Merge several PDFs into one</a>
          </li>
          <li>
            <a href="/add-page-numbers-to-pdf">Add page numbers to the finished PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF back into parts</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
