import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LIBRARIAN = {
  name: "Jahnavi Nischal",
  title: "Curator of Code & Curiosity",
  bio: "A digital librarian wandering the shelves of artificial intelligence, web craftsmanship and creative engineering. I build software that feels considered, calm and quietly magical.",
  email: "nischaljahnavi@gmail.com",
  github: "https://github.com/jahnavinischal",
  linkedin: "https://www.linkedin.com/in/jahnavi-nischal-165010250/",
  skills: [
    "Artificial Intelligence", "Machine Learning", "Deep Learning", "Tensorflow", "Data Science",
    "Pandas", "Numpy", "Scikit-Learn", "Matplotlib", "Python", "FastAPI",
    "Java", "C++", "SQL", "LLMs", "Generative AI", "RAG", "Agentic AI", "Prompt Engineering",
    "LangChain", "LangGraph", "Docker", "Git", "HTML/CSS/JS", "Streamlit"
  ],
};

const PROJECTS = [
  { title: "Algorithm Visualizer", spine: "#8b2e2e", desc: "A powerful desktop-based algorithm visualizer built using C++, OpenGL and GLUT to help users understand and study fundamental algorithms like sorting and searching through real-time graphical animation.", stack: ["C++","OpenGL"], link: "https://github.com/jahnavinischal/algorithm-visualizer" },
  { title: "Earthquake Magnitude Detection", spine: "#2e5a8b", desc: "A machine learning-powered web application that predicts the likelihood of earthquakes based on a 30-year historical dataset. Built using Streamlit, this app leverages data-driven models to offer quick predictions and insights", stack: ["Python","Scikit-Learn","Streamlit","Matplotlib"], link: "https://github.com/jahnavinischal/earthquake-magnitude-prediction" },
  { title: "Space Debris", spine: "#3e6b4a", desc: "Detected orbit type and Radar Cross Section (RCS) size of space debris (or junk) to understand its trajectory and overall assess the collision danger.", stack: ["Python","Scikit-Learn","Streamlit","Matplotlib"], link: "https://space-debris.onrender.com/" },
  { title: "PolyCystic Ovary Syndrome (PCOS) Detection", spine: "#7a4b1f", desc: "This project uses multiple deep learning models along with Xplainable AI for PCOS detection in women.", stack: ["Python","Tensorflow","Flask","HTML/CSS/JS"], link: "https://github.com/jahnavinischal/PCOS-detection-using-DL" },
  { title: "Instagram Caption Generator", spine: "#5a3e7a", desc: "This project builds an AI model that automatically generates captions for Instagram-style images using deep learning. It leverages a Convolutional Neural Network (CNN) for image feature extraction and a Recurrent Neural Network (RNN) with Bahdanau Attention to generate natural language descriptions.", stack: ["Python","Tensorflow"], link: "https://github.com/jahnavinischal/Instagram_image_caption_generator" }
];

const RESEARCH = [
  { title: "Earthquake Magnitude Prediction using machine learning", year: "2024", abstract: "", file: "https://link.springer.com/chapter/10.1007/978-981-96-4319-64" },
  { title: "Generalized framework using Federated Learning for brain tumor detection from medical images", year: "2025", abstract: "", file: "https://ieeexplore.ieee.org/document/10932596" },
  { title: "Polycystic Ovary Syndrome (PCOS) Detection Using Deep Learning and Explainable AI", year: "2025", abstract: "", file: "https://ieeexplore.ieee.org/abstract/document/11430323" }
];

// const EXPERIMENTS = [
// ];

// const HACKATHONS = [
// ];

const ROOMS = [
  { id: "home", label: "Entrance Hall" },
  { id: "projects", label: "Projects Wing" },
  { id: "research", label: "Research Archive" },
  // { id: "experiments", label: "AI Experiments Lab" },
  // { id: "hackathons", label: "Hackathon Gallery" },
  { id: "about", label: "Librarian's Study" },
];

