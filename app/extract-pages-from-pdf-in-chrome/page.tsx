import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Extract Pages from a PDF in Chrome (Free, No Install)",
  description:
    "A step-by-step guide to extracting pages from any PDF using Google Chrome's built-in print dialog — plus the faster way when you need non-consecutive pages like 3, 7 and 9-12.",
  alternates: { canonical: "/extract-pages-from-pdf-in-chrome" },
  openGraph: {
    title: "How to Extract Pages from a PDF in Chrome",
    description:
      "Chrome's print dialog can save a page range as a new PDF. Here's how, and when to use a dedicated tool instead.",
    url: "/extract-pages-from-pdf-in-chrome",
    type: "article",
  },
};

export default function ChromeGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Extract Pages from a PDF in Chrome</h1>
        <p className="sub">
          No software, no upload — Chrome&apos;s print dialog is a surprisingly capable page
          extractor.
        </p>
      </div>

      <article className="content">
        <p>
          If you have Google Chrome (or Edge, Brave, or any Chromium browser), you already have a
          basic PDF page extractor built in. It works by &quot;printing&quot; a page range to a new
          PDF file. It takes about 30 seconds and never uploads your document anywhere.
        </p>

        <h2>Step-by-step: extract pages with Chrome&apos;s print dialog</h2>
        <ol className="steps">
          <li>
            <b>Open the PDF in Chrome.</b> Drag the PDF file into a blank tab, or right-click the
            file → Open With → Google Chrome.
          </li>
          <li>
            <b>Open the print dialog.</b> Press <b>Ctrl+P</b> (Windows) or <b>Cmd+P</b> (Mac).
          </li>
          <li>
            <b>Set the destination.</b> In the Destination dropdown, choose <b>Save as PDF</b>.
          </li>
          <li>
            <b>Enter the page range.</b> Under Pages, select <b>Custom</b> and type the pages you
            want, for example <b>3-7</b> or <b>1, 4, 9-12</b>.
          </li>
          <li>
            <b>Save.</b> Click Save and choose where to store the new PDF. It contains only the pages
            you listed.
          </li>
        </ol>

        <h2>What Chrome&apos;s method is good at</h2>
        <ul>
          <li>It is free and requires nothing but the browser you already have.</li>
          <li>Everything happens on your computer — the file is never uploaded.</li>
          <li>It accepts custom ranges like <b>1, 4, 9-12</b> in one go.</li>
        </ul>

        <h2>The limitations you should know about</h2>
        <ul>
          <li>
            <b>Form fields get flattened.</b> Fillable PDFs (contracts, tax forms) lose their
            interactive fields after re-printing.
          </li>
          <li>
            <b>Pages are re-rendered, not copied.</b> Chrome re-draws each page, which can soften
            scanned images and slightly change text appearance.
          </li>
          <li>
            <b>No visual selection.</b> You need to know the page numbers in advance — there are no
            thumbnails to click.
          </li>
          <li>
            <b>Bookmarks and links</b> do not carry over.
          </li>
        </ul>

        <h2>When to use a dedicated extractor instead</h2>
        <p>
          If you are working with scanned documents, fillable forms, or you simply don&apos;t know the
          page numbers yet, a proper extraction tool copies the original pages byte-for-byte instead
          of re-rendering them. Our <a href="/">free Extract Pages tool</a> runs entirely in your
          browser (the file never leaves your device, just like Chrome), shows you every page as a
          clickable grid, and preserves original quality. It is the better fit when quality or
          convenience matters.
        </p>

        <h2>Verdict</h2>
        <p>
          For a quick one-off — &quot;grab pages 5 to 8 of this contract&quot; — Chrome&apos;s print
          dialog is genuinely good. For anything involving scans, forms, or visual page picking, use a
          tool that copies pages instead of re-printing them.
        </p>

        <h2>More guides</h2>
        <ul>
          <li>
            <a href="/extract-pages-from-pdf-on-mac">How to extract pages from a PDF on Mac (Preview)</a>
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">
              Extract vs split vs delete: which PDF page operation do you need?
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
