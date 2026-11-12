import type { Metadata } from "next";
import PageNumbersTool from "../../components/PageNumbersTool";

export const metadata: Metadata = {
  title: "Add Page Numbers to PDF Free — No Upload, No Signup",
  description:
    "Stamp page numbers onto a PDF: six positions, four formats, custom start number, skip-the-cover option. Runs in your browser — the file is never uploaded.",
  alternates: { canonical: "/add-page-numbers-to-pdf" },
  openGraph: {
    title: "Add Page Numbers to PDF — Free & Private",
    description: "Six positions, four formats, custom start value. Nothing is uploaded.",
    url: "/add-page-numbers-to-pdf",
    type: "website",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I add page numbers to a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the file, choose a position and a format, optionally set the starting number and margin, then click Add page numbers. The numbers are drawn as new text on every page and a copy is downloaded.",
      },
    },
    {
      "@type": "Question",
      name: "Will the numbers be cut off when printed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if they fall inside the trim area. Commercial printers trim 3 to 5 mm from each edge, and most office printers cannot print closer than about 5 mm. Keep the margin at 20 points (about 7 mm) or more to stay safe.",
      },
    },
    {
      "@type": "Question",
      name: "My document already has page numbers printed on it. What happens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get two sets. The tool cannot detect existing numbers — they are part of the page content, indistinguishable from any other text. Cover them first, crop the footer, or restart from a version without numbers.",
      },
    },
    {
      "@type": "Question",
      name: "How do I continue numbering across several files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set the start value to one more than the last page of the previous file. If part one ends at 40, start part two at 41. If you plan to merge the files later, note that the merged document keeps the stamped numbers rather than recomputing them.",
      },
    },
    {
      "@type": "Question",
      name: "Can I skip the cover page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — enable Skip the first page. Numbering still counts page 1, so the second page shows 2. That is the convention most reports use. If you want the first numbered page to display 1, skip the cover and set the start value to 0.",
      },
    },
    {
      "@type": "Question",
      name: "Does adding page numbers reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The numbers are added as an extra text layer on top of the existing page. Images, existing text and vectors are untouched, and the file grows by a few kilobytes.",
      },
    },
  ],
};

