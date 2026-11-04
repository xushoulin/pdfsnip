import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PDFSnip — Free, Private PDF Page Tools",
  description:
    "PDFSnip is a set of free PDF page tools — extract, delete, rotate, merge and split — that run 100% in your browser. Learn why we built it and how to reach us.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>About PDFSnip</h1>
        <p className="sub">Free PDF page tools that respect your documents.</p>
      </div>

      <article className="content">
        <h2>Why we built this</h2>
        <p>
          Every &quot;free online PDF tool&quot; we tried had the same catch: to extract five pages
          from a contract, you had to upload the whole document to somebody&apos;s server. For a tax
          form, a medical record, or a client agreement, that never felt right.
        </p>
        <p>
          PDFSnip takes a different approach: <b>every tool runs entirely in your browser</b>. When
          you open a PDF here, it is read from your disk into your browser&apos;s memory, processed by
          JavaScript on your own device, and saved back to your disk. There is no upload step, because
          there is no server to upload to. You can disconnect from the internet after the page loads
          and everything still works.
        </p>

        <h2>What you get</h2>
        <ul>
          <li>
            <b>Extract</b> — copy selected pages into one new PDF (<a href="/">open the tool</a>)
          </li>
          <li>
            <b>Delete</b> — remove unwanted pages (<a href="/delete-pages-from-pdf">open the tool</a>)
          </li>
          <li>
            <b>Rotate</b> — fix sideways scans (<a href="/rotate-pdf">open the tool</a>)
          </li>
          <li>
            <b>Merge</b> — combine PDFs in any order (<a href="/merge-pdf">open the tool</a>)
          </li>
          <li>
            <b>Split</b> — separate a PDF into many files (<a href="/split-pdf">open the tool</a>)
          </li>
        </ul>
        <p>
          All tools are free, require no account, and add no watermarks. Pages are copied
          byte-for-byte, so text stays selectable and images keep their original resolution.
        </p>

        <h2>How it works under the hood</h2>
        <p>
          PDFSnip is built with Next.js and React, using the open-source{" "}
          <a href="https://github.com/Hopding/pdf-lib" rel="noopener" target="_blank">
            pdf-lib
          </a>{" "}
          library bundled into the page. It is a static site — there is no backend, no database, and
          no analytics that could see your documents.
        </p>

        <h2>Contact</h2>
        <p>
          Found a bug, or want a tool we don&apos;t have yet? Email us at{" "}
          <b>hello@pdfsnip.shoulin.shop</b> — we read everything and reply to real messages.
        </p>
        <p>
          <i>Last updated: October 2026</i>
        </p>
      </article>
    </main>
  );
}
