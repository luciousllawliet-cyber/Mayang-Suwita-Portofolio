// ===== 1. Menu hamburger untuk HP =====
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== 2. Animasi muncul saat di-scroll =====

document.querySelectorAll(".section, .card, .skill").forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");

    // isi progress bar skill
    entry.target.querySelectorAll?.(".fill").forEach(f => f.style.width = f.dataset.level + "%");
    if (entry.target.classList.contains("skill")) {
      const f = entry.target.querySelector(".fill");
      f.style.width = f.dataset.level + "%";
    }
    // hitung angka statistik
    entry.target.querySelectorAll?.("[data-count]").forEach(countUp);

    observer.unobserve(entry.target);
  });
}, { threshold: 0, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function countUp(el) {
  const target = +el.dataset.count;
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n + "+";
    if (n >= target) clearInterval(timer);
  }, 40);
}

// ===== 3. Tahun otomatis di footer =====
document.getElementById("year").textContent = new Date().getFullYear();
