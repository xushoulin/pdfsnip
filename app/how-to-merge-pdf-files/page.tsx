import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Merge PDF Files — 6 Methods, Ranked by Privacy",
  description:
    "Six ways to combine PDFs into one file: Preview on Mac, Acrobat, the browser, qpdf, Ghostscript and Automator. What each costs, whether it uploads your file, and which one to use for contracts.",
  alternates: { canonical: "/how-to-merge-pdf-files" },
  openGraph: {
    title: "How to Merge PDF Files — 6 Methods Compared",
    description:
      "Free ways to combine PDFs, with the privacy cost of each spelled out.",
    url: "/how-to-merge-pdf-files",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I merge PDFs for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On a Mac, drag files into Preview's thumbnail sidebar. On any device, use a browser-based merger. On the command line, qpdf --empty --pages a.pdf b.pdf -- out.pdf. All three are free and none of them uploads your document.",
      },
    },
    {
      "@type": "Question",
      name: "Which merge method keeps my files private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any method that runs on your own machine: Preview, Acrobat desktop, qpdf, Ghostscript, or a browser tool that processes the file locally. Cloud merge services upload the documents to their servers, which is the wrong choice for contracts, tax forms or medical records.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose the page order before merging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in every method that has an interface. Preview uses drag and drop in the sidebar, Acrobat has a reorderable file list, browser tools have up and down arrows, and qpdf follows the order you type the file names in.",
      },
    },
    {
      "@type": "Question",
      name: "Why does merging sometimes fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The usual causes are an encrypted input (needs the password), a PDF with a damaged cross-reference table (open and re-save it in a reader first), or a file saved as PDF/A with strict structure requirements. A tool that reports a generic error is usually hitting the first or second case.",
      },
    },
    {
      "@type": "Question",
      name: "Does merging change the page size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Each page keeps its own MediaBox, so an A4 page and a Letter page stay their original sizes in the merged file. Only a tool that explicitly normalises page sizes would change them, and that is a separate operation.",
      },
    },
  ],
};

