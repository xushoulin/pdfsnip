import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract Pages from a PDF in Chrome — Print Trick vs Real Tools",
  description:
    "Chrome's PDF viewer cannot extract pages, but its print dialog can save a page range as a new file. Here is exactly how, what it does to quality and file size, and when you need a real extractor.",
  alternates: { canonical: "/extract-pages-from-pdf-in-chrome" },
  openGraph: {
    title: "Extract Pages from a PDF in Chrome",
    description:
      "The print-to-PDF trick works but re-renders the page. Here is what that costs, and the alternative.",
    url: "/extract-pages-from-pdf-in-chrome",
    type: "article",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Chrome extract pages from a PDF directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Chrome's built-in PDF viewer can display, zoom, search and print, but it has no page management at all — no delete, no extract, no reorder. The workaround is Print, which lets you choose a page range and save the result as a new PDF.",
      },
    },
    {
      "@type": "Question",
      name: "Does Chrome's print-to-PDF reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends. Chrome re-renders each page to produce the print output, so text usually stays as selectable text but images are resampled and the fonts may be substituted. Vector-heavy pages often come out slightly differently, and a 300 dpi scan can lose detail. It is a reprint, not a copy.",
      },
    },
    {
      "@type": "Question",
      name: "Can I extract non-consecutive pages like 3, 7 and 9-12 in Chrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not in one pass. The print dialog accepts a single range such as 3-12, so non-consecutive pages need one print job per contiguous block, then a merge. A dedicated extractor accepts a typed list like 3, 7, 9-12 and produces one file.",
      },
    },
    {
      "@type": "Question",
      name: "Why did my extracted PDF lose its links and form fields?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because printing flattens the page. A printed PDF contains what you see: text and images. Interactive elements — hyperlinks, form fields, embedded files, bookmarks — are not printable objects and disappear. If those matter, use a tool that copies pages instead of printing them.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use a Chrome extension to extract pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extensions with full site access can read every page you visit and every file you open in the browser. For a confidential document, a site you visit deliberately — which processes the file locally and never uploads it — is a smaller risk than an extension that is always running.",
      },
    },
  ],
};

