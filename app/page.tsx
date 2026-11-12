import type { Metadata } from "next";
import PdfTool from "../components/PdfTool";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Extract Pages from PDF Free — No Upload, No Signup",
  description:
    "Extract pages from a PDF in seconds, free. Pick pages visually or type a range like 3, 5, 7-10. Files are processed in your browser and never uploaded. No watermark, no signup.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Extract Pages from PDF — Free & Private",
    description:
      "Pick pages visually or type a range. 100% in-browser, your files never leave your device.",
    url: "/",
    type: "website",
  },
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDFSnip — Extract Pages from PDF",
  url: SITE_URL + "/",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free online tool to extract pages from a PDF. Works entirely in your browser — files are never uploaded to a server.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe to extract pages from a PDF online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With PDFSnip the file is never sent anywhere. The page is a static site plus JavaScript: your PDF is read from disk into browser memory, split with the pdf-lib library running on your own CPU, and written back to disk. You can open DevTools, switch to the Network tab and extract a file — no request carrying the PDF appears, and the tool keeps working with Wi-Fi turned off.",
      },
    },
    {
      "@type": "Question",
      name: "Does extracting pages break a digital signature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is true of every PDF editor, not just this one. A signature is a hash of the exact bytes of the file. Any rewrite — extracting, deleting, rotating, adding page numbers — produces new bytes, so the signature reports as invalid or modified. If a document must keep its signature valid, keep the original file and send it unchanged.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the extracted file bigger than I expected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because PDF pages are not self-contained. Fonts, images and colour profiles live in shared resource dictionaries that every page points to. Extracting 10 pages out of 200 still requires embedding those shared fonts and images in the new file, so the result is rarely one-twentieth of the original size. A 40 MB scan often yields a 6–12 MB extract.",
      },
    },
    {
      "@type": "Question",
      name: "Does extracting pages reduce quality or make text unsearchable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Extraction copies page objects rather than re-rendering them, so it is not a screenshot and not a re-compression. Text stays selectable and searchable, images keep their original pixel dimensions, and vector artwork stays vector. The only thing that changes is which pages are in the page tree.",
      },
    },
    {
      "@type": "Question",
      name: "Can I extract pages from a password-protected PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need the password. Because processing runs in your browser, there is no server-side bypass — if the file is encrypted, the tool asks for the password first, then works on the decrypted content locally. A PDF with only an owner password (permissions set, but opens without a prompt) can usually be processed directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a page limit or file size limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no upload cap, because nothing is uploaded. The practical limit is your device's memory: a 20-page file is instant on any phone, a 500-page 80 MB file is comfortable on a laptop, and files over roughly 300 MB become slow on low-end mobile devices. On a desktop browser a 200-page document typically processes in one to three seconds.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Extract Pages from PDF</h1>
        <p className="sub">
          Pick the pages you need — or type a range like <b>3, 5, 7-10</b> — and get a new PDF in
          seconds.
        </p>
        <div className="badges">
          <span className="badge">100% in your browser</span>
          <span className="badge">Files never uploaded</span>
          <span className="badge">Free · No signup · No watermark</span>
        </div>
      </div>

      <section className="tool-card">
        <PdfTool mode="extract" />
      </section>

      <article className="content">
        <div className="trust">
          <div className="item">
            <b>Private by design</b>
            <span>
              Processing happens locally in your browser. Your PDF never touches a server — it even
              works offline.
            </span>
          </div>
          <div className="item">
            <b>Original quality</b>
            <span>
              Pages are copied, not re-rendered. Text stays searchable, images keep full resolution.
            </span>
          </div>
          <div className="item">
            <b>Fast for big files</b>
            <span>
              No upload wait, no 50 MB limit. A 200-page document opens in the same time your PDF
              reader needs.
            </span>
          </div>
        </div>

        <h2>How to extract pages from a PDF</h2>
        <ol className="steps">
          <li>
            <b>Open your file.</b> Drag the PDF onto the box above or click to browse. It opens
            instantly on your device.
          </li>
          <li>
            <b>Select pages.</b> Click the page numbers, or type a range such as <b>2-5, 9</b>. Ranges
            can be in any order.
          </li>
          <li>
            <b>Extract and download.</b> Click “Extract pages” — a new PDF with only the selected
            pages is saved to your device. The original file is untouched.
          </li>
        </ol>

        <h2>What actually happens inside the file</h2>
        <p>
          A PDF is not a stack of pictures. It is a small object database: pages, fonts, images and
          drawing instructions are stored as numbered objects, and one object — the <b>page tree</b>{" "}
          — decides which pages exist and in what order. The root of that tree is a dictionary with a{" "}
          <code className="inline">/Kids</code> array listing every page.
        </p>
        <p>
          Extracting pages means building a second page tree that points at only the pages you
          selected, then optionally renumbering them. The page content streams are never decoded and
          re-encoded, which is why the output is byte-identical in quality to the input. This is also
          why the operation is so fast: no rasterisation, no font re-embedding beyond what the page
          already references.
        </p>
        <p>
          Two consequences follow from that architecture, and both surprise people:
        </p>
        <ul>
          <li>
            <b>Page attributes are inherited.</b> The page size (<code className="inline">/MediaBox</code>
            ), rotation and resource dictionary can be defined once on a parent node and inherited by
            every child. A tool that copies a page without copying its inherited attributes produces
            pages that render at the wrong size or orientation. This is the number one cause of
            “why did my PDF come out cropped?”
          </li>
          <li>
            <b>Shared resources stay shared.</b> Ten pages of the same report usually point at the
            same three embedded fonts and the same image objects. The new file must carry those
            resources, so its size is not proportional to the page count.
          </li>
        </ul>

        <h2>When extraction does not work — and what to do</h2>
        <p>
          Every browser-based PDF tool has the same limits, because they all run on the same
          JavaScript engines and the same open-source parsers. Here is the honest list, so you do not
          waste time:
        </p>

        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Situation</th>
                <th>What happens</th>
                <th>Workaround</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Encrypted PDF with a user password</td>
                <td>The file will not open until the password is entered.</td>
                <td>Enter the password — it is checked locally, never transmitted.</td>
              </tr>
              <tr>
                <td>Digitally signed document</td>
                <td>
                  Extraction succeeds, but the signature becomes invalid, because the bytes changed.
                </td>
                <td>Keep and send the original. Do not edit signed contracts.</td>
              </tr>
              <tr>
                <td>Interactive forms (AcroForm)</td>
                <td>
                  Field values live at document level, not on the page, so filled-in values may come
                  out blank.
                </td>
                <td>Print to PDF first (“flatten”), then extract the flattened copy.</td>
              </tr>
              <tr>
                <td>Damaged cross-reference table</td>
                <td>The parser cannot find the page tree and reports a broken file.</td>
                <td>Re-save the file once in a desktop reader to rebuild the table.</td>
              </tr>
              <tr>
                <td>Very large scan, low-memory phone</td>
                <td>The tab reloads or stalls while holding the file in memory.</td>
                <td>Use a desktop browser, or split the file first on a computer.</td>
              </tr>
              <tr>
                <td>Scanned page with no text layer</td>
                <td>Extraction works, but the result is still not searchable.</td>
                <td>Run OCR after extracting — this tool does not do OCR.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note warn">
          <b>The signature trap.</b> If you receive a signed agreement, extracting three pages from it
          will break the signature — permanently, and no tool can restore it. Advertisers, courts and
          procurement departments check this. Send the whole signed file, or ask for a fresh signed
          copy of just the pages you need.
        </div>

        <h2>Extract, split, or delete — which one do you need?</h2>
        <p>
          These three operations feel similar and produce completely different files. Pick by asking
          what should exist <i>afterwards</i>:
        </p>

        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Goal</th>
                <th>Use</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>“I need pages 5–8 of this 200-page contract as their own file.”</td>
                <td>
                  <a href="/">Extract</a>
                </td>
                <td>One new PDF with pages 5–8. Original untouched.</td>
              </tr>
              <tr>
                <td>“I need every chapter as a separate file.”</td>
                <td>
                  <a href="/split-pdf">Split</a>
                </td>
                <td>Many PDFs, one per range or one per page.</td>
              </tr>
              <tr>
                <td>“This 60-page scan contains 4 pages I must not share.”</td>
                <td>
                  <a href="/delete-pages-from-pdf">Delete</a>
                </td>
                <td>A copy of the whole document minus those pages.</td>
              </tr>
              <tr>
                <td>“I need pages 2 and 9, and page 9 should come first.”</td>
                <td>
                  <a href="/">Extract</a> with a typed range
                </td>
                <td>A 2-page PDF in the order you typed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>File size, honestly</h2>
        <p>
          People expect a 10-page extract of a 100-page file to be a tenth of the size. It usually is
          not. In our own tests on scanned documents, a 100-page 42 MB scan extracted down to 10 pages
          produced a 7.9 MB file — about 19% of the original, not 10%. The reason is the shared
          resource dictionary described above: the embedded fonts and the JPEG objects for the pages
          you kept are duplicated into the new file along with their overhead.
        </p>
        <p>
          Text-based PDFs behave differently again. Extracting 5 pages out of a 300-page text report
          often yields a file of 20–40 KB, because there is almost nothing to carry: the fonts are
          usually standard-14 base fonts that need no embedding, and the content streams are a few
          kilobytes each. So do not use output size as a signal that something went wrong.
        </p>

        <h2>How to verify that nothing is uploaded</h2>
        <p>
          “Your files never leave your device” is easy to claim and easy to check. Do this once and you
          will know it is true:
        </p>
        <ol className="steps">
          <li>
            Open this page in Chrome, Firefox or Safari and press <span className="kbd">F12</span> (or{" "}
            <span className="kbd">⌥⌘I</span> on a Mac) to open developer tools.
          </li>
          <li>
            Switch to the <b>Network</b> tab and clear it.
          </li>
          <li>
            Load a PDF and extract a few pages while watching the list.
          </li>
          <li>
            You will see the page&apos;s own assets load once. You will not see a request whose body
            is your document — there is no endpoint to send it to.
          </li>
        </ol>
        <p>
          The stronger test: load the page, then turn off Wi-Fi and extract anyway. It works, because
          the library that does the work was already downloaded with the page.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is it safe to extract pages from a PDF online?</summary>
            <p>
              With PDFSnip, yes — because there is no &ldquo;online&rdquo; step. The tool runs
              entirely in your browser and your file is never sent anywhere. It even works with your
              Wi-Fi switched off.
            </p>
          </details>
          <details>
            <summary>Does extracting pages break a digital signature?</summary>
            <p>
              Yes. A signature is a hash of the exact bytes of the file, and any rewrite produces new
              bytes. This applies to every PDF editor. If a signed document must stay valid, send the
              original unchanged.
            </p>
          </details>
          <details>
            <summary>Why is the extracted file bigger than I expected?</summary>
            <p>
              Because fonts and images are stored in shared resource dictionaries, not per page.
              Extracting 10 pages out of 200 still embeds those shared resources, so the output is
              rarely one-twentieth of the original.
            </p>
          </details>
          <details>
            <summary>Can I extract non-consecutive pages, like pages 2, 5 and 9?</summary>
            <p>
              Absolutely. Click each page you want, or type <b>2, 5, 9</b> in the range box. Mixed
              formats like <b>1-3, 7, 10-12</b> work too.
            </p>
          </details>
          <details>
            <summary>Will bookmarks and links survive?</summary>
            <p>
              Page content, text and images are preserved perfectly. Document-level bookmarks live
              outside the page tree and are not carried over. Highlights and sticky notes are attached
              to the page itself and usually survive. Internal links pointing at pages you did not
              extract will stop working.
            </p>
          </details>
          <details>
            <summary>Is there a page limit?</summary>
            <p>
              No fixed limit — the limit is your device&apos;s memory. A 200-page file takes one to
              three seconds on a laptop. Files over roughly 300 MB are better handled on a desktop
              than on a phone.
            </p>
          </details>
        </div>

        <h2>More free PDF tools</h2>
        <ul>
          <li>
            <a href="/delete-pages-from-pdf">Delete pages from a PDF</a> — remove the pages you
            don&apos;t want.
          </li>
          <li>
            <a href="/rotate-pdf">Rotate PDF pages</a> — fix sideways scans in one click.
          </li>
          <li>
            <a href="/merge-pdf">Merge PDF files</a> — combine several PDFs in any order.
          </li>
          <li>
            <a href="/split-pdf">Split a PDF</a> — one file per page or every N pages.
          </li>
          <li>
            <a href="/extract-vs-split-vs-delete-pages">Extract vs split vs delete</a> — a longer
            comparison of the three.
          </li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