export default function MergeGuide() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>How to Merge PDF Files</h1>
        <p className="sub">
          Six ways to combine PDFs — with the privacy cost of each one spelled out.
        </p>
      </div>

      <article className="content">
        <p className="byline">Last reviewed November 2026</p>

        <p>
          Combining PDFs is an everyday task — signed scans with the original, report chapters, monthly
          statements. What varies enormously is <i>where</i> the work happens. Some methods run
          entirely on your machine; others send the document to a server you know nothing about. Since
          the files people merge are usually contracts, invoices or identity documents, that difference
          matters more than any feature list.
        </p>

        <h2>Method 1 — Preview on macOS (free, local, Mac only)</h2>
        <ol className="steps">
          <li>Open one PDF in <b>Preview</b>.</li>
          <li>
            Show the sidebar: <b>View → Thumbnails</b> (<span className="kbd">⌥⌘2</span>).
          </li>
          <li>
            Drag other PDFs from Finder into the sidebar. They are inserted at the drop point.
          </li>
          <li>
            Or use <b>Edit → Insert → Page from File</b>, which appends every page of the source.
          </li>
          <li>Drag thumbnails to fix the order, then save.</li>
        </ol>
        <p>
          Everything stays on the Mac. Preview is also the fastest option for two or three files. The
          limits: it is Mac-only, the sidebar gets sluggish past a few hundred pages, and saving
          rewrites the whole document, which invalidates any signature it carried.
        </p>

        <h2>Method 2 — Adobe Acrobat</h2>
        <p>
          In the desktop app, <b>Tools → Combine Files</b>, add the PDFs, reorder by dragging, then
          combine and save. The desktop app processes locally and can rebuild bookmarks, which no
          browser tool does.
        </p>
        <p>
          The web version at acrobat.adobe.com is a different proposition: it uploads your files to
          Adobe&apos;s servers. Adobe&apos;s terms cover that, but it is still a copy of the document
          leaving your machine. Both versions need a paid plan for the full feature set. If the
          document is confidential, use the desktop app or something else entirely.
        </p>

        <h2>Method 3 — A browser tool that runs locally</h2>
        <p>
          This site&apos;s <a href="/merge-pdf">merge tool</a> loads a PDF library into the page and
          does the work with JavaScript on your own CPU. It works on Windows, macOS, Linux, ChromeOS,
          iOS and Android with nothing to install, and it works offline once the page has loaded.
        </p>
        <p>
          The distinction that matters: many &ldquo;online merge&rdquo; sites also run in a browser but
          post your file to a backend to do the work. You can tell the difference in ten seconds —
          open DevTools, go to the Network tab and merge something. A local tool makes no request
          carrying the document; a server-side one does.
        </p>

        <h2>Method 4 — qpdf on the command line</h2>
        <p>
          The most repeatable option, and the only one that scales to a folder of files.
        </p>
        <pre className="tbl-wrap">
          <code className="inline">
            {`# merge two files, in this order
qpdf --empty --pages a.pdf 1-z b.pdf 1-z -- merged.pdf

# merge every PDF in the folder, alphabetically
qpdf --empty --pages *.pdf -- all.pdf

# merge but keep only pages 2-9 of the second file
qpdf --empty --pages a.pdf 1-z b.pdf 2-9 -- merged.pdf`}
          </code>
        </pre>
        <p>
          qpdf copies objects instead of re-rendering, so quality is untouched and the operation takes
          milliseconds. It also handles encrypted inputs with{" "}
          <code className="inline">--password=</code>, which most GUI tools cannot batch.
        </p>

        <h2>Method 5 — Ghostscript</h2>
        <p>
          Installed on almost every Linux system already. Slower than qpdf and it re-writes the
          document through its own PDF interpreter, which can subtly change fonts and downgrade image
          compression unless you pass the right flags.
        </p>
        <pre className="tbl-wrap">
          <code className="inline">
            {`gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite \\
   -sOutputFile=merged.pdf a.pdf b.pdf`}
          </code>
        </pre>
        <p>
          Use it when it is already there and the file is not precious. Do not use it on a document
          where exact image fidelity matters — that is what qpdf is for.
        </p>

        <h2>Method 6 — Automator or Shortcuts, for the weekly job</h2>
        <p>
          If you combine the same set of documents every month, wrap method 4 in an Automator Quick
          Action or a Shortcuts automation and put it in the Finder context menu. Setup is about ten
          minutes; after that the task is a right-click.
        </p>

        <h2>Which method to use</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Method</th>
                <th>Cost</th>
                <th>Uploads the file?</th>
                <th>Platforms</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preview</td>
                <td>Free</td>
                <td>No</td>
                <td>macOS</td>
                <td>Two or three files, right now.</td>
              </tr>
              <tr>
                <td>Acrobat desktop</td>
                <td>Subscription</td>
                <td>No</td>
                <td>Win / macOS</td>
                <td>Rebuilding bookmarks as well as merging.</td>
              </tr>
              <tr>
                <td>Browser tool (this site)</td>
                <td>Free</td>
                <td>No</td>
                <td>Any</td>
                <td>Confidential files on a device with no software.</td>
              </tr>
              <tr>
                <td>qpdf</td>
                <td>Free</td>
                <td>No</td>
                <td>Any (CLI)</td>
                <td>Repeated jobs, scripts, hundreds of files.</td>
              </tr>
              <tr>
                <td>Ghostscript</td>
                <td>Free</td>
                <td>No</td>
                <td>Any (CLI)</td>
                <td>Linux boxes where it is already installed.</td>
              </tr>
              <tr>
                <td>Cloud merge sites</td>
                <td>Free / paid</td>
                <td>Yes</td>
                <td>Any</td>
                <td>Nothing confidential, ever.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>When merging fails</h2>
        <ul>
          <li>
            <b>&ldquo;File is encrypted.&rdquo;</b> The input has a user password. Supply it, or ask
            the sender for an unlocked copy — there is no legitimate bypass.
          </li>
          <li>
            <b>&ldquo;Damaged or unsupported PDF.&rdquo;</b> Usually a broken cross-reference table
            rather than real corruption. Open the file in a desktop reader and re-save it once, then
            merge the re-saved copy.
          </li>
          <li>
            <b>Pages come out in the wrong order.</b> Almost always the file order in the list, not
            the tool. Name the files <code className="inline">01-</code>,{" "}
            <code className="inline">02-</code> so the picker sorts them correctly.
          </li>
          <li>
            <b>The result is huge.</b> Expected — shared fonts and images are embedded once per
            source document. Merging does not deduplicate.
          </li>
          <li>
            <b>Form fields now mirror each other.</b> Same field names across documents collide into
            one logical field. Flatten the forms first if they must stay independent.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I merge PDFs for free?</summary>
            <p>
              Preview on a Mac, a local browser tool on any device, or{" "}
              <code className="inline">qpdf --empty --pages a.pdf b.pdf -- out.pdf</code> in a
              terminal. All free, all local.
            </p>
          </details>
          <details>
            <summary>Which method keeps my files private?</summary>
            <p>
              Any method that runs on your own machine. Cloud merge services upload the document to
              their servers — avoid them for contracts, tax forms and medical records.
            </p>
          </details>
          <details>
            <summary>Can I choose the page order before merging?</summary>
            <p>
              Yes — drag and drop in Preview, a reorderable list in Acrobat, arrow buttons in browser
              tools, and file-name order in qpdf.
            </p>
          </details>
          <details>
            <summary>Why does merging sometimes fail?</summary>
            <p>
              Nearly always an encrypted input or a damaged cross-reference table. Re-save the problem
              file in a desktop reader before merging.
            </p>
          </details>
          <details>
            <summary>Does merging change the page size?</summary>
            <p>
              No. Each page keeps its own MediaBox, so A4 and Letter pages coexist at their original
              sizes.
            </p>
          </details>
        </div>

        <h2>Related tools</h2>
        <ul>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — the tool, with the details on what a merge
            preserves.
          </li>
          <li>
            <a href="/split-pdf">Split a PDF into multiple files</a>
          </li>
          <li>
            <a href="/">Extract pages from a PDF</a>
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
