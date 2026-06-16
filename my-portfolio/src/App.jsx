// ============================================================
//  SAKSHI NANDGUDE — DATA PROFESSIONAL PORTFOLIO
//  ✏️  Edit DATA object only. Components auto-update.
// ============================================================

import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────
//  ✏️  YOUR DATA — edit freely
// ─────────────────────────────────────────────
const DATA = {
  name: "Sakshi Nandgude",
  roles: ["Data Analyst", "Analytics Engineer", "ML Practitioner", "Software Engineer"],
  tagline: "CS & Software Engineering background. I design data systems, build ML pipelines, and engineer analytics products — from distributed PySpark jobs to real-time QA feeds.",
  location: "Ireland",
  email: "sakshinandgude6@gmail.com",
  phone: "+353 085 808 3112",
  availability: "Open to roles",

  // ── PLATFORM USERNAMES — used for live embed cards ──────
  // Replace with your real usernames on each platform
  platforms: {
    github:      { user: "sakshi-nandgude",          url: "https://github.com/sakshi-nandgude" },
    linkedin:    { user: "sakshi-nandgude-2457a4302", url: "https://www.linkedin.com/in/sakshi-nandgude-2457a4302/" },
    leetcode:    { user: "sakshinandgude",            url: "https://leetcode.com/sakshinandgude" },
    hackerrank:  { user: "sakshinandgude6",           url: "https://www.hackerrank.com/sakshinandgude6" },
    kaggle:      { user: "sakshinandgude",            url: "https://www.kaggle.com/sakshinandgude" },
    tableau:     { user: "sakshinandgude",            url: "https://public.tableau.com/app/profile/sakshinandgude" },
  },

  stats: [
    { value: "9.32", label: "BCA CGPA", sub: "Distinction" },
    { value: "10+",  label: "Certs",    sub: "Earned" },
    { value: "6+",   label: "Projects", sub: "Live / GitHub" },
    { value: "0.89", label: "Best R²",  sub: "Random Forest" },
  ],

  // ── CS / SOFTWARE ENGINEERING BACKGROUND ────────────────
  csBackground: [
    { area: "Software Engineering",   tags: ["OOP", "SOLID Principles", "Design Patterns", "Clean Code", "Git / GitHub Actions"] },
    { area: "Languages",              tags: ["Python", "Java", "TypeScript", "SQL", "Bash"] },
    { area: "Web & APIs",             tags: ["FastAPI", "Spring Boot", "REST APIs", "JSON Schema", "Postman"] },
    { area: "Data Structures & Algo", tags: ["Arrays", "HashMaps", "Trees", "Sorting", "LeetCode"] },
    { area: "Systems & Networking",   tags: ["Linux", "TCP/IP", "HTTP", "OS Concepts", "DBMS"] },
    { area: "DevOps & Cloud",         tags: ["AWS S3/EC2/RDS", "Azure", "Docker basics", "GitHub CI/CD", "Jupyter"] },
  ],

  // ── SKILLS ──────────────────────────────────────────────
  skills: [
    { category: "Analytics & Data Science", color: "purple",
      tags: ["Python", "Pandas", "NumPy", "scikit-learn", "EDA", "Statistical Modelling"] },
    { category: "Big Data & Engineering",   color: "teal",
      tags: ["PySpark", "Spark MLlib", "Spark SQL", "ETL Pipelines", "Distributed Processing"] },
    { category: "SQL & Databases",          color: "blue",
      tags: ["PostgreSQL", "MySQL", "MongoDB", "CTEs", "Window Functions", "Schema Design"] },
    { category: "BI & Visualisation",       color: "amber",
      tags: ["Power BI", "Matplotlib", "Seaborn", "Tableau", "Excel Advanced"] },
    { category: "Cloud & Infrastructure",   color: "coral",
      tags: ["AWS S3/EC2/RDS", "Azure DP-900", "Git", "GitHub Actions", "FastAPI", "REST APIs"] },
    { category: "Machine Learning",         color: "green",
      tags: ["Random Forest", "Gradient Boosting", "Logistic Regression", "K-Means", "AUC-ROC"] },
    { category: "AI & Agents",              color: "pink",
      tags: ["LangChain", "LangGraph", "JSON Schema", "LLM Pipeline QA", "Agentic Workflows"] },
  ],

  // ── PROJECTS ────────────────────────────────────────────
  projects: [
    { title: "Country Economic Stress Analysis",
      type: "Full Pipeline · ML",
      description: "End-to-end analytics on World Bank + FAOSTAT macroeconomic data. EDA → K-Means clustering → Random Forest regression → Power BI dashboard.",
      highlight: "R² = 0.89 · 4 country clusters",
      stack: ["Python", "scikit-learn", "K-Means", "Pandas", "Power BI"],
      github: "https://github.com/sakshi-nandgude/country-economic-stress-analysis",
      demo: null, featured: true },
    { title: "Loan Default Prediction",
      type: "Big Data · PySpark",
      description: "Distributed ML pipeline on high-volume financial data. Feature engineering, class imbalance handling, Spark MLlib classification, AUC-ROC evaluation.",
      highlight: "Scalable to millions of records",
      stack: ["PySpark", "Spark MLlib", "Spark SQL", "Gradient Boosting"],
      github: "https://github.com/sakshi-nandgude",
      demo: null, featured: true },
    { title: "Hotel Booking Analysis",
      type: "EDA · MSc Capstone",
      description: "Full EDA on real hospitality data — cancellation rates, seasonal demand, revenue metrics, structured business insight report.",
      highlight: "Real-world dataset · Business report",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/sakshi-nandgude/Hotel-Booking-Analysis",
      demo: null, featured: false },
    { title: "E-Commerce SQL Analytics",
      type: "Data Engineering",
      description: "Normalised relational schema in PostgreSQL. Complex SQL (JOINs, CTEs, window functions) to derive order conversion rates, inventory KPIs.",
      highlight: "Production-grade schema design",
      stack: ["PostgreSQL", "SQL", "CTEs", "Spring Boot", "AWS RDS"],
      github: "https://github.com/sakshi-nandgude",
      demo: null, featured: false },
    { title: "Agentic AI Pipeline QA",
      type: "LLM · FastAPI",
      description: "JSON data model validation for LLM agent pipelines. FastAPI transformation microservices with schema enforcement and anomaly detection.",
      highlight: "LangChain · LangGraph · AWS",
      stack: ["Python", "FastAPI", "LangChain", "LangGraph", "AWS"],
      github: null, demo: null, featured: false },
    { title: "AFL Sports Data QA",
      type: "Live · Industry",
      description: "Real-time QA of player tracking metrics and event data at Statsperform. Accuracy assurance for downstream BI products across sports intelligence.",
      highlight: "Live production environment",
      stack: ["Data QA", "Real-time Analytics", "Sports Intelligence"],
      github: null, demo: null, featured: false },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────
  experience: [
    { role: "AFL Data Analyst", company: "Statsperform", location: "Limerick, Ireland", period: "Mar 2026 – Present",
      bullets: [
        "Real-time QA of player tracking metrics and event data feeds for downstream BI analytics products",
        "Rigorous data quality assurance against defined business rules; identify and communicate discrepancies",
        "Maintain initiative trackers and dashboard statuses across a team of analysts",
      ]},
    { role: "Agentic AI Intern", company: "Innomatics Research Labs", location: "Remote", period: "Feb – Apr 2026",
      bullets: [
        "Designed and validated structured JSON data models for multi-step LLM agent workflows",
        "Built Python/FastAPI data transformation microservices with cleaning, normalisation, schema enforcement",
        "Analysed LLM output patterns to detect quality issues and performance bottlenecks",
      ]},
    { role: "Project Lead — Big Data & Digital Futures Lab", company: "University of Limerick", location: "Ireland", period: "2025 – Present",
      bullets: [
        "Lead cross-disciplinary analytics projects across Business Analytics, Finance, and AI",
        "Coordinate operations and structured reporting across student and faculty teams",
      ]},
    { role: "Junior Data Analyst / Placement Coordinator", company: "Indira University", location: "Pune, India", period: "May 2024 – Jul 2025",
      bullets: [
        "Gathered, cleaned, and reported placement data for 100+ students and 15+ corporate partners",
        "Produced performance trend reports informing faculty recruitment strategy",
      ]},
  ],

  // ── EDUCATION ───────────────────────────────────────────
  education: [
    { degree: "MSc Business Analytics",
      institution: "University of Limerick", location: "Ireland",
      period: "2025 – 2026", note: "Expected Sep 2026",
      badge: "Enrolled", badgeColor: "teal" },
    { degree: "BCA (Honours) — Computer Science",
      institution: "Savitribai Phule Pune University", location: "India",
      period: "2022 – 2025", note: "CGPA 9.32 / 10 — Distinction",
      badge: "9.32 / 10", badgeColor: "purple" },
  ],

  // ── CERTIFICATIONS ──────────────────────────────────────
  certifications: [
    { name: "Advanced Data Analytics Professional", issuer: "Google",             status: "earned",   year: "2025" },
    { name: "Business Analyst Professional",         issuer: "Microsoft",          status: "earned",   year: "Oct 2025" },
    { name: "Azure Data Fundamentals DP-900",        issuer: "Microsoft",          status: "progress", year: "2026" },
    { name: "AWS Cloud Practitioner Essentials",     issuer: "Amazon Web Services",status: "earned",   year: "Feb 2026" },
    { name: "Python for Data Science & AI",          issuer: "IBM",                status: "earned",   year: "Jan 2026" },
    { name: "Data for Business Analysts — Excel",    issuer: "Microsoft",          status: "earned",   year: "Jul 2025" },
    { name: "Business Process Modelling with Visio", issuer: "Microsoft",          status: "earned",   year: "Jul 2025" },
  ],
};

// ─────────────────────────────────────────────
//  DESIGN TOKENS
// ─────────────────────────────────────────────
const C = {
  bg:      "#07070f",
  surface: "#0e0e1a",
  card:    "#111120",
  border:  "#1e1e32",
  border2: "#2a2a45",
  text:    "#eeeef5",
  muted:   "#6b6b88",
  dim:     "#3a3a55",
  purple:  "#8b7cf8",
  teal:    "#2dd4bf",
  amber:   "#f59e0b",
  coral:   "#fb7185",
  green:   "#4ade80",
  pink:    "#e879f9",
  blue:    "#60a5fa",
};

const RAMP = {
  purple: { bg:"#17133a", text:"#a78bfa", border:"#3d2f8f" },
  teal:   { bg:"#0a2520", text:"#2dd4bf", border:"#0d5a50" },
  blue:   { bg:"#0c1a30", text:"#60a5fa", border:"#1a3f70" },
  amber:  { bg:"#231500", text:"#fbbf24", border:"#7c4d00" },
  coral:  { bg:"#280a12", text:"#fb7185", border:"#8b1a2f" },
  green:  { bg:"#0a2010", text:"#4ade80", border:"#145a25" },
  pink:   { bg:"#250a2a", text:"#e879f9", border:"#7a1a85" },
};

const ISSUER_COLOR = {
  Google: "#4285F4", Microsoft: "#0078D4",
  "Amazon Web Services": "#FF9900", IBM: "#1F70C1",
};

// ─────────────────────────────────────────────
//  SMALL UTILITIES
// ─────────────────────────────────────────────
const SL = ({ children }) => (
  <p style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase",
    color: C.purple, fontWeight:700, margin:"0 0 6px" }}>
    {children}
  </p>
);

