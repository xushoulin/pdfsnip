import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract vs Split vs Delete: PDF Page Operations Explained",
  description:
    "Extract, split and delete sound similar but produce very different files. A comparison with real examples, the effect on bookmarks, links and file size, and a decision table so you pick the right one first time.",
  alternates: { canonical: "/extract-vs-split-vs-delete-pages" },
  openGraph: {
    title: "Extract vs Split vs Delete: PDF Page Operations Explained",
    description:
      "Three operations, three completely different outputs. Here is how to choose.",
    url: "/extract-vs-split-vs-delete-pages",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between extracting and deleting pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extracting produces a small file containing only the pages you name. Deleting produces a copy of the whole document minus the pages you name. Extracting from page 5-8 of a 200-page file gives you 4 pages; deleting pages 5-8 gives you 196 pages. Both leave the original untouched.",
      },
    },
    {
      "@type": "Question",
      name: "When should I split instead of extract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Split when you need several output files — one per chapter, one per page, or one per fixed chunk. Extract when you need exactly one output file. If the answer to how many files should exist afterwards is one, it is an extract.",
      },
    },
    {
      "@type": "Question",
      name: "Do these operations reduce PDF quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, as long as the tool copies page objects rather than re-rendering them. Printing to PDF is the operation that re-renders, and that one can change image resolution, font embedding and file size.",
      },
    },
    {
      "@type": "Question",
      name: "Which operation keeps file size lowest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extract, usually. The output contains only the pages you named, so pages you left out contribute nothing. But shared fonts and images still have to be embedded, so a 10-page extract of a 200-page scan is rarely one-twentieth of the size.",
      },
    },
    {
      "@type": "Question",
      name: "Do bookmarks survive any of these operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The document outline is stored outside the page tree and points at page positions, so every one of these operations drops it. Page-level annotations such as highlights and notes do survive, because they belong to the page.",
      },
    },
  ],
};

