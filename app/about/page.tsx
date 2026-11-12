import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "About PDFSnip — Who Runs This Site and Why",
  description:
    "PDFSnip is an independent, ad-supported PDF toolkit built by a solo developer. Every tool runs in your browser, there is no backend, and no file is ever uploaded. Here is how it works and how to reach us.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PDFSnip",
    description:
      "An independent PDF toolkit that runs entirely in your browser. How it works, who runs it, and how it is funded.",
    url: "/about",
    type: "article",
  },
};

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: SITE_URL + "/about",
  name: "About PDFSnip",
  mainEntity: {
    "@type": "Organization",
    name: "PDFSnip",
    url: SITE_URL,
    email: "hello@pdfsnip.shoulin.shop",
    description:
      "An independent, ad-supported collection of PDF tools that run entirely inside the browser.",
  },
};

export default function AboutPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>About PDFSnip</h1>
        <p className="sub">
          An independent PDF toolkit that runs in your browser. No account, no upload, no backend.
        </p>
      </div>

      <article className="content">
        <p className="byline">
          Written and maintained by the PDFSnip developer · Last reviewed November 2026 ·{" "}
          <a href="#contact">Contact</a>
        </p>

        <h2>What this site is</h2>
        <p>
          PDFSnip is a small collection of PDF page tools — extract, delete, rotate, merge, split, add
          page numbers, convert images — built and maintained by one independent developer. It is not
          a company product, and it is not a white-label template with a domain pointed at it.
        </p>
        <p>
          The whole site is a static Next.js application. There is no server that receives documents,
          no database, and no user accounts. That is not a marketing position; it is the reason the
          site can promise that your files stay on your device. There is nothing to upload them to.
        </p>

        <h2>Why it exists</h2>
        <p>
          In 2026, extracting eight pages from a signed contract still usually means uploading the
          entire contract to a stranger&apos;s server, waiting for a render farm, and hoping the file
          is deleted afterwards. For a tax return, a medical letter or an employment contract, that
          trade is a bad one — and it is unnecessary, because the operation is a simple manipulation of
          a file that is already on your disk.
        </p>
        <p>
          Browsers have been able to do that manipulation for years. The libraries exist, they are
          open source, and they are fast. What was missing was a site that used them without asking for
          an email address first. That is the entire design brief.
        </p>

        <h2>How it actually works</h2>
        <p>
          When you choose a file, the browser reads it from disk into memory. A JavaScript library —{" "}
          <a href="https://github.com/Hopding/pdf-lib" rel="noopener" target="_blank">
            pdf-lib
          </a>
          , bundled with this site rather than loaded from a third-party CDN — parses the PDF object
          table, builds a new page tree containing the pages you selected, and serialises a new file.
          That file is handed back to the browser as a download. Nothing in that sequence involves a
          network request.
        </p>
        <p>
          Because the library ships with the page, the tools keep working offline once the page has
          loaded. You can verify this with the browser&apos;s developer tools: open the Network tab,
          clear it, extract a few pages, and watch that no request carries your document. The stronger
          test is to turn off Wi-Fi and do it anyway.
        </p>

        <h2>What the tools do not do</h2>
        <p>
          Being clear about limits is more useful than a feature list. None of these tools:
        </p>
        <ul>
          <li>
            <b>Redact.</b> Deleting a page or drawing over text does not remove the underlying data.
            Use a dedicated redaction tool when information must genuinely be destroyed.
          </li>
          <li>
            <b>Preserve digital signatures.</b> Any rewrite invalidates a signature — this is
            mathematics, not a limitation of this site.
          </li>
          <li>
            <b>Run OCR.</b> A scanned page stays a scanned page. There is no text recognition.
          </li>
          <li>
            <b>Rebuild bookmarks.</b> The document outline is not reconstructed after merging or
            splitting.
          </li>
          <li>
            <b>Repair corrupt files.</b> A PDF with a broken cross-reference table usually cannot be
            parsed at all.
          </li>
        </ul>
        <p>
          Where a limitation has a workaround, the tool page says so in a table rather than hiding it.
          If a tool cannot do what you need, the honest answer is better than a failed attempt.
        </p>

        <h2>How the site is funded</h2>
        <p>
          PDFSnip is free and has no paid tier. It is funded by display advertising through Google
          AdSense, which is why you may see ads around the tools. The ads are served by Google, are
          marked as ads, and are never mixed into the tool interface. Advertising is the entire
          business model — there is no data sale, because there is no data collection to sell.
        </p>
        <p>
          The site sets no tracking cookies of its own. Google&apos;s advertising script may set
          cookies in your browser according to your Google ad settings; the{" "}
          <a href="/privacy">privacy page</a> explains what that means and how to opt out.
        </p>

        <h2>Editorial approach</h2>
        <p>
          Every guide on this site is written from testing the tools on real documents — scans from a
          flatbed, phone photos of receipts, 300-page reports, mixed-orientation board packs, files
          that turned out to be encrypted halfway through the workflow. The numbers quoted in the
          guides (file sizes, timings, PPI calculations) come from those runs rather than from
          round-number guesses.
        </p>
        <p>
          When a tool fails, the guide says it fails and explains why. When a competing method is
          better — Preview on a Mac for a two-file merge, a desktop layout tool for Roman-numeral front
          matter — the guide says that too. A page that recommends its own tool for everything is not
          useful, and readers notice.
        </p>

        <h2>What is next</h2>
        <ul>
          <li>Image-based compression that reduces scan size without visible loss.</li>
          <li>PDF to JPG export, batch, preserving page order.</li>
          <li>Per-page cropping, which is currently the most requested missing feature.</li>
          <li>
            An accessibility pass on the tool UI — the page grid is keyboard operable but not yet
            labelled well for screen readers.
          </li>
        </ul>

        <h2 id="contact">Contact</h2>
        <p>
          Bug reports, feature requests and corrections are welcome at{" "}
          <b>hello@pdfsnip.shoulin.shop</b>. Real messages get a reply, usually within a couple of
          days. If you are reporting a problem with a specific file, say what the file is — a scan, an
          exported report, an encrypted contract — and what happened; that is usually enough to
          reproduce it without you sending the document.
        </p>
        <p>
          Please do not email documents. There is no need: the tools run on your machine, and the
          fastest diagnosis is a description of the file and the error message.
        </p>

        <h2>Change history</h2>
        <ul>
          <li>
            <b>November 2026</b> — Rewrote every tool page around real failure modes; added the
            limitation tables, file-size measurements and verification instructions you see today.
          </li>
          <li>
            <b>November 2026</b> — Moved the PDF engine from a CDN script to a bundled dependency, so
            the tools work offline and cannot be affected by a third-party outage.
          </li>
          <li>
            <b>October 2026</b> — Launched with extract, delete, rotate, merge and split; added page
            numbering and JPG to PDF shortly after.
          </li>
        </ul>

        <p>
          <i>
            PDFSnip is an independent project. It is not affiliated with Adobe, Google, or any PDF
            software vendor mentioned on this site.
          </i>
        </p>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
    </main>
  );
}
