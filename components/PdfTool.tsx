"use client";

import { useRef, useState, useCallback } from "react";
import {
  extractPages,
  deletePages,
  rotatePages,
  splitPdf,
  parseRanges,
  parseGroups,
  getPageCount,
  fmtSize,
  baseName,
} from "../lib/pdfTools";

type Mode = "extract" | "delete" | "rotate" | "split";

interface FileState {
  name: string;
  bytes: Uint8Array;
  pageCount: number;
  size: number;
}

const MAX_SELECT_NOTE = 500;

const CONFIG: Record<Mode, { hint: string; rangeLabel: string; btn: string; placeholder: string; help: string }> = {
  extract: {
    hint: "Click pages to select them, or type a range below.",
    rangeLabel: "Pages to extract",
    btn: "Extract pages",
    placeholder: "e.g. 1-3, 5, 8-10",
    help: "Separate pages or ranges with commas. Clicking pages above fills this in for you.",
  },
  delete: {
    hint: "Click the pages you want to delete, or type a range below.",
    rangeLabel: "Pages to delete",
    btn: "Delete pages",
    placeholder: "e.g. 2-4, 9",
    help: "Separate pages or ranges with commas.",
  },
  rotate: {
    hint: "",
    rangeLabel: "Pages to rotate (leave empty to rotate all)",
    btn: "Rotate",
    placeholder: "e.g. 3, 7-9 — or empty for all pages",
    help: "",
  },
  split: {
    hint: "",
    rangeLabel: "Pages to split out",
    btn: "Split PDF",
    placeholder: "e.g. 1-3, 5, 8-10",
    help: "Each listed page or range becomes its own PDF file.",
  },
};

