// Membuat isi bagian "Proyek" dari data di data.js
(function () {
  "use strict";

  // PORTFOLIO berasal dari data.js (const tidak masuk ke window, jadi dibaca langsung)
  const D = typeof PORTFOLIO !== "undefined" ? PORTFOLIO : {};
  if (typeof PORTFOLIO === "undefined") {
    console.error("data.js gagal dimuat. Cek: file data.js ada di folder yang sama dan tidak ada salah ketik/koma.");
  }

  // Pengaman: ubah karakter khusus supaya tidak merusak HTML
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const tgl = (iso) => {
    const d = new Date(iso);
    if (isNaN(d)) return esc(iso || "");
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  };

  const kosong = (teks) => `<p class="empty">${teks} Tambahkan di <code>data.js</code>.</p>`;
  const $ = (id) => document.getElementById(id);

  // ===== 1. BERITA =====
  const STEP = 6;
  let shown = STEP;
  let query = "";

  function renderBerita() {
    const grid = $("newsGrid");
    const more = $("newsMore");
    const semua = (D.berita || []).slice().sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
    const list = semua.filter((n) =>
      (n.media + " " + n.judul + " " + n.lead).toLowerCase().includes(query)
    );

    if (!semua.length) { grid.innerHTML = kosong("Belum ada berita."); more.hidden = true; return; }
    if (!list.length) { grid.innerHTML = '<p class="empty">Tidak ada berita yang cocok.</p>'; more.hidden = true; return; }

    grid.innerHTML = list.slice(0, shown).map((n) => `
      <a class="news-card" href="${esc(n.link)}" target="_blank" rel="noopener">
        ${n.gambar ? `<img class="news-thumb" src="${esc(n.gambar)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
        <div class="news-meta">
          <span class="news-media">${esc(n.media)}</span>
          <time>${tgl(n.tanggal)}</time>
        </div>
        ${n.judul ? `<h3>${esc(n.judul)}</h3>` : ""}
        <p>${esc(n.lead)}</p>
        <span class="read">Baca di ${esc(n.media)} →</span>
      </a>`).join("");

    more.hidden = list.length <= shown;
  }

  $("newsSearch").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    shown = STEP;
    renderBerita();
  });
  $("newsMore").addEventListener("click", () => { shown += STEP; renderBerita(); });
  renderBerita();

  // ===== 2. DESAIN GRAFIS (carousel) =====
  function carousel(slides, alt) {
    const imgs = slides.map((s, i) =>
      `<img src="${esc(s)}" alt="${esc(alt)} - slide ${i + 1}" loading="lazy">`).join("");
    const nav = slides.length > 1
      ? `<button class="car-btn prev" aria-label="Slide sebelumnya">‹</button>
         <button class="car-btn next" aria-label="Slide berikutnya">›</button>
         <span class="car-count">1 / ${slides.length}</span>`
      : "";
    return `<div class="carousel"><div class="track">${imgs}</div>${nav}</div>`;
  }

  const desainGrid = $("designGrid");
  const desain = D.desain || [];
  desainGrid.innerHTML = desain.length
    ? desain.map((d) => `
        <article class="work-card">
          ${carousel(d.slides || [], d.judul)}
          <div class="work-body">
            <span class="badge">${esc(d.jenis)}</span>
            <h3>${esc(d.judul)}</h3>
            <p>${esc(d.deskripsi)}</p>
            ${d.link ? `<a class="text-link" href="${esc(d.link)}" target="_blank" rel="noopener">Lihat postingan asli →</a>` : ""}
          </div>
        </article>`).join("")
    : kosong("Belum ada desain.");

  desainGrid.addEventListener("click", (e) => {
    const b = e.target.closest(".car-btn");
    if (!b) return;
    const track = b.parentElement.querySelector(".track");
    const arah = b.classList.contains("next") ? 1 : -1;
    track.scrollBy({ left: arah * track.clientWidth, behavior: "smooth" });
  });
  // event scroll tidak "naik", jadi dipasang dengan mode capture
  desainGrid.addEventListener("scroll", (e) => {
    const t = e.target;
    if (!t.classList || !t.classList.contains("track")) return;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    const c = t.parentElement.querySelector(".car-count");
    if (c) c.textContent = (i + 1) + " / " + t.children.length;
  }, true);

  // ===== 3. VIDEO =====
  const videos = D.video || [];
  $("videoGrid").innerHTML = videos.length
    ? videos.map((v) => `
        <article class="work-card">
          <div class="embed embed-video">
            <iframe data-src="https://www.youtube-nocookie.com/embed/${esc(v.youtubeId)}"
              title="${esc(v.judul)}" loading="lazy" allowfullscreen
              allow="accelerometer; encrypted-media; picture-in-picture"></iframe>
          </div>
          <div class="work-body">
            <h3>${esc(v.judul)}</h3>
            <p>${esc(v.deskripsi)}</p>
          </div>
        </article>`).join("")
    : kosong("Belum ada video.");
  if (D.channelYoutube) $("channelLink").href = D.channelYoutube;

  // ===== 4. WEBSITE =====
  const websites = D.website || [];
  $("websiteGrid").innerHTML = websites.length
    ? websites.map((w) => {
        const gambar = w.gambar || "https://image.thum.io/get/width/800/crop/500/" + w.url;
        return `
        <article class="work-card">
          <a class="shot" href="${esc(w.url)}" target="_blank" rel="noopener" aria-label="Buka ${esc(w.nama)}">
            <img src="${esc(gambar)}" alt="Tampilan ${esc(w.nama)}" loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/800x500/15203a/38bdf8?text=Preview'">
          </a>
          <div class="work-body">
            <h3>${esc(w.nama)}</h3>
            <p>${esc(w.deskripsi)}</p>
            <ul class="tech">${(w.tech || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            <a class="btn btn-outline small" href="${esc(w.url)}" target="_blank" rel="noopener">Kunjungi Website ↗</a>
          </div>
        </article>`;
      }).join("")
    : kosong("Belum ada website.");

  // ===== 5. FIGMA =====
  const figmas = D.figma || [];
  $("figmaGrid").innerHTML = figmas.length
    ? figmas.map((f) => `
        <article class="work-card">
          <div class="embed embed-figma">
            <iframe data-src="https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(f.figmaUrl)}"
              title="${esc(f.judul)}" loading="lazy" allowfullscreen></iframe>
          </div>
          <div class="work-body">
            <h3>${esc(f.judul)}</h3>
            <p>${esc(f.deskripsi)}</p>
            <a class="btn btn-outline small" href="${esc(f.figmaUrl)}" target="_blank" rel="noopener">Buka di Figma ↗</a>
          </div>
        </article>`).join("")
    : kosong("Belum ada desain Figma.");

  // ===== 6. SERTIFIKAT =====
  const certs = D.sertifikat || [];
  $("certGrid").innerHTML = certs.length
    ? certs.map((c, i) => `
        <button class="cert" data-index="${i}" aria-label="Perbesar ${esc(c.judul)}">
          <img src="${esc(c.gambar)}" alt="${esc(c.judul)}" loading="lazy">
          <span class="cert-info">
            <strong>${esc(c.judul)}</strong>
            <small>${esc(c.penyelenggara)} • ${esc(c.tahun)}</small>
          </span>
        </button>`).join("")
    : kosong("Belum ada sertifikat.");

  // Lightbox (perbesar sertifikat)
  const lb = $("lightbox");
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector("p");
  const tutup = () => { lb.hidden = true; };

  $("certGrid").addEventListener("click", (e) => {
    const b = e.target.closest(".cert");
    if (!b) return;
    const c = certs[+b.dataset.index];
    lbImg.src = c.gambar;
    lbImg.alt = c.judul;
    lbCap.textContent = c.judul + " — " + c.penyelenggara + " (" + c.tahun + ")";
    lb.hidden = false;
  });
  lb.addEventListener("click", (e) => { if (e.target !== lbImg) tutup(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") tutup(); });

  // ===== TAB =====
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  function aktifkan(nama) {
    tabs.forEach((t) => {
      const on = t.dataset.tab === nama;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
    });
    panels.forEach((p) => p.classList.toggle("active", p.id === "tab-" + nama));
    // iframe (YouTube/Figma) baru dimuat saat tab dibuka supaya halaman tetap ringan
    document.querySelectorAll("#tab-" + nama + " iframe[data-src]").forEach((f) => {
      f.src = f.dataset.src;
      f.removeAttribute("data-src");
    });
  }
  tabs.forEach((t) => t.addEventListener("click", () => aktifkan(t.dataset.tab)));
})();
