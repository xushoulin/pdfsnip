import Link from "next/link";
import { navTools } from "../lib/site";

export default function SiteHeader() {
  return (
    <header className="site">
      <div className="wrap">
        <Link className="brand" href="/"><span className="dot"></span>PDFSnip</Link>
        <nav className="tools">
          {navTools.map((t) => (
            <Link key={t.href} href={t.href}>{t.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