const H2 = ({ children }) => (
  <h2 style={{ fontSize:"1.55rem", fontWeight:700, letterSpacing:"-0.02em",
    color: C.text, margin:"0 0 1.75rem" }}>
    {children}
  </h2>
);

const Pill = ({ children, color = "purple" }) => {
  const r = RAMP[color] || RAMP.purple;
  return (
    <span style={{ display:"inline-block", fontSize:11, fontWeight:600,
      padding:"3px 9px", borderRadius:20,
      background: r.bg, color: r.text, border:`1px solid ${r.border}` }}>
      {children}
    </span>
  );
};

const Chip = ({ children }) => (
  <span style={{ fontSize:11, padding:"3px 8px", borderRadius:4,
    background:"#111125", color: C.muted, border:`1px solid ${C.border}` }}>
    {children}
  </span>
);

const Row = ({ children, gap = 8 }) => (
  <div style={{ display:"flex", flexWrap:"wrap", gap }}>{children}</div>
);

const GitHubSVG = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ArrowUpRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7,7 17,7 17,17"/>
  </svg>
);

const Divider = () => (
  <div style={{ maxWidth:1040, margin:"0 auto 0", padding:"0 2rem" }}>
    <div style={{ borderTop:`1px solid ${C.border}` }}/>
  </div>
);

