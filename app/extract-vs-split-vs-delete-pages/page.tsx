import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract vs Split vs Delete: PDF Page Operations Explained",
  description:
    "Extract, split and delete sound similar but produce very different results. A clear comparison with real-world examples, so you pick the right PDF page operation the first time.",
  alternates: { canonical: "/extract-vs-split-vs-delete-pages" },
  openGraph: {
    title: "Extract vs Split vs Delete: Which PDF Page Operation Do You Need?",
    description: "Three operations, three different outputs. A practical comparison with examples.",
    url: "/extract-vs-split-vs-delete-pages",
    type: "article",
  },
};

export default function CompareGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Extract vs Split vs Delete</h1>
        <p className="sub">Three operations, three different outputs. Here&apos;s how to pick the right one.</p>
      </div>

      <article className="content">
        <p>
          Most confusion around PDF page tools comes from these three words being used
          interchangeably. They are not the same operation, and choosing the wrong one wastes time.
          Here is the difference in one table:
        </p>

        <h2>The one-table summary</h2>
        <ul>
          <li>
            <b>Extract</b> — copies chosen pages into <b>one new PDF</b>. Original untouched. Output:
            1 file.
          </li>
          <li>
            <b>Split</b> — divides a PDF into <b>several new PDFs</b>. Output: many files.
          </li>
          <li>
            <b>Delete</b> — removes chosen pages, keeps the rest as <b>one new PDF</b>. Output: 1
            file.
          </li>
        </ul>

        <h2>Real-world scenarios</h2>

        <h3>“I need pages 5–8 of a 200-page contract to send to my lawyer.”</h3>
        <p>
          <b>Extract.</b> You want a single small file containing just those pages. Use{" "}
          <a href="/">Extract Pages</a> and type <b>5-8</b>.
        </p>

        <h3>“I scanned 40 invoices and each one needs to be filed separately.”</h3>
        <p>
          <b>Split.</b> You want 40 separate PDFs. Use <a href="/split-pdf">Split PDF</a> in
          &quot;one file per page&quot; mode — every result downloads automatically.
        </p>

        <h3>“This report has 12 pages of appendices I&apos;m not allowed to share.”</h3>
        <p>
          <b>Delete.</b> You want the document to stay whole, minus those pages. Use{" "}
          <a href="/delete-pages-from-pdf">Delete Pages</a> and select the appendix range.
        </p>

        <h3>“I need to send 60 pages but the portal only accepts 10 MB.”</h3>
        <p>
          Neither extract, split nor delete directly — this is a <b>compression</b> job. That said,
          if you only truly need 10 of the 60 pages, extract first; a smaller page count usually gets
          you under the limit anyway.
        </p>

        <h2>The mental model that makes it stick</h2>
        <p>Think of a PDF as a binder:</p>
        <ul>
          <li>
            <b>Extract</b> = photocopy a few sheets into a new binder.
          </li>
          <li>
            <b>Split</b> = take the binder apart into several binders.
          </li>
          <li>
            <b>Delete</b> = shred a few sheets and keep the binder.
          </li>
        </ul>

        <h2>Does any of this change the original file?</h2>
        <p>
          No — and that surprises people. All three operations produce <b>new files</b>; your
          original PDF stays exactly as it was on disk. So there is no risk in experimenting. The only
          thing to double-check is that you selected the right pages before downloading.
        </p>

        <h2>Quality: copied vs re-rendered</h2>
        <p>
          There is one more technical difference worth knowing. Some methods (browser print-to-PDF,
          some desktop apps) <b>re-render</b> pages — they redraw everything, which can soften scans
          and flatten form fields. Others, including <a href="/">PDFSnip</a>, <b>copy</b> the
          original page objects byte-for-byte: text stays selectable, images keep full resolution, and
          the output looks identical to the source. When a document is legal, medical, or scanned,
          always prefer a tool that copies.
        </p>

        <h2>Try each operation free</h2>
        <ul>
          <li>
            <a href="/">Extract pages into one PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into many files</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/extract-pages-from-pdf-in-chrome">Extract in Chrome</a> ·{" "}
            <a href="/extract-pages-from-pdf-on-mac">Extract on Mac</a>
          </li>
        </ul>
      </article>
    </main>
  );
}
