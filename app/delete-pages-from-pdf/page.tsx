import type { Metadata } from "next";
import PdfTool from "../../components/PdfTool";

export const metadata: Metadata = {
  title: "Delete Pages from PDF Free — Remove Pages in Your Browser",
  description:
    "Delete pages from a PDF for free. Click the pages to remove or type ranges like 2-4, 9. Runs 100% in your browser — no upload, no signup, no watermark.",
  alternates: { canonical: "/delete-pages-from-pdf" },
  openGraph: {
    title: "Delete Pages from PDF — Free & Private",
    description: "Remove unwanted pages without uploading the document anywhere.",
    url: "/delete-pages-from-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I delete pages from a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the file, click the page numbers you want gone (or type a range like 2-4, 9) and click Delete pages. A new copy of the document without those pages is downloaded; the original file on your disk is not modified.",
      },
    },
    {
      "@type": "Question",
      name: "Is deleting a page the same as redacting it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, and this distinction matters. Deleting a page removes it from the page tree, but text elsewhere in the document, document metadata, embedded attachments and hidden layers are untouched. If the document contains a sensitive name that appears on other pages, use a real redaction tool that removes the content itself.",
      },
    },
    {
      "@type": "Question",
      name: "Why did the file size barely change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because removing a page from the page tree does not remove the objects it referenced if other pages still use them — shared fonts, images and colour profiles stay. A 40 MB scan with one page deleted is still around 40 MB. To reduce size, the document has to be re-written with unused objects dropped, or the images re-compressed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I delete every page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The PDF specification requires at least one page in the page tree, so a document with zero pages is invalid and no reader will open it. If you need an empty-looking file, leave one page and replace its content with a blank page instead.",
      },
    },
    {
      "@type": "Question",
      name: "Do printed page numbers shift after deleting pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, unless the document uses page labels. Deleting page 3 makes the old page 4 become page 3, and any page number printed inside the content no longer matches the position. Rebuild page numbers with the Add page numbers tool after deleting.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe for confidential documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The file is never uploaded — it is processed by JavaScript inside your browser, so it cannot leave your device. That is a stronger guarantee than any cloud service can offer, because there is no server that could log it.",
      },
    },
  ],
};