export default function ExtractInChrome() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Extracting Pages in Chrome</h1>
        <p className="sub">
          What the browser can do on its own, what the print trick costs, and when to use something
          else.
        </p>
      </div>

      <article className="content">
        <p className="byline">Last reviewed November 2026 · Tested on Chrome 131</p>

        <p>
          Chrome opens PDFs. That is the whole of its PDF capability — it displays them, searches
          them and prints them. There is no page panel, no delete, no extract, no reorder. So the
          question is not &ldquo;where is the extract button&rdquo; but &ldquo;what is the least bad
          workaround&rdquo;, and the answer depends on the document.
        </p>

        <h2>The built-in workaround: print to a new PDF</h2>
        <p>
          Chrome&apos;s print dialog accepts a page range, and its destination list includes{" "}
          <b>Save as PDF</b>. That combination produces a file containing only the pages you named —
          which is an extraction, in the loosest sense.
        </p>
        <ol className="steps">
          <li>
            Drag the PDF into a Chrome tab, or press <span className="kbd">⌘O</span> /{" "}
            <span className="kbd">Ctrl+O</span> and choose the file.
          </li>
          <li>
            Press <span className="kbd">⌘P</span> / <span className="kbd">Ctrl+P</span>.
          </li>
          <li>
            Under <b>Destination</b>, choose <b>Save as PDF</b>.
          </li>
          <li>
            Under <b>Pages</b>, choose <b>Custom</b> and type the range, for example{" "}
            <code className="inline">3-12</code>.
          </li>
          <li>
            Check <b>Paper size</b> matches the document, then save.
          </li>
        </ol>

        <h2>What that actually does to the file</h2>
        <p>
          Printing is not copying, and the difference shows up in the output. Chrome renders each page
          to the page description language it uses for printing, then writes that as a new PDF. Three
          things change:
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Property</th>
                <th>Print-to-PDF result</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Text</td>
                <td>Usually still selectable</td>
                <td>Text is re-emitted as text, but the original font embedding is rebuilt.</td>
              </tr>
              <tr>
                <td>Image quality</td>
                <td>Can degrade</td>
                <td>Images are resampled to print resolution; a 300 dpi scan may come out softer.</td>
              </tr>
              <tr>
                <td>Hyperlinks</td>
                <td>Lost</td>
                <td>Links are annotations, not printable content.</td>
              </tr>
              <tr>
                <td>Form fields</td>
                <td>Flattened, values visible</td>
                <td>The printed page shows the value; the interactive field is gone.</td>
              </tr>
              <tr>
                <td>Bookmarks and outline</td>
                <td>Lost</td>
                <td>Not part of the page.</td>
              </tr>
              <tr>
                <td>File size</td>
                <td>Often much larger</td>
                <td>
                  Chrome embeds its own font subsets and may rasterise complex graphics. A 2 MB
                  extract can come out at 6 MB.
                </td>
              </tr>
              <tr>
                <td>Page size</td>
                <td>Forced to the paper size</td>
                <td>
                  Choose the wrong paper size and the page is scaled, not cropped — a silent change to
                  the document.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="note warn">
          <b>Watch the paper size.</b> If the source is A4 and the print dialog is set to Letter,
          Chrome scales the page down by about 3% and adds margins. Nothing errors, nothing warns, and
          the document is now subtly wrong. Any extracted page that looks slightly small or slightly
          too margined is almost always this.
        </div>

        <h2>The case the print trick cannot handle</h2>
        <p>
          Non-consecutive pages. The dialog takes one range, so &ldquo;pages 3, 7 and 9–12&rdquo;
          means three separate print jobs with three separate files, then a merge. For a document
          where you need a dozen scattered pages, that is twenty minutes of clicking.
        </p>
        <p>
          The <a href="/">browser extractor on this site</a> accepts a typed list —{" "}
          <code className="inline">3, 7, 9-12</code> — and produces one file in one pass, because it
          manipulates the page tree instead of printing. Pages are copied as objects, so text stays
          selectable, images keep their exact resolution, links that point within the extracted pages
          keep working, and the file size is close to the sum of the pages rather than a re-render.
        </p>

        <h2>Extensions: read the permissions before installing</h2>
        <p>
          The Chrome Web Store has dozens of PDF extensions. Most work, and some are well built. The
          thing to check is not the rating but the permission line: an extension that can{" "}
          <i>read and change all your data on all websites</i> has the technical ability to read every
          document you open, on every site, for as long as it is installed.
        </p>
        <p>
          That is not a theoretical risk — it is the standard permission model, and it is why PDF
          extensions are a recurring target for acquisition and quiet changes of ownership. If you only
          need to extract pages occasionally, visiting a site deliberately, doing the job and closing
          the tab leaves a much smaller footprint than an always-on extension.
        </p>

        <h2>Chromebook, ChromeOS and managed browsers</h2>
        <p>
          On a Chromebook there is no Preview, no Acrobat and usually no permission to install Linux
          packages. The print-to-PDF workaround is the only built-in option, which makes the limits
          above more relevant: Crostini users can install qpdf, everyone else cannot.
        </p>
        <p>
          In a managed enterprise browser, extensions are often blocked entirely and the print dialog
          may be locked to a default printer. A site-based tool works in those environments because it
          needs nothing beyond the browser itself — and the file never leaves the machine, which is
          usually the reason the browser is locked down in the first place.
        </p>

        <h2>Decision table</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>What you need</th>
                <th>Print trick</th>
                <th>Dedicated extractor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One contiguous range, quick look</td>
                <td>Fine</td>
                <td>Also fine, and smaller output</td>
              </tr>
              <tr>
                <td>Non-consecutive pages</td>
                <td>One job per block</td>
                <td>One job</td>
              </tr>
              <tr>
                <td>Archive-quality, exact resolution</td>
                <td>Not reliable</td>
                <td>Yes — pages are copied, not printed</td>
              </tr>
              <tr>
                <td>Working links and form fields</td>
                <td>Lost</td>
                <td>Page-level annotations preserved</td>
              </tr>
              <tr>
                <td>File size matters</td>
                <td>Often inflated</td>
                <td>Close to the source pages</td>
              </tr>
              <tr>
                <td>Confidential document</td>
                <td>Local — safe</td>
                <td>Local — safe, and verifiable in DevTools</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Can Chrome extract pages from a PDF directly?</summary>
            <p>
              No. Its viewer has no page management. Printing to PDF with a page range is the only
              built-in route.
            </p>
          </details>
          <details>
            <summary>Does print-to-PDF reduce quality?</summary>
            <p>
              It re-renders rather than copies, so images can be resampled and the file often grows.
              Text usually stays selectable, but the font embedding is rebuilt.
            </p>
          </details>
          <details>
            <summary>Can I extract pages 3, 7 and 9-12 in one pass?</summary>
            <p>
              Not with the print dialog, which takes a single range. Type the list into a dedicated
              extractor instead — it produces one file.
            </p>
          </details>
          <details>
            <summary>Why did links and form fields disappear?</summary>
            <p>
              Printing flattens the page to what is visible. Links, fields, bookmarks and attachments
              are not printable objects.
            </p>
          </details>
          <details>
            <summary>Is a PDF extension safe to use?</summary>
            <p>
              Check its permissions. An extension that can read all data on all sites can read every
              document you open, for as long as it stays installed. A site-based tool you visit
              deliberately is a smaller exposure.
            </p>
          </details>
        </div>

        <h2>Related</h2>
        <ul>
          <li>
            <a href="/">Extract pages in the browser</a> — no install, nothing uploaded.
          </li>
          <li>
            <a href="/extract-pages-from-pdf-on-mac">Extracting pages on a Mac</a> — Preview, qpdf and
            Shortcuts.
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">Extract vs split vs delete</a>
          </li>
          <li>
            <a href="/how-to-extract-pages-from-pdf">How to extract pages from a PDF</a>
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
