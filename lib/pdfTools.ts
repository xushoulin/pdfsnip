// PDFSnip — 100% client-side PDF operations, powered by pdf-lib (bundled, no CDN).
import { PDFDocument, degrees, rgb, StandardFonts } from "pdf-lib";

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

/* ---------- Images (JPG/PNG) → PDF ---------- */

export type ImagePageSize = "a4" | "letter" | "fit";
export type ImageOrientation = "auto" | "portrait" | "landscape";

export interface ImageToPdfOptions {
  pageSize: ImagePageSize;
  orientation: ImageOrientation; // only used for a4/letter
  margin: number; // pt, only used for a4/letter
}

export interface ImageInput {
  bytes: Uint8Array;
  /** MIME type or filename — used to pick JPG vs PNG embedding. */
  type: string;
}

const FIXED_PAGE_SIZES: Record<"a4" | "letter", [number, number]> = {
  a4: [595.28, 841.89],
  letter: [612, 792],
};

/**
 * Convert a list of JPG/PNG images into a single PDF, one image per page,
 * in the given order. 100% client-side.
 *
 * pageSize:
 *  - "a4"/"letter": image is scaled (aspect ratio preserved) to fit inside
 *    the page minus the margin, and centered.
 *  - "fit": page is sized to the image itself (1 image px = 0.75 pt, i.e. 96 dpi).
 */
export async function imagesToPdf(
  files: ImageInput[],
  opts: ImageToPdfOptions
): Promise<Uint8Array> {
  if (!files.length) throw new Error("No images provided.");
  const out = await PDFDocument.create();
  const margin = opts.margin >= 0 ? opts.margin : 24;

  for (const f of files) {
    const img = /png/i.test(f.type)
      ? await out.embedPng(f.bytes)
      : await out.embedJpg(f.bytes);
    const iw = img.width;
    const ih = img.height;

    if (opts.pageSize === "fit") {
      const scale = 0.75;
      const page = out.addPage([iw * scale, ih * scale]);
      page.drawImage(img, { x: 0, y: 0, width: iw * scale, height: ih * scale });
      continue;
    }

    let [pw, ph] = FIXED_PAGE_SIZES[opts.pageSize];
    let landscape = iw > ih; // auto: follow the image's own aspect
    if (opts.orientation === "portrait") landscape = false;
    if (opts.orientation === "landscape") landscape = true;
    if (landscape) [pw, ph] = [ph, pw];

    const page = out.addPage([pw, ph]);
    const availW = Math.max(1, pw - margin * 2);
    const availH = Math.max(1, ph - margin * 2);
    const scale = Math.min(availW / iw, availH / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    page.drawImage(img, {
      x: (pw - dw) / 2,
      y: (ph - dh) / 2,
      width: dw,
      height: dh,
    });
  }

  return out.save();
}

/* ---------- Page numbers ---------- */

export type NumberPosition =
  | "bottom-center"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "top-right"
  | "top-left";

export type NumberFormat = "n" | "n-of-total" | "page-n" | "page-n-of-total";

export interface NumberOptions {
  position: NumberPosition;
  format: NumberFormat;
  start: number;
  fontSize: number;
  margin: number;
  skipFirst: boolean;
}

function numberLabel(format: NumberFormat, n: number, total: number): string {
  switch (format) {
    case "n":
      return String(n);
    case "n-of-total":
      return `${n} / ${total}`;
    case "page-n":
      return `Page ${n}`;
    default:
      return `Page ${n} of ${total}`;
  }
}

/**
 * Stamp page numbers onto a PDF. Handles /Rotate pages so the text is upright
 * and correctly positioned on scanned documents too.
 */
export async function addPageNumbers(
  srcBytes: Uint8Array,
  opts: NumberOptions
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(srcBytes, { ignoreEncryption: true });
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const pages = doc.getPages();
  const numbered = Math.max(1, pages.length - (opts.skipFirst ? 1 : 0));
  const size = opts.fontSize > 0 ? opts.fontSize : 11;
  const margin = opts.margin >= 0 ? opts.margin : 28;
  let counter = opts.start;

  pages.forEach((page, idx) => {
    if (opts.skipFirst && idx === 0) return;
    const n = counter++;
    const text = numberLabel(opts.format, n, numbered);

    const { width: w, height: h } = page.getSize();
    const rot = (((page.getRotation().angle % 360) + 360) % 360) as 0 | 90 | 180 | 270;
    const sideways = rot === 90 || rot === 270;

    // Work in "visual" coordinates (what the reader sees).
    const vw = sideways ? h : w;
    const vh = sideways ? w : h;
    const tw = font.widthOfTextAtSize(text, size);
    const th = font.heightAtSize(size);

    let vx = margin;
    let vy = margin;
    if (opts.position.endsWith("center")) vx = (vw - tw) / 2;
    if (opts.position.endsWith("right")) vx = vw - tw - margin;
    if (opts.position.startsWith("top")) vy = vh - margin - th;

    // Map visual -> unrotated page coordinates.
    let px: number;
    let py: number;
    if (rot === 90) {
      px = w - vy;
      py = vx;
    } else if (rot === 180) {
      px = w - vx;
      py = h - vy;
    } else if (rot === 270) {
      px = vy;
      py = h - vx;
    } else {
      px = vx;
      py = vy;
    }

    page.drawText(text, {
      x: px,
      y: py,
      size,
      font,
      color: rgb(0.2, 0.2, 0.2),
      rotate: degrees(rot),
    });
  });

  return doc.save();
}
