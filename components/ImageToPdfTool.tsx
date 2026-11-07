"use client";

import { useRef, useState } from "react";
import {
  imagesToPdf,
  fmtSize,
  type ImagePageSize,
  type ImageOrientation,
} from "../lib/pdfTools";

interface ImageFile {
  name: string;
  bytes: Uint8Array;
  size: number;
  type: string;
  preview: string; // object URL for the thumbnail
}

const PAGE_SIZES: { value: ImagePageSize; label: string }[] = [
  { value: "a4", label: "A4 (210 × 297 mm)" },
  { value: "letter", label: "US Letter (8.5 × 11 in)" },
  { value: "fit", label: "Fit page to image" },
];

const ORIENTATIONS: { value: ImageOrientation; label: string }[] = [
  { value: "auto", label: "Auto (follow each image)" },
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
];

export default function ImageToPdfTool() {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [pageSize, setPageSize] = useState<ImagePageSize>("a4");
  const [orientation, setOrientation] = useState<ImageOrientation>("auto");
  const [margin, setMargin] = useState(24);
  const [status, setStatus] = useState<{ msg: string; cls: string }>({ msg: "", cls: "" });
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dzRef = useRef<HTMLDivElement>(null);

  const addFiles = async (list: FileList) => {
    const imgs = Array.from(list).filter((f) =>
      /\.(jpe?g|png)$/i.test(f.name) || /image\/(jpeg|png)/.test(f.type)
    );
    if (!imgs.length) {
      setStatus({ msg: "Please choose JPG or PNG images.", cls: "err" });
      return;
    }
    setStatus({ msg: "Reading images…", cls: "" });
    const loaded: ImageFile[] = await Promise.all(
      imgs.map(async (f) => {
        const buf = await f.arrayBuffer();
        return {
          name: f.name,
          bytes: new Uint8Array(buf),
          size: f.size,
          type: f.type || f.name,
          preview: URL.createObjectURL(f),
        };
      })
    );
    setFiles((prev) => [...prev, ...loaded]);
    setStatus({ msg: "", cls: "" });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
    e.target.value = "";
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dzRef.current?.classList.remove("over");
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  };

  const move = (idx: number, dir: -1 | 1) => {
    setFiles((prev) => {
      const next = [...prev];
      const j = idx + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[idx], next[j]] = [next[j], next[idx]];
      return next;
    });
  };

  const removeAt = (idx: number) => {
    setFiles((prev) => {
      URL.revokeObjectURL(prev[idx].preview);
      const next = prev.filter((_, i) => i !== idx);
      if (!next.length) setStatus({ msg: "", cls: "" });
      return next;
    });
  };

  const clearAll = () => {
    files.forEach((f) => URL.revokeObjectURL(f.preview));
    setFiles([]);
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
    if (!files.length) {
      setStatus({ msg: "Add at least one image first.", cls: "err" });
      return;
    }
    setBusy(true);
    setStatus({ msg: "Converting…", cls: "" });
    try {
      const bytes = await imagesToPdf(files, { pageSize, orientation, margin });
      const name =
        files.length === 1 ? files[0].name.replace(/\.\w+$/, "") + ".pdf" : "images.pdf";
      download(bytes, name);
      setStatus({
        msg: `Done — ${files.length} image${files.length > 1 ? "s" : ""} converted to PDF.`,
        cls: "ok",
      });
    } catch {
      setStatus({ msg: "One of the images could not be read. Only JPG and PNG are supported.", cls: "err" });
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
        style={{ display: files.length ? "none" : "block" }}
      >
        <div className="big">Drop JPG or PNG images here, or click to choose files</div>
        <div className="hint">Select multiple images at once. Nothing is uploaded.</div>
      </div>
      <input
        type="file"
        ref={inputRef}
        accept="image/jpeg,image/png,.jpg,.jpeg,.png"
        multiple
        onChange={onInputChange}
        style={{ display: "none" }}
      />

      {files.length > 0 && (
        <div className="editor">
          <label className="fld">Images (use the arrows to set the page order)</label>
          <div className="filelist">
            {files.map((f, idx) => (
              <div className="fileitem" key={idx}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="thumb" src={f.preview} alt={f.name} />
                <span className="order">#{idx + 1}</span>
                <span className="name">
                  {f.name} ({fmtSize(f.size)})
                </span>
                <button className="btn secondary" title="Move up" onClick={() => move(idx, -1)}>
                  ↑
                </button>
                <button className="btn secondary" title="Move down" onClick={() => move(idx, 1)}>
                  ↓
                </button>
                <button className="btn secondary" title="Remove" onClick={() => removeAt(idx)}>
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6 }}>
            <div>
              <label className="fld" htmlFor="pageSize">
                Page size
              </label>
              <select
                id="pageSize"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value as ImagePageSize)}
              >
                {PAGE_SIZES.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="fld" htmlFor="orientation">
                Orientation
              </label>
              <select
                id="orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as ImageOrientation)}
                disabled={pageSize === "fit"}
              >
                {ORIENTATIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="fld" htmlFor="margin">
                Margin (points)
              </label>
              <input
                id="margin"
                type="number"
                min={0}
                max={120}
                value={margin}
                onChange={(e) => setMargin(parseInt(e.target.value, 10) || 0)}
                disabled={pageSize === "fit"}
              />
            </div>
          </div>

          <div className="btnrow">
            <button className="btn" onClick={run} disabled={busy}>
              Convert to PDF
            </button>
            <button className="btn secondary" onClick={() => inputRef.current?.click()}>
              Add more images
            </button>
            <button className="btn secondary" onClick={clearAll}>
              Clear all
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