export default function DeletePage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Delete Pages from PDF</h1>
        <p className="sub">Remove the pages you don&apos;t need — the rest stays exactly as it was.</p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Original untouched</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="delete" />
      </section>

      <article className="content">
        <h2>How to delete pages from a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open the file.</b> It is read from your disk into browser memory — nothing is
            transmitted.
          </li>
          <li>
            <b>Select the pages.</b> Click the numbered cells, or type a range such as{" "}
            <b>2-4, 9</b>. Both work together.
          </li>
          <li>
            <b>Delete and download.</b> You get a new PDF without those pages. The file on your disk
            is not modified — this always produces a copy.
          </li>
        </ol>

        <h2>Deleting a page is not the same as redacting it</h2>
        <p>
          This is the most important thing on this page. People delete a page because it contains a
          name, an account number or a paragraph they must not share, and then assume the information
          is gone.
        </p>
        <p>
          It is not. Deleting a page removes a pointer from the page tree. Everything below still
          ships with the file:
        </p>
        <ul>
          <li>
            <b>Other pages</b> — the same name usually appears more than once: in a header, a footer,
            a signature block, a table of contents entry.
          </li>
          <li>
            <b>Document metadata</b> — author, company, creation software, revision history, and
            sometimes the original file path.
          </li>
          <li>
            <b>Embedded files</b> — spreadsheets and source documents are often attached to a PDF and
            are untouched by page deletion.
          </li>
          <li>
            <b>Hidden content</b> — optional content groups (layers) that are switched off still
            exist in the file; so do crop-boxed areas clipped out of view.
          </li>
          <li>
            <b>Text under black rectangles</b> — a black box drawn over text hides it visually only.
            The characters are still selectable and searchable.
          </li>
        </ul>
        <div className="note warn">
          <b>If the goal is to remove information,</b> deleting a page is the wrong tool. Use a
          redaction tool that deletes the underlying text and image data, then sanitises metadata. For
          a quick check, select all text in a reader and copy it — anything that pastes out is still
          in the document.
        </div>

        <h2>Why the file size barely changes</h2>
        <p>
          Removing a page feels like it should shrink the file. It usually does not, because PDF
          objects are not garbage-collected on delete. The page object is dropped from the tree, but
          the fonts and images it referenced are often still used by other pages, so they stay.
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Input</th>
                <th>After deleting 5 of 60 pages</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60-page text report, 900 KB</td>
                <td className="num">~840 KB</td>
                <td>Content streams are small; the shared fonts dominate.</td>
              </tr>
              <tr>
                <td>60-page scan, 42 MB</td>
                <td className="num">~39 MB</td>
                <td>Each page is its own JPEG, so the size does drop — but only by the pages removed.</td>
              </tr>
              <tr>
                <td>60 pages, all sharing one 20 MB image</td>
                <td className="num">~20 MB</td>
                <td>The image is still referenced, so it stays.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          If size is the actual problem, deleting pages is the wrong fix. Re-compressing the images or
          using a compressor that drops unused objects is what reduces megabytes.
        </p>

        <h2>What happens to numbering after a delete</h2>
        <p>
          Two different things are called &ldquo;page number&rdquo; in a PDF, and deleting pages
          affects them differently:
        </p>
        <ul>
          <li>
            <b>The internal index</b> — the position in the page tree. It always renumbers from 1.
            Delete page 3 and the old page 4 becomes index 3.
          </li>
          <li>
            <b>The page label</b> — an optional document feature that says &ldquo;this page is called
            iv&rdquo; or &ldquo;numbering restarts at 1 here&rdquo;. Libraries that rebuild the page
            tree generally drop labels, so a document with Roman numeral front matter loses that
            distinction.
          </li>
          <li>
            <b>Numbers printed inside the content</b> — a footer reading &ldquo;Page 4 of 60&rdquo; is
            just text. Deleting pages leaves it saying &ldquo;Page 4 of 60&rdquo; in a 55-page file.
          </li>
        </ul>
        <p>
          So after any deletion on a paginated document, regenerate the numbering. That is what the{" "}
          <a href="/add-page-numbers-to-pdf">Add page numbers</a> tool is for: it stamps consistent
          numbers on top of whatever is already there.
        </p>

        <h2>Why you cannot delete every page</h2>
        <p>
          A PDF with zero pages is invalid: the specification requires a page tree with at least one
          leaf, and readers refuse to open a document without one. Every tool enforces this, usually
          with an error like &ldquo;you cannot delete every page&rdquo;.
        </p>
        <p>
          If what you want is a blank document, keep one page and clear its content instead. If what
          you want is a placeholder, insert a single page with the text &ldquo;intentionally
          blank&rdquo; — which is also better practice for archives, because a truly empty page looks
          like a corrupted file.
        </p>

        <h2>Common real-world cases</h2>
        <ul>
          <li>
            <b>Remove a blank trailing page</b> from a scan — the sheet feeder grabbed an extra sheet.
            Delete the last page; nothing else changes.
          </li>
          <li>
            <b>Strip a cover sheet</b> before circulating a report. Delete page 1 and add page numbers
            if the footer references them.
          </li>
          <li>
            <b>Cut an appendix</b> from a client-facing version. Check whether the main text links to
            it — those links will now point at nothing.
          </li>
          <li>
            <b>Drop a signature page</b> that was superseded. Remember that the previous signature is
            invalidated regardless, and a signed original should be archived rather than edited.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I delete pages from a PDF?</summary>
            <p>
              Click the page numbers or type a range like <b>2-4, 9</b>, then click Delete pages. A new
              copy is downloaded and the original stays as it was.
            </p>
          </details>
          <details>
            <summary>Is deleting a page the same as redacting it?</summary>
            <p>
              No. Deleting removes the page from the page tree; metadata, attachments, hidden layers
              and the same text on other pages all remain. Use a real redaction tool when information
              must actually be removed.
            </p>
          </details>
          <details>
            <summary>Why did the file size barely change?</summary>
            <p>
              Shared fonts and images are still referenced by the remaining pages, so they stay.
              Deleting pages only reduces size in proportion to the page-specific data removed.
            </p>
          </details>
          <details>
            <summary>Can I delete every page?</summary>
            <p>
              No — a PDF must contain at least one page to be valid. Leave one page and blank it if you
              need an empty document.
            </p>
          </details>
          <details>
            <summary>Does deleting pages break the digital signature?</summary>
            <p>
              Yes. Any rewrite changes the bytes and invalidates the signature. Signed documents should
              be archived unedited.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF</a> — the opposite operation.
          </li>
          <li>
            <a href="/how-to-remove-pages-from-a-pdf">How to remove pages from a PDF</a> — desktop
            methods compared.
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/add-page-numbers-to-pdf">Add page numbers to a PDF</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