export default function PdfTool({ mode }: { mode: Mode }) {
  const [file, setFile] = useState<FileState | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [range, setRange] = useState("");
  const [angle, setAngle] = useState(90);
  const [splitMode, setSplitMode] = useState<"each" | "every" | "ranges">("each");
  const [everyN, setEveryN] = useState(2);
  const [status, setStatus] = useState<{ msg: string; cls: string }>({ msg: "", cls: "" });
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dzRef = useRef<HTMLDivElement>(null);

  const cfg = CONFIG[mode];

  const updateRangeFromSelection = (sel: Set<number>) => {
    setRange(Array.from(sel).sort((a, b) => a - b).join(","));
  };

  const handleFile = useCallback(async (f: File) => {
    if (!/\.pdf$/i.test(f.name)) {
      setStatus({ msg: "Please choose a PDF file.", cls: "err" });
      return;
    }
    setStatus({ msg: "Reading file…", cls: "" });
    const buf = await f.arrayBuffer();
    const bytes = new Uint8Array(buf);
    try {
      const pageCount = await getPageCount(bytes);
      setFile({ name: f.name, bytes, pageCount, size: f.size });
      setSelected(new Set());
      setRange("");
      setStatus({ msg: "", cls: "" });
    } catch {
      setStatus({ msg: "This PDF could not be opened (it may be corrupted).", cls: "err" });
    }
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
    e.target.value = "";
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dzRef.current?.classList.remove("over");
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const togglePage = (n: number) => {
    const next = new Set(selected);
    if (next.has(n)) next.delete(n);
    else next.add(n);
    setSelected(next);
    updateRangeFromSelection(next);
  };

  const reset = () => {
    setFile(null);
    setSelected(new Set());
    setRange("");
    setStatus({ msg: "", cls: "" });
  };

  const download = (bytes: Uint8Array, filename: string) => {
    const blob = new Blob([bytes as Uint8Array<ArrayBuffer>], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.remove();
    }, 800);
  };

  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const name = baseName(file.name);
      if (mode === "extract") {
        const nums = parseRanges(range, file.pageCount);
        if (!nums.length) {
          setStatus({ msg: "Select at least one page first.", cls: "err" });
          setBusy(false);
          return;
        }
        setStatus({ msg: "Extracting…", cls: "" });
        const bytes = await extractPages(file.bytes, nums);
        download(bytes, name + "-extracted.pdf");
        setStatus({ msg: `Done — ${nums.length} page(s) extracted to a new PDF.`, cls: "ok" });
      } else if (mode === "delete") {
        const nums = parseRanges(range, file.pageCount);
        if (!nums.length) {
          setStatus({ msg: "Select at least one page to delete.", cls: "err" });
          setBusy(false);
          return;
        }
        if (nums.length >= file.pageCount) {
          setStatus({ msg: "You cannot delete every page.", cls: "err" });
          setBusy(false);
          return;
        }
        setStatus({ msg: "Deleting…", cls: "" });
        const bytes = await deletePages(file.bytes, nums);
        download(bytes, name + "-pages-deleted.pdf");
        setStatus({ msg: `Done — ${nums.length} page(s) deleted.`, cls: "ok" });
      } else if (mode === "rotate") {
        const nums = range.trim() ? parseRanges(range, file.pageCount) : [];
        setStatus({ msg: "Rotating…", cls: "" });
        const bytes = await rotatePages(file.bytes, angle, nums.length ? nums : null);
        download(bytes, name + "-rotated.pdf");
        setStatus({
          msg: `Done — ${nums.length || file.pageCount} page(s) rotated by ${angle}°.`,
          cls: "ok",
        });
      } else if (mode === "split") {
        let groups: number[][] = [];
        if (splitMode === "each") {
          groups = Array.from({ length: file.pageCount }, (_, i) => [i + 1]);
        } else if (splitMode === "every") {
          if (!(everyN >= 1)) {
            setStatus({ msg: "Enter how many pages per file.", cls: "err" });
            setBusy(false);
            return;
          }
          for (let j = 1; j <= file.pageCount; j += everyN) {
            const g: number[] = [];
            for (let k = j; k < j + everyN && k <= file.pageCount; k++) g.push(k);
            groups.push(g);
          }
        } else {
          groups = parseGroups(range, file.pageCount);
        }
        if (!groups.length) {
          setStatus({ msg: "Nothing to split — check your settings.", cls: "err" });
          setBusy(false);
          return;
        }
        setStatus({ msg: "Splitting…", cls: "" });
        const results = await splitPdf(file.bytes, groups);
        results.forEach((b, idx) => {
          const g = groups[idx];
          const label = g.length === 1 ? `page-${g[0]}` : `pages-${g[0]}-${g[g.length - 1]}`;
          download(b, name + "-" + label + ".pdf");
        });
        setStatus({ msg: `Done — ${groups.length} file(s) created.`, cls: "ok" });
      }
    } catch {
      setStatus({ msg: "Something went wrong processing the PDF.", cls: "err" });
    }
    setBusy(false);
  };

  const showGrid = mode !== "split";

  return (
    <>
      <div
        className="dropzone"
        ref={dzRef}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          dzRef.current?.classList.add("over");
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          dzRef.current?.classList.add("over");
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          dzRef.current?.classList.remove("over");
        }}
        onDrop={onDrop}
        style={{ display: file ? "none" : "block" }}
      >
        <div className="big">Drop your PDF here, or click to choose a file</div>
        <div className="hint">Your file stays on this device — nothing is uploaded.</div>
      </div>
      <input
        type="file"
        ref={inputRef}
        accept="application/pdf,.pdf"
        onChange={onInputChange}
        style={{ display: "none" }}
      />

      {file && (
        <div className="editor">
          <div className="fileinfo">
            <span>
              <strong>{file.name}</strong>
            </span>
            <span>
              {file.pageCount} pages · {fmtSize(file.size)}
            </span>
          </div>

          {showGrid && (
            <>
              {cfg.hint && (
                <p className="range-help" style={{ margin: "0 0 6px" }}>
                  {file.pageCount > MAX_SELECT_NOTE
                    ? "Large document — type the page range below for speed."
                    : cfg.hint}
                </p>
              )}
              <div className="grid">
                {Array.from({ length: file.pageCount }, (_, i) => i + 1).map((n) => (
                  <div
                    key={n}
                    className={"pagecell" + (selected.has(n) ? " on" : "")}
                    role="button"
                    aria-label={`Page ${n}`}
                    onClick={() => togglePage(n)}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </>
          )}

          {mode === "rotate" && (
            <>
              <label className="fld" htmlFor="rangeInput">
                {cfg.rangeLabel}
              </label>
              <input
                type="text"
                id="rangeInput"
                placeholder={cfg.placeholder}
                value={range}
                onChange={(e) => setRange(e.target.value)}
                autoComplete="off"
              />
              <label className="fld" htmlFor="rotateAngle">
                Rotation
              </label>
              <select
                id="rotateAngle"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
              >
                <option value={90}>90° clockwise</option>
                <option value={180}>180°</option>
                <option value={270}>90° counterclockwise</option>
              </select>
            </>
          )}

          {mode === "split" && (
            <>
              <label className="fld">Split mode</label>
              <div className="radio-row">
                <label>
                  <input
                    type="radio"
                    name="splitMode"
                    checked={splitMode === "each"}
                    onChange={() => setSplitMode("each")}
                  />{" "}
                  One file per page
                </label>
                <label>
                  <input
                    type="radio"
                    name="splitMode"
                    checked={splitMode === "every"}
                    onChange={() => setSplitMode("every")}
                  />{" "}
                  A file every N pages
                </label>
                <label>
                  <input
                    type="radio"
                    name="splitMode"
                    checked={splitMode === "ranges"}
                    onChange={() => setSplitMode("ranges")}
                  />{" "}
                  Custom ranges (one file per page listed)
                </label>
              </div>
              {splitMode === "every" && (
                <div>
                  <label className="fld" htmlFor="everyN">
                    Pages per file
                  </label>
                  <input
                    type="number"
                    id="everyN"
                    min={1}
                    value={everyN}
                    onChange={(e) => setEveryN(Number(e.target.value))}
                    style={{ maxWidth: 140 }}
                  />
                </div>
              )}
              {splitMode === "ranges" && (
                <div>
                  <label className="fld" htmlFor="rangeInput">
                    {cfg.rangeLabel}
                  </label>
                  <input
                    type="text"
                    id="rangeInput"
                    placeholder={cfg.placeholder}
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    autoComplete="off"
                  />
                  <p className="range-help">{cfg.help}</p>
                </div>
              )}
            </>
          )}

          {mode !== "rotate" && mode !== "split" && (
            <>
              <label className="fld" htmlFor="rangeInput">
                {cfg.rangeLabel}
              </label>
              <input
                type="text"
                id="rangeInput"
                placeholder={cfg.placeholder}
                value={range}
                onChange={(e) => setRange(e.target.value)}
                autoComplete="off"
              />
              <p className="range-help">{cfg.help}</p>
            </>
          )}

          <div className="btnrow">
            <button className="btn" onClick={run} disabled={busy}>
              {cfg.btn}
            </button>
            <button className="btn secondary" onClick={reset}>
              Choose another file
            </button>
          </div>
        </div>
      )}

      <div className={"status " + status.cls} aria-live="polite">
        {status.msg}
      </div>
    </>
  );
}
