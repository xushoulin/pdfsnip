import type { Metadata } from "next";
import MergeTool from "../../components/MergeTool";

export const metadata: Metadata = {
  title: "Merge PDF Files Free — Combine PDFs in Your Browser",
  description:
    "Combine two or more PDFs into one file, in the order you choose. Free, no signup, no watermark. Merging happens in your browser — the files are never uploaded.",
  alternates: { canonical: "/merge-pdf" },
  openGraph: {
    title: "Merge PDF Files — Free, Private, No Upload",
    description: "Combine PDFs in any order. Runs locally in your browser.",
    url: "/merge-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I merge PDF files for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add two or more PDFs to the tool above, set the order with the arrow buttons and click Merge. There is no account, no watermark and no page limit; everything runs in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Does merging reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Merging concatenates page trees — the pages themselves are copied as objects, never re-rendered or re-compressed. A 300 dpi scan stays 300 dpi and text stays selectable.",
      },
    },
    {
      "@type": "Question",
      name: "Why did my form fields break after merging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form fields have document-wide names. If two source files contain a field called Name, the merged document has two fields with the same name and the reader treats them as one, so typing in one changes the other. Flatten forms to plain content before merging if the values must be preserved.",
      },
    },
    {
      "@type": "Question",
      name: "Are bookmarks and a table of contents kept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bookmarks are stored in the document outline, which sits outside the page tree, so a simple merge produces a flat file with no outline. Page content, links within each page and annotations are preserved.",
      },
    },
    {
      "@type": "Question",
      name: "Can I merge PDFs with different page sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and each page keeps its own size — an A4 page and a Letter page stay A4 and Letter in the same document. That is correct for archiving but looks uneven on screen. If you need uniform pages, resize the sources first.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a file size or page limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No upload limit, because nothing is uploaded. The limit is your device's memory: merging a handful of files under 50 MB is instant on a phone; combining twenty large scans is better done on a desktop.",
      },
    },
  ],
};

