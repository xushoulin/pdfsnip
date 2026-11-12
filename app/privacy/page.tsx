import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PDFSnip",
  description:
    "PDFSnip privacy policy: PDFs are processed entirely in your browser. No file is uploaded, stored or shared. What is collected, how advertising works, and how to opt out.",
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
        <p className="byline">Last updated November 2026</p>

        <h2>Your files</h2>
        <p>
          Every tool on PDFSnip — extract, delete, rotate, merge, split, page numbers and image
          conversion — runs entirely inside your web browser using JavaScript. When you open a PDF, it
          is read from your disk into your browser&apos;s memory, processed on your own CPU, and saved
          back to your disk as a new download.
        </p>
        <p>
          <b>We cannot see your files even if we wanted to.</b> There is no upload step and no server
          that receives documents. The site is a set of static pages; the processing code is downloaded
          with the page and runs locally. You can verify this: open your browser&apos;s developer tools,
          switch to the Network tab, clear it, and process a file. No request carries your document. The
          stronger test is to disconnect from the internet after the page has loaded — every tool still
          works.
        </p>
        <p>
          We do not store documents, page selections, file names, or the results of any operation.
          Nothing is written to a database, because there is no database.
        </p>

        <h2>What is collected</h2>
        <ul>
          <li>
            <b>No account, no email, no personal details.</b> There is nothing to sign up for.
          </li>
          <li>
            <b>No document data.</b> Files and their contents never reach us.
          </li>
          <li>
            <b>Server logs.</b> The site is served by a hosting provider (Vercel), which records
            standard request data — IP address, timestamp, requested URL, user agent — as any web
            server does, for security and abuse prevention. These logs contain no document content.
          </li>
          <li>
            <b>Advertising cookies.</b> Described in the next section.
          </li>
        </ul>

        <h2>Advertising and cookies</h2>
        <p>
          This site is supported by Google AdSense. Third-party vendors, including Google, use cookies
          to serve ads based on your prior visits to this and other websites. Google&apos;s use of
          advertising cookies enables it and its partners to serve ads to you based on your visit to
          this site and/or other sites on the Internet.
        </p>
        <p>
          Google may use the DoubleClick / Google Advertising Products cookie. You can opt out of
          personalised advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" rel="noopener" target="_blank">
            Google Ads Settings
          </a>
          , or opt out of third-party vendor cookies generally at{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener" target="_blank">
            aboutads.info/choices
          </a>{" "}
          and{" "}
          <a href="https://www.youronlinechoices.eu/" rel="noopener" target="_blank">
            youronlinechoices.eu
          </a>{" "}
          in the EU.
        </p>
        <p>
          PDFSnip itself sets no tracking cookies and runs no analytics that would identify you. The
          only third-party script on the site is Google&apos;s advertising script; it is loaded with the
          page and is not given access to the files you process.
        </p>

        <h2>Third-party services</h2>
        <ul>
          <li>
            <b>pdf-lib</b> — the open-source library that performs the PDF work, bundled into the site
            rather than loaded from a CDN. It runs locally and transmits nothing.
          </li>
          <li>
            <b>Google AdSense</b> — serves the advertisements. Subject to Google&apos;s privacy policy.
          </li>
          <li>
            <b>Vercel</b> — hosts the static site and provides the delivery logs described above.
          </li>
        </ul>
        <p>
          There are no other third-party integrations: no chat widget, no heat-map script, no social
          embed, no customer-data platform.
        </p>

        <h2>Your rights</h2>
        <p>
          Because the site does not collect personal data, there is usually nothing to access, correct
          or delete. If you are in the EU or UK and believe we hold data about you — for example in a
          support email you sent us — you have the right to request a copy, ask for correction or
          erasure, and object to processing. Write to the address below and we will respond within 30
          days.
        </p>
        <p>
          For advertising data specifically, Google is the controller. Use{" "}
          <a href="https://myaccount.google.com/" rel="noopener" target="_blank">
            your Google account settings
          </a>{" "}
          to review or delete ad personalisation data.
        </p>

        <h2>Children</h2>
        <p>
          This site is not directed at children under 13 and we do not knowingly collect information
          from them. There is no account system and no user-generated content.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If the site ever adds a feature that changes any of the above — analytics, a contact form with
          server-side storage, a paid tier — this page will be updated before that feature goes live,
          and the date at the top will change. The current guarantees about file handling are structural:
          they hold because there is no server to send a file to.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy, or a correction to it: <b>hello@pdfsnip.shoulin.shop</b>. See
          also the <a href="/about">about page</a> for how the site works and how it is funded.
        </p>
      </article>
    </main>
  );
}
