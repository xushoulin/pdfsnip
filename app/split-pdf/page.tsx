import type { Metadata } from "next";
import PdfTool from "../../components/PdfTool";

export const metadata: Metadata = {
  title: "Split PDF Online Free — Separate Pages in Your Browser",
  description:
    "Split a PDF for free: one file per page, a file every N pages, or custom ranges you define. Processing happens in your browser — no upload, no signup, no watermark.",
  alternates: { canonical: "/split-pdf" },
  openGraph: {
    title: "Split PDF Online — Free & Private",
    description: "One file per page, every N pages, or your own ranges. Nothing is uploaded.",
    url: "/split-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a PDF into separate pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the file, choose One file per page and click Split. A 12-page document produces 12 PDFs named after the source file plus the page number. Your browser may ask once for permission to download multiple files.",
      },
    },
    {
      "@type": "Question",
      name: "Why did my browser block the downloads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a page triggers more than about ten downloads, Chrome and Edge show an Allow multiple downloads prompt. Choose Allow and the remaining files arrive. Splitting into hundreds of files is better done in batches using Custom ranges or A file every N pages.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split a PDF at specific chapters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you know the page numbers. Use Custom ranges and type the ranges separated by commas, such as 1-12, 13-24, 25-40. Each comma-separated range becomes one PDF. Reading the page numbers from the bookmarks panel of a PDF reader is the fastest way to find the boundaries.",
      },
    },
    {
      "@type": "Question",
      name: "Does splitting reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pages are copied as objects into new documents rather than re-rendered, so text stays selectable and images keep their original resolution.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between splitting and extracting pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Splitting produces many output files. Extracting produces exactly one file containing the pages you chose. If you need pages 5-8 of a contract as a single document, that is an extract, not a split.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a page limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No fixed limit. Memory is the limit: a 100-page file splits into 100 PDFs in a couple of seconds on a laptop. On a phone, splitting a 500-page scan into single pages can run out of memory, so split in batches instead.",
      },
    },
  ],
};