export default function PageNumbersPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Add Page Numbers to a PDF</h1>
        <p className="sub">
          Stamp consistent numbers on every page — position, format and starting value are yours to
          choose.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Baked into the file</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PageNumbersTool />
      </section>

      <article className="content">
        <h2>How to add page numbers</h2>
        <ol className="steps">
          <li>
            <b>Open the PDF.</b> It is read locally — a confidential document never leaves your
            machine.
          </li>
          <li>
            <b>Pick a position and format.</b> Bottom-centre with &ldquo;1 / 12&rdquo; is the most
            common combination for reports; bottom-right with a plain number suits print.
          </li>
          <li>
            <b>Adjust margin and size if needed</b>, then click Add page numbers. A new copy is
            downloaded with the numbers drawn in.
          </li>
        </ol>

        <h2>Choose the margin before you choose the position</h2>
        <p>
          This is where most page-numbering goes wrong, and it is a print-production problem rather
          than a software one.
        </p>
        <p>
          A page has three relevant boundaries: the <b>MediaBox</b> (the physical sheet), the{" "}
          <b>trim box</b> (what the final product will be after cutting), and the{" "}
          <b>safe area</b> (where content will not be clipped by the printer&apos;s unprintable
          margin). Numbers placed outside the safe area look fine on screen and disappear on paper.
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Margin</th>
                <th>Millimetres from edge</th>
                <th>Safe for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="num">14 pt</td>
                <td>~5 mm</td>
                <td>Nothing. Office printers clip here.</td>
              </tr>
              <tr>
                <td className="num">20 pt</td>
                <td>~7 mm</td>
                <td>Home and office printing, documents read on screen.</td>
              </tr>
              <tr>
                <td className="num">28 pt</td>
                <td>~10 mm</td>
                <td>Commercial printing with bleed and trim. The default.</td>
              </tr>
              <tr>
                <td className="num">40 pt</td>
                <td>~14 mm</td>
                <td>Bound documents, where the gutter eats part of the inner edge.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="note">
          <b>Bound documents need asymmetry.</b> If the document will be stitched or glued, the inner
          margin loses 5-10 mm to the spine. Numbers centred at the bottom survive that; numbers at
          the bottom-left or bottom-right on a two-sided document will drift toward the spine on every
          other page.
        </div>

        <h2>The double-numbering trap</h2>
        <p>
          If the PDF already has numbers printed in the footer, this tool cannot see them. To the
          software, an existing &ldquo;Page 7&rdquo; is just characters in the content stream, exactly
          like the body text. Stamping new numbers on top gives you two sets, usually overlapping.
        </p>
        <p>
          Three ways out, in order of preference:
        </p>
        <ul>
          <li>
            <b>Start from the source document</b> that did not have numbers — a Word or Google Docs
            export, before anyone added a footer.
          </li>
          <li>
            <b>Push the new numbers into a clear area</b> — if the old numbers sit bottom-centre, put
            the new ones top-right and accept the redundancy.
          </li>
          <li>
            <b>Cover the old footer</b> with a white rectangle in an editor, then number. This only
            works when the footer area has a plain background.
          </li>
        </ul>

        <h2>Continuing numbering across merged documents</h2>
        <p>
          A common workflow: three chapters exported separately, each starting at 1, which need to
          read as one continuous document. The order of operations matters.
        </p>
        <ol className="steps">
          <li>
            <b>Merge first, then number.</b> Merging produces one file whose page count is known, so
            &ldquo;1 / 120&rdquo; is correct on every page.
          </li>
          <li>
            <b>If you must number first,</b> set the start value by hand: chapter 1 starts at 1,
            chapter 2 at 1 + (pages in chapter 1), chapter 3 at the running total.
          </li>
          <li>
            <b>Avoid &ldquo;1 / N&rdquo; format before merging.</b> Each file will claim its own total,
            so page 40 of a 120-page document reads &ldquo;40 / 40&rdquo;. Plain numbers survive
            merging; totals do not.
          </li>
        </ol>

        <h2>Front matter, Roman numerals and restarts</h2>
        <p>
          Proper books number front matter with i, ii, iii and restart at 1 for the body. That is done
          with PDF <b>page labels</b>, a document-level structure that assigns a display name to each
          page without drawing anything. This tool stamps visible text instead, which is a different
          mechanism:
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th></th>
                <th>Stamped numbers (this tool)</th>
                <th>Page labels</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visible on the page</td>
                <td>Yes — it is drawn text</td>
                <td>No, only in the reader&apos;s page field</td>
              </tr>
              <tr>
                <td>Survives printing</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Roman numerals, restarts</td>
                <td>Not supported</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Survives a merge or an extract</td>
                <td>Yes, because it is part of the page</td>
                <td>Usually lost</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For a report or a contract, stamped numbers are what you want — they are visible to a reader
          holding paper. For a book with front matter, you need page labels, which means a desktop
          layout tool.
        </p>

        <h2>Readability on scanned pages</h2>
        <p>
          Numbers are drawn in black. On a clean white page that is perfect. On a dark scan — a photo
          of a page in poor light, or a document printed on coloured stock — black numbers on a dark
          background can be nearly invisible.
        </p>
        <p>
          Before numbering a scanned batch, check one page: if the bottom margin is dark, move the
          numbers to whichever margin is lightest, and increase the font size by two or three points.
          A 14 pt number reads at arm&apos;s length; an 11 pt number on a grey background does not.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Will the numbers be cut off when printed?</summary>
            <p>
              Only if they sit inside the trim area. Keep the margin at 20 pt (about 7 mm) or more;
              commercial printing with trim needs closer to 28 pt.
            </p>
          </details>
          <details>
            <summary>My PDF already has numbers. What happens?</summary>
            <p>
              You get two sets, because existing numbers are just text in the page content and cannot
              be detected. Start from a source without numbers, or place the new ones elsewhere.
            </p>
          </details>
          <details>
            <summary>How do I continue numbering across files?</summary>
            <p>
              Merge first and number the merged file. If you must number separately, set each start
              value to the running total, and avoid the &ldquo;1 / N&rdquo; format until after the
              merge.
            </p>
          </details>
          <details>
            <summary>Can I skip the cover page?</summary>
            <p>
              Yes — enable Skip the first page. The count still includes it, so page 2 displays 2. To
              make the first numbered page read 1 instead, set the start value to 0.
            </p>
          </details>
          <details>
            <summary>Does this change the reader&apos;s page counter?</summary>
            <p>
              No. It draws visible text on the page. The page number shown in your PDF reader&apos;s
              toolbar still reflects the physical position in the file.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — combine before numbering.
          </li>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a> — renumber afterwards.
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a>
          </li>
          <li>
            <a href="/how-to-add-page-numbers-to-a-pdf">How to add page numbers to a PDF</a> — the
            longer guide.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
