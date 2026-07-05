"use client";

import { motion, Variants, useMotionValue, useVelocity, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import CursorGlow from "./components/CursorGlow";
import MagneticButton from "./components/MagneticButton";
import Particles from "./components/Particles";
import ThemeToggle from "./components/ThemeToggle";
import QuestionForm from "./components/QuestionForm";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[var(--bg)] text-[var(--fg)]">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-md bg-[var(--nav)] border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[var(--on-accent)] font-bold text-sm">KZ</div>
          <span className="font-semibold text-lg">Karam Zuheir</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
          <a href="#work" className="hover:text-[var(--accent)] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-block bg-[var(--accent)] text-[var(--on-accent)] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors">Let’s talk</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Cursor glow & Particles */}
      <Particles />
      <CursorGlow />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] opacity-70"
        style={{ background: "radial-gradient(60% 60% at 50% 0%, var(--glow), transparent 70%)" }}
      />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left space-y-6">
          <Eyebrow>Mechatronics Engineer</Eyebrow>

          <motion.h1
            initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            I build machines and systems that{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)]">
              move, sense, and think.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[var(--muted)] text-lg max-w-xl mx-auto md:mx-0"
          >
            From real-time embedded firmware and robotics to AI and full-stack software — I turn ideas into functioning hardware and the code that drives it.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
            className="flex justify-center md:justify-start gap-4 flex-wrap"
          >
            <motion.div variants={fadeUpVariants}><MagneticButton href="/cv.pdf" target="_blank">Download CV</MagneticButton></motion.div>
            <motion.div variants={fadeUpVariants}><MagneticButton href="https://github.com/Karam-z" target="_blank">GitHub</MagneticButton></motion.div>
            <motion.div variants={fadeUpVariants}><MagneticButton href="https://www.linkedin.com/in/karam-zuheir-544523355/" target="_blank">LinkedIn</MagneticButton></motion.div>
          </motion.div>
        </div>

        {/* Device-style preview panel */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden md:block"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl p-4 shadow-2xl">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--muted)]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--muted)]/40" />
            </div>
            <div
              className="rounded-xl border border-[var(--border)] h-64 p-5 flex flex-col justify-between"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            >
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-widest">Live telemetry</div>
                <div className="text-2xl font-bold mt-1">20&nbsp;Hz stream</div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[["speed", "3.2 km/h"], ["accel", "1.8 m/s²"], ["steer", "12.5°"]].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-[var(--border)] py-3">
                    <div className="text-[10px] text-[var(--muted)] uppercase">{k}</div>
                    <div className="text-sm font-semibold text-[var(--accent)]">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT + STATS (two-column, ZeBeyond-style) */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <Eyebrow>Why work with me</Eyebrow>
          <h2 className="text-4xl font-bold mt-4 mb-5">
            Engineering across the whole stack, with <span className="text-[var(--accent)]">confidence</span>.
          </h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
            I’m a Mechatronics Engineer who loves turning ideas into functioning hardware — from a 2-DOF manipulator and autonomous robots to a real-time ESP32 vehicle platform and an AI system that hears engine faults. My work isn’t just simulations; it’s real circuits, motors, sensors, and code that solve real problems.
          </p>
          <a href="#work" className="inline-block bg-[var(--accent)] text-[var(--on-accent)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--accent-hover)] transition-colors">
            See my work
          </a>
        </div>

        <div className="grid grid-cols-2 rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--card)] backdrop-blur-md">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-[var(--border)]`}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="text-xl font-bold">{s.value}</div>
              <div className="text-sm text-[var(--muted)] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-28"
      >
        <div className="mb-8 text-center">
          <Eyebrow center>Selected work</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Projects</h2>
          <p className="text-[var(--muted)] mt-4">Hover a card to reveal it • drag to play with it • click to open the write-up.</p>
        </div>

        {/* Fanned deck of project cards */}
        <div className="relative h-[540px] flex justify-center items-end select-none">
          {projects.map((p, i) => (
            <DeckCard key={p.id} project={p} index={i} total={projects.length} />
          ))}
        </div>
      </motion.section>

      {/* ================= PROJECT DETAILS SECTION ================= */}
      <section
        id="project-details"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16"
      >
        <div className="text-center">
          <Eyebrow center>Deep dive</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Project Details</h2>
        </div>

        {projects.map((p) => (
          <div
            key={p.id}
            id={p.id}
            className="bg-[var(--card-solid)] border border-[var(--border)] rounded-2xl p-8 shadow-2xl backdrop-blur-xl scroll-mt-24"
          >
            <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
            <p className="text-[var(--muted)] mb-6 whitespace-pre-line leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((item) => (
                <span key={item} className="text-xs px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--border)]">{item}</span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              className="inline-block bg-[var(--accent)] text-[var(--on-accent)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Go to GitHub
            </a>
          </div>
        ))}
      </section>

      {/* CONTACT / QUESTIONS SECTION */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center"
      >
        <Eyebrow center>Get in touch</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Have a Question?</h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto mb-10">
          Curious about a project, want to collaborate, or just want to say hi? Drop your question below and it’ll land straight in my inbox.
        </p>
        <QuestionForm />
      </motion.section>

      {/* Footer */}
      <footer className="text-[var(--muted)] text-sm text-center py-10 border-t border-[var(--border)]">
        © 2026 Karam Zuheir •{" "}
        <a href="mailto:karam.zuheir2@gmail.com" className="text-[var(--accent)] hover:underline">
          karam.zuheir2@gmail.com
        </a>
      </footer>
    </main>
  );
}

// ================= EYEBROW LABEL =================
function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-6 bg-[var(--accent)]" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{children}</span>
    </div>
  );
}

// ================= DECK CARD (fanned hand — draggable, hover-lift, swing) =================
function DeckCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const center = (total - 1) / 2;
  const offset = index - center;            // symmetric around 0

  const xOffset = offset * 54;              // horizontal fan spread
  const yOffset = Math.abs(offset) * 10;    // gentle arc dip for outer cards
  const rotation = offset * 4.2;            // fan rotation

  const [dragging, setDragging] = useState(false);
  // Grab point (% within the card) becomes the pivot, so the card swings from
  // wherever the mouse grabs it — the mouse is the anchor point.
  const [origin, setOrigin] = useState("50% 50%");

  // Drag position + velocity-driven rotation (pendulum swing that settles to
  // upright, as if gravity pulls the card straight down from the anchor).
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xVelocity = useVelocity(x);
  const swing = useSpring(
    useTransform(xVelocity, [-1600, 1600], [22, -22], { clamp: true }),
    { stiffness: 200, damping: 14, mass: 0.6 }
  );

  const goToDetails = () => {
    const target = document.getElementById(project.id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // Layer A — places the card in the fan. z-index only rises while dragging,
    // so hovering lifts a card WITHOUT covering its neighbours. The fan tilt
    // straightens while you hold the card so its own swing takes over.
    <div
      className="absolute bottom-0 left-1/2"
      style={{
        transform: `translateX(-50%) translateX(${xOffset}px) translateY(${yOffset}px) rotate(${dragging ? 0 : rotation}deg)`,
        transformOrigin: "bottom center",
        transition: "transform 0.25s ease",
        zIndex: dragging ? 100 : index,
      }}
    >
      {/* Layer B — lifts the whole card straight up on hover */}
      <motion.div
        whileHover={{ y: -140, scale: 1.05 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {/* Layer C — drag + gravity swing, pivoting from the grab point */}
        <motion.div
          onTap={() => { if (!dragging) goToDetails(); }}
          drag
          dragSnapToOrigin
          dragMomentum={false}
          dragElastic={0.6}
          onPointerDown={(e) => {
            const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
            setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
          }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          whileDrag={{ scale: 1.06 }}
          style={{ x, y, rotate: swing, transformOrigin: origin }}
          className="group w-[200px] h-[290px] cursor-grab active:cursor-grabbing"
        >
          <div className="w-full h-full rounded-2xl bg-[var(--card-solid)] backdrop-blur-lg border border-[var(--border)] shadow-xl shadow-black/40 p-5 flex flex-col group-hover:border-[var(--accent)] transition-colors duration-300 overflow-hidden">
            <h3 className="text-lg font-bold leading-tight">{project.title}</h3>

            <p className="text-[var(--muted)] text-xs leading-relaxed mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-44 transition-all duration-300 overflow-hidden">
              {project.summary}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
              {project.tech.slice(0, 4).map((item) => (
                <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--border)]">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ================= HIGHLIGHT STATS =================
const STATS = [
  { icon: "🧩", value: "6+ Projects", label: "Across mechatronics, AI & software." },
  { icon: "⚡", value: "Real-time", label: "20 Hz embedded telemetry on custom hardware." },
  { icon: "🔊", value: "SoundDrive", label: "AI engine-fault detection from audio (ML + full-stack)." },
  { icon: "🛠️", value: "CAD → Code", label: "From SolidWorks chassis to firmware." },
];

// ================= PROJECT DATA =================
type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  github: string;
};

const projects: Project[] = [
  {
    id: "smart-car-mechatronics",
    title: "Smart Car — Mechatronics",
    summary:
      "Real-time ESP32 vehicle-control platform for a Smart Car & Driver Monitoring system, with sensor telemetry to an NVIDIA Jetson.",
    description: `Mechatronics subsystem of a Smart Car & Driver Monitoring platform for commercial fleet management:

