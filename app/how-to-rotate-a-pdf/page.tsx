import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Rotate a PDF (Free, No Software to Install)",
  description:
    "Turn a sideways or upside-down PDF right-side up — on a Mac with Preview, with Adobe Acrobat, or in any browser. Learn the difference between a temporary view rotation and a saved one.",
  alternates: { canonical: "/how-to-rotate-a-pdf" },
  openGraph: {
    title: "How to Rotate a PDF (Free, No Software to Install)",
    description:
      "Fix a sideways PDF permanently — Preview on Mac, Acrobat, or a private browser tool. No install, no upload.",
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
      name: "How do I rotate a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On a Mac, open the PDF in Preview, select the pages in the thumbnail sidebar, and choose Tools → Rotate Left/Right; then Save. On any device, open the PDFSnip rotate tool in your browser, pick 90° or 180°, and download — no account and no install.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my PDF rotate back when I reopen it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many viewers offer a temporary 'view rotation' that is not saved into the file. The page looks right while the document is open, but the saved PDF keeps its original orientation. To make the rotation permanent, use a tool that writes the new angle into the file — Preview's Save, or the PDFSnip rotate tool.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rotate only some pages, not the whole document?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In Preview, select just the thumbnails you want before rotating. In PDFSnip, the rotation is applied to the pages you select (or all pages if you leave the selection empty), so mixed-orientation documents are easy to fix page by page.",
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
          Turn a sideways or upside-down PDF right-side up — no software to install, and nothing uploaded.
        </p>
      </div>

      <article className="content">
        <p>
          A scanner, a phone camera, or an exported spreadsheet can all leave a PDF at the wrong angle.
          The fix is simple, but there is one trap worth knowing first: some programs only rotate the
          <i> view</i>, not the file. If your PDF &quot;flips back&quot; when you reopen it, you used a
          temporary rotation. Below are the ways to rotate a PDF <b>permanently</b>.
        </p>

        <h2>Method 1 — Preview on Mac (free, Mac-only)</h2>
        <ol className="steps">
          <li>
            Open the PDF in <b>Preview</b>.
          </li>
          <li>
            Show the thumbnail sidebar: <b>View → Thumbnails</b>.
          </li>
          <li>
            Select the pages to rotate (click one, or Shift-click a range).
          </li>
          <li>
            Choose <b>Tools → Rotate Left</b> or <b>Rotate Right</b> (or use ⌘L / ⌘R).
          </li>
          <li>
            Press <b>Save</b> — the new orientation is written into the file.
          </li>
        </ol>
        <p>
          <i>Note:</i> this is Mac-only. The toolbar rotate button rotates the view only until you
          Save, which is exactly the trap above.
        </p>

        <h2>Method 2 — Adobe Acrobat (paid subscription)</h2>
        <ol className="steps">
          <li>
            Open the PDF in Acrobat and switch to <b>Organize Pages</b>.
          </li>
          <li>
            Select the page thumbnails you want to turn.
          </li>
          <li>
            Click the <b>Rotate</b> icon and choose the direction.
          </li>
          <li>
            Save the file.
          </li>
        </ol>
        <p>
          <i>Note:</i> the desktop app saves the rotation locally; the Acrobat web tool uploads your
          file first — avoid it for confidential documents. Acrobat also requires a paid plan.
        </p>

        <h2>Method 3 — PDFSnip, in any browser (free + private)</h2>
        <ol className="steps">
          <li>
            Open the <a href="/rotate-pdf">PDFSnip rotate tool</a>.
          </li>
          <li>
            Add your PDF — it opens locally on your device.
          </li>
          <li>
            Pick <b>90°</b> or <b>180°</b>, and choose which pages to rotate (or all).
          </li>
          <li>
            Click <b>Rotate</b> — a correctly oriented PDF downloads at original quality.
          </li>
        </ol>
        <p>
          This works on Windows, Mac, Linux, iOS and Android with no install, and your file is never
          uploaded.
        </p>

        <h2>Quick comparison</h2>
        <ul>
          <li>
            <b>Cost:</b> Preview and PDFSnip are free; Acrobat requires a subscription.
          </li>
          <li>
            <b>Platform:</b> Preview is Mac-only; Acrobat and PDFSnip work across devices.
          </li>
          <li>
            <b>Privacy:</b> Preview and PDFSnip process locally; cloud rotate sites upload your file.
          </li>
          <li>
            <b>Gotcha:</b> a view-only rotation is not saved — make sure you actually Save or download.
          </li>
        </ul>

        <h2>Which method should you pick?</h2>
        <p>
          On a Mac, <b>Preview</b> is the fastest local option. If you want it to work on any device,
          need no install, and guarantee the file never leaves your machine, use{" "}
          <a href="/rotate-pdf">PDFSnip</a>. Avoid cloud rotate tools for contracts, tax forms or
          medical records.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I rotate a PDF for free?</summary>
            <p>
              On a Mac, open the PDF in Preview, select the pages in the thumbnail sidebar, and choose
              Tools → Rotate Left/Right; then Save. On any device, open the PDFSnip rotate tool in your
              browser, pick 90° or 180°, and download — no account and no install.
            </p>
          </details>
          <details>
            <summary>Why does my PDF rotate back when I reopen it?</summary>
            <p>
              Many viewers offer a temporary &quot;view rotation&quot; that is not saved into the
              file. The page looks right while the document is open, but the saved PDF keeps its
              original orientation. To make the rotation permanent, use a tool that writes the new
              angle into the file — Preview&apos;s Save, or the PDFSnip rotate tool.
            </p>
          </details>
          <details>
            <summary>Can I rotate only some pages, not the whole document?</summary>
            <p>
              Yes. In Preview, select just the thumbnails you want before rotating. In PDFSnip, the
              rotation is applied to the pages you select (or all pages if you leave the selection
              empty), so mixed-orientation documents are easy to fix page by page.
            </p>
          </details>
        </div>

        <h2>Related free tools</h2>
        <ul>
          <li>
            <a href="/rotate-pdf">Rotate a PDF (the tool)</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
