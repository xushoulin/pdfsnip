import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Split a PDF — 5 Methods, Plus Splitting by Chapter or Size",
  description:
    "Split a PDF into separate files with Preview, Acrobat, the browser, qpdf or pdftk. Includes how to find chapter boundaries from bookmarks, and how to hit a file size limit without re-compressing.",
  alternates: { canonical: "/how-to-split-a-pdf" },
  openGraph: {
    title: "How to Split a PDF — 5 Methods Compared",
    description:
      "One file per page, per chapter or per size limit — with the method that fits each case.",
    url: "/how-to-split-a-pdf",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a PDF into separate files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a browser tool, choose one file per page, a file every N pages, or custom ranges and click Split. In Preview on a Mac, select pages in the thumbnail sidebar and drag them out. On the command line, qpdf --split-pages=1 in.pdf out.pdf writes one file per page.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find the page numbers where chapters start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the PDF in a reader and show the bookmarks or outline panel. Each bookmark points at a page position, and the reader shows that page number when you click it. Note the start of each chapter, convert them to ranges such as 1-12, 13-28, and split with custom ranges.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split a PDF so each part stays under a size limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not by asking for a target size, because page sizes vary wildly. Split by page count instead and check the results: a 40 MB scan of 200 pages averages 200 KB per page, so chunks of 50 pages land near 10 MB. For upload limits, splitting never re-compresses, so the total size stays the same however you divide it.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the browser block my split into many files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Triggering dozens of downloads at once looks like abuse to browsers. Choose Allow when prompted, or split in batches of 50 pages so each run produces fewer files.",
      },
    },
    {
      "@type": "Question",
      name: "Does splitting a PDF reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pages are copied as objects rather than re-rendered, so text stays selectable and images keep their original resolution. Only print-to-PDF re-renders, and that is a different operation.",
      },
    },
  ],
};