-Wrote non-blocking real-time ESP32 firmware driving a 60 A brushless ESC and MG995 steering servo from a Bluetooth Xbox Series X controller.

-Integrated an MPU6050 IMU (I²C) with gyro calibration and a US1881 Hall-effect wheel-speed sensor with interrupt-driven pulse counting.

-Implemented safety logic: a safe-start gate, proportional instantaneous braking, and a controller-disconnect fail-safe.

-Streamed a 20 Hz JSON telemetry contract over USB serial to a Jetson Orin Nano for the AI and software scoring pipelines.

-Designed and 3D-printed a custom SolidWorks chassis with vibration-dampened sensor mounts, and handled full Jetson bring-up.`,
    tech: ["ESP32", "Embedded C++", "Sensors & IMU", "Telemetry", "3D Design"],
    github: "https://github.com/Karam-z/smart-car-mechatronics",
  },
  {
    id: "sounddrive",
    title: "SoundDrive",
    summary:
      "AI-powered engine fault detection from audio — records engine sound and classifies it as Normal, Warning, or Fault with a confidence score.",
    description: `AI system that detects vehicle engine faults from sound:

-Records engine audio and extracts MFCC features for analysis.

-Runs a machine-learning classifier that returns an engine-health result — Normal, Warning, or Fault Detected — with a confidence score.

