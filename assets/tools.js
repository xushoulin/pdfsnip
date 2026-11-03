/* PDFSnip — 100% client-side PDF tools. Powered by pdf-lib. */
(function () {
  "use strict";

  var MODE = document.body.getAttribute("data-mode") || "extract";
  var MAX_SELECT_NOTE = 500;

  var el = function (id) { return document.getElementById(id); };

  var state = {
    files: [],        // merge: array of {file, bytes, name}
    bytes: null,      // single-file modes
    name: "",         // base name
    pageCount: 0,
    selected: {},     // set of 1-based page numbers
  };

  function status(msg, cls) {
    var s = el("status");
    s.textContent = msg || "";
    s.className = "status " + (cls || "");
  }

  function fmtSize(n) {
    if (n > 1048576) return (n / 1048576).toFixed(1) + " MB";
    return Math.max(1, Math.round(n / 1024)) + " KB";
  }

  function baseName(name) {
    return name.replace(/\.pdf$/i, "") || "document";
  }

  function download(bytes, filename) {
    var blob = new Blob([bytes], { type: "application/pdf" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 800);
  }

  /* Parse "1-3, 5, 8-10" into an ordered list of page numbers (entry order kept). */
  function parseRanges(str, max) {
    var out = [];
    var seen = {};
    if (!str || !str.trim()) return out;
    var parts = str.split(/[,,，]/);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (!p) continue;
      var m = p.match(/^(\d+)\s*-\s*(\d+)$/);
      if (m) {
        var a = parseInt(m[1], 10), b = parseInt(m[2], 10);
        if (a > b) { var t = a; a = b; b = t; }
        if (a < 1 || b > max) throw new Error('Page range "' + p + '" is out of bounds (1-' + max + ").");
        for (var n = a; n <= b; n++) {
          if (!seen[n]) { seen[n] = 1; out.push(n); }
        }
      } else if (/^\d+$/.test(p)) {
        var k = parseInt(p, 10);
        if (k < 1 || k > max) throw new Error('Page "' + p + '" is out of bounds (1-' + max + ").");
        if (!seen[k]) { seen[k] = 1; out.push(k); }
      } else {
        throw new Error('Cannot understand "' + p + '". Use formats like 3 or 2-6.');
      }
    }
    return out;
  }

  /* Parse "1-3, 5, 8-10" into groups preserving each range as one unit. */
  function parseGroups(str, max) {
    var out = [];
    if (!str || !str.trim()) return out;
    var parts = str.split(/[,,，]/);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (!p) continue;
      var m = p.match(/^(\d+)\s*-\s*(\d+)$/);
      if (m) {
        var a = parseInt(m[1], 10), b = parseInt(m[2], 10);
        if (a > b) { var t = a; a = b; b = t; }
        if (a < 1 || b > max) throw new Error('Page range "' + p + '" is out of bounds (1-' + max + ").");
        var g = [];
        for (var n = a; n <= b; n++) g.push(n);
        out.push(g);
      } else if (/^\d+$/.test(p)) {
        var k = parseInt(p, 10);
        if (k < 1 || k > max) throw new Error('Page "' + p + '" is out of bounds (1-' + max + ").");
        out.push([k]);
      } else {
        throw new Error('Cannot understand "' + p + '". Use formats like 3 or 2-6.');
      }
    }
    return out;
  }

  function selectedNumbers() {
    return Object.keys(state.selected).map(Number).sort(function (a, b) { return a - b; });
  }

  function selectionText() {
    return selectedNumbers().join(",");
  }

  function renderGrid() {
    var grid = el("pageGrid");
    if (!grid) return;
    grid.innerHTML = "";
    var frag = document.createDocumentFragment();
    for (var i = 1; i <= state.pageCount; i++) {
      (function (n) {
        var d = document.createElement("div");
        d.className = "pagecell" + (state.selected[n] ? " on" : "");
        d.textContent = n;
        d.setAttribute("role", "button");
        d.setAttribute("aria-label", "Page " + n);
        d.addEventListener("click", function () {
          if (state.selected[n]) delete state.selected[n];
          else state.selected[n] = 1;
          d.className = "pagecell" + (state.selected[n] ? " on" : "");
          var ri = el("rangeInput");
          if (ri) ri.value = selectionText();
        });
        frag.appendChild(d);
      })(i);
    }
    grid.appendChild(frag);
  }

  function readOne(file, cb) {
    var r = new FileReader();
    r.onload = function () { cb(new Uint8Array(r.result)); };
    r.onerror = function () { status("Could not read the file. Please try again.", "err"); };
    r.readAsArrayBuffer(file);
  }

  function loadSingle(file) {
    if (!/\.pdf$/i.test(file.name)) { status("Please choose a PDF file.", "err"); return; }
    status("Reading file…");
    readOne(file, function (bytes) {
      PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true }).then(function (doc) {
        state.bytes = bytes;
        state.name = baseName(file.name);
        state.pageCount = doc.getPageCount();
        state.selected = {};
        el("dropzone").style.display = "none";
        el("editor").style.display = "block";
        el("fileName").textContent = file.name;
        el("fileMeta").textContent = state.pageCount + " pages · " + fmtSize(bytes.length);
        var hint = el("gridHint");
        if (hint) hint.textContent = state.pageCount > MAX_SELECT_NOTE
          ? "Large document — type the page range below for speed."
          : "Click pages to select them, or type a range below.";
        renderGrid();
        status("");
      }).catch(function () {
        status("This PDF could not be opened (it may be corrupted).", "err");
      });
    });
  }

  function resetUI() {
    state.bytes = null;
    state.selected = {};
    state.files = [];
    el("dropzone").style.display = "block";
    el("editor").style.display = "none";
    status("");
  }

  /* ---------- single-file actions ---------- */

  function buildFromPages(srcDoc, numbers) {
    return PDFLib.PDFDocument.create().then(function (out) {
      var indices = numbers.map(function (n) { return n - 1; });
      return out.copyPages(srcDoc, indices).then(function (pages) {
        pages.forEach(function (p) { out.addPage(p); });
        return out.save();
      });
    });
  }

  function doExtract() {
    return PDFLib.PDFDocument.load(state.bytes, { ignoreEncryption: true }).then(function (src) {
      var nums;
      try { nums = parseRanges(el("rangeInput").value, state.pageCount); }
      catch (e) { status(e.message, "err"); return; }
      if (!nums.length) { status("Select at least one page first.", "err"); return; }
      status("Extracting…");
      return buildFromPages(src, nums).then(function (bytes) {
        download(bytes, state.name + "-extracted.pdf");
        status("Done — " + nums.length + " page(s) extracted to a new PDF.", "ok");
      });
    });
  }

  function doDelete() {
    return PDFLib.PDFDocument.load(state.bytes, { ignoreEncryption: true }).then(function (doc) {
      var nums;
      try { nums = parseRanges(el("rangeInput").value, state.pageCount); }
      catch (e) { status(e.message, "err"); return; }
      if (!nums.length) { status("Select at least one page to delete.", "err"); return; }
      if (nums.length >= state.pageCount) { status("You cannot delete every page.", "err"); return; }
      status("Deleting…");
      var remove = {};
      nums.forEach(function (n) { remove[n] = 1; });
      // Remove from the end so indices stay valid.
      for (var i = state.pageCount; i >= 1; i--) {
        if (remove[i]) doc.removePage(i - 1);
      }
      return doc.save().then(function (bytes) {
        download(bytes, state.name + "-pages-deleted.pdf");
        status("Done — " + nums.length + " page(s) deleted.", "ok");
      });
    });
  }

  function doRotate() {
    return PDFLib.PDFDocument.load(state.bytes, { ignoreEncryption: true }).then(function (doc) {
      var angle = parseInt(el("rotateAngle").value, 10);
      var nums;
      try { nums = parseRanges(el("rangeInput").value, state.pageCount); }
      catch (e) { status(e.message, "err"); return; }
      var target = nums.length ? nums : null;
      var count = 0;
      var pages = doc.getPages();
      for (var i = 0; i < pages.length; i++) {
        if (target && target.indexOf(i + 1) === -1) continue;
        var cur = pages[i].getRotation().angle || 0;
        pages[i].setRotation(PDFLib.degrees((cur + angle) % 360));
        count++;
      }
      status("Rotating…");
      return doc.save().then(function (bytes) {
        download(bytes, state.name + "-rotated.pdf");
        status("Done — " + count + " page(s) rotated by " + angle + "°.", "ok");
      });
    });
  }

  function doSplit() {
    var mode = "each";
    var radio = document.querySelector('input[name="splitMode"]:checked');
    if (radio) mode = radio.value;
    status("Splitting…");
    return PDFLib.PDFDocument.load(state.bytes, { ignoreEncryption: true }).then(function (src) {
      var groups = [];
      if (mode === "each") {
        for (var i = 1; i <= state.pageCount; i++) groups.push([i]);
      } else if (mode === "every") {
        var n = parseInt(el("everyN").value, 10);
        if (!(n >= 1)) { status("Enter how many pages per file.", "err"); return; }
        for (var j = 1; j <= state.pageCount; j += n) {
          var g = [];
          for (var k = j; k < j + n && k <= state.pageCount; k++) g.push(k);
          groups.push(g);
        }
      } else {
        try { groups = parseGroups(el("rangeInput").value, state.pageCount); }
        catch (e) { status(e.message, "err"); return; }
      }
      if (!groups.length) { status("Nothing to split — check your settings.", "err"); return; }
      var chain = Promise.resolve();
      groups.forEach(function (g, idx) {
        chain = chain.then(function () {
          return buildFromPages(src, g).then(function (bytes) {
            var label = g.length === 1 ? "page-" + g[0] : "pages-" + g[0] + "-" + g[g.length - 1];
            download(bytes, state.name + "-" + label + ".pdf");
            status("Downloading file " + (idx + 1) + " of " + groups.length + "…", "ok");
            return new Promise(function (res) { setTimeout(res, 350); });
          });
        });
      });
      return chain.then(function () {
        status("Done — " + groups.length + " file(s) created.", "ok");
      });
    });
  }

  /* ---------- merge ---------- */

  function renderFileList() {
    var list = el("fileList");
    list.innerHTML = "";
    state.files.forEach(function (f, idx) {
      var d = document.createElement("div");
      d.className = "fileitem";
      var order = document.createElement("span");
      order.className = "order"; order.textContent = "#" + (idx + 1);
      var name = document.createElement("span");
      name.className = "name"; name.textContent = f.name + " (" + fmtSize(f.bytes.length) + ")";
      var up = document.createElement("button");
      up.className = "btn secondary"; up.textContent = "↑"; up.title = "Move up";
      up.addEventListener("click", function () {
        if (idx === 0) return;
        var t = state.files[idx - 1]; state.files[idx - 1] = state.files[idx]; state.files[idx] = t;
        renderFileList();
      });
      var down = document.createElement("button");
      down.className = "btn secondary"; down.textContent = "↓"; down.title = "Move down";
      down.addEventListener("click", function () {
        if (idx === state.files.length - 1) return;
        var t = state.files[idx + 1]; state.files[idx + 1] = state.files[idx]; state.files[idx] = t;
        renderFileList();
      });
      var rm = document.createElement("button");
      rm.className = "btn secondary"; rm.textContent = "✕"; rm.title = "Remove";
      rm.addEventListener("click", function () {
        state.files.splice(idx, 1);
        if (!state.files.length) resetUI(); else renderFileList();
      });
      d.appendChild(order); d.appendChild(name); d.appendChild(up); d.appendChild(down); d.appendChild(rm);
      list.appendChild(d);
    });
  }

  function addMergeFiles(files) {
    var pdfs = Array.prototype.filter.call(files, function (f) { return /\.pdf$/i.test(f.name); });
    if (!pdfs.length) { status("Please choose PDF files.", "err"); return; }
    var pending = pdfs.length;
    el("dropzone").style.display = "none";
    el("editor").style.display = "block";
    status("Reading files…");
    pdfs.forEach(function (f) {
      readOne(f, function (bytes) {
        state.files.push({ name: f.name, bytes: bytes });
        pending--;
        if (!pending) { status(""); renderFileList(); }
      });
    });
  }

  function doMerge() {
    if (state.files.length < 2) { status("Add at least two PDF files to merge.", "err"); return; }
    status("Merging…");
    var out = PDFLib.PDFDocument.create();
    var chain = out;
    state.files.forEach(function (f) {
      chain = chain.then(function (o) {
        return PDFLib.PDFDocument.load(f.bytes, { ignoreEncryption: true }).then(function (src) {
          return o.copyPages(src, src.getPageIndices()).then(function (pages) {
            pages.forEach(function (p) { o.addPage(p); });
            return o;
          });
        });
      });
    });
    return chain.then(function (o) {
      return o.save().then(function (bytes) {
        download(bytes, "merged.pdf");
        status("Done — " + state.files.length + " files merged.", "ok");
      });
    }).catch(function () {
      status("One of the files could not be read.", "err");
    });
  }

  /* ---------- wiring ---------- */

  function wireDropzone(multi) {
    var dz = el("dropzone");
    var input = el("fileInput");
    dz.addEventListener("click", function () { input.click(); });
    ["dragover", "dragenter"].forEach(function (ev) {
      dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.add("over"); });
    });
    ["dragleave", "drop"].forEach(function (ev) {
      dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.remove("over"); });
    });
    dz.addEventListener("drop", function (e) {
      var files = e.dataTransfer.files;
      if (multi) addMergeFiles(files);
      else if (files.length) loadSingle(files[0]);
    });
    input.addEventListener("change", function () {
      if (multi) addMergeFiles(input.files);
      else if (input.files.length) loadSingle(input.files[0]);
      input.value = "";
    });
  }

  function bindSplitModeRadios() {
    var radios = document.querySelectorAll('input[name="splitMode"]');
    Array.prototype.forEach.call(radios, function (r) {
      r.addEventListener("change", function () {
        el("everyNBox").style.display = r.value === "every" ? "block" : "none";
        el("rangeBox").style.display = r.value === "ranges" ? "block" : "none";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (MODE === "merge") {
      wireDropzone(true);
      el("actionBtn").addEventListener("click", doMerge);
      var clearBtn = el("againBtn");
      if (clearBtn) clearBtn.addEventListener("click", resetUI);
    } else {
      wireDropzone(false);
      var btn = el("actionBtn");
      if (MODE === "extract") btn.addEventListener("click", doExtract);
      if (MODE === "delete") btn.addEventListener("click", doDelete);
      if (MODE === "rotate") btn.addEventListener("click", doRotate);
      if (MODE === "split") { btn.addEventListener("click", doSplit); bindSplitModeRadios(); }
      var again = el("againBtn");
      if (again) again.addEventListener("click", resetUI);
    }
  });
})();