export default function SplitGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Split a PDF</h1>
        <p className="sub">
          Five methods, plus how to split at chapter boundaries or around a file size limit.
        </p>
      </div>

      <article className="content">
        <p className="byline">Last reviewed November 2026</p>

        <p>
          Splitting produces <i>several</i> files, which is what separates it from extracting pages.
          The method you pick should depend less on the software you have and more on how the
          boundaries are defined: by count, by chapter, or by a size limit someone else imposed.
        </p>

        <h2>Method 1 — A browser tool, with three split modes</h2>
        <p>
          The <a href="/split-pdf">split tool here</a> covers the three common cases in one place: one
          file per page, a file every N pages, or custom ranges you type. Pages are copied locally, so
          nothing is uploaded, and the output files are named after the source document plus their
          page range.
        </p>
        <p>
          Choose custom ranges when the boundaries follow the content — that is the mode that saves
          the most time, because it does the whole document in one pass instead of one run per chunk.
        </p>

        <h2>Method 2 — Preview on macOS, by dragging pages out</h2>
        <ol className="steps">
          <li>
            Open the PDF and show thumbnails (<span className="kbd">⌥⌘2</span>).
          </li>
          <li>
            Select the pages for the first output — click, then <span className="kbd">⇧</span>-click
            for a range.
          </li>
          <li>Drag the selection to the Desktop. A new PDF is written.</li>
          <li>Repeat for each chunk, renaming as you go.</li>
        </ol>
        <p>
          Fine for three or four chunks, painful for twenty. Preview has no batch split, so the
          manual repetition is the limitation rather than the software.
        </p>

        <h2>Method 3 — Acrobat</h2>
        <p>
          <b>Tools → Organize Pages → Split</b> offers split by number of pages, by file size, and by
          top-level bookmarks. That last option is the one worth paying attention to: it reads the
          document outline and produces one file per chapter without you entering a single page number.
          The desktop app does this locally; the web version uploads the file.
        </p>

        <h2>Method 4 — qpdf on the command line</h2>
        <pre className="tbl-wrap">
          <code className="inline">
            {`# one file per page -> page-01.pdf, page-02.pdf ...
qpdf --split-pages=1 in.pdf page.pdf

# a file every 10 pages -> chunk-01.pdf, chunk-02.pdf ...
qpdf --split-pages=10 in.pdf chunk.pdf

# specific ranges, one output each
qpdf in.pdf --pages . 1-12 -- part1.pdf
qpdf in.pdf --pages . 13-28 -- part2.pdf`}
          </code>
        </pre>
        <p>
          qpdf never re-renders, so this is the fastest and most faithful option — and the only one
          that loops cleanly over a folder of files.
        </p>

        <h2>Method 5 — pdftk</h2>
        <pre className="tbl-wrap">
          <code className="inline">{`pdftk in.pdf burst output page-%02d.pdf`}</code>
        </pre>
        <p>
          <code className="inline">burst</code> splits into single pages;{" "}
          <code className="inline">cat 1-12 output part1.pdf</code> handles ranges. Same caveat as
          elsewhere: pdftk is no longer maintained upstream.
        </p>

        <h2>Splitting at chapter boundaries</h2>
        <p>
          The hard part is not the split, it is finding the page numbers. Do it from the outline:
        </p>
        <ol className="steps">
          <li>
            Open the PDF in a reader and show the <b>bookmarks or outline panel</b> (in most readers,
            a sidebar tab).
          </li>
          <li>Click each chapter bookmark. The reader jumps to the page and displays its number.</li>
          <li>
            Write down the starts: 1, 13, 29, 45. Turn them into ranges —{" "}
            <code className="inline">1-12, 13-28, 29-44, 45-z</code>.
          </li>
          <li>Split once with all the ranges.</li>
        </ol>
        <p>
          If the document has no bookmarks, the table of contents pages usually carry printed page
          numbers — but those are often offset from the physical page by the front matter. Check one:
          if printed page 1 is the fifth sheet, every number needs +4.
        </p>

        <h2>Splitting to fit a size limit</h2>
        <p>
          A portal that rejects files over 10 MB is the usual reason people split. Two things are worth
          knowing before you start.
        </p>
        <p>
          First, <b>splitting does not reduce total size</b>. It redistributes the same content across
          more files, plus a small per-file overhead. If the goal is a smaller document, splitting is
          the wrong tool — compression is.
        </p>
        <p>
          Second, <b>pages are not equal in size</b>. A 40 MB scan of 200 pages averages 200 KB per
          page, so 50-page chunks land near 10 MB — close enough, but a chunk with full-page colour
          images can be three times that. Split, check the largest output, and adjust the chunk size
          rather than assuming the average holds.
        </p>
        <div className="note">
          <b>A quick estimate.</b> Total size ÷ page count × pages per chunk ≈ chunk size. Multiply by
          1.3 for a safety margin on documents with mixed content.
        </div>

        <h2>What a split costs you</h2>
        <ul>
          <li>
            <b>Bookmarks.</b> The outline points at page positions in the original, so the pieces have
            none. A 40-chapter manual split into 40 files loses its navigation entirely.
          </li>
          <li>
            <b>Cross-references.</b> A &ldquo;see page 37&rdquo; link in page 12 now points outside
            its own file.
          </li>
          <li>
            <b>Continuous numbering.</b> Each file starts at internal page 1, even when the printed
            number says 41.
          </li>
          <li>
            <b>Digital signatures.</b> Any rewrite invalidates them, in every tool.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I split a PDF into separate files?</summary>
            <p>
              Browser tool with three modes, Preview drag-and-drop, Acrobat&apos;s Split command, or{" "}
              <code className="inline">qpdf --split-pages=1 in.pdf out.pdf</code>.
            </p>
          </details>
          <details>
            <summary>How do I find where chapters start?</summary>
            <p>
              Click through the bookmarks panel in a reader and note the page each one lands on, then
              build ranges. If there are no bookmarks, use the printed contents page and correct for
              front-matter offset.
            </p>
          </details>
          <details>
            <summary>Can I split so each part stays under a size limit?</summary>
            <p>
              Split by page count and measure the largest output — page sizes vary too much to promise
              an exact target. And remember the total stays the same; splitting is not compression.
            </p>
          </details>
          <details>
            <summary>Why does the browser block many downloads?</summary>
            <p>
              Dozens of simultaneous downloads look like abuse. Allow them when prompted, or split in
              batches of about 50 pages.
            </p>
          </details>
          <details>
            <summary>Does splitting reduce quality?</summary>
            <p>
              No. Pages are copied as objects, not re-rendered.
            </p>
          </details>
        </div>

        <h2>Related</h2>
        <ul>
          <li>
            <a href="/split-pdf">Split a PDF</a> — the tool, with all three modes.
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a> — when you need one file, not many.
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — the reverse.
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">Extract vs split vs delete</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
