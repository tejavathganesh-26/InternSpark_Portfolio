/* ============================
   Portfolio interactions
   ============================ */

const projects = [
  {
    n: "01",
    title: "AI-Based Career Path Recommendation System",
    icon: "AI",
    grad: "linear-gradient(135deg,#8A5CF6,#5EE7FF)",
    desc: "Suggests careers from skills, interests & branch with match %, required skills, salary insights, interview questions and trending paths.",
    tags: ["Python", "ML", "Flask"],
    live: "https://career-path-recomendation-system.onrender.com/",
    repo: "https://github.com/tejavathganesh-26/career_path_recomendation_system",
  },
  {
    n: "02",
    title: "AI Space Explorer Agent",
    icon: "✦",
    grad: "linear-gradient(135deg,#0F0F2E,#5EE7FF)",
    desc: "An AI agent that answers space questions, fetches NASA imagery & Mars rover photos, and explains them with bite-sized facts.",
    tags: ["Python", "NASA API", "JS"],
    live: "https://space-explorer-agent-w8pu.onrender.com/",
    repo: "https://github.com/tejavathganesh-26/space-explorer-agent",
  },
  {
    n: "03",
    title: "Trinity — Rural Intelligence Platform",
    icon: "△",
    grad: "linear-gradient(135deg,#16A34A,#D9FF3D)",
    desc: "Bilingual (Telugu/English) platform for Telangana farmers. Three modules — Krishi, Arogya, Schemes — with Claude-powered crop diagnosis.",
    tags: ["Claude Vision", "JS", "APIs"],
    live: "https://trinity-ganesh-2604.netlify.app/",
    repo: "https://github.com/tejavathganesh-26/TRINITY",
  },
  {
    n: "04",
    title: "MedSense AI — Medical Report Analyzer",
    icon: "✚",
    grad: "linear-gradient(135deg,#FF5CA8,#8A5CF6)",
    desc: "OCR-powered analyzer that turns confusing medical reports into plain-language explanations using Flask.",
    tags: ["OCR", "Flask", "HTML/CSS"],
    live: null,
    repo: "https://github.com/tejavathganesh-26/medical-report-analyzer",
  },
  {
    n: "05",
    title: "Personal Portfolio (v1)",
    icon: "◆",
    grad: "linear-gradient(135deg,#5EE7FF,#8A5CF6)",
    desc: "First portfolio iteration — responsive, Tailwind-styled, with project demos and contact features.",
    tags: ["HTML", "CSS", "Tailwind"],
    live: "https://tejavathganesh-26.github.io/HorizonTechX_Personal-portfolio/",
    repo: "https://github.com/tejavathganesh-26/HorizonTechX_Personal-portfolio",
  },
  {
    n: "06",
    title: "Calculator Web App",
    icon: "÷",
    grad: "linear-gradient(135deg,#F59E0B,#FF5CA8)",
    desc: "Responsive calculator with clean UI, keyboard input, reset, and real-time arithmetic operations.",
    tags: ["HTML", "CSS", "JS"],
    live: "https://tejavathganesh-26.github.io/HorizonTechX_calculator/",
    repo: "https://github.com/tejavathganesh-26/HorizonTechX_calculator",
  },
  {
    n: "07",
    title: "JavaScript Music Player",
    icon: "♪",
    grad: "linear-gradient(135deg,#8A5CF6,#FF5CA8)",
    desc: "Interactive player with play/pause, next/prev, progress bar, duration, volume controls and responsive UI.",
    tags: ["HTML", "CSS", "JS"],
    live: "https://tejavathganesh-26.github.io/HorizonTechX_Music-player/",
    repo: "https://github.com/tejavathganesh-26/HorizonTechX_Music-player",
  },
  {
    n: "08",
    title: "QuizMaster Pro — Quiz App",
    icon: "?",
    grad: "linear-gradient(135deg,#D9FF3D,#16A34A)",
    desc: "8 programming categories, timed quizzes, streaks, achievements, palette navigation, dark mode and analytics via LocalStorage.",
    tags: ["HTML", "CSS", "JS"],
    live: "https://tejavathganesh-26.github.io/InternSpark_Quiz-App/",
    repo: "https://github.com/tejavathganesh-26/InternSpark_Quiz-App",
  },
  {
    n: "09",
    title: "LegalEase India — Legal Assistance",
    icon: "§",
    grad: "linear-gradient(135deg,#0F1B3D,#5EE7FF)",
    desc: "Comprehensive Indian-law lookup: search IPC/BNS sections, punishments, offense classes and legal topics through a friendly UI.",
    tags: ["HTML", "CSS", "JS"],
    live: "https://tejavathganesh-26.github.io/InternSpark_LegalAssist-India/",
    repo: "https://github.com/tejavathganesh-26/InternSpark_LegalAssist-India",
  },
  {
    n: "10",
    title: "Portfolio Website (v2)",
    icon: "◎",
    grad: "linear-gradient(135deg,#D9FF3D,#5EE7FF)",
    desc: "Second-gen personal portfolio with refined UI, project showcase, downloadable resume and mobile-optimized layout.",
    tags: ["HTML", "CSS", "JS"],
    live: null,
    repo: "https://github.com/tejavathganesh-26/InternSpark_Portfolio",
  },
];

/* ---------- Render projects ---------- */
const grid = document.getElementById("projectsGrid");
grid.innerHTML = projects.map(p => `
  <article class="project-card reveal">
    <div class="p-media">
      <div class="p-media-bg" style="--p-grad:${p.grad}"></div>
      <span class="p-num">PROJECT ${p.n}</span>
      <div class="p-icon" style="position:absolute;inset:0;display:grid;place-items:center;z-index:1">${p.icon}</div>
    </div>
    <div class="p-body">
      <h3 class="p-title">${p.title}</h3>
      <p class="p-desc">${p.desc}</p>
      <div class="p-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      <div class="p-links">
        <a class="p-link live ${p.live ? "" : "disabled"}"
           href="${p.live || "#"}"
           ${p.live ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>
          ${p.live ? "↗ Live Demo" : "Demo unavailable"}
        </a>
        <a class="p-link" href="${p.repo}" target="_blank" rel="noopener">🐙 GitHub</a>
      </div>
    </div>
  </article>
`).join("");

/* ---------- Nav scroll state + mobile menu ---------- */
const nav = document.querySelector(".nav");
const menuToggle = document.getElementById("menuToggle");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

/* ---------- Resume modal ---------- */
const modal = document.getElementById("resumeModal");
document.getElementById("viewResumeBtn").addEventListener("click", () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
});
modal.querySelectorAll("[data-close]").forEach(el =>
  el.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  })
);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.remove("open");
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
