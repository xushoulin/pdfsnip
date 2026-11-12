import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract Pages from a PDF on Mac — 4 Methods Compared",
  description:
    "Four ways to pull pages out of a PDF on macOS: Preview drag and drop, Automator, the qpdf command line, and the Shortcuts app. With the exact keystrokes and the limits of each.",
  alternates: { canonical: "/extract-pages-from-pdf-on-mac" },
  openGraph: {
    title: "Extract Pages from a PDF on Mac — 4 Methods Compared",
    description:
      "Preview, Automator, qpdf and Shortcuts: what each one can and cannot do when pulling pages out of a PDF.",
    url: "/extract-pages-from-pdf-on-mac",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I extract pages from a PDF on a Mac without extra software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the PDF in Preview, choose View > Thumbnails, select the pages you want with Command-click, then drag the selection to the Desktop. macOS writes a new PDF containing exactly those pages. The original file is not modified.",
      },
    },
    {
      "@type": "Question",
      name: "Why does dragging pages out of Preview sometimes produce nothing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The drag has to start on the thumbnail itself and end on a Finder window or the Desktop. Dragging into another app, or releasing too early, cancels it. If no file appears, check that the thumbnails are actually shown — View > Thumbnails — rather than the continuous scroll view.",
      },
    },
    {
      "@type": "Question",
      name: "Can I extract a page range like 5-12 in Preview?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but it is fiddly: click page 5, hold Shift and click page 12 to select the range, then drag. For long ranges across hundreds of pages, Preview's thumbnail sidebar becomes slow. A command-line tool or a browser tool is faster for that case.",
      },
    },
    {
      "@type": "Question",
      name: "Does Preview keep the quality when extracting pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Preview copies page objects rather than re-rendering, so text stays selectable and images keep their original resolution. It may re-write the file structure, which is why the extracted PDF can be slightly smaller or larger than expected.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a way to automate extracting pages on a Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. qpdf on the command line does it in one line for page ranges, and the Shortcuts app can run the same command as a drag-and-drop action on the Desktop or in the Finder toolbar.",
      },
    },
  ],
};

