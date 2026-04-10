const projects = [
  { n: "SmartMonefy", t: "Finance", d: "Finance tracker harian.", u: "https://smartmonefy.vercel.app/", i: "fa-chart-pie" },
  { n: "Tugas Target", t: "Utility", d: "Manajemen produktivitas.", u: "https://targetugas.lovable.app/", i: "fa-bullseye" },
  { n: "IlmQuran Reading", t: "Islamic", d: "Baca Al-Qur'an modern.", u: "https://IlmQuran-reading.vercel.app/", i: "fa-book-open" },
  { n: "SuperTik", t: "Tools", d: "Download TikTok No WM.", u: "https://supertik.vercel.app/", i: "fa-video" },
  { n: "PhoneSpecs", t: "Database", d: "Spesifikasi gadget lengkap.", u: "https://phonespecs.vercel.app/", i: "fa-mobile-screen-button" },
  { n: "Lirikify", t: "Music", d: "Cari lirik musik favorit.", u: "https://lirikify.vercel.app/", i: "fa-music" },
  { n: "Fiqh AI", t: "AI", d: "Asisten hukum Islam.", u: "https://f1qh-ai.vercel.app/", i: "fa-robot" },
  { n: "Cocokan Jodoh", t: "Fun", d: "Analisis kecocokan pasangan.", u: "https://cocokan-jodoh.vercel.app/", i: "fa-heart" },
  { n: "NewsHub Indo", t: "News", d: "Berita nasional update.", u: "https://newshub-1ndo.vercel.app/", i: "fa-newspaper" },
  { n: "PixelForge", t: "AI Editor", d: "Bagusakan kualitas foto.", u: "https://pixelforge-a1.vercel.app/", i: "fa-magic" },
  { n: "Lumina AI", t: "AI Tools", d: "Hapus background otomatis.", u: "https://lumina-a1.vercel.app/", i: "fa-wand-magic-sparkles" },
  { n: "Nabung-ku", t: "Finance", d: "Perencanaan tabungan.", u: "https://nabung-ku.vercel.app/", i: "fa-piggy-bank" },
  { n: "Kirim Cepat", t: "Social", d: "Kirim WA tanpa simpan nomor.", u: "https://kirim-cepat.vercel.app/", i: "fa-whatsapp" },
  { n: "AmbilKode", t: "Dev Tools", d: "Alat ambil kode web.", u: "https://ambilkode.vercel.app/", i: "fa-code" }
];

function render() {
  document.getElementById('project-grid').innerHTML = projects.map((p, i) => `
    <a href="${p.u}" class="project-card" target="_blank" style="transition-delay: ${i * 50}ms">
      <div class="icon-box"><i class="fas ${p.i}"></i></div>
      <h3>${p.n}</h3><p>${p.d}</p>
    </a>
  `).join('');
}

window.addEventListener('load', () => {
  render();
  setTimeout(() => {
    document.getElementById('intro-loader').classList.add('hide-loader');
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal'); });
    });
    document.querySelectorAll('.project-card, .about-card').forEach(el => obs.observe(el));
  }, 1000);
});
