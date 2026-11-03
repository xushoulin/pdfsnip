import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Extract Pages from a PDF on Mac (Preview, Free)",
  description:
    "macOS Preview can pull pages out of any PDF with drag and drop — no extra software. Step-by-step guide, plus what to do when you need page ranges instead of thumbnails.",
  alternates: { canonical: "/extract-pages-from-pdf-on-mac" },
  openGraph: {
    title: "How to Extract Pages from a PDF on Mac",
    description:
      "Drag pages out of Preview's thumbnail sidebar to create a new PDF in seconds.",
    url: "/extract-pages-from-pdf-on-mac",
    type: "article",
  },
};

export default function MacGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Extract Pages from a PDF on Mac</h1>
        <p className="sub">
          macOS Preview has a hidden superpower: drag a thumbnail out, get a new PDF.
        </p>
      </div>

      <article className="content">
        <p>
          Every Mac ships with Preview, and Preview can do something most paid PDF editors advertise:
          pull individual pages out of a PDF with drag and drop. Here are the two best methods, and
          when to skip both.
        </p>

        <h2>Method 1: drag thumbnails out of Preview (the classic trick)</h2>
        <ol className="steps">
          <li>
            <b>Open the PDF in Preview.</b> Double-click it — Preview is the default PDF viewer on
            macOS.
          </li>
          <li>
            <b>Show the sidebar.</b> Menu bar → View → Thumbnails (or press <b>Cmd+Option+2</b>).
          </li>
          <li>
            <b>Select the pages you want.</b> Click a thumbnail; hold <b>Cmd</b> to pick several
            non-adjacent pages, or <b>Shift</b> for a range.
          </li>
          <li>
            <b>Drag them to your Desktop or a Finder folder.</b> Preview instantly creates a new PDF
            containing exactly those pages.
          </li>
        </ol>
        <p>
          The result is a genuine new PDF — original quality, no re-rendering, and form fields are
          preserved better than with browser print-to-PDF methods.
        </p>

        <h2>Method 2: print a page range from Preview</h2>
        <ol className="steps">
          <li>
            Open the PDF in Preview and press <b>Cmd+P</b>.
          </li>
          <li>
            In the print dialog, find the <b>Pages</b> field and type your range, e.g. <b>2-6</b> or{" "}
            <b>1, 5, 9</b>.
          </li>
          <li>
            Click the <b>PDF</b> dropdown in the bottom-left corner → <b>Save as PDF</b>.
          </li>
        </ol>
        <p>
          This is faster when you know the exact page numbers, but like Chrome&apos;s method it
          re-renders pages, so scans can lose a little crispness and fillable forms may flatten.
        </p>

        <h2>Dragging works in reverse, too</h2>
        <p>
          The same thumbnail sidebar is a two-way street: you can drag a PDF file <i>into</i> Preview&apos;s
          sidebar to merge documents, or drag pages between two open documents. For heavy merging jobs
          though, a dedicated <a href="/merge-pdf">merge tool</a> with reorder buttons is faster.
        </p>

        <h2>Limitations of the Preview workflow</h2>
        <ul>
          <li>
            It is Mac-only. Windows and Chromebook users need the Chrome print method or a web tool.
          </li>
          <li>No page ranges across multiple documents — one PDF at a time.</li>
          <li>No way to extract &quot;every page matching a pattern&quot; or batch-process many files.</li>
          <li>
            If the PDF is hundreds of pages long, scrolling the thumbnail strip to find page 147 gets
            old fast.
          </li>
        </ul>

        <h2>When a browser tool beats Preview</h2>
        <p>
          If you know your page numbers — or want to click them in a numbered grid — the{" "}
          <a href="/">PDFSnip Extract Pages tool</a> does in three clicks what Preview does in three
          drags, works on any OS, and like Preview it never uploads your file anywhere: everything
          runs locally in the browser.
        </p>

        <h2>More guides</h2>
        <ul>
          <li>
            <a href="/extract-pages-from-pdf-in-chrome">How to extract pages from a PDF in Chrome</a>
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">
              Extract vs split vs delete: which operation do you need?
            </a>
          </li>
          <li>
            <a href="/">Or jump straight to the free tool</a>
          </li>
        </ul>
      </article>
    </main>
  );
}
