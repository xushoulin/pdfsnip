"use client";

import { useRef, useState } from "react";
import { mergePdfs, fmtSize } from "../lib/pdfTools";

interface MergeFile {
  name: string;
  bytes: Uint8Array;
  size: number;
}

export default function MergeTool() {
  const [files, setFiles] = useState<MergeFile[]>([]);
  const [status, setStatus] = useState<{ msg: string; cls: string }>({ msg: "", cls: "" });
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dzRef = useRef<HTMLDivElement>(null);

  const addFiles = async (list: FileList) => {
    const pdfs = Array.from(list).filter((f) => /\.pdf$/i.test(f.name));
    if (!pdfs.length) {
      setStatus({ msg: "Please choose PDF files.", cls: "err" });
      return;
    }
    setStatus({ msg: "Reading files…", cls: "" });
    const loaded: MergeFile[] = await Promise.all(
      pdfs.map(async (f) => {
        const buf = await f.arrayBuffer();
        return { name: f.name, bytes: new Uint8Array(buf), size: f.size };
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

  const remove = (idx: number) => {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      if (!next.length) setStatus({ msg: "", cls: "" });
      return next;
    });
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
    if (files.length < 2) {
      setStatus({ msg: "Add at least two PDF files to merge.", cls: "err" });
      return;
    }
    setBusy(true);
    setStatus({ msg: "Merging…", cls: "" });
    try {
      const bytes = await mergePdfs(files);
      download(bytes, "merged.pdf");
      setStatus({ msg: `Done — ${files.length} files merged.`, cls: "ok" });
    } catch {
      setStatus({ msg: "One of the files could not be read.", cls: "err" });
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
        <div className="big">Drop PDF files here, or click to choose files</div>
        <div className="hint">Select multiple files at once. Nothing is uploaded.</div>
      </div>
      <input
        type="file"
        ref={inputRef}
        accept="application/pdf,.pdf"
        multiple
        onChange={onInputChange}
        style={{ display: "none" }}
      />

      {files.length > 0 && (
        <div className="editor">
          <label className="fld">Files (use the arrows to set the order)</label>
          <div className="filelist">
            {files.map((f, idx) => (
              <div className="fileitem" key={idx}>
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
                <button className="btn secondary" title="Remove" onClick={() => remove(idx)}>
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="btnrow">
            <button className="btn" onClick={run} disabled={busy}>
              Merge PDFs
            </button>
            <button
              className="btn secondary"
              onClick={() => {
                setFiles([]);
                setStatus({ msg: "", cls: "" });
              }}
            >
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
