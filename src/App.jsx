import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Layout, Bot, Zap, Brain } from "lucide-react";

const LogoMark = () => (
  <svg viewBox="0 0 256 256" width="32" height="32" fill="white">
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
);

const shinyStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};

const skills = [
  { icon: <Code2 size={20} />, name: "JavaScript", desc: "Core language for everything I build — logic, interactivity, full-stack.", level: 80 },
  { icon: <Layout size={20} />, name: "React", desc: "Building fast, component-driven interfaces that feel smooth.", level: 70 },
  { icon: <Bot size={20} />, name: "AI APIs & Agents", desc: "Connecting AI models into real workflows and automation systems.", level: 65 },
  { icon: <Sparkles size={20} />, name: "UI / UX Design", desc: "Designing interfaces people actually want to use.", level: 60 },
  { icon: <Zap size={20} />, name: "AI Automation", desc: "Building systems that eliminate repetitive work intelligently.", level: 62 },
  { icon: <Brain size={20} />, name: "Prompt Engineering", desc: "Crafting prompts that produce reliable, structured AI outputs.", level: 75 },
];

const projects = [
  { tag: "AI Tool", name: "AI Task Agent", desc: "An intelligent agent that breaks down complex goals into steps and executes them autonomously — built to eliminate planning overhead.", stack: ["JavaScript", "React", "AI API", "Node.js"] },
  { tag: "Web App", name: "Smart UI Kit", desc: "A design system built for AI-powered products — components that adapt to content and context.", stack: ["React", "CSS", "Figma"] },
  { tag: "AI Tool", name: "Prompt Builder", desc: "Helps non-technical users craft powerful AI prompts through guided inputs — making AI accessible to everyone.", stack: ["JavaScript", "AI API", "HTML/CSS"] },
];

const steps = [
  { num: "01", title: "Understand the Problem", desc: "Before writing one line of code, I get clear on what's broken and who it's broken for." },
  { num: "02", title: "Design the Experience", desc: "Map out the flow. What does the user see? What do they never have to think about?" },
  { num: "03", title: "Build & Integrate AI", desc: "Code the interface, wire up the AI logic, connect everything into a working system." },
  { num: "04", title: "Iterate Until Right", desc: "Ship fast, test in reality, improve relentlessly. Done is better than perfect — but perfect comes after done." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
});

