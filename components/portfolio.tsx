"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness,
  Check, ChevronLeft, ChevronRight, Code2, Download, ExternalLink, Github,
  Home, Layers3, Linkedin, Mail, Menu, MessageCircle, MonitorSmartphone,
  Rocket, Send, Sparkles, UserRound, X, Zap, Database, BrainCircuit,
  Globe, FileText, Coffee, Trophy, Smile, MapPin, Phone, Instagram,
  Sun, Moon
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Portfolio", href: "#projects", icon: Layers3 },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const projects = [
  { name: "WH Billing System", category: "Billing & Automation", description: "A shop billing workflow with invoice PDF generation, product and customer management, and WhatsApp delivery integration.", tags: ["FastAPI", "PostgreSQL", "React"], icon: FileText, color: "coral", number: "01", github: "https://github.com/ashutoshguptagh/wh_billing_system", demo: "#contact" },
  { name: "Aerox Guard", category: "Revenue Intelligence", description: "A revenue leakage detection concept that reconciles contract, billing, entitlement and usage data to surface mismatches.", tags: ["Python", "FastAPI", "Data Pipelines"], icon: BrainCircuit, color: "violet", number: "02", github: "https://github.com/", demo: "#contact" },
  { name: "Document Assistant", category: "AI / RAG", description: "A document-focused assistant concept using chunking and vector search to make relevant information easier to retrieve.", tags: ["Python", "ChromaDB", "React"], icon: Database, color: "blue", number: "03", github: "https://github.com/", demo: "#contact" },
  { name: "ERP Management", category: "Business Application", description: "An inventory-oriented ERP application with stock issue and receipt workflows, dashboards and reporting screens.", tags: ["Django", "Python", "Tailwind"], icon: MonitorSmartphone, color: "pink", number: "04", github: "https://github.com/", demo: "#contact" },
];

const skills = [
  { name: "Python", level: "Backend & scripting", icon: Code2 },
  { name: "FastAPI", level: "APIs & services", icon: Zap },
  { name: "React / Next.js", level: "Frontend development", icon: Globe },
  { name: "PostgreSQL / SQL", level: "Data modelling", icon: Database },
  { name: "AI / ML foundations", level: "Learning & building", icon: BrainCircuit },
  { name: "Tailwind CSS", level: "Responsive UI", icon: Layers3 },
];

const services = [
  { title: "Full Stack Development", text: "Responsive web experiences connected to reliable APIs and databases.", icon: Code2, gradient: "purple" },
  { title: "Backend & API Development", text: "Python and FastAPI services with clear endpoints, validation and authentication foundations.", icon: Database, gradient: "blue" },
  { title: "AI-powered Applications", text: "Practical experiments with document retrieval, vector search and AI-assisted workflows.", icon: BrainCircuit, gradient: "pink" },
  { title: "UI Implementation", text: "Clean, accessible interfaces built to work across mobile, tablet and desktop.", icon: MonitorSmartphone, gradient: "orange" },
];