// ─────────────────────────────────────────────
//  TERMINAL TYPEWRITER — hero accent
// ─────────────────────────────────────────────
function Typewriter({ words, speed = 80, pause = 1800 }) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const word = words[wi];
    let timeout;
    if (!deleting && ci < word.length) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, ci + 1)); setCi(c => c + 1); }, speed);
    } else if (!deleting && ci === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && ci > 0) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, ci - 1)); setCi(c => c - 1); }, speed / 2);
    } else if (deleting && ci === 0) {
      setDeleting(false);
      setWi(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [ci, deleting, wi, words, speed, pause]);

  return (
    <span style={{ color: C.teal }}>
      {display}
      <span style={{ opacity: blink ? 1 : 0, transition:"opacity 0.1s",
        color: C.purple, fontWeight:300 }}>|</span>
    </span>
  );
}

// ─────────────────────────────────────────────
//  GITHUB ACTIVITY HEATMAP (live embed)
// ─────────────────────────────────────────────
function GitHubHeatmap({ username }) {
  return (
    <div style={{ background: C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"1.25rem", overflow:"hidden" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <GitHubSVG size={16} />
          <span style={{ fontSize:13, fontWeight:600, color: C.text }}>GitHub Activity</span>
        </div>
        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer"
          style={{ fontSize:11, color: C.purple, textDecoration:"none", display:"flex", alignItems:"center", gap:4 }}>
          @{username} <ArrowUpRight/>
        </a>
      </div>
      {/* GitHub contribution graph via ghchart.rshah.org — free, no auth */}
      <img
        src={`https://ghchart.rshah.org/8b7cf8/${username}`}
        alt="GitHub contribution graph"
        style={{ width:"100%", borderRadius:6, display:"block" }}
        onError={e => { e.target.style.display="none"; }}
      />
      <div style={{ marginTop:8 }}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=8b7cf8&icon_color=2dd4bf&text_color=6b6b88&bg_color=00000000&hide_border=true&rank_icon=github`}
          alt="GitHub stats"
          style={{ width:"49%", display:"inline-block", verticalAlign:"top" }}
          onError={e => { e.target.style.display="none"; }}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=8b7cf8&text_color=6b6b88&bg_color=00000000&hide_border=true&langs_count=6`}
          alt="Top languages"
          style={{ width:"49%", display:"inline-block", verticalAlign:"top" }}
          onError={e => { e.target.style.display="none"; }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  PLATFORM CARD — for LeetCode, HackerRank, etc.
// ─────────────────────────────────────────────
function PlatformCard({ name, icon, color, username, url, statLine, badgeLabel, badgeColor }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={url} target="_blank" rel="noreferrer"
      style={{ display:"flex", flexDirection:"column", gap:10, padding:"1rem 1.1rem",
        background: C.card, border:`1px solid ${hov ? color : C.border}`,
        borderRadius:12, textDecoration:"none", transition:"border-color 0.2s, transform 0.15s",
        transform: hov ? "translateY(-2px)" : "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:30, height:30, borderRadius:8, display:"flex", alignItems:"center",
            justifyContent:"center", background:`${color}18`, fontSize:15 }}>
            {icon}
          </div>
          <div>
            <p style={{ fontSize:12, fontWeight:700, color: C.text, margin:0 }}>{name}</p>
            <p style={{ fontSize:11, color: C.muted, margin:0 }}>@{username}</p>
          </div>
        </div>
        <ArrowUpRight size={12} color={C.muted} />
      </div>
      {statLine && <p style={{ fontSize:12, color: C.muted, margin:0 }}>{statLine}</p>}
      {badgeLabel && (
        <span style={{ alignSelf:"flex-start", fontSize:10, fontWeight:600, padding:"2px 8px",
          borderRadius:4, background:`${badgeColor}18`, color: badgeColor, border:`1px solid ${badgeColor}30` }}>
          {badgeLabel}
        </span>
      )}
    </a>
  );
}

// ─────────────────────────────────────────────
//  SECTIONS
// ─────────────────────────────────────────────
const S = ({ id, children }) => (
  <section id={id} style={{ padding:"5.5rem 2rem", maxWidth:1040, margin:"0 auto" }}>
    {children}
  </section>
);

// ── HERO ────────────────────────────────────
function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(x => x + 1), 1800); return () => clearInterval(t); }, []);
  const glyphs = ["◈","◉","◎","◆"];

  return (
    <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column",
      justifyContent:"center", padding:"80px 2rem 4rem", maxWidth:1040, margin:"0 auto" }}>

      {/* top terminal bar */}
      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:"2.5rem" }}>
        <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57" }}/>
        <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e" }}/>
        <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840" }}/>
        <span style={{ flex:1, height:1, background: C.border, marginLeft:8 }}/>
        <span style={{ fontSize:10, color: C.dim, fontFamily:"monospace" }}>sakshi@data-pro ~ </span>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:"3.5rem", alignItems:"center" }}>
        {/* left */}
        <div>
          <p style={{ fontFamily:"monospace", fontSize:13, color: C.purple, marginBottom:10 }}>
            <span style={{ color: C.dim }}>$ </span>whoami
          </p>
          <h1 style={{ fontSize:"clamp(2.6rem, 6vw, 4rem)", fontWeight:800,
            letterSpacing:"-0.035em", lineHeight:1.05, margin:"0 0 0.6rem" }}>
            <span style={{ background:`linear-gradient(135deg, ${C.text} 40%, ${C.purple} 75%, ${C.teal} 100%)`,
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {DATA.name}
            </span>
          </h1>
          <p style={{ fontFamily:"monospace", fontSize:"1.15rem", color: C.muted,
            margin:"0 0 1.5rem", minHeight:28 }}>
            <span style={{ color: C.dim }}>// </span>
            <Typewriter words={DATA.roles} speed={75} pause={1600} />
          </p>
          <p style={{ fontSize:"0.95rem", color: C.muted, lineHeight:1.9,
            maxWidth:500, marginBottom:"2rem", borderLeft:`2px solid ${C.purple}`, paddingLeft:14 }}>
            {DATA.tagline}
          </p>
          <Row>
            <Pill color="purple">Python · PySpark</Pill>
            <Pill color="teal">SQL · Power BI</Pill>
            <Pill color="blue">AWS · Azure</Pill>
            <Pill color="green">scikit-learn · MLlib</Pill>
            <Pill color="pink">LangChain · Agents</Pill>
            <Pill color="amber">Java · TypeScript</Pill>
          </Row>
          <div style={{ display:"flex", gap:10, marginTop:"2rem", flexWrap:"wrap" }}>
            {[
              { label:"LinkedIn ↗", href: DATA.platforms.linkedin.url, bg: C.purple, color:"#fff" },
              { label:"GitHub",     href: DATA.platforms.github.url,   bg:"transparent", color: C.text, border: C.border2 },
              { label:"Email me",   href:`mailto:${DATA.email}`,        bg:"transparent", color: C.text, border: C.border2 },
            ].map(b => (
              <a key={b.label} href={b.href} target="_blank" rel="noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:6,
                  padding:"9px 18px", borderRadius:8, fontWeight:600, fontSize:13,
                  background: b.bg, color: b.color,
                  border: b.border ? `1px solid ${b.border}` : "none",
                  textDecoration:"none", transition:"opacity 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.opacity="0.75"}
                onMouseLeave={e => e.currentTarget.style.opacity="1"}>
                {b.label}
              </a>
            ))}
          </div>
        </div>

        {/* right stat card */}
        <div style={{ background: C.card, border:`1px solid ${C.border}`,
          borderRadius:16, padding:"1.5rem", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:-60, right:-60, width:180, height:180,
            borderRadius:"50%", background:`radial-gradient(circle, ${C.purple}20 0%, transparent 70%)`,
            pointerEvents:"none" }}/>

          <div style={{ display:"flex", alignItems:"center", gap:6,
            fontSize:12, color:"#4ade80", marginBottom:"1rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80",
              boxShadow:"0 0 8px #4ade80", animation:"pulse 2s infinite" }}/>
            {DATA.availability}
          </div>

          <p style={{ fontSize:10, color: C.muted, margin:"0 0 2px", textTransform:"uppercase", letterSpacing:"0.1em" }}>Currently</p>
          <p style={{ fontSize:14, fontWeight:700, color: C.text, margin:"0 0 2px" }}>{DATA.experience[0].role}</p>
          <p style={{ fontSize:12, color: C.teal, margin:"0 0 1.25rem" }}>{DATA.experience[0].company}</p>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:"1rem" }}>
            {DATA.stats.map(s => (
              <div key={s.label} style={{ background: C.surface, borderRadius:8,
                padding:"10px 12px", border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:"1.2rem", fontWeight:800, color: C.text, margin:0,
                  fontVariantNumeric:"tabular-nums" }}>{s.value}</p>
                <p style={{ fontSize:10, color: C.muted, margin:0, textTransform:"uppercase",
                  letterSpacing:"0.08em" }}>{s.label}</p>
                <p style={{ fontSize:9, color: C.dim, margin:0 }}>{s.sub}</p>
              </div>
            ))}
          </div>

          <div style={{ fontFamily:"monospace", fontSize:11, color: C.dim,
            borderTop:`1px solid ${C.border}`, paddingTop:10, lineHeight:1.8 }}>
            <span style={{ color: C.purple }}>loc </span>📍 {DATA.location}<br/>
            <span style={{ color: C.purple }}>edu </span>MSc Business Analytics, UL<br/>
            <span style={{ color: C.purple }}>auth </span>Work authorised · Stamp 2
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}