function GoldDust({ count = 40 }) {
  const particles = useRef(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: 6 + Math.random() * 14,
      s: 0.4 + Math.random() * 1.2,
      delay: Math.random() * 8,
    }))
  ).current;

  return (
    <div className="dl-dust" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s * 3}px`,
            height: `${p.s * 3}px`,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ---- HOME ---------------------------------------------------
function Home({ go }) {
  return (
    <motion.section
      className="dl-room dl-home"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="dl-home-hero">
        <motion.div
          className="dl-floating-book"
          animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="dl-book-cover">
            <span className="dl-book-emboss">✦</span>
          </div>
          <div className="dl-book-pages" />
        </motion.div>
        <h1 className="dl-title">The Digital Library of Knowledge</h1>
        <p className="dl-subtitle">
          A quiet archive of {LIBRARIAN.name}'s work — projects, research, experiments and accolades. Please, take your time.
        </p>
      </div>

      <div className="dl-doors">
        {ROOMS.filter(r => r.id !== "home").map((r, i) => (
          <motion.button
            key={r.id}
            className="dl-door"
            onClick={() => go(r.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <span className="dl-door-glow" />
            <span className="dl-door-label">{r.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}

// ---- PROJECTS (3D shelf) ------------------------------------
function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <motion.section className="dl-room" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="dl-room-head">
        <h2>Projects Wing</h2>
        <p>Pull a book from the shelf to read its colophon.</p>
      </header>

      <div className="dl-shelf-wrap">
        <div className="dl-shelf">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              className="dl-spine"
              style={{ background: `linear-gradient(180deg, ${p.spine}, ${shade(p.spine, -30)})` }}
              onClick={() => setOpen(i)}
            >
              <span className="dl-spine-title">{p.title}</span>
              <span className="dl-spine-bands" />
            </button>
          ))}
        </div>
        <div className="dl-shelf-board" />
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="dl-modal-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="dl-book-open"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dl-page dl-page-left">
                <h3>{PROJECTS[open].title}</h3>
                <p>{PROJECTS[open].desc}</p>
                <div className="dl-tags">
                  {PROJECTS[open].stack.map(s => <span key={s} className="dl-tag">{s}</span>)}
                </div>
                <a className="dl-link" href={PROJECTS[open].link}>Open project →</a>
              </div>
              <div className="dl-page dl-page-right">
                <div className="dl-colophon">
                  <p className="dl-small">A volume from</p>
                  <p className="dl-script">The Projects Wing</p>
                  <p className="dl-small">Catalog No. {String(open + 1).padStart(3, "0")}</p>
                </div>
              </div>
              <button className="dl-close" onClick={() => setOpen(null)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// ---- RESEARCH -----------------------------------------------
function Research() {
  return (
    <motion.section className="dl-room" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="dl-room-head">
        <h2>Research Archive</h2>
        <p>Research papers and publications</p>
      </header>
      <div className="dl-parchments">
        {RESEARCH.map((r, i) => (
          <motion.article
            key={r.title}
            className="dl-parchment"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)` }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <h3>{r.title}</h3>
            <p className="dl-meta">{r.year}</p>
            <p className="dl-abstract">{r.abstract}</p>
            <a href={r.file} className="dl-download">↓ View Publication</a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