export default function ComparePage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Extract vs Split vs Delete</h1>
        <p className="sub">
          Three page operations that sound interchangeable and are not. Pick by asking what should
          exist afterwards.
        </p>
      </div>

      <article className="content">
        <p className="byline">Last reviewed November 2026</p>

        <h2>The one question that decides it</h2>
        <p>
          Forget the tool names for a moment. Every one of these tasks is really a question about{" "}
          <b>what files should exist when you are done</b>, and how many pages each should have.
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>If the answer is…</th>
                <th>Then the operation is…</th>
                <th>Tool</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&ldquo;One file, containing only these pages.&rdquo;</td>
                <td>Extract</td>
                <td>
                  <a href="/">Extract pages</a>
                </td>
              </tr>
              <tr>
                <td>&ldquo;One file, containing everything except these pages.&rdquo;</td>
                <td>Delete</td>
                <td>
                  <a href="/delete-pages-from-pdf">Delete pages</a>
                </td>
              </tr>
              <tr>
                <td>&ldquo;Several files, split at these boundaries.&rdquo;</td>
                <td>Split</td>
                <td>
                  <a href="/split-pdf">Split PDF</a>
                </td>
              </tr>
              <tr>
                <td>&ldquo;One file containing these files in this order.&rdquo;</td>
                <td>Merge</td>
                <td>
                  <a href="/merge-pdf">Merge PDFs</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Worked examples, because this is where people go wrong</h2>
        <p>
          A 200-page board pack. You must send pages 40–52 to the finance director.
        </p>
        <ul>
          <li>
            <b>Extract</b> → one 13-page PDF. Correct.
          </li>
          <li>
            <b>Delete</b> → one 187-page PDF, which is the opposite of what you need and also leaks
            everything else.
          </li>
          <li>
            <b>Split</b> → somewhere between 2 and 200 files depending on the mode, then you hunt for
            the right one. Slowest, and easy to send the wrong file.
          </li>
        </ul>
        <p>
          A 60-page scan containing four pages of someone else&apos;s medical notes that must not go
          out.
        </p>
        <ul>
          <li>
            <b>Delete</b> → one 56-page PDF. Correct, and the recipient sees a continuous document.
          </li>
          <li>
            <b>Extract</b> → you would have to name the 56 pages you keep. Possible, error-prone, and
            it produces the same thing more slowly.
          </li>
          <li>
            <b>Split</b> → produces pieces, which changes the document&apos;s structure and page
            numbering. Wrong for this job.
          </li>
        </ul>
        <p>
          A 40-chapter manual where each chapter must be its own file, delivered separately.
        </p>
        <ul>
          <li>
            <b>Split</b> with custom ranges → 40 files, one per chapter. Correct.
          </li>
          <li>
            <b>Extract</b> → 40 separate runs of the tool. The same result, far more work.
          </li>
        </ul>

        <h2>What each operation does to the same file</h2>
        <p>
          Using a 200-page, 42 MB scanned document as the subject, keeping pages 40–52:
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th></th>
                <th>Extract 40–52</th>
                <th>Delete 40–52</th>
                <th>Split every 50</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Files produced</td>
                <td className="num">1</td>
                <td className="num">1</td>
                <td className="num">4</td>
              </tr>
              <tr>
                <td>Pages in output</td>
                <td className="num">13</td>
                <td className="num">187</td>
                <td className="num">50 / 50 / 50 / 50</td>
              </tr>
              <tr>
                <td>Approx. total size</td>
                <td className="num">~2.8 MB</td>
                <td className="num">~39 MB</td>
                <td className="num">~42 MB</td>
              </tr>
              <tr>
                <td>Image quality</td>
                <td>Unchanged</td>
                <td>Unchanged</td>
                <td>Unchanged</td>
              </tr>
              <tr>
                <td>Bookmarks</td>
                <td>Lost</td>
                <td>Lost</td>
                <td>Lost</td>
              </tr>
              <tr>
                <td>Original modified</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Note the size column. The extract is 2.8 MB rather than the 2.7 MB a strict 13/200 proportion
          would suggest, because the shared fonts and the document structure are duplicated into the
          new file. In a text-heavy PDF the same extract can be under 100 KB, since the fonts are
          usually standard ones that need no embedding.
        </p>

        <h2>The fourth option people forget: print to PDF</h2>
        <p>
          Printing a page range to a PDF file is not one of the three, but it is what most people do
          first because it requires no tool at all. It is worth knowing what it costs.
        </p>
        <p>
          Printing <b>re-renders</b> each page rather than copying it. Text usually survives as
          selectable text, but images are resampled to print resolution, font embedding is rebuilt,
          hyperlinks and form fields disappear, and page size is forced to whatever paper size the
          dialog was showing. The output is often several times larger than the source pages.
        </p>
        <p>
          So: printing is fine for a quick copy to read, and wrong for anything you will archive or
          send onward as the definitive version.
        </p>

        <h2>Two things all three operations share</h2>
        <ul>
          <li>
            <b>They never modify the original.</b> Every tool on this site writes a new file. That is
            deliberate — a delete that overwrites the source is a data loss incident waiting for a
            mis-click.
          </li>
          <li>
            <b>They break digital signatures.</b> A signature is a hash over the exact bytes of the
            file. Extracting, deleting or splitting produces different bytes, so the signature reports
            as invalid. If a signed document must stay verifiable, do not process it at all.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>What is the difference between extracting and deleting pages?</summary>
            <p>
              Extracting keeps only the pages you name; deleting keeps everything except them. Extract
              pages 5–8 of a 200-page file and you get 4 pages. Delete pages 5–8 and you get 196.
            </p>
          </details>
          <details>
            <summary>When should I split instead of extract?</summary>
            <p>
              When several output files are required. If the answer to &ldquo;how many files should
              exist afterwards&rdquo; is one, it is an extract.
            </p>
          </details>
          <details>
            <summary>Do these operations reduce quality?</summary>
            <p>
              No, as long as pages are copied rather than re-rendered. Print-to-PDF is the one that
              re-renders.
            </p>
          </details>
          <details>
            <summary>Which keeps the file size lowest?</summary>
            <p>
              Extract, usually — the pages you left out contribute nothing. But shared resources are
              still embedded, so the size is not proportional to the page count.
            </p>
          </details>
          <details>
            <summary>Do bookmarks survive?</summary>
            <p>
              No. The outline sits outside the page tree, so all of these operations drop it.
              Page-level annotations such as highlights do survive.
            </p>
          </details>
        </div>

        <h2>Pick the operation</h2>
        <ul>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a>
          </li>
          <li>
            <a href="/split-pdf">Split a PDF</a>
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