function MobileNav({
  active,
  handleNavClick,
  mobileOpen,
  setMobileOpen,
  theme,
  toggleTheme,
}: {
  active: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  return (
    <>
      {mobileOpen && (
        <button
          aria-label="Close navigation overlay"
          className="mobile-scrim"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`mobile-drawer ${mobileOpen ? "mobile-drawer-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-drawer-header">
          <a
            href="#home"
            className="brand"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span className="brand-mark">A<span>.</span></span>
            <span>
              <strong>ASHUTOSH GUPTA</strong>
              <small>FULL STACK DEVELOPER</small>
            </span>
          </a>
          <div className="mobile-drawer-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="mobile-close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="sidebar-label">MENU</div>
        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`nav-link ${active === label ? "active" : ""}`}
            >
              <Icon size={17} />
              <span>{label}</span>
              {active === label && <span className="nav-dot" />}
            </a>
          ))}
        </nav>

        <div className="availability-card">
          <span className="status-dot" />
          <span className="availability-text">OPEN TO OPPORTUNITIES</span>
          <h3>Let’s build<br />something useful.</h3>
          <p>Have a project or an opportunity in mind?</p>
          <a
            className="gradient-button small-button"
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-label">FIND ME ONLINE</div>
          <div className="social-links">
            <a href="https://github.com/ashutoshguptagh" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="mailto:hello@ashutosh.dev" aria-label="Email"><Mail size={17} /></a>
          </div>
          <p className="sidebar-footnote">DESIGNED WITH INTENTION <span>© 2026</span></p>
        </div>

        <div className="sidebar-orbit orbit-one" />
        <div className="sidebar-orbit orbit-two" />
      </aside>
    </>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState({ loading: false, message: "", success: false });

  // Synchronize dark/light theme with localStorage, DOM attribute, and OS preferences
  useEffect(() => {
    const htmlTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = htmlTheme || savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("portfolio-theme")) {
        const nextTheme = e.matches ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        document.documentElement.classList.toggle("light", nextTheme === "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  // Smooth scroll handler with sticky navbar compensation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        const navHeight = 74;
        const extraOffset = 16;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (navHeight + extraOffset);

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });

        if (window.history.pushState) {
          window.history.pushState(null, "", href);
        }

        const matched = navItems.find((item) => item.href === href);
        if (matched) {
          setActive(matched.label);
        }
      }
      setMobileOpen(false);
    }
  };

  // Lock body scroll and handle Escape key for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // IntersectionObserver to update active navigation item on scroll
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "projects", "skills", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const idToLabelMap: Record<string, string> = {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Portfolio",
      skills: "Skills",
      contact: "Contact",
    };

    const visibleEntries = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleEntries.set(entry.target.id, entry);
        });

        const intersecting: IntersectionObserverEntry[] = [];
        visibleEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.push(entry);
          }
        });

        if (intersecting.length > 0) {
          // Sort by the visible pixel height in intersectionRect
          intersecting.sort(
            (a, b) => b.intersectionRect.height - a.intersectionRect.height
          );
          const primaryEntry = intersecting[0];
          const label = idToLabelMap[primaryEntry.target.id];
          if (label) {
            setActive(label);
          }
        }
      },
      {
        rootMargin: "-80px 0px -25% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Scroll boundary fallback (exact top and bottom edges)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY < 60) {
        setActive("Home");
      } else if (scrollY + windowHeight >= docHeight - 40) {
        setActive("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ loading: true, message: "", success: false });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setFormState({ loading: false, message: data.message, success: true });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setFormState({ loading: false, message: error instanceof Error ? error.message : "Could not send message.", success: false });
    }
  }

  return (
    <div className="site-shell">
      <MobileNav
        active={active}
        handleNavClick={handleNavClick}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="main-panel">
        <header className="topbar">
          <a
            href="#home"
            className="topbar-brand"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="Ashutosh Gupta - Back to home"
          >
            <span className="topbar-brand-mark">A<span>.</span></span>
            <span className="topbar-brand-text">
              <strong>ASHUTOSH GUPTA</strong>
              <small>FULL STACK DEVELOPER</small>
            </span>
          </a>

          <nav className="top-nav" aria-label="Main navigation">
            {navItems.map(({ label, href }) => {
              const isActive = active === label;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`top-nav-link ${isActive ? "top-nav-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="topNavIndicator"
                      className="top-nav-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="topbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              className="gradient-button top-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Let’s Talk <Send size={13} />
            </a>
            <button
              className="menu-trigger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> HELLO, I’M</div>
            <h1>Ashutosh<br /><span className="gradient-text">Gupta<span className="period">.</span></span></h1>
            <p className="hero-title">I build digital products<br />that <span className="gradient-text">solve real problems.</span></p>
            <p className="hero-description">Full Stack Developer focused on Python, FastAPI, Next.js and AI/ML. I enjoy turning ideas into useful, thoughtful software.</p>
            <div className="hero-actions">
              <a className="gradient-button" href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>Explore My Work <ArrowRight size={16} /></a>
              <a className="text-button" href="#about" onClick={(e) => handleNavClick(e, "#about")}><span className="play-icon"><ArrowDown size={15} /></span> Get to know me</a>
            </div>
            <div className="hero-trust"><span className="trust-line" /> <span>BUILDING · LEARNING · SHIPPING</span></div>
            <div className="tech-logos"><span><Code2 size={16} /> Python</span><span><Layers3 size={16} /> Next.js</span><span><Database size={16} /> PostgreSQL</span><span><BrainCircuit size={16} /> AI / ML</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" /><div className="hero-ring ring-a" /><div className="hero-ring ring-b" /><div className="hero-dots dots-a" /><div className="hero-dots dots-b" />
            <div className="portrait-frame">
              <img
                src="/profile.png"
                alt="Ashutosh Gupta - Full Stack Developer"
                className="portrait-photo"
                loading="eager"
              />
            </div>
            <div className="floating-chip chip-code"><Code2 size={17} /><span>Clean code<br /><b>Thoughtful builds</b></span></div>
            <div className="floating-chip chip-status"><span className="status-dot" /><span><b>Available</b><small>for opportunities</small></span></div>
            <div className="hero-number"><strong>04<span>+</span></strong><small>PROJECTS<br />IN PROGRESS</small></div>
            <div className="visual-caption">CURIOUS BY NATURE <span>✳</span> BUILDER BY CHOICE</div>
          </div>
          <a href="#about" className="scroll-cue" onClick={(e) => handleNavClick(e, "#about")}><span className="scroll-mouse" /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="about-section section-pad section-block">
          <div className="section-heading"><div><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Developer by craft.<br /><span className="muted-heading">Problem solver by nature.</span></h2></div><span className="section-index">01 / ABOUT</span></div>
          <div className="about-grid"><div className="about-copy"><p className="lead">I’m a Computer Science student who loves building things that make everyday work simpler.</p><p>From billing workflows to data-driven tools, I enjoy working across the stack — shaping the interface, designing APIs and connecting everything to a database. I’m constantly learning and improving through hands-on projects.</p><p>My approach is simple: understand the problem, keep the solution practical, and sweat the details that make software feel good to use.</p><a className="inline-link" href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Have an idea? Let’s talk <ArrowUpRight size={15} /></a></div><div className="about-facts"><div className="fact-card"><span className="fact-icon"><Coffee size={19} /></span><strong>Always learning</strong><p>Exploring tools and ideas by building real projects.</p></div><div className="fact-card"><span className="fact-icon pink"><Rocket size={19} /></span><strong>Builder mindset</strong><p>Turning concepts into working software, one step at a time.</p></div><div className="fact-card wide-fact"><span className="fact-icon blue"><Sparkles size={19} /></span><div><strong>Current focus</strong><p>Full-stack engineering, robust APIs and applied AI.</p></div></div></div></div>
        </section>

        <section id="services" className="section-pad section-block">
          <div className="section-heading"><div><div className="eyebrow">WHAT I CAN HELP WITH</div><h2>Services I <span className="gradient-text">offer.</span></h2></div><span className="section-index">02 / SERVICES</span></div>
          <div className="service-grid">{services.map((service, i) => { const Icon = service.icon; return <motion.article key={service.title} className="service-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: i * .08 }}><div className={`service-icon ${service.gradient}`}><Icon size={22} /></div><span className="card-number">0{i + 1}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" className="card-link" onClick={(e) => handleNavClick(e, "#contact")}>Discuss a project <ArrowUpRight size={14} /></a></motion.article>; })}</div>
        </section>

        <section id="projects" className="section-pad section-block projects-section">
          <div className="section-heading"><div><div className="eyebrow">SELECTED WORK</div><h2>Projects with <span className="gradient-text">purpose.</span></h2><p className="section-subtitle">A few things I’ve been building, learning from and improving.</p></div><a className="inline-link desktop-link" href="https://github.com/ashutoshguptagh" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15} /></a></div>
          <div className="project-grid">{projects.map((project, i) => { const Icon = project.icon; return <motion.article key={project.name} className="project-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: i * .07 }}><div className={`project-art art-${project.color}`}><div className="art-top"><span className="art-dots"><i /><i /><i /></span><span className="art-label">CASE STUDY / {project.number}</span></div><div className="art-graphic"><div className="art-orbit" /><div className="art-window"><div className="window-sidebar"><i /><i /><i /><i /></div><div className="window-content"><div className="window-title" /><div className="window-line short" /><div className="window-stats"><i /><i /><i /></div><div className="window-chart"><span /><span /><span /><span /><span /><span /><span /></div></div></div><div className="art-icon"><Icon size={23} /></div></div><span className="art-bottom">{project.category.toUpperCase()}</span></div><div className="project-info"><div className="project-title-row"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div><a className="project-arrow" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub`}><ArrowUpRight size={18} /></a></div><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-footer"><a href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> Source code</a><a href={project.demo} onClick={(e) => handleNavClick(e, project.demo)}>Discuss project <ArrowRight size={14} /></a></div></div></motion.article>; })}</div>
          <p className="project-note">Project descriptions reflect portfolio summaries. Add verified live-demo URLs, repository links and screenshots before publishing.</p>
        </section>

        <section id="skills" className="section-pad section-block skills-section">
          <div className="section-heading"><div><div className="eyebrow">MY TOOLKIT</div><h2>Tools I use to <span className="gradient-text">build.</span></h2></div><span className="section-index">03 / SKILLS</span></div>
          <div className="skills-layout"><div className="skills-intro"><div className="skill-orbit"><div className="orbit-center"><Code2 size={32} /></div><span className="orbit-node node-one"><Code2 size={17} /></span><span className="orbit-node node-two"><Database size={17} /></span><span className="orbit-node node-three"><BrainCircuit size={17} /></span><span className="orbit-node node-four"><Globe size={17} /></span></div><h3>Curiosity is part of the stack.</h3><p>My toolkit keeps growing. I focus on understanding fundamentals and using the right tool for the problem.</p></div><div className="skills-list">{skills.map((skill, i) => { const Icon = skill.icon; return <motion.div key={skill.name} className="skill-row" initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}><span className="skill-icon"><Icon size={18} /></span><div className="skill-text"><strong>{skill.name}</strong><small>{skill.level}</small></div><span className="skill-check"><Check size={14} /></span></motion.div>; })}</div></div>
        </section>

        <section className="stats-band section-pad"><div className="stat-item"><Smile size={23} /><div><strong>Hands-on</strong><small>PROJECT LEARNING</small></div></div><div className="stat-item"><BriefcaseBusiness size={23} /><div><strong>Real builds</strong><small>PRACTICAL EXPERIENCE</small></div></div><div className="stat-item"><Trophy size={23} /><div><strong>Always growing</strong><small>SKILLS & CRAFT</small></div></div><div className="stats-decoration" /></section>

        <section className="section-pad section-block approach-section">
          <div className="section-heading"><div><div className="eyebrow">HOW I WORK</div><h2>Simple process.<br /><span className="muted-heading">Thoughtful outcomes.</span></h2></div><span className="section-index">04 / APPROACH</span></div>
          <div className="approach-grid"><div className="approach-step"><span>01</span><h3>Understand</h3><p>Clarify the goal, users and constraints before reaching for a solution.</p></div><div className="approach-step"><span>02</span><h3>Design & build</h3><p>Break the work into small steps and build a clear, maintainable solution.</p></div><div className="approach-step"><span>03</span><h3>Refine</h3><p>Test the details, improve the experience and make the next iteration better.</p></div></div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-banner"><div className="contact-art"><Send size={25} /><div className="contact-orbit" /></div><div className="contact-banner-copy"><div className="eyebrow">HAVE A PROJECT IN MIND?</div><h2>Let’s make something<br /><span>meaningful together.</span></h2><p>Have an idea, collaboration or opportunity? I’d love to hear about it.</p><a href="mailto:hello@ashutosh.dev" className="contact-email">hello@ashutosh.dev <ArrowUpRight size={15} /></a></div><div className="contact-sparkle">✳</div></div>
          <div className="contact-content"><div className="contact-left"><div className="eyebrow">GET IN TOUCH</div><h2>Tell me what<br />you’re <span className="gradient-text">thinking.</span></h2><p>Share a little context and I’ll get back to you. You can also reach out directly over email.</p><div className="contact-detail"><span><Mail size={17} /></span><div><small>EMAIL</small><a href="mailto:hello@ashutosh.dev">hello@ashutosh.dev</a></div></div><div className="contact-detail"><span><MapPin size={17} /></span><div><small>BASED IN</small><strong>Mumbai, India</strong></div></div><div className="contact-socials"><a href="https://github.com/ashutoshguptagh" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div><form className="contact-form" onSubmit={submitContact}><div className="form-heading"><h3>Send a message</h3><span><span className="status-dot" /> Usually replies soon</span></div><label>Your name<input required maxLength={100} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" /></label><label>Your email<input required type="email" maxLength={200} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" /></label><label>Your message<textarea required maxLength={5000} rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your idea..." /></label>{formState.message && <p className={`form-message ${formState.success ? "success" : "error"}`}>{formState.message}</p>}<button type="submit" className="gradient-button submit-button" disabled={formState.loading}>{formState.loading ? "Sending..." : "Send Message"} <Send size={15} /></button><p className="form-privacy">Your details are used only to respond to your enquiry.</p></form></div>
        </section>

        <footer className="footer">
          <a href="#home" className="footer-brand" onClick={(e) => handleNavClick(e, "#home")}>
            A<span>.</span> <b>ASHUTOSH GUPTA</b>
          </a>
          <span>Designed & built with care.</span>
          <a href="#home" className="back-top" onClick={(e) => handleNavClick(e, "#home")}>
            BACK TO TOP <ArrowDownRight size={14} />
          </a>
        </footer>
      </main>
    </div>
  );
}