// ---- EXPERIMENTS --------------------------------------------
function Experiments() {
  return (
    <motion.section className="dl-room" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="dl-room-head">
        <h2>AI Experiments Lab</h2>
        <p>Glowing prototypes — handle with curiosity.</p>
      </header>
      <div className="dl-lab">
        {EXPERIMENTS.map((e) => (
          <motion.div
            key={e.name}
            className="dl-panel"
            style={{ "--glow": e.color }}
            whileHover={{ y: -6 }}
          >
            <div className="dl-panel-led" />
            <h3>{e.name}</h3>
            <p>{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// ---- HACKATHONS ---------------------------------------------
function Hackathons() {
  return (
    <motion.section className="dl-room" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="dl-room-head">
        <h2>Hackathon Gallery</h2>
        <p>Plaques mounted in the east corridor.</p>
      </header>
      <div className="dl-gallery">
        {HACKATHONS.map((h) => (
          <motion.div className="dl-plaque" key={h.event} whileHover={{ scale: 1.03 }}>
            <span className="dl-orn dl-orn-tl" />
            <span className="dl-orn dl-orn-tr" />
            <span className="dl-orn dl-orn-bl" />
            <span className="dl-orn dl-orn-br" />
            <p className="dl-plaque-event">{h.event}</p>
            <p className="dl-plaque-award">— {h.award} —</p>
            <p className="dl-plaque-project">{h.project}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// ---- ABOUT --------------------------------------------------
function About() {
  const [sent, setSent] = useState(false);
  return (
    <motion.section className="dl-room" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="dl-room-head">
        <h2>The Librarian's Study</h2>
        <p>A quiet word with the curator.</p>
      </header>
      <div className="dl-about">
        <div className="dl-bio">
          <div className="dl-portrait">✦</div>
          <h3>{LIBRARIAN.name}</h3>
          <p className="dl-meta">{LIBRARIAN.title}</p>
          <p>{LIBRARIAN.bio}</p>
          <div className="dl-tags">
            {LIBRARIAN.skills.map(s => <span key={s} className="dl-tag">{s}</span>)}
          </div>
          <div className="dl-links">
            <a href={`mailto:${LIBRARIAN.email}`}>Email</a>
            <a href={LIBRARIAN.github}>GitHub</a>
            <a href={LIBRARIAN.linkedin}>LinkedIn</a>
          </div>
        </div>
        <form
          className="dl-desk"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h3>Leave a message</h3>
          <input required placeholder="Your name" />
          <input required type="email" placeholder="Your email" />
          <textarea required rows={5} placeholder="Your message..." />
          <button type="submit">{sent ? "Sent — thank you" : "Seal & Send"}</button>
        </form>
      </div>
    </motion.section>
  );
}

// ---- OWL CHATBOT (local, no API key needed) -----------------
function OwlChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { role: "owl", text: `Good evening. I am the library's keeper. Ask me about ${LIBRARIAN.name}'s rooms — projects, research, experiments or accolades.` },
  ]);
  const [input, setInput] = useState("");

  function reply(q) {
    const t = q.toLowerCase();
    if (t.includes("project")) return `In the Projects Wing you will find ${PROJECTS.length} bound volumes — including "${PROJECTS[0].title}" and "${PROJECTS[1].title}". Pull one from the shelf to read its colophon.`;
    if (t.includes("research") || t.includes("paper")) return `The Research Archive holds ${RESEARCH.length} manuscripts. The latest, "${RESEARCH[0].title}", concerns ${RESEARCH[0].abstract.toLowerCase()}`;
    if (t.includes("experiment") || t.includes("ai")) return `The AI Experiments Lab is alight with ${EXPERIMENTS.length} prototypes — "${EXPERIMENTS[0].name}" and "${EXPERIMENTS[1].name}" are particularly luminous.`;
    if (t.includes("hack") || t.includes("award")) return `Some ${HACKATHONS.length} plaques hang in the gallery. The librarian once took "${HACKATHONS[0].award}" at ${HACKATHONS[0].event}.`;
    if (t.includes("contact") || t.includes("email") || t.includes("hire")) return `You may write to the librarian at ${LIBRARIAN.email}, or leave a sealed note at the desk in the Librarian's Study.`;
    if (t.includes("skill") || t.includes("stack")) return `The librarian's catalogued tools include: ${LIBRARIAN.skills.slice(0,6).join(", ")} — and more.`;
    if (t.includes("hello") || t.includes("hi")) return `A pleasure. The library is open. Where shall we wander?`;
    return `A fine question. Try asking about projects, research, experiments, hackathons, or how to reach ${LIBRARIAN.name}.`;
  }

  function send(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.trim();
    setMsgs(m => [...m, { role: "you", text: q }]);
    setInput("");
    setTimeout(() => setMsgs(m => [...m, { role: "owl", text: reply(q) }]), 500);
  }

  return (
    <>
      <button className="dl-owl" onClick={() => setOpen(o => !o)} aria-label="Open library assistant">
        🦉
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="dl-chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <header>The Keeper</header>
            <div className="dl-chat-log">
              {msgs.map((m, i) => (
                <div key={i} className={`dl-msg dl-msg-${m.role}`}>{m.text}</div>
              ))}
            </div>
            <form onSubmit={send}>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about the library..." />
              <button type="submit">→</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ---- helpers ------------------------------------------------
function shade(hex, percent) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + percent));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + percent));
  const b = Math.max(0, Math.min(255, (n & 0xff) + percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

// ---- ROOT ---------------------------------------------------
export default function DigitalLibrary() {
  const [room, setRoom] = useState("home");

  useEffect(() => {
    // inject Google Fonts once
    if (typeof document !== "undefined" && !document.getElementById("dl-fonts")) {
      const link = document.createElement("link");
      link.id = "dl-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="dl-app">
      <style>{CSS}</style>
      <GoldDust />
      <div className="dl-ambient" aria-hidden />

      <nav className="dl-nav">
        <button className="dl-brand" onClick={() => setRoom("home")}>✦ The Library</button>
        <div className="dl-nav-rooms">
          {ROOMS.map(r => (
            <button
              key={r.id}
              className={`dl-nav-link ${room === r.id ? "active" : ""}`}
              onClick={() => setRoom(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="dl-main">
        <AnimatePresence mode="wait">
          {room === "home"        && <Home key="home" go={setRoom} />}
          {room === "projects"    && <Projects key="projects" />}
          {room === "research"    && <Research key="research" />}
          {room === "experiments" && <Experiments key="experiments" />}
          {room === "hackathons"  && <Hackathons key="hackathons" />}
          {room === "about"       && <About key="about" />}
        </AnimatePresence>
      </main>

      <footer className="dl-foot">
        <p>Compiled with care · © {new Date().getFullYear()} {LIBRARIAN.name}</p>
      </footer>

      <OwlChat />
    </div>
  );
}

// ---- STYLES (scoped via dl- prefix) -------------------------
const CSS = `
.dl-app {
  --ink: #ece3cf;
  --ink-dim: #b6a986;
  --gold: #d4a84b;
  --gold-soft: #e9c47a;
  --bg-0: #0b0805;
  --bg-1: #14100a;
  --bg-2: #1d1710;
  --wood: #3a2818;
  --parchment: #efe3c4;
  --parchment-ink: #2a1f12;
  font-family: 'Cormorant Garamond', Georgia, serif;
  color: var(--ink);
  background: radial-gradient(ellipse at top, #1d1710 0%, #0b0805 70%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
.dl-app * { box-sizing: border-box; }
.dl-app h1, .dl-app h2, .dl-app h3 { font-family: 'Playfair Display', serif; font-weight: 700; letter-spacing: 0.01em; }
.dl-app ::-webkit-scrollbar { width: 10px; }
.dl-app ::-webkit-scrollbar-track { background: var(--bg-1); }
.dl-app ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--gold), #8a6a1f); border-radius: 6px; }

.dl-ambient {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(212,168,75,0.10), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(212,168,75,0.06), transparent 55%);
}

/* dust */
.dl-dust { position: fixed; inset: 0; pointer-events: none; z-index: 1; }
.dl-dust span {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle, rgba(233,196,122,0.9), rgba(233,196,122,0));
  animation: dl-float linear infinite;
  opacity: 0.7;
}
@keyframes dl-float {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  20% { opacity: 0.8; }
  100% { transform: translateY(-120vh) translateX(20px); opacity: 0; }
}

/* nav */
.dl-nav {
  position: sticky; top: 0; z-index: 10;
  display: flex; justify-content: space-between; align-items: center;
  padding: 18px 32px;
  background: linear-gradient(180deg, rgba(11,8,5,0.95), rgba(11,8,5,0.7));
  border-bottom: 1px solid rgba(212,168,75,0.2);
  backdrop-filter: blur(8px);
}
.dl-brand {
  background: none; border: 0; color: var(--gold);
  font-family: 'Playfair Display', serif; font-size: 22px; cursor: pointer;
  letter-spacing: 0.08em;
}
.dl-nav-rooms { display: flex; gap: 4px; flex-wrap: wrap; }
.dl-nav-link {
  background: none; border: 0; color: var(--ink-dim);
  padding: 8px 14px; cursor: pointer; font-size: 15px;
  font-family: 'Cormorant Garamond', serif;
  border-bottom: 1px solid transparent; transition: all 0.3s;
}
.dl-nav-link:hover { color: var(--gold-soft); }
.dl-nav-link.active { color: var(--gold); border-bottom-color: var(--gold); }

.dl-main { position: relative; z-index: 2; padding: 60px 32px 100px; max-width: 1200px; margin: 0 auto; }
.dl-room { min-height: 60vh; }
.dl-room-head { text-align: center; margin-bottom: 48px; }
.dl-room-head h2 { font-size: 44px; color: var(--gold); margin-bottom: 8px; }
.dl-room-head p { color: var(--ink-dim); font-style: italic; font-size: 18px; }

.dl-foot { text-align: center; padding: 24px; color: var(--ink-dim); font-style: italic; border-top: 1px solid rgba(212,168,75,0.15); position: relative; z-index: 2; }

/* HOME */
.dl-home-hero { text-align: center; padding: 40px 0 60px; }
.dl-title { font-size: clamp(36px, 6vw, 64px); color: var(--gold); padding-top: 24px; margin-bottom: 40px; line-height: 1.2;}
.dl-subtitle { max-width: 620px; margin: 0 auto; color: var(--ink-dim); font-size: 19px; line-height: 1.6; }
.dl-floating-book {
  width: 90px; height: 120px; margin: 0 auto;
  position: relative; transform-style: preserve-3d;
  filter: drop-shadow(0 20px 40px rgba(212,168,75,0.3));
}
.dl-book-cover {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #6b1f1f, #3a0f0f);
  border: 2px solid var(--gold);
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
}
.dl-book-emboss { color: var(--gold); font-size: 32px; }
.dl-book-pages {
  position: absolute; right: -3px; top: 4px; bottom: 4px; width: 6px;
  background: repeating-linear-gradient(90deg, #efe3c4 0 1px, #c9bb96 1px 2px);
  border-radius: 0 2px 2px 0;
}

.dl-doors { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-top: 40px; }
.dl-door {
  position: relative; padding: 40px 20px; cursor: pointer;
  background: linear-gradient(180deg, var(--wood), #1f1308);
  border: 2px solid rgba(212,168,75,0.4); border-radius: 6px 6px 2px 2px;
  color: var(--gold-soft); font-family: 'Playfair Display', serif; font-size: 16px;
  letter-spacing: 0.05em; overflow: hidden; transition: border-color 0.3s;
}
.dl-door:hover { border-color: var(--gold); }
.dl-door-glow {
  position: absolute; inset: -2px;
  background: radial-gradient(circle at 50% 100%, rgba(212,168,75,0.4), transparent 60%);
  opacity: 0; transition: opacity 0.4s; pointer-events: none;
}
.dl-door:hover .dl-door-glow { opacity: 1; }
.dl-door-label { position: relative; }

/* PROJECTS shelf */
.dl-shelf-wrap { perspective: 1200px; max-width: 900px; margin: 0 auto; }
.dl-shelf {
  display: flex; gap: 8px; justify-content: center; align-items: flex-end;
  padding: 30px 24px 20px;
  background: linear-gradient(180deg, transparent, rgba(58,40,24,0.4));
  border-bottom: 0;
}
.dl-shelf-board {
  height: 24px;
  background: linear-gradient(180deg, #5a3e22, #2d1d10);
  border-radius: 2px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6), inset 0 2px 0 rgba(212,168,75,0.2);
}
.dl-spine {
  width: 56px; height: 220px;
  border: 0; border-radius: 2px 2px 0 0; cursor: pointer;
  position: relative; padding: 0;
  box-shadow: inset -4px 0 8px rgba(0,0,0,0.4), inset 2px 0 4px rgba(255,255,255,0.15);
  transition: transform 0.35s cubic-bezier(.2,.8,.2,1);
  display: flex; align-items: center; justify-content: center;
}
.dl-spine:hover { transform: translateY(-24px) rotateZ(-2deg); }
.dl-spine-title {
  writing-mode: vertical-rl; transform: rotate(180deg);
  color: var(--gold-soft); font-family: 'Playfair Display', serif;
  font-size: 14px; letter-spacing: 0.15em; padding: 12px 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.6);
}
.dl-spine-bands {
  position: absolute; left: 4px; right: 4px; top: 20px; height: 1px;
  background: var(--gold); box-shadow: 0 180px 0 var(--gold);
  opacity: 0.5;
}

/* modal "open book" */
.dl-modal-backdrop {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.8); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: 20px;
}
.dl-book-open {
  display: grid; grid-template-columns: 1fr 1fr;
  max-width: 800px; width: 100%; min-height: 420px;
  background: var(--parchment); color: var(--parchment-ink);
  border-radius: 4px; position: relative;
  box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 0 8px #3a2818;
}
.dl-page { padding: 40px; position: relative; }
.dl-page-left { border-right: 1px solid rgba(58,40,24,0.2); }
.dl-page h3 { font-size: 28px; color: var(--parchment-ink); margin-bottom: 12px; }
.dl-page p { line-height: 1.65; font-size: 17px; margin-bottom: 16px; }
.dl-page-right { display: flex; align-items: center; justify-content: center; text-align: center; }
.dl-colophon p { margin: 6px 0; }
.dl-script { font-family: 'Playfair Display', serif; font-style: italic; font-size: 26px; color: #6b3e1f; }
.dl-small { font-size: 14px; color: #7a5e3a; letter-spacing: 0.1em; text-transform: uppercase; }
.dl-link { color: #6b3e1f; font-weight: 600; text-decoration: none; border-bottom: 1px solid; }
.dl-close {
  position: absolute; top: 8px; right: 12px;
  background: none; border: 0; font-size: 28px; cursor: pointer; color: var(--parchment-ink);
}

.dl-tags { display: flex; gap: 6px; flex-wrap: wrap; margin: 12px 0; }
.dl-tag {
  background: rgba(58,40,24,0.12); color: #3a2818;
  padding: 3px 10px; border-radius: 999px; font-size: 13px;
  border: 1px solid rgba(58,40,24,0.2);
}

/* RESEARCH parchments */
.dl-parchments { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }
.dl-parchment {
  background:
    repeating-linear-gradient(transparent 0 28px, rgba(58,40,24,0.12) 28px 29px),
    linear-gradient(180deg, #f3e7c8, #e6d6ad);
  color: var(--parchment-ink);
  padding: 28px 26px; border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.35s ease;
  position: relative;
}
.dl-parchment h3 { font-size: 22px; margin-bottom: 4px; color: #3a2818; }
.dl-parchment .dl-meta { font-style: italic; color: #7a5e3a; margin-bottom: 12px; font-size: 14px; }
.dl-abstract { line-height: 1.6; font-size: 16px; margin-bottom: 14px; }
.dl-download {
  display: inline-block; padding: 6px 14px;
  background: #3a2818; color: var(--gold-soft);
  text-decoration: none; border-radius: 3px; font-size: 14px;
}

/* EXPERIMENTS lab */
.dl-lab { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
.dl-panel {
  --glow: #d4a84b;
  background: linear-gradient(180deg, rgba(20,16,10,0.9), rgba(11,8,5,0.95));
  border: 1px solid color-mix(in srgb, var(--glow) 50%, transparent);
  border-radius: 8px; padding: 28px;
  box-shadow: 0 0 24px color-mix(in srgb, var(--glow) 25%, transparent), inset 0 0 20px color-mix(in srgb, var(--glow) 8%, transparent);
  position: relative; transition: box-shadow 0.4s;
}
.dl-panel:hover { box-shadow: 0 0 40px color-mix(in srgb, var(--glow) 40%, transparent); }
.dl-panel-led {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--glow); box-shadow: 0 0 12px var(--glow);
  margin-bottom: 14px;
  animation: dl-pulse 2s ease-in-out infinite;
}
@keyframes dl-pulse { 50% { opacity: 0.4; } }
.dl-panel h3 { color: var(--glow); font-size: 22px; margin-bottom: 8px; }
.dl-panel p { color: var(--ink-dim); line-height: 1.5; font-size: 16px; }

/* HACKATHONS gallery */
.dl-gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 28px; }
.dl-plaque {
  position: relative; padding: 32px 28px; text-align: center;
  background: linear-gradient(180deg, #1f1408, #14100a);
  border: 4px solid #5a3e22;
  box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 30px rgba(212,168,75,0.08);
  outline: 1px solid rgba(212,168,75,0.3); outline-offset: -10px;
}
.dl-orn {
  position: absolute; width: 18px; height: 18px;
  border: 2px solid var(--gold); opacity: 0.7;
}
.dl-orn-tl { top: 6px; left: 6px; border-right: 0; border-bottom: 0; }
.dl-orn-tr { top: 6px; right: 6px; border-left: 0; border-bottom: 0; }
.dl-orn-bl { bottom: 6px; left: 6px; border-right: 0; border-top: 0; }
.dl-orn-br { bottom: 6px; right: 6px; border-left: 0; border-top: 0; }
.dl-plaque-event { color: var(--ink); font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; margin: 8px 0; }
.dl-plaque-award { color: var(--gold); font-family: 'Playfair Display', serif; font-size: 22px; margin: 12px 0; }
.dl-plaque-project { color: var(--ink-dim); font-style: italic; }

/* ABOUT */
.dl-about { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
@media (max-width: 768px) { .dl-about { grid-template-columns: 1fr; } }
.dl-bio, .dl-desk {
  background: linear-gradient(180deg, rgba(20,16,10,0.9), rgba(11,8,5,0.95));
  border: 1px solid rgba(212,168,75,0.25);
  border-radius: 8px; padding: 32px;
}
.dl-portrait {
  width: 80px; height: 80px; border-radius: 50%;
  background: radial-gradient(circle, #6b1f1f, #3a0f0f);
  border: 2px solid var(--gold);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold); font-size: 32px; margin-bottom: 16px;
}
.dl-bio h3 { color: var(--gold); font-size: 26px; }
.dl-bio .dl-meta { color: var(--ink-dim); font-style: italic; margin-bottom: 16px; }
.dl-bio .dl-tag { color: var(--gold-soft); background: rgba(212,168,75,0.08); border-color: rgba(212,168,75,0.3); }
.dl-links { display: flex; gap: 16px; margin-top: 16px; }
.dl-links a { color: var(--gold); text-decoration: none; border-bottom: 1px solid; }
.dl-desk h3 { color: var(--gold); font-size: 22px; margin-bottom: 16px; }
.dl-desk input, .dl-desk textarea {
  width: 100%; margin-bottom: 12px; padding: 10px 12px;
  background: rgba(11,8,5,0.6); color: var(--ink);
  border: 1px solid rgba(212,168,75,0.3); border-radius: 4px;
  font-family: inherit; font-size: 15px;
}
.dl-desk input:focus, .dl-desk textarea:focus { outline: none; border-color: var(--gold); }
.dl-desk button {
  background: linear-gradient(180deg, var(--gold), #8a6a1f);
  color: #1d1710; border: 0; padding: 10px 20px; border-radius: 4px;
  cursor: pointer; font-family: 'Playfair Display', serif; font-size: 16px;
  letter-spacing: 0.08em;
}

/* OWL chat */
.dl-owl {
  position: fixed; bottom: 24px; right: 24px; z-index: 50;
  width: 60px; height: 60px; border-radius: 50%;
  background: linear-gradient(180deg, #3a2818, #1d1710);
  border: 2px solid var(--gold); cursor: pointer;
  font-size: 28px;
  box-shadow: 0 0 30px rgba(212,168,75,0.4), 0 10px 20px rgba(0,0,0,0.6);
  transition: transform 0.3s;
}
.dl-owl:hover { transform: scale(1.08); }
.dl-chat {
  position: fixed; bottom: 96px; right: 24px; z-index: 50;
  width: 340px; max-width: calc(100vw - 32px); height: 460px;
  background: linear-gradient(180deg, #1d1710, #0b0805);
  border: 1px solid rgba(212,168,75,0.4); border-radius: 10px;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.7);
  overflow: hidden;
}
.dl-chat header {
  padding: 14px 18px; background: rgba(212,168,75,0.1);
  color: var(--gold); font-family: 'Playfair Display', serif; font-size: 18px;
  border-bottom: 1px solid rgba(212,168,75,0.2);
}
.dl-chat-log { flex: 1; overflow-y: auto; padding: 14px; display: flex; flex-direction: column; gap: 10px; }
.dl-msg { padding: 10px 14px; border-radius: 10px; font-size: 15px; line-height: 1.45; max-width: 85%; }
.dl-msg-owl { background: rgba(212,168,75,0.12); color: var(--ink); border: 1px solid rgba(212,168,75,0.2); align-self: flex-start; }
.dl-msg-you { background: var(--gold); color: #1d1710; align-self: flex-end; }
.dl-chat form { display: flex; border-top: 1px solid rgba(212,168,75,0.2); }
.dl-chat input {
  flex: 1; background: transparent; border: 0; padding: 12px 14px;
  color: var(--ink); font-family: inherit; font-size: 15px;
}
.dl-chat input:focus { outline: none; }
.dl-chat form button {
  background: var(--gold); color: #1d1710; border: 0;
  padding: 0 18px; cursor: pointer; font-size: 18px;
}
`;
