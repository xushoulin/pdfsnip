import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PDFSnip privacy policy: we process PDFs entirely in your browser. No files are uploaded, stored or shared — there is no server that could receive them.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>Privacy Policy</h1>
        <p className="sub">The short version: your documents never leave your device.</p>
      </div>

      <article className="content">
        <h2>Your files</h2>
        <p>
          Every tool on PDFSnip — extract, delete, rotate, merge and split — runs entirely inside your
          web browser using JavaScript. When you open a PDF, it is read from your disk into your
          browser&apos;s memory, processed locally, and saved back to your disk.
        </p>
        <p>
          <b>We cannot see your files even if we wanted to.</b> There is no upload step and no server
          that receives your documents. You can verify this: disconnect from the internet after
          loading the page and every tool still works.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>We do not require an account, email address or any personal information.</li>
          <li>We do not store documents, page selections or results.</li>
          <li>
            If anonymous usage analytics are enabled in the future, they will never include file
            contents or names, and this page will be updated.
          </li>
        </ul>

        <h2>Advertising</h2>
        <p>
          This site is supported by Google AdSense. Third-party vendors, including Google, use
          cookies to serve ads based on your prior visits to this or other websites. Google&apos;s
          use of advertising cookies enables it and its partners to serve ads to you based on your
          visit to our sites and/or other sites on the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" rel="noopener" target="_blank">
            Google Ads Settings
          </a>
          , or by visiting{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener" target="_blank">
            www.aboutads.info/choices
          </a>
          .
        </p>

        <h2>Third-party services</h2>
        <p>
          The page bundles the open-source{" "}
          <a href="https://github.com/Hopding/pdf-lib" rel="noopener" target="_blank">
            pdf-lib
          </a>{" "}
          library into the page itself. Loading the library does not transmit your files or any
          document data.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us at <b>hello@pdfsnip.app</b>.
        </p>
        <p>
          <i>Last updated: October 2026</i>
        </p>
      </article>
    </main>
  );
}