// ── CS BACKGROUND ───────────────────────────
function CSBackground() {
  return (
    <S id="background">
      <SL>Foundation</SL>
      <H2>CS & Software Engineering background</H2>
      <p style={{ color: C.muted, fontSize:"0.9rem", lineHeight:1.8,
        maxWidth:680, marginBottom:"2rem", borderLeft:`2px solid ${C.teal}`, paddingLeft:14 }}>
        Before data, there was code. My BCA (9.32/10) covered the full CS curriculum — 
        algorithms, OOP, DBMS, networking, and software engineering. That foundation is 
        why I can build production-ready data services, not just notebooks.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:12 }}>
        {DATA.csBackground.map(group => (
          <div key={group.area} style={{ background: C.card,
            border:`1px solid ${C.border}`, borderRadius:10, padding:"1rem 1.1rem" }}>
            <p style={{ fontSize:11, fontWeight:700, color: C.teal,
              textTransform:"uppercase", letterSpacing:"0.1em", margin:"0 0 10px" }}>
              {group.area}
            </p>
            <Row gap={5}>
              {group.tags.map(t => <Chip key={t}>{t}</Chip>)}
            </Row>
          </div>
        ))}
      </div>
    </S>
  );
}

// ── SKILLS ──────────────────────────────────
function Skills() {
  return (
    <S id="skills">
      <SL>Technical Stack</SL>
      <H2>Skills & tools</H2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:12 }}>
        {DATA.skills.map(g => {
          const r = RAMP[g.color] || RAMP.purple;
          return (
            <div key={g.category} style={{ background: C.card,
              border:`1px solid ${C.border}`, borderRadius:12, padding:"1.1rem" }}>
              <p style={{ fontSize:10, textTransform:"uppercase", letterSpacing:"0.12em",
                color: r.text, fontWeight:700, margin:"0 0 10px" }}>
                {g.category}
              </p>
              <Row gap={5}>
                {g.tags.map(t => <Chip key={t}>{t}</Chip>)}
              </Row>
            </div>
          );
        })}
      </div>
    </S>
  );
}