export default function MergePage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Merge PDF Files</h1>
        <p className="sub">Combine several PDFs into one file, in whatever order you need.</p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">No page limit</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <MergeTool />
      </section>

      <article className="content">
        <h2>How to merge PDFs</h2>
        <ol className="steps">
          <li>
            <b>Add your files.</b> Drop two or more PDFs into the box above. They are opened locally —
            if you are merging a contract, it stays on your machine.
          </li>
          <li>
            <b>Set the order.</b> Use the ↑ and ↓ buttons next to each file name. The merged document
            follows this list top to bottom.
          </li>
          <li>
            <b>Merge and download.</b> One combined PDF is written to your device. The source files
            are left exactly as they were.
          </li>
        </ol>

        <h2>Getting the order right without fighting the UI</h2>
        <p>
          Ordering twenty files one arrow-click at a time is the tedious part of merging, and it is
          where mistakes happen — a page range ends up in the wrong place and nobody notices until the
          document is signed. Three habits that avoid it:
        </p>
        <ul>
          <li>
            <b>Rename before you start.</b> Prefix the files <code className="inline">01-</code>,{" "}
            <code className="inline">02-</code>, <code className="inline">03-</code>. File pickers
            sort alphabetically, so the list arrives in the right order and you only have to confirm
            it.
          </li>
          <li>
            <b>Merge in two passes.</b> Combine chapters into groups first, then combine the groups.
            A five-file merge of five-file merges is much easier to verify than a twenty-five-file
            merge.
          </li>
          <li>
            <b>Check the page count after.</b> If the sources were 12 + 8 + 30 pages, the result must
            be 50. A mismatch means a file was skipped — check the list before you save.
          </li>
        </ul>

        <h2>What survives a merge, and what does not</h2>
        <p>
          Merging is a structural operation: it joins page trees. Everything that lives <i>inside</i>{" "}
          a page travels with it. Everything stored at document level does not, and that is where
          surprises come from.
        </p>

        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Element</th>
                <th>Survives?</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Text, images, vectors</td>
                <td>Yes</td>
                <td>Page content streams are copied as objects, not re-rendered.</td>
              </tr>
              <tr>
                <td>Image resolution</td>
                <td>Yes</td>
                <td>No re-compression happens; a 300 dpi scan stays 300 dpi.</td>
              </tr>
              <tr>
                <td>Highlights, sticky notes, stamps</td>
                <td>Yes</td>
                <td>Annotations belong to the page.</td>
              </tr>
              <tr>
                <td>Bookmarks / outline</td>
                <td>No</td>
                <td>The outline is a document-level tree pointing at page indices.</td>
              </tr>
              <tr>
                <td>Form field values</td>
                <td>Risky</td>
                <td>Field names are document-wide; duplicate names merge into one field.</td>
              </tr>
              <tr>
                <td>Document metadata (title, author)</td>
                <td>No</td>
                <td>The merged file gets fresh metadata.</td>
              </tr>
              <tr>
                <td>Digital signatures</td>
                <td>No</td>
                <td>Any rewrite invalidates a signature. This applies to every tool.</td>
              </tr>
              <tr>
                <td>Files attached inside a PDF</td>
                <td>Usually no</td>
                <td>Attachments are document-level, not page-level.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note warn">
          <b>The duplicate form field trap.</b> Merge two copies of the same form and every field name
          exists twice. Viewers resolve that by treating same-named fields as one logical field across
          all pages — so filling page 1 also fills page 4. If the documents must stay independently
          filled, flatten them (print to PDF) before merging.
        </div>

        <h2>Mixed page sizes, and why printers complain</h2>
        <p>
          A merged PDF does not have one page size. Each page keeps its own{" "}
          <code className="inline">/MediaBox</code>, so a Letter invoice next to an A4 certificate
          produces a document where pages physically differ by about 6 mm in width and 18 mm in
          height. On screen that looks like a small alignment wobble. On paper it means the printer
          either scales everything to fit its default tray, or clips the wider page.
        </p>
        <p>
          If the output will be printed and bound, decide on one size first and convert the sources.
          If it will be read on screen, mixed sizes are fine and often the honest choice — resizing a
          legal contract to A4 is a form of content change.
        </p>

        <h2>File size after merging</h2>
        <p>
          Merging does not deduplicate. If two files each embed the same 4 MB font subset, the merged
          file declares both, because the page trees still point at their own resource dictionaries.
          Two 5 MB inputs give roughly a 10 MB output, occasionally slightly more from the added
          cross-reference structures.
        </p>
        <p>
          The one case where merging <i>shrinks</i> the total: many small files that each carry their
          own overhead and duplicate metadata. Ten 200 KB single-page files can merge into a 1.6 MB
          document rather than 2 MB.
        </p>

        <h2>Encrypted and password-protected inputs</h2>
        <p>
          A PDF encrypted with a <b>user password</b> cannot be opened without that password, so it
          also cannot be merged. A PDF with only an <b>owner password</b> — the kind that opens
          without a prompt but restricts printing or copying — usually can be processed, because the
          content is readable and the restriction is a permissions flag rather than real encryption.
        </p>
        <p>
          Because processing happens in your browser, the password never leaves your device. That is a
          practical difference from cloud merge services, where the file and the password both go to a
          server.
        </p>

        <h2>Other ways to merge, and when they are better</h2>
        <ul>
          <li>
            <b>macOS Preview</b> — free and built in. Open one PDF, show the thumbnail sidebar, drag
            the other files in. Fastest option if you are already on a Mac and the job is small.
          </li>
          <li>
            <b>Adobe Acrobat</b> — the desktop app does the job locally and can also rebuild
            bookmarks. The web version uploads your files, which is the wrong choice for contracts.
          </li>
          <li>
            <b>Command line</b> —{" "}
            <code className="inline">qpdf --empty --pages a.pdf b.pdf -- out.pdf</code> does the same
            thing without a GUI, and is the right answer if you merge files every day.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Does merging reduce quality?</summary>
            <p>
              No. Pages are copied as objects, never re-rendered. Text stays selectable and images
              keep their original resolution.
            </p>
          </details>
          <details>
            <summary>Why did my form fields break after merging?</summary>
            <p>
              Field names are document-wide. Two files containing a field called &ldquo;Name&rdquo;
              produce two same-named fields, which readers treat as one. Flatten the forms first if
              they must stay independent.
            </p>
          </details>
          <details>
            <summary>Are bookmarks kept?</summary>
            <p>
              No. Bookmarks live in the document outline, outside the page tree. Rebuilding them
              requires a tool that generates an outline — this one does not.
            </p>
          </details>
          <details>
            <summary>Can I merge a PDF with images?</summary>
            <p>
              Not directly — convert the images to PDF first with the{" "}
              <a href="/jpg-to-pdf">JPG to PDF</a> tool, then merge the result.
            </p>
          </details>
          <details>
            <summary>Is there a limit on how many files I can merge?</summary>
            <p>
              No fixed limit. Memory is the limit — a dozen normal documents merge instantly on any
              device; twenty large scans are better handled on a computer.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
          <li>
            <a href="/how-to-merge-pdf-files">How to merge PDF files</a> — Preview, Acrobat and
            command-line alternatives compared.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
