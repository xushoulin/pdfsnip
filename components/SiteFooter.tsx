import Link from "next/link";

const tools = [
  { href: "/", label: "Extract Pages" },
  { href: "/delete-pages-from-pdf", label: "Delete Pages" },
  { href: "/rotate-pdf", label: "Rotate PDF" },
  { href: "/merge-pdf", label: "Merge PDF" },
  { href: "/split-pdf", label: "Split PDF" },
  { href: "/add-page-numbers-to-pdf", label: "Add Page Numbers" },
];

const guides = [
  { href: "/extract-pages-from-pdf-in-chrome", label: "Extract in Chrome" },
  { href: "/extract-pages-from-pdf-on-mac", label: "Extract on Mac" },
  { href: "/extract-vs-split-vs-delete-pages", label: "Extract vs Split vs Delete" },
];

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div>
            <b>Tools</b>
            {tools.map((t) => (
              <Link key={t.href} href={t.href}>{t.label}</Link>
            ))}
          </div>
          <div>
            <b>Guides</b>
            {guides.map((g) => (
              <Link key={g.href} href={g.href}>{g.label}</Link>
            ))}
          </div>
          <div>
            <b>About</b>
            <Link href="/about">About &amp; Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <p className="fine">© 2026 PDFSnip. All processing happens locally in your browser — your documents never leave your device.</p>
      </div>
    </footer>
  );
}