// ── CODING PROFILES ─────────────────────────
function CodingProfiles() {
  const { github, leetcode, hackerrank, kaggle, tableau, linkedin } = DATA.platforms;

  return (
    <S id="profiles">
      <SL>Live Profiles</SL>
      <H2>Coding & data platforms</H2>
      <p style={{ color: C.muted, fontSize:"0.88rem", marginBottom:"2rem", lineHeight:1.7 }}>
        All cards link directly to the live profile — contribution graphs and streaks update automatically.
      </p>

      {/* GitHub heatmap — full width */}
      <div style={{ marginBottom:20 }}>
        <GitHubHeatmap username={github.user} />
      </div>

      {/* Platform cards grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:12 }}>
        <PlatformCard
          name="LeetCode" icon="🟨"
          color="#FFA116" username={leetcode.user} url={leetcode.url}
          statLine="Data structures · Algorithms · SQL challenges"
          badgeLabel="Problem Solving" badgeColor="#FFA116"
        />
        <PlatformCard
          name="HackerRank" icon="🟩"
          color="#00EA64" username={hackerrank.user} url={hackerrank.url}
          statLine="Python · SQL · Data Science tracks"
          badgeLabel="Certified Skills" badgeColor="#00EA64"
        />
        <PlatformCard
          name="Kaggle" icon="🔵"
          color="#20BEFF" username={kaggle.user} url={kaggle.url}
          statLine="Notebooks · Datasets · Competitions"
          badgeLabel="ML Notebooks" badgeColor="#20BEFF"
        />
        <PlatformCard
          name="Tableau Public" icon="📊"
          color="#E97627" username={tableau.user} url={tableau.url}
          statLine="Public dashboards · Business visualisations"
          badgeLabel="BI Dashboards" badgeColor="#E97627"
        />
        <PlatformCard
          name="LinkedIn" icon="💼"
          color="#0A66C2" username={linkedin.user} url={linkedin.url}
          statLine="Professional network · Certifications · Posts"
          badgeLabel="500+ Connections" badgeColor="#0A66C2"
        />
        <PlatformCard
          name="GitHub" icon={<GitHubSVG size={15}/>}
          color={C.purple} username={github.user} url={github.url}
          statLine="Repos · Commits · Open source contributions"
          badgeLabel="Contribution graph ↑" badgeColor={C.purple}
        />
      </div>

      {/* Streak card */}
      <div style={{ marginTop:12 }}>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com?user=${github.user}&theme=transparent&hide_border=true&stroke=1e1e32&ring=8b7cf8&fire=2dd4bf&currStreakLabel=8b7cf8&sideLabels=6b6b88&dates=3a3a55&background=111120`}
          alt="GitHub streak"
          style={{ width:"100%", borderRadius:12, border:`1px solid ${C.border}`, display:"block" }}
          onError={e => { e.target.style.display="none"; }}
        />
      </div>
    </S>
  );
}

// ── PROJECTS ────────────────────────────────
function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? DATA.projects : DATA.projects.filter(p => p.featured);

  return (
    <S id="projects">
      <SL>Featured Work</SL>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"1.75rem" }}>
        <H2>Projects</H2>
        <button onClick={() => setShowAll(s => !s)}
          style={{ background:"transparent", border:`1px solid ${C.border2}`, color: C.muted,
            borderRadius:8, padding:"5px 14px", fontSize:12, cursor:"pointer", fontWeight:500 }}>
          {showAll ? "Featured only" : `All ${DATA.projects.length} →`}
        </button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        {visible.map(p => (
          <ProjectCard key={p.title} p={p}/>
        ))}
      </div>
    </S>
  );
}

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ background: C.card, border:`1px solid ${hov ? C.purple : C.border}`,
      borderRadius:12, padding:"1.4rem", display:"flex", flexDirection:"column",
      transition:"border-color 0.2s, transform 0.15s",
      transform: hov ? "translateY(-2px)" : "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"0.65rem" }}>
        <p style={{ fontWeight:700, fontSize:"0.92rem", color: C.text, margin:0, flex:1, lineHeight:1.4 }}>{p.title}</p>
        <span style={{ fontSize:9, padding:"3px 8px", borderRadius:4, fontWeight:600, whiteSpace:"nowrap",
          marginLeft:8, background:"rgba(139,124,248,0.12)", color: C.purple,
          textTransform:"uppercase", letterSpacing:"0.05em" }}>
          {p.type}
        </span>
      </div>
      <p style={{ fontSize:13, color: C.muted, marginBottom:"0.65rem", flex:1, lineHeight:1.75 }}>{p.description}</p>
      {p.highlight && (
        <p style={{ fontSize:11, color: C.teal, fontWeight:600, marginBottom:"0.75rem",
          display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ width:4, height:4, borderRadius:"50%", background: C.teal, flexShrink:0 }}/>
          {p.highlight}
        </p>
      )}
      <Row gap={5} style={{ marginBottom:"1rem" }}>
        {p.stack.map(t => <Chip key={t}>{t}</Chip>)}
      </Row>
      <div style={{ display:"flex", gap:14, marginTop:"auto", borderTop:`1px solid ${C.border}`, paddingTop:12 }}>
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:5, fontSize:12,
              color: C.purple, textDecoration:"none", fontWeight:600 }}>
            <GitHubSVG size={12}/> Code
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:5, fontSize:12,
              color: C.teal, textDecoration:"none", fontWeight:600 }}>
            <ArrowUpRight size={12}/> Live demo
          </a>
        )}
        {!p.github && !p.demo && (
          <span style={{ fontSize:11, color: C.dim }}>Industry project — not public</span>
        )}
      </div>
    </div>
  );
}

// ── EXPERIENCE ──────────────────────────────
function Experience() {
  return (
    <S id="experience">
      <SL>Career</SL>
      <H2>Experience</H2>
      <div>
        {DATA.experience.map((exp, i) => (
          <div key={exp.role} style={{ display:"grid", gridTemplateColumns:"148px 1fr",
            gap:"1.5rem", paddingBottom: i < DATA.experience.length - 1 ? "2.5rem" : 0,
            position:"relative" }}>
            {i < DATA.experience.length - 1 && (
              <div style={{ position:"absolute", left:167, top:10, width:1,
                bottom:0, background: C.border }}/>
            )}
            <p style={{ fontSize:11, color: C.muted, textAlign:"right", paddingTop:3, margin:0, lineHeight:1.6 }}>
              {exp.period}
            </p>
            <div style={{ position:"relative" }}>
              <div style={{ position:"absolute", left:-21, top:7, width:10, height:10,
                borderRadius:"50%", background: C.purple,
                boxShadow:`0 0 10px ${C.purple}80` }}/>
              <div style={{ paddingLeft:"1rem" }}>
                <p style={{ fontWeight:700, fontSize:"0.95rem", color: C.text, margin:"0 0 2px" }}>{exp.role}</p>
                <p style={{ fontSize:12, color: C.teal, margin:"0 0 10px", fontWeight:500 }}>
                  {exp.company} · {exp.location}
                </p>
                <ul style={{ paddingLeft:"1.1rem", margin:0 }}>
                  {exp.bullets.map(b => (
                    <li key={b} style={{ fontSize:13, color: C.muted, marginBottom:5, lineHeight:1.75 }}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </S>
  );
}

// ── EDUCATION ───────────────────────────────
function Education() {
  return (
    <S id="education">
      <SL>Academic</SL>
      <H2>Education</H2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        {DATA.education.map(edu => {
          const r = RAMP[edu.badgeColor] || RAMP.purple;
          return (
            <div key={edu.degree} style={{ background: C.card,
              border:`1px solid ${C.border}`, borderRadius:12, padding:"1.4rem" }}>
              <p style={{ fontWeight:700, fontSize:"1rem", color: C.text, margin:"0 0 4px" }}>{edu.degree}</p>
              <p style={{ fontSize:13, color: C.teal, margin:"0 0 4px", fontWeight:500 }}>{edu.institution}</p>
              <p style={{ fontSize:11, color: C.muted, margin:"0 0 12px" }}>{edu.period} · {edu.note}</p>
              <span style={{ display:"inline-block", fontSize:11, padding:"3px 9px", borderRadius:4,
                fontWeight:600, background: r.bg, color: r.text, border:`1px solid ${r.border}` }}>
                {edu.badge}
              </span>
            </div>
          );
        })}
      </div>
    </S>
  );
}

// ── CERTIFICATIONS ──────────────────────────
function Certifications() {
  return (
    <S id="certifications">
      <SL>Credentials</SL>
      <H2>Certifications</H2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(290px, 1fr))", gap:10 }}>
        {DATA.certifications.map(cert => (
          <div key={cert.name} style={{ display:"flex", alignItems:"center", gap:12,
            padding:"12px 14px", background: C.card, border:`1px solid ${C.border}`, borderRadius:10 }}>
            <div style={{ width:32, height:32, borderRadius:8, display:"flex", alignItems:"center",
              justifyContent:"center", flexShrink:0, fontWeight:800, fontSize:10,
              background:`${ISSUER_COLOR[cert.issuer] || "#666"}18`,
              color: ISSUER_COLOR[cert.issuer] || "#888" }}>
              {cert.issuer === "Amazon Web Services" ? "AWS" : cert.issuer[0]}
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{ fontSize:12, fontWeight:600, color: C.text, margin:0, lineHeight:1.4 }}>{cert.name}</p>
              <p style={{ fontSize:11, color: C.muted, margin:0 }}>{cert.issuer} · {cert.year}</p>
            </div>
            <span style={{ fontSize:10, padding:"2px 8px", borderRadius:4, fontWeight:600, flexShrink:0,
              background: cert.status === "earned" ? "rgba(74,222,128,0.1)" : "rgba(251,191,36,0.1)",
              color: cert.status === "earned" ? C.green : C.amber }}>
              {cert.status === "earned" ? "✓" : "⏳"}
            </span>
          </div>
        ))}
      </div>
    </S>
  );
}

// ── CONTACT ─────────────────────────────────
function Contact() {
  const contactLinks = [
    { label: DATA.email, sub:"Email", href:`mailto:${DATA.email}`, icon:"✉", color: C.coral },
    { label:"linkedin.com/in/sakshi-nandgude", sub:"LinkedIn", href: DATA.platforms.linkedin.url, icon:"in", color:"#0A66C2" },
    { label:"github.com/sakshi-nandgude",      sub:"GitHub",   href: DATA.platforms.github.url,   icon:<GitHubSVG/>, color: C.purple },
    { label:"leetcode.com/"+ DATA.platforms.leetcode.user,    sub:"LeetCode",  href: DATA.platforms.leetcode.url,   icon:"🟨", color:"#FFA116" },
    { label:"hackerrank.com/"+ DATA.platforms.hackerrank.user,sub:"HackerRank",href: DATA.platforms.hackerrank.url, icon:"🟩", color:"#00EA64" },
    { label:"kaggle.com/"+ DATA.platforms.kaggle.user,        sub:"Kaggle",    href: DATA.platforms.kaggle.url,     icon:"🔵", color:"#20BEFF" },
  ];

  return (
    <S id="contact">
      <SL>Get in touch</SL>
      <H2>Let's connect</H2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem", alignItems:"start" }}>
        <div>
          <p style={{ color: C.muted, lineHeight:1.9, marginBottom:"1.2rem", fontSize:"0.9rem" }}>
            I'm actively seeking roles in data analytics, data engineering, and data science — open to roles across Ireland.
          </p>
          <div style={{ fontFamily:"monospace", fontSize:12, color: C.muted,
            background: C.card, border:`1px solid ${C.border}`,
            borderRadius:10, padding:"1rem 1.2rem", lineHeight:2 }}>
            <span style={{ color: C.purple }}>const </span>
            <span style={{ color: C.teal }}>sakshi </span>
            <span style={{ color: C.text }}>= {"{"}</span><br/>
            <span style={{ paddingLeft:16, color: C.muted }}>location: </span>
            <span style={{ color:"#4ade80" }}>"Ireland"</span>,<br/>
            <span style={{ paddingLeft:16, color: C.muted }}>status: </span>
            <span style={{ color:"#4ade80" }}>"open to roles"</span>,<br/>
            <span style={{ paddingLeft:16, color: C.muted }}>available: </span>
            <span style={{ color:"#4ade80" }}>"Immediate"</span>,<br/>
            <span style={{ paddingLeft:16, color: C.muted }}>auth: </span>
            <span style={{ color:"#4ade80" }}>"work authorised"</span><br/>
            <span style={{ color: C.text }}>{"}"}</span>
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {contactLinks.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px",
                background: C.card, border:`1px solid ${C.border}`, borderRadius:8,
                fontSize:12, color: C.text, textDecoration:"none", transition:"border-color 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = l.color; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}>
              <div style={{ width:28, height:28, borderRadius:6, display:"flex",
                alignItems:"center", justifyContent:"center",
                background:`${l.color}15`, fontSize:13, flexShrink:0, color: l.color }}>
                {l.icon}
              </div>
              <div style={{ minWidth:0 }}>
                <p style={{ margin:0, fontSize:11, color: C.muted }}>{l.sub}</p>
                <p style={{ margin:0, overflow:"hidden", textOverflow:"ellipsis",
                  whiteSpace:"nowrap", fontSize:12 }}>{l.label}</p>
              </div>
              <span style={{ marginLeft:"auto", color: C.dim, flexShrink:0 }}>
                <ArrowUpRight size={11}/>
              </span>
            </a>
          ))}
        </div>
      </div>
    </S>
  );
}

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
const NAV_ITEMS = [
  { label:"Background", href:"#background" },
  { label:"Skills",     href:"#skills" },
  { label:"Profiles",   href:"#profiles" },
  { label:"Projects",   href:"#projects" },
  { label:"Experience", href:"#experience" },
  { label:"Certs",      href:"#certifications" },
  { label:"Contact",    href:"#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, height:54,
      background: scrolled ? "rgba(7,7,15,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      padding:"0 2rem", display:"flex", alignItems:"center",
      justifyContent:"space-between", transition:"all 0.3s" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8,
        fontFamily:"monospace", fontSize:14, color: C.text, fontWeight:700 }}>
        <span style={{ color: C.purple }}>{"<"}</span>
        SN
        <span style={{ color: C.purple }}>{"/>"}</span>
      </div>
      <div style={{ display:"flex", gap:"1.25rem" }}>
        {NAV_ITEMS.map(n => (
          <a key={n.label} href={n.href}
            style={{ fontSize:12, color: C.muted, textDecoration:"none", fontWeight:500,
              transition:"color 0.18s" }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>
            {n.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
//  ROOT
// ─────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{ background: C.bg, color: C.text,
      fontFamily:"'Inter', system-ui, -apple-system, sans-serif",
      minHeight:"100vh", fontSize:15 }}>
      <Nav/>
      <Hero/>
      <Divider/><CSBackground/>
      <Divider/><Skills/>
      <Divider/><CodingProfiles/>
      <Divider/><Projects/>
      <Divider/><Experience/>
      <Divider/><Education/>
      <Divider/><Certifications/>
      <Divider/><Contact/>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem",
        textAlign:"center", fontSize:11, color: C.dim, fontFamily:"monospace" }}>
        {DATA.name} · Data Professional · MSc Business Analytics, University of Limerick · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
