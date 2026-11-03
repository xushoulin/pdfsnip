// PDFSnip — 100% client-side PDF operations, powered by pdf-lib (bundled, no CDN).
import { PDFDocument, degrees } from "pdf-lib";

/* Parse "1-3, 5, 8-10" into an ordered, de-duplicated list of page numbers. */
export function parseRanges(str: string, max: number): number[] {
  const out: number[] = [];
  const seen: Record<number, boolean> = {};
  if (!str || !str.trim()) return out;
  const parts = str.split(/[,,，]/);
  for (const raw of parts) {
    const p = raw.trim();
    if (!p) continue;
    const m = p.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      let a = parseInt(m[1], 10);
      let b = parseInt(m[2], 10);
      if (a > b) [a, b] = [b, a];
      if (a < 1 || b > max) throw new Error(`Page range "${p}" is out of bounds (1-${max}).`);
      for (let n = a; n <= b; n++) {
        if (!seen[n]) { seen[n] = true; out.push(n); }
      }
    } else if (/^\d+$/.test(p)) {
      const k = parseInt(p, 10);
      if (k < 1 || k > max) throw new Error(`Page "${p}" is out of bounds (1-${max}).`);
      if (!seen[k]) { seen[k] = true; out.push(k); }
    } else {
      throw new Error(`Cannot understand "${p}". Use formats like 3 or 2-6.`);
    }
  }
  return out;
}

/* Parse "1-3, 5, 8-10" into groups, each range kept as one unit. */
export function parseGroups(str: string, max: number): number[][] {
  const out: number[][] = [];
  if (!str || !str.trim()) return out;
  const parts = str.split(/[,,，]/);
  for (const raw of parts) {
    const p = raw.trim();
    if (!p) continue;
    const m = p.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      let a = parseInt(m[1], 10);
      let b = parseInt(m[2], 10);
      if (a > b) [a, b] = [b, a];
      if (a < 1 || b > max) throw new Error(`Page range "${p}" is out of bounds (1-${max}).`);
      const g: number[] = [];
      for (let n = a; n <= b; n++) g.push(n);
      out.push(g);
    } else if (/^\d+$/.test(p)) {
      const k = parseInt(p, 10);
      if (k < 1 || k > max) throw new Error(`Page "${p}" is out of bounds (1-${max}).`);
      out.push([k]);
    } else {
      throw new Error(`Cannot understand "${p}". Use formats like 3 or 2-6.`);
    }
  }
  return out;
}

export function fmtSize(n: number): string {
  if (n > 1048576) return (n / 1048576).toFixed(1) + " MB";
  return Math.max(1, Math.round(n / 1024)) + " KB";
}

export function baseName(name: string): string {
  return name.replace(/\.pdf$/i, "") || "document";
}

export async function getPageCount(bytes: Uint8Array): Promise<number> {
  const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
  return doc.getPageCount();
}

/* Copy chosen pages (1-based) into a new single PDF. */
export async function extractPages(srcBytes: Uint8Array, numbers: number[]): Promise<Uint8Array> {
  const src = await PDFDocument.load(srcBytes, { ignoreEncryption: true });
  const out = await PDFDocument.create();
  const indices = numbers.map((n) => n - 1);
  const pages = await out.copyPages(src, indices);
  pages.forEach((p) => out.addPage(p));
  return out.save();
}

/* Remove chosen pages, keep the rest as one new PDF. */
export async function deletePages(srcBytes: Uint8Array, numbers: number[]): Promise<Uint8Array> {
  const doc = await PDFDocument.load(srcBytes, { ignoreEncryption: true });
  const remove = new Set(numbers);
  for (let i = doc.getPageCount(); i >= 1; i--) {
    if (remove.has(i)) doc.removePage(i - 1);
  }
  return doc.save();
}

/* Rotate pages. Passing targets=null rotates every page. */
export async function rotatePages(
  srcBytes: Uint8Array,
  angle: number,
  targets: number[] | null
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(srcBytes, { ignoreEncryption: true });
  const pages = doc.getPages();
  pages.forEach((p, idx) => {
    if (targets && !targets.includes(idx + 1)) return;
    const cur = p.getRotation().angle || 0;
    p.setRotation(degrees((cur + angle) % 360));
  });
  return doc.save();
}

/* Split a PDF into several PDFs, one per group. */
export async function splitPdf(srcBytes: Uint8Array, groups: number[][]): Promise<Uint8Array[]> {
  const src = await PDFDocument.load(srcBytes, { ignoreEncryption: true });
  const results: Uint8Array[] = [];
  for (const g of groups) {
    const out = await PDFDocument.create();
    const indices = g.map((n) => n - 1);
    const pages = await out.copyPages(src, indices);
    pages.forEach((p) => out.addPage(p));
    results.push(await out.save());
  }
  return results;
}

/* Combine several PDFs into one, in the given order. */
export async function mergePdfs(files: { bytes: Uint8Array }[]): Promise<Uint8Array> {
  const out = await PDFDocument.create();
  for (const f of files) {
    const src = await PDFDocument.load(f.bytes, { ignoreEncryption: true });
    const pages = await out.copyPages(src, src.getPageIndices());
    pages.forEach((p) => out.addPage(p));
  }
  return out.save();
}
