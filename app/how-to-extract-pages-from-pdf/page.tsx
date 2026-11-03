import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Extract Pages from a PDF (Free, No Software to Install)",
  description:
    "Pull chosen pages out of a PDF into a new file — with Chrome's print-to-PDF, desktop software, or a private browser tool. Learn why a copy-based method keeps text sharp and scans clear.",
  alternates: { canonical: "/how-to-extract-pages-from-pdf" },
  openGraph: {
    title: "How to Extract Pages from a PDF (Free, No Software to Install)",
    description:
      "Copy the pages you need into a new PDF — Chrome, desktop apps, or a private browser tool. No install, no upload.",
    url: "/how-to-extract-pages-from-pdf",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I extract pages from a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cleanest way is a tool that copies the original pages into a new file. In PDFSnip, open your PDF, type the page range (for example 5-8), and download — text stays selectable and scans keep full resolution. Desktop apps like Preview or Acrobat can do it too, but need to be installed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I extract pages without Adobe Acrobat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. On a Mac, Preview exports a selection of pages. On any device, PDFSnip extracts pages in the browser with no account and no install. You never need a paid Acrobat subscription for this.",
      },
    },
    {
      "@type": "Question",
      name: "Does extracting pages reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the method. Print-to-PDF (including Chrome's) re-renders each page, which can soften scans and flatten form fields. A copy-based method like PDFSnip transfers the original page objects, so output is identical to the source — best for legal, medical, or scanned documents.",
      },
    },
  ],
};

export default function ExtractGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Extract Pages from a PDF</h1>
        <p className="sub">
          Pull the pages you need into a new file — no software to install, and nothing uploaded.
        </p>
      </div>

      <article className="content">
        <p>
          Extracting copies a few chosen pages into a brand-new PDF, leaving your original untouched.
          It is the right move when you need to send someone <i>part</i> of a document — pages 5–8 of
          a contract, a single chapter of a report, or one form from a 100-page packet. Here are the
          main ways to do it, and the quality difference that matters.
        </p>

        <h2>Method 1 — Chrome print-to-PDF (free, but re-renders)</h2>
        <ol className="steps">
          <li>
            Open the PDF in <b>Google Chrome</b>.
          </li>
          <li>
            Press <b>Ctrl/Cmd + P</b> and choose <b>Save as PDF</b> as the destination.
          </li>
          <li>
            Under <b>Pages</b>, enter the range you want (for example <b>5-8</b>).
          </li>
          <li>
            Click <b>Save</b>.
          </li>
        </ol>
        <p>
          <i>Note:</i> Chrome <b>re-renders</b> the pages — text usually stays selectable, but scans
          can soften and some form fields flatten. It also cannot pick non-contiguous pages in one go
          (you would save multiple times). See the{" "}
          <a href="/extract-pages-from-pdf-in-chrome">Chrome-specific walkthrough</a> for details.
        </p>

        <h2>Method 2 — Preview (Mac) or Adobe Acrobat (desktop)</h2>
        <ol className="steps">
          <li>
            In <b>Preview</b>, select the thumbnails you want and drag them to the desktop, or{" "}
            <b>File → Export as PDF</b> for the selection.
          </li>
          <li>
            In <b>Acrobat</b>, use <b>Organize Pages → Extract</b>, choose the range, and save.
          </li>
        </ol>
        <p>
          <i>Note:</i> Preview is Mac-only and free; Acrobat needs a paid plan. Both keep quality
          because they copy rather than re-render.
        </p>

        <h2>Method 3 — PDFSnip, in any browser (free + private)</h2>
        <ol className="steps">
          <li>
            Open the <a href="/">PDFSnip extract tool</a>.
          </li>
          <li>
            Add your PDF — it opens locally on your device.
          </li>
          <li>
            Type the range, including non-contiguous sets like <b>1-3, 7, 10-12</b>.
          </li>
          <li>
            Click <b>Extract</b> — one new PDF downloads, copied byte-for-byte at original quality.
          </li>
        </ol>
        <p>
          This works on Windows, Mac, Linux, iOS and Android with no install, and your file is never
          uploaded. It is the only method here that handles scattered pages in a single step.
        </p>

        <h2>Copy-based vs re-rendered — why it matters</h2>
        <ul>
          <li>
            <b>Copy-based (Preview, Acrobat, PDFSnip):</b> the original page objects move into the
            new file. Text stays selectable, images keep full resolution.
          </li>
          <li>
            <b>Re-rendered (Chrome print-to-PDF, some online tools):</b> pages are redrawn, which can
            soften scans and flatten interactive elements.
          </li>
        </ul>
        <p>
          For legal, medical, or scanned documents, always prefer a copy-based method.
        </p>

        <h2>Which method should you pick?</h2>
        <p>
          Need a quick contiguous range and already in Chrome? Print-to-PDF is handy, but mind the
          quality trade-off. Want the best fidelity, support for scattered pages, and guaranteed
          no-upload on any device? Use <a href="/">PDFSnip</a>. Mac users can also use{" "}
          <a href="/extract-pages-from-pdf-on-mac">Preview</a>, which is free and local.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I extract pages from a PDF?</summary>
            <p>
              The cleanest way is a tool that copies the original pages into a new file. In PDFSnip,
              open your PDF, type the page range (for example 5-8), and download — text stays
              selectable and scans keep full resolution. Desktop apps like Preview or Acrobat can do
              it too, but need to be installed.
            </p>
          </details>
          <details>
            <summary>Can I extract pages without Adobe Acrobat?</summary>
            <p>
              Yes. On a Mac, Preview exports a selection of pages. On any device, PDFSnip extracts
              pages in the browser with no account and no install. You never need a paid Acrobat
              subscription for this.
            </p>
          </details>
          <details>
            <summary>Does extracting pages reduce quality?</summary>
            <p>
              It depends on the method. Print-to-PDF (including Chrome&apos;s) re-renders each page,
              which can soften scans and flatten form fields. A copy-based method like PDFSnip
              transfers the original page objects, so output is identical to the source — best for
              legal, medical, or scanned documents.
            </p>
          </details>
        </div>

        <h2>Related free tools and guides</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF (the tool)</a>
          </li>
          <li>
            <a href="/extract-pages-from-pdf-in-chrome">Extract in Chrome</a>
          </li>
          <li>
            <a href="/extract-pages-from-pdf-on-mac">Extract on Mac with Preview</a>
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">Extract vs Split vs Delete</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
