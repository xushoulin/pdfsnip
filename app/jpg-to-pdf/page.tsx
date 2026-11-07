import type { Metadata } from "next";
import ImageToPdfTool from "../../components/ImageToPdfTool";

export const metadata: Metadata = {
  title: "JPG to PDF — Convert Images to PDF Free, No Upload",
  description:
    "Convert JPG and PNG images to a single PDF in seconds. Reorder pages, choose A4 or US Letter, set margins. 100% in your browser — your photos are never uploaded.",
  alternates: { canonical: "/jpg-to-pdf" },
  openGraph: {
    title: "JPG to PDF — Free & Private",
    description:
      "Turn JPG/PNG images into one PDF: drag, reorder, convert. No upload, no signup, no watermark.",
    url: "/jpg-to-pdf",
    type: "website",
  },
};

const faq = [
  {
    q: "How do I convert JPG to PDF for free?",
    a: "Drag your JPG (or PNG) images into the box above, arrange them in the order you want, and click Convert to PDF. The file downloads immediately. There is no signup, no watermark and no upload — everything runs in your browser.",
  },
  {
    q: "Can I combine multiple images into one PDF?",
    a: "Yes. Add as many JPG or PNG images as you like — each image becomes one page in the output PDF, in the order shown in the list. Use the arrows to reorder before converting.",
  },
  {
    q: "Does converting JPG to PDF reduce image quality?",
    a: "No. Your images are embedded into the PDF at their original resolution — PDFSnip does not recompress or resample them. The PDF pages simply act as a container, so what you see in the PDF is pixel-for-pixel your original photo.",
  },
  {
    q: "What page size should I choose: A4, Letter or fit to image?",
    a: "Choose A4 or US Letter when you plan to print — the image is scaled to fit inside the page with even margins. Choose Fit page to image when the PDF is for on-screen use and you want each page to match the image exactly, with no white borders.",
  },
  {
    q: "Can I convert a PNG or a mix of JPG and PNG files?",
    a: "Yes. PDFSnip accepts both JPG and PNG in the same batch and handles transparency in PNGs correctly. Other formats (WebP, HEIC, GIF) need to be saved as JPG or PNG first — on most phones you can do this from the share or export menu.",
  },
  {
    q: "Is it safe to convert private photos here?",
    a: "Yes. There is no server involved: your images are read and packaged into a PDF entirely inside your browser tab. Nothing is uploaded, stored or logged, which makes it safe for ID documents, receipts and personal photos.",
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

export default function JpgToPdfPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>JPG to PDF Converter</h1>
        <p className="sub">
          Turn JPG and PNG images into a single PDF — reorder pages, pick a page size, download.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Photos never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <ImageToPdfTool />
      </section>

      <article className="content">
        <h2>Why convert JPG images to a PDF?</h2>
        <p>
          A folder of photos is awkward to share, print or submit — every recipient has to open
          files one by one, and print order is anyone&apos;s guess. A single PDF fixes that: one
          attachment, a fixed page order, and a layout that prints exactly as you set it. It is the
          format most portals, schools and government offices actually accept. Common uses:
        </p>
        <ul>
          <li>
            <b>Scanned documents</b> — phone photos of contracts, IDs, receipts or forms, bundled
            into one submittable file.
          </li>
          <li>
            <b>Application portals</b> — many visa, school and job portals accept PDF only, not
            loose images.
          </li>
          <li>
            <b>Printing photos</b> — A4/Letter sizing with margins means predictable output on any
            printer.
          </li>
          <li>
            <b>Receipts and expenses</b> — one PDF per trip or month instead of thirty loose
            pictures.
          </li>
          <li>
            <b>Design and artwork</b> — deliver mockups as a single ordered document rather than a
            zip of images.
          </li>
        </ul>

        <h2>How to convert JPG to PDF</h2>
        <ol className="steps">
          <li>
            <b>Add your images</b> — drag JPG or PNG files into the box above, or click to browse.
            They stay on your device; nothing is uploaded.
          </li>
          <li>
            <b>Set the page order</b> — each image becomes one page. Use the ↑ ↓ arrows to arrange
            them exactly how you want.
          </li>
          <li>
            <b>Choose the page setup</b> — A4 or US Letter with a margin for printing, or
            &ldquo;Fit page to image&rdquo; for borderless pages.
          </li>
          <li>
            <b>Click Convert to PDF</b> — the finished PDF downloads instantly.
          </li>
        </ol>

        <h2>A4, US Letter, or fit-to-image?</h2>
        <p>
          It depends on where the PDF is going. <b>A4</b> is the standard almost everywhere outside
          North America; <b>US Letter</b> is the default in the United States and Canada. With
          either, your image is scaled down (never stretched) to sit inside the page with an even
          margin — the safe choice for printing. <b>Fit page to image</b> skips the standard page
          entirely and sizes each page to the photo itself, which is ideal for portfolios and
          on-screen reading where white borders would just waste space.
        </p>

        <h2>Convert images without uploading them anywhere</h2>
        <p>
          Most online converters ask you to upload your images to a server, convert them there, and
          trust that the files are deleted afterwards. That is a real concern when the images are ID
          cards, medical records, signed contracts or family photos. PDFSnip takes a different
          approach: the conversion code runs entirely in your browser tab using the same engine
          (pdf-lib) that desktop tools use. Your images never leave your device — you can even turn
          off the network after the page loads and the tool still works.
        </p>

        <h2>What about HEIC photos from an iPhone?</h2>
        <p>
          iPhones often save photos as HEIC rather than JPG. Browsers can&apos;t embed HEIC into a
          PDF directly, so convert it first: on the iPhone, open the photo, tap the share icon and
          choose an option that copies or saves it as JPG (or set Camera → Formats → Most
          Compatible for future shots). Then drop the JPG into PDFSnip. The same applies to WebP
          from Android screenshots — export or screenshot it as PNG first.
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
            <a href="/merge-pdf">Merge PDF files into one</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/how-to-convert-jpg-to-pdf">Guide: every way to turn images into a PDF</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