export default function ExtractOnMac() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Extract Pages from a PDF on a Mac</h1>
        <p className="sub">
          Four methods — from built-in drag and drop to a one-line command — and which to use when.
        </p>
      </div>

      <article className="content">
        <p className="byline">Last reviewed November 2026 · Tested on macOS 15 (Sequoia)</p>

        <p>
          macOS ships with a PDF toolkit that most people never notice. Preview alone can pull pages
          out, reorder them, merge files and delete pages, all without installing anything. Below are
          the four practical ways to extract pages on a Mac, ordered from easiest to most repeatable.
        </p>

        <h2>Method 1 — Preview, by dragging pages out</h2>
        <p>
          This is the fastest method for a handful of pages, and it produces a real PDF rather than a
          screenshot.
        </p>
        <ol className="steps">
          <li>
            Open the PDF in <b>Preview</b> (it is the default for PDFs on macOS).
          </li>
          <li>
            Show the sidebar: <b>View → Thumbnails</b>, or press{" "}
            <span className="kbd">⌥⌘2</span>.
          </li>
          <li>
            Select the pages. Click one, <span className="kbd">⌘</span>-click to add individual
            pages, or click the first page and <span className="kbd">⇧</span>-click the last for a
            contiguous range.
          </li>
          <li>
            <b>Drag the selection onto the Desktop</b> (or into a Finder window). A new file appears,
            named after the original document.
          </li>
        </ol>
        <div className="note">
          <b>Why the drag sometimes refuses to work.</b> The drag must start on a thumbnail and end
          over a Finder location. Releasing it inside Preview, or over an app that does not accept
          PDFs, cancels the operation with no error message. If nothing appears, try dragging to the
          Desktop first — it always accepts the drop.
        </div>
        <p>
          The output keeps the original page size, orientation and image resolution. Annotations —
          highlights, sticky notes, stamps — travel with the page. Document-level bookmarks do not.
        </p>

        <h2>Method 2 — Copy and paste into a new document</h2>
        <p>
          Less elegant, but useful when dragging misbehaves, for example on a remote desktop session
          where drag and drop is intercepted.
        </p>
        <ol className="steps">
          <li>Select the pages in the thumbnail sidebar.</li>
          <li>
            <b>Edit → Copy</b> (<span className="kbd">⌘C</span>).
          </li>
          <li>
            <b>File → New from Clipboard</b> (<span className="kbd">⌘N</span>).
          </li>
          <li>Save the new document.</li>
        </ol>
        <p>
          The catch: the new document inherits the page size of the first page, and any page that
          differs gets scaled to fit. For a document with mixed page sizes, dragging out is more
          faithful.
        </p>

        <h2>Method 3 — qpdf on the command line</h2>
        <p>
          For ranges, repeated jobs, or files too large for Preview&apos;s sidebar to stay responsive,
          the command line is the right tool. It is also the only method here that is scriptable, so it
          can run on fifty files in a loop.
        </p>
        <p>
          Install once with Homebrew (<code className="inline">brew install qpdf</code>), then:
        </p>
        <pre className="tbl-wrap">
          <code className="inline">
            {`# keep pages 5 through 12
qpdf input.pdf --pages . 5-12 -- extracted.pdf

# keep pages 2, 7 and 9, in that order
qpdf input.pdf --pages . 2,7,9 -- picked.pdf

# every page as its own file
qpdf --split-pages=1 input.pdf page.pdf`}
          </code>
        </pre>
        <p>
          qpdf is fast because it copies objects rather than decoding them — the same reason the
          browser tools here are instant. It also handles encrypted files with{" "}
          <code className="inline">--password=</code>, which Preview cannot do without the password
          prompt.
        </p>

        <h2>Method 4 — Automator or Shortcuts, for repeated jobs</h2>
        <p>
          If you extract the same way every week, wrap method 3 in an Automator Quick Action or a
          Shortcuts app shortcut. Put the action in the Finder&apos;s context menu, right-click any PDF
          and the pages come out named and sorted.
        </p>
        <p>
          The pattern: get the selected Finder items, run a shell script step containing the qpdf
          command, and write the output next to the source file. Ten minutes of setup removes the
          entire task from your week.
        </p>

        <h2>No install, any device — the browser route</h2>
        <p>
          If you are on a work Mac where installing Homebrew is not allowed, or you need to do this on
          a Chromebook and a Mac in the same afternoon, the{" "}
          <a href="/">browser-based extractor</a> does the same job without a terminal. The file is read
          locally in the browser and never uploaded, which matters if the document is a contract or a
          medical record.
        </p>

        <h2>Which method should you use?</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Situation</th>
                <th>Best method</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three pages out of a ten-page file</td>
                <td>Preview drag</td>
                <td>No install, ten seconds, done.</td>
              </tr>
              <tr>
                <td>A 60–300 page range</td>
                <td>qpdf</td>
                <td>Preview&apos;s sidebar gets slow and imprecise at that length.</td>
              </tr>
              <tr>
                <td>The same job every week</td>
                <td>Automator / Shortcuts + qpdf</td>
                <td>Set up once, then one right-click.</td>
              </tr>
              <tr>
                <td>Mixed page sizes that must not be scaled</td>
                <td>Preview drag, or a browser tool</td>
                <td>Copy-paste rescales pages to the first page&apos;s size.</td>
              </tr>
              <tr>
                <td>Managed work machine, no installs</td>
                <td>Browser tool</td>
                <td>Nothing to install and nothing to upload.</td>
              </tr>
              <tr>
                <td>Encrypted PDF</td>
                <td>qpdf with <code className="inline">--password</code></td>
                <td>Preview needs the password too, but cannot batch it.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Things that surprise Mac users</h2>
        <ul>
          <li>
            <b>Preview edits are not saved until you save.</b> Dragging pages out does not modify the
            original, but deleting pages <i>inside</i> Preview does — and <span className="kbd">⌘S</span>{" "}
            writes that change to the source file. Use Duplicate first if you are unsure.
          </li>
          <li>
            <b>Extracted files are named after the document</b>, not after the pages. Extract twice
            from the same file and macOS appends a number, which is how people end up with{" "}
            <code className="inline">Contract-2-3.pdf</code> and no idea which is which.
          </li>
          <li>
            <b>Safari&apos;s PDF viewer cannot extract pages.</b> It can display and print, nothing
            more. Downloads opened in Safari need to be handed to Preview.
          </li>
          <li>
            <b>A signed PDF stays signed only if you do not touch it.</b> Extracting pages produces a
            new file; the signature belongs to the original bytes and does not carry over.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>How do I extract pages from a PDF on a Mac without extra software?</summary>
            <p>
              Open it in Preview, press <span className="kbd">⌥⌘2</span> for thumbnails,{" "}
              <span className="kbd">⌘</span>-click the pages, then drag them to the Desktop.
            </p>
          </details>
          <details>
            <summary>Why does dragging pages out of Preview produce nothing?</summary>
            <p>
              The drag has to end over the Desktop or a Finder window. Releasing inside Preview or over
              an app that does not accept PDFs silently cancels it.
            </p>
          </details>
          <details>
            <summary>Can I extract a page range like 5-12 in Preview?</summary>
            <p>
              Click page 5, hold <span className="kbd">⇧</span>, click page 12, then drag. For very
              long ranges, use qpdf instead — the sidebar gets slow past a few hundred pages.
            </p>
          </details>
          <details>
            <summary>Does Preview keep the quality when extracting pages?</summary>
            <p>
              Yes. Pages are copied as objects, not re-rendered, so text stays selectable and images
              keep their resolution.
            </p>
          </details>
          <details>
            <summary>Is there a way to automate extracting pages on a Mac?</summary>
            <p>
              Yes — <code className="inline">qpdf input.pdf --pages . 5-12 -- out.pdf</code> inside an
              Automator Quick Action or a Shortcuts shortcut gives you a right-click action in Finder.
            </p>
          </details>
        </div>

        <h2>Related</h2>
        <ul>
          <li>
            <a href="/">Extract pages in the browser</a> — works on the same files, no install.
          </li>
          <li>
            <a href="/extract-pages-from-pdf-in-chrome">Extracting pages in Chrome</a> — the
            browser-only route.
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">Extract vs split vs delete</a> — which
            operation you actually need.
          </li>
          <li>
            <a href="/how-to-extract-pages-from-pdf">How to extract pages from a PDF</a> — the general
            walkthrough.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