export default function SplitPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Split a PDF</h1>
        <p className="sub">
          One file per page, one file every N pages, or the exact ranges you type.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="split" />
      </section>

      <article className="content">
        <h2>Three ways to split, and when each one is right</h2>
        <p>
          &ldquo;Split&rdquo; covers three different jobs. Choosing the wrong mode is why splitting
          sometimes feels like more work than doing it by hand:
        </p>

        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Mode</th>
                <th>Output</th>
                <th>Use it when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>One file per page</b>
                </td>
                <td>
                  12-page input → 12 PDFs, named <code className="inline">report-page-1.pdf</code> and
                  so on.
                </td>
                <td>
                  You need to send individual pages — one signed page per recipient, or pages for a
                  slide deck.
                </td>
              </tr>
              <tr>
                <td>
                  <b>A file every N pages</b>
                </td>
                <td>
                  30-page input, N = 10 → 3 PDFs of 10 pages each.
                </td>
                <td>
                  An even chunking job: splitting a batch scan every 10 pages, or breaking a long
                  report into equal parts for review.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Custom ranges</b>
                </td>
                <td>
                  <code className="inline">1-12, 13-24, 25-40</code> → 3 PDFs, one per range.
                </td>
                <td>
                  Chapters, annexes, or any split where the boundaries follow the content rather than
                  a fixed count.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How to split a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your file</b> — it is read on your device and never uploaded.
          </li>
          <li>
            <b>Pick a split mode</b> from the options above and, if needed, enter the page count or
            ranges.
          </li>
          <li>
            <b>Click Split.</b> The files download one after another, named after the source document
            and the pages they contain. The original is untouched.
          </li>
        </ol>

        <h2>Why browsers block multiple downloads</h2>
        <p>
          If you split a 60-page file into single pages, the page tries to save 60 files. Chrome, Edge
          and Firefox all treat that as suspicious behaviour and either block the extra downloads or
          show a prompt asking whether to allow multiple files from this site. This is a browser
          safety feature, not a bug in the tool.
        </p>
        <p>
          What to do: click <b>Allow</b> when prompted. If you dismissed the prompt and nothing else
          arrived, check the download bubble for blocked items and allow the site, then re-run the
          split. For very large jobs, split in batches — pages 1-50, then 51-100 — which produces far
          fewer simultaneous downloads.
        </p>

        <div className="note">
          <b>Find your chapter boundaries first.</b> Open the PDF in any reader, show the bookmarks or
          outline panel, and note the page number each chapter starts on. Then type the ranges once
          instead of splitting, checking and re-splitting.
        </div>

        <h2>Split vs extract vs delete</h2>
        <p>
          These get confused constantly, so here is the short version. <b>Split</b> makes many files.{" "}
          <b>Extract</b> makes exactly one file containing the pages you picked, in the order you
          picked them. <b>Delete</b> makes one file that is a copy of the original minus some pages.
        </p>
        <p>
          A practical example: a 200-page board pack where you must send pages 40-52 to one person and
          pages 90-96 to another. That is two extracts, not one split. Splitting it into 200 files and
          hunting for the right ones is the slow path.
        </p>

        <h2>What you lose when you split</h2>
        <p>
          Each output file is a standalone document, so anything shared across the original cannot be
          shared across the pieces:
        </p>
        <ul>
          <li>
            <b>Bookmarks</b> — the outline points at page indices in the original document. The pieces
            have no outline, so a 40-chapter manual split into 40 files loses its navigation.
          </li>
          <li>
            <b>Cross-page links</b> — a &ldquo;see page 37&rdquo; link in page 12 now points outside
            its own file. The link object may survive; the destination does not.
          </li>
          <li>
            <b>Continuous page numbering</b> — each file starts at page 1 internally, even if the
            printed page numbers say 41. Text search still works, but page references change meaning.
          </li>
          <li>
            <b>Total size</b> — shared fonts and images are duplicated in every piece that needs them.
            Twenty pieces of the same text document can add up to more than the original.
          </li>
        </ul>
        <p>
          If those matter, the right answer is to keep the original and add page numbers or a table of
          contents rather than split it.
        </p>

        <h2>Good uses for splitting</h2>
        <ul>
          <li>
            <b>Batch scans</b> — a scanner that produces one 80-page PDF from a stack of separate
            documents. Split every N pages, where N is the length of one document, then rename.
          </li>
          <li>
            <b>Confidentiality</b> — an internal report where one section must go to a client. Split
            out that section instead of sending a redacted original.
          </li>
          <li>
            <b>Forms and signatures</b> — a 30-page onboarding pack where each page needs a separate
            signature. One file per page is exactly the right output.
          </li>
          <li>
            <b>Upload limits</b> — a portal that rejects files over 10 MB. Splitting into chunks gets
            the document through without re-compressing it.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I split a PDF into separate pages?</summary>
            <p>
              Choose <b>One file per page</b> and click Split. Allow the multiple-download prompt if
              your browser shows one.
            </p>
          </details>
          <details>
            <summary>Why did my browser block the downloads?</summary>
            <p>
              Triggering dozens of downloads at once looks like abuse to browsers. Choose Allow, or
              split in smaller batches to keep the file count per run low.
            </p>
          </details>
          <details>
            <summary>Can I split at chapter boundaries?</summary>
            <p>
              Yes — read the page numbers from the bookmarks panel of a reader, then use Custom ranges
              such as <code className="inline">1-12, 13-24, 25-40</code>.
            </p>
          </details>
          <details>
            <summary>Does splitting reduce quality?</summary>
            <p>
              No. Pages are copied as objects, not re-rendered or re-compressed.
            </p>
          </details>
          <details>
            <summary>Can I split a password-protected PDF?</summary>
            <p>
              You need the password to open it. Once opened, splitting works normally and the password
              is never transmitted, because the processing is local.
            </p>
          </details>
          <details>
            <summary>Do the output files keep the original file name?</summary>
            <p>
              Yes, with the page range appended — <code className="inline">contract-pages-3-8.pdf</code>{" "}
              — so the pieces stay recognisable next to the source.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF</a> — one file, chosen pages.
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — the reverse operation.
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/add-page-numbers-to-pdf">Add page numbers to a PDF</a>
          </li>
          <li>
            <a href="/how-to-split-a-pdf">How to split a PDF</a> — desktop and command-line
            alternatives.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
