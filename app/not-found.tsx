import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="wrap">
      <div className="hero">
        <h1>404 — Page not found</h1>
        <p className="sub">The page you were looking for doesn&apos;t exist or has moved.</p>
      </div>

      <article className="content">
        <p>Try one of these instead:</p>
        <ul>
          <li>
            <Link href="/">Extract pages from a PDF</Link> — the home tool
          </li>
          <li>
            <Link href="/delete-pages-from-pdf">Delete pages from a PDF</Link>
          </li>
          <li>
            <Link href="/rotate-pdf">Rotate PDF pages</Link>
          </li>
          <li>
            <Link href="/merge-pdf">Merge PDF files</Link>
          </li>
          <li>
            <Link href="/split-pdf">Split a PDF</Link>
          </li>
          <li>
            <Link href="/about">About PDFSnip</Link>
          </li>
        </ul>
        <p>
          <Link href="/">← Back to PDFSnip home</Link>
        </p>
      </article>
    </main>
  );
}