export default function App() {
  const videoRef = useRef(null);
  useEffect(() => { videoRef.current?.play().catch(() => { }); }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#050508", color: "white", overflowX: "hidden" }}>

      {/* BG VIDEO */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <video ref={videoRef} autoPlay loop muted playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
          src="/bg.mp4" />
        {/* Strong dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,8,0.6)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,8,0.4) 0%, rgba(5,5,8,0.1) 40%, rgba(5,5,8,0.7) 100%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>

        {/* NAVBAR */}
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "72rem", margin: "0 auto", padding: "1.5rem 2rem" }}>
          <LogoMark />
          <div style={{ display: "flex", gap: "2rem" }}>
            {["About", "Skills", "Projects", "Process", "Contact"].map((link, i) => (
              <motion.a key={link} href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "white"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
              >{link}</motion.a>
            ))}
          </div>
          <a href="#contact"
            style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "white", color: "black", padding: "0.6rem 1.2rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
            Hire Me <ArrowRight size={14} />
          </a>
        </motion.nav>

        {/* HERO */}
        <section style={{ textAlign: "center", padding: "6rem 1.5rem 9rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.p {...fadeUp(0.2)} style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem" }}>
            AI Developer & Web Developer
          </motion.p>
          <motion.h1 {...fadeUp(0.3)} style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: "2rem" }}>
            <span style={{ display: "block", color: "white" }}>Building AI</span>
            <span className="animate-shiny" style={{ display: "block", ...shinyStyle }}>That Works.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.5)} style={{ color: "rgba(255,255,255,0.55)", maxWidth: "26rem", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            I'm Ryo — I build AI tools and web products that make people's lives genuinely easier. Not demos. Real things that work.
          </motion.p>
          <motion.div {...fadeUp(0.7)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#projects"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "white", color: "black", padding: "0.85rem 1.8rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
              See My Work <ArrowRight size={14} />
            </a>
            <a href="#contact"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", padding: "0.85rem 1.8rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
              Let's Talk
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <motion.div {...fadeUp(0)}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>About Me</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "1.5rem" }}>I Don't Just<br />Build — I Solve</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "1rem" }}>I'm <strong style={{ color: "white" }}>Ryo</strong> — an AI developer and web developer on a mission to build tools that make life easier for real people.</p>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "1rem" }}>I combine <strong style={{ color: "white" }}>JavaScript, React, and AI APIs</strong> into full products — from the interface down to the agent logic.</p>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>The best technology disappears — it just works, effortlessly, for whoever uses it.</p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[["AI", "Agents & Automation"], ["UI", "Thoughtful Design"], ["JS", "Full Stack"], ["∞", "Problems to Solve"]].map(([num, label]) => (
                <div key={label} className="liquid-glass" style={{ borderRadius: "1rem", padding: "1.5rem", background: "rgba(255,255,255,0.03)" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(164,244,253,0.85)", letterSpacing: "-0.02em" }}>{num}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: "0.4rem", letterSpacing: "0.05em" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <motion.p {...fadeUp(0)} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>Skills & Stack</motion.p>
          <motion.h2 {...fadeUp(0.1)} style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem" }}>What I Work With</motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {skills.map((skill, i) => (
              <motion.div key={skill.name} {...fadeUp(i * 0.08)} style={{ borderRadius: "1rem", padding: "1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ color: "rgba(164,244,253,0.85)", marginBottom: "0.8rem" }}>{skill.icon}</div>
                <div style={{ fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{skill.name}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: "1rem" }}>{skill.desc}</div>
                <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1 }}
                    style={{ height: "100%", width: `${skill.level}%`, background: "linear-gradient(to right, #A4F4FD, #00d2ff)", transformOrigin: "left", borderRadius: "1px" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <motion.p {...fadeUp(0)} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>Projects</motion.p>
          <motion.h2 {...fadeUp(0.1)} style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem" }}>Things I've Built</motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {projects.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(i * 0.1)}
                style={{ borderRadius: "1.2rem", padding: "2rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", gridColumn: i === 0 ? "span 2" : "span 1" }}>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(164,244,253,0.8)", border: "1px solid rgba(164,244,253,0.2)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>{p.tag}</span>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em", margin: "1rem 0 0.75rem" }}>{p.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <motion.p {...fadeUp(0)} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>How I Work</motion.p>
          <motion.h2 {...fadeUp(0.1)} style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem" }}>My Process</motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1rem", overflow: "hidden" }}>
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(i * 0.1)}
                style={{ padding: "2rem", background: "#050508", transition: "background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
                onMouseLeave={e => e.currentTarget.style.background = "#050508"}
              >
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "rgba(164,244,253,0.07)", marginBottom: "1rem" }}>{step.num}</div>
                <div style={{ fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.9rem" }}>{step.title}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem 8rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <motion.div {...fadeUp(0)} style={{ borderRadius: "1.5rem", padding: "5rem 2rem", textAlign: "center", position: "relative", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(600px circle at 50% 0%, rgba(164,244,253,0.05), transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "1.5rem" }}>
              Let's Build<br /><span className="animate-shiny" style={shinyStyle}>Something Real.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "28rem", margin: "0 auto 2.5rem", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Open to collaborations, freelance projects, and conversations about AI tools that actually matter.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://instagram.com/damnvnsh" target="_blank"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "white", color: "black", padding: "0.8rem 1.8rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
                Instagram <ArrowRight size={14} />
              </a>
              <a href="#"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", padding: "0.8rem 1.8rem", borderRadius: "999px", fontSize: "0.875rem", textDecoration: "none" }}>
                Discord: ryoisfine
              </a>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer style={{ maxWidth: "72rem", margin: "0 auto", padding: "2rem 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <LogoMark />
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>© 2025 Ryo — All Rights Reserved</span>
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>Built with React</span>
        </footer>

      </div>
    </div>
  );
}