-Built a FastAPI backend hosting the ML model services and result storage.

-Developed a React (Vite) web application for recording and submitting audio.

-Built a cross-platform React Native (Expo) mobile app for on-the-go diagnostics.`,
    tech: ["Machine Learning", "FastAPI", "React", "React Native"],
    github: "https://github.com/Karam-z/sounddrive-",
  },
  {
    id: "2-dof-planar-elbow-manipulator",
    title: "2-DOF Planar Elbow Manipulator",
    summary:
      "Mechanical design, power transmission, and real-time control of a 2-DOF planar elbow manipulator.",
    description: `Real-time control and mechanical design of a 2-DOF planar elbow manipulator:

-Designed and assembled the mechanical structure with CAD modeling.

-Selected and integrated motors and sensors for precise motion.

-Developed MATLAB control algorithms for trajectory tracking.

-Simulated power transmission and joint dynamics.

-Tested the manipulator in real-world conditions with accurate repeatability.`,
    tech: ["Control Systems", "MATLAB", "Mechanics"],
    github: "https://github.com/Karam-z/2-DOF-Planar-Elbow-Manipulator-Design-Power-Control",
  },
  {
    id: "hand-tracking-system",
    title: "Hand Tracking System",
    summary:
      "Real-time hand tracking with Python and OpenCV for gesture recognition and robotic control.",
    description: `Real-time hand tracking system using Python and OpenCV for gesture recognition:

-Accurate detection of hands and fingertips in varying lighting conditions.

-Gesture recognition for controlling robots or mechanical devices.

-Optimized image-processing pipeline for low-latency performance.

-Integration with Python scripts to interface with external hardware.

-Tested on multiple subjects to ensure robustness and generalization.`,
    tech: ["Computer Vision", "Python"],
    github: "https://github.com/Karam-z/Hand-Tracking",
  },
  {
    id: "light-following-robot",
    title: "Light Following Robot",
    summary:
      "Autonomous robot that tracks and follows light intensity using embedded electronics.",
    description: `Autonomous robot that follows light intensity using embedded electronics:

-Implemented a sensor array for light detection and direction tracking.

-Microcontroller-based motor control for smooth motion toward light sources.

-Designed a low-power, real-time embedded system with fast response.

-Integrated a mechanical chassis with wiring for optimal sensor placement.

-Tested under multiple lighting conditions to ensure consistent performance.`,
    tech: ["Embedded Systems", "Robotics"],
    github: "https://github.com/Karam-z/LIGHT-FOLLOWING-ROBOT",
  },
  {
    id: "4-cylinder-engine-model",
    title: "4-Cylinder Engine Model",
    summary:
      "Mechanical modeling and simulation of a 4-cylinder internal combustion engine in SolidWorks.",
    description: `Mechanical modeling and simulation of a 4-cylinder internal combustion engine:

-Developed a kinematic model of pistons, connecting rods, and crankshaft.

-Simulated the motion of each component for dynamic analysis.

-Created a CAD assembly of the engine layout.

-Analyzed timing and power transmission between cylinders.

-Included detailed documentation of design calculations and simulations.`,
    tech: ["Mechanical Design", "Kinematics"],
    github: "https://github.com/Karam-z/4-cylider-engine",
  },
];

// ================= FRAMER MOTION VARIANTS =================
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
