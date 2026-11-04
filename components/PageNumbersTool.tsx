"use client";

import { useRef, useState, useCallback } from "react";
import {
  addPageNumbers,
  getPageCount,
  fmtSize,
  baseName,
  type NumberPosition,
  type NumberFormat,
} from "../lib/pdfTools";

interface FileState {
  name: string;
  bytes: Uint8Array;
  pageCount: number;
  size: number;
}

const POSITIONS: { value: NumberPosition; label: string }[] = [
  { value: "bottom-center", label: "Bottom · center" },
  { value: "bottom-right", label: "Bottom · right" },
  { value: "bottom-left", label: "Bottom · left" },
  { value: "top-center", label: "Top · center" },
  { value: "top-right", label: "Top · right" },
  { value: "top-left", label: "Top · left" },
];

const FORMATS: { value: NumberFormat; label: string }[] = [
  { value: "n", label: "1" },
  { value: "n-of-total", label: "1 / 12" },
  { value: "page-n", label: "Page 1" },
  { value: "page-n-of-total", label: "Page 1 of 12" },
];

export default function PageNumbersTool() {
  const [file, setFile] = useState<FileState | null>(null);
  const [position, setPosition] = useState<NumberPosition>("bottom-center");
  const [format, setFormat] = useState<NumberFormat>("n-of-total");
  const [start, setStart] = useState(1);
  const [fontSize, setFontSize] = useState(11);
  const [margin, setMargin] = useState(28);
  const [skipFirst, setSkipFirst] = useState(false);
  const [status, setStatus] = useState<{ msg: string; cls: string }>({ msg: "", cls: "" });
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dzRef = useRef<HTMLDivElement>(null);

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

  const reset = () => {
    setFile(null);
    setStatus({ msg: "", cls: "" });
  };

  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      setStatus({ msg: "Adding page numbers…", cls: "" });
      const bytes = await addPageNumbers(file.bytes, {
        position,
        format,
        start: Number.isFinite(start) ? Math.max(0, Math.trunc(start)) : 1,
        fontSize: Number.isFinite(fontSize) ? Math.min(48, Math.max(6, fontSize)) : 11,
        margin: Number.isFinite(margin) ? Math.min(200, Math.max(4, margin)) : 28,
        skipFirst,
      });
      const blob = new Blob([bytes as Uint8Array<ArrayBuffer>], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = baseName(file.name) + "-numbered.pdf";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.remove();
      }, 800);
      setStatus({ msg: `Done — page numbers added to ${file.pageCount} page(s).`, cls: "ok" });
    } catch {
      setStatus({ msg: "Something went wrong while adding page numbers.", cls: "err" });
    }
    setBusy(false);
  };

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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6 }}>
            <div>
              <label className="fld" htmlFor="numPosition">
                Position
              </label>
              <select
                id="numPosition"
                value={position}
                onChange={(e) => setPosition(e.target.value as NumberPosition)}
              >
                {POSITIONS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="fld" htmlFor="numFormat">
                Format
              </label>
              <select
                id="numFormat"
                value={format}
                onChange={(e) => setFormat(e.target.value as NumberFormat)}
              >
                {FORMATS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="fld" htmlFor="numStart">
                Start at
              </label>
              <input
                type="number"
                id="numStart"
                min={0}
                max={9999}
                value={start}
                onChange={(e) => setStart(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="fld" htmlFor="numSize">
                Font size (pt)
              </label>
              <input
                type="number"
                id="numSize"
                min={6}
                max={48}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="fld" htmlFor="numMargin">
                Margin (pt)
              </label>
              <input
                type="number"
                id="numMargin"
                min={4}
                max={200}
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
              />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 10 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15 }}>
                <input
                  type="checkbox"
                  checked={skipFirst}
                  onChange={(e) => setSkipFirst(e.target.checked)}
                  style={{ width: 18, height: 18 }}
                />
                Skip the cover page
              </label>
            </div>
          </div>

          <div className="btnrow">
            <button className="btn" onClick={run} disabled={busy}>
              Add page numbers
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
