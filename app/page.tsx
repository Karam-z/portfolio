"use client";

import { motion, Variants } from "framer-motion";
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
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-[var(--nav)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/50 flex items-center justify-center text-white font-bold">KZ</div>
          <span className="font-semibold text-lg">Karam Zuheir</span>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Cursor glow & Particles */}
      <Particles />
      <CursorGlow />

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--glow)] via-green-700/10 to-[var(--bg)] opacity-60 animate-pulse" />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left side */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
            className="inline-block bg-green-500/30 px-4 py-1 rounded-full text-sm"
          >
            Take a Peek
          </motion.div>

          <motion.h1
            initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            I build real-world machines and intelligent systems that{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
              move, sense, and think.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[var(--accent)] text-xl mb-4"
          >
            Builder of Intelligent Systems • Robotics & Embedded Hardware • Real-World Projects
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } } }}
            className="flex justify-center md:justify-start gap-4 flex-wrap"
          >
            <motion.div variants={fadeUpVariants}><MagneticButton href="/cv.pdf" target="_blank">Download CV</MagneticButton></motion.div>
            <motion.div variants={fadeUpVariants}><MagneticButton href="https://github.com/Karam-z" target="_blank">GitHub</MagneticButton></motion.div>
            <motion.div variants={fadeUpVariants}><MagneticButton href="https://www.linkedin.com/in/karam-zuheir-544523355/" target="_blank">LinkedIn</MagneticButton></motion.div>
          </motion.div>
        </div>

        {/* Right side - decorative floating shapes */}
        <div className="flex-1 relative w-full h-72 md:h-96">
          <motion.div
            className="absolute w-40 h-40 rounded-full bg-green-500/30 blur-3xl -top-10 -right-10"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-green-400/20 blur-2xl bottom-0 left-10"
            animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-3xl">
          I’m a Mechatronics Engineer who loves turning ideas into functioning hardware. From a 2-DOF planar manipulator I designed and controlled in MATLAB, to autonomous robots that follow light or track hands with computer vision, to a real-time ESP32 vehicle-control platform and an AI system that hears engine faults, I thrive at the intersection of mechanics, electronics, and software. My work isn’t just simulations — it’s real circuits, motors, sensors, and code that solve real problems.
        </p>
        <ul className="mt-4 space-y-2 text-[var(--accent)] max-w-3xl">
          <li>⚡ Designed a <b>2-DOF manipulator</b> including mechanics and control.</li>
          <li>🤖 Built a <b>light-following autonomous robot</b> using sensors and embedded logic.</li>
          <li>👋 Created a <b>real-time hand tracking system</b> with Python & computer vision.</li>
          <li>🚗 Engineered the <b>ESP32 firmware & telemetry</b> for a smart-car mechatronics platform.</li>
          <li>🔊 Developed <b>SoundDrive</b>, AI engine-fault detection from audio.</li>
          <li>🛠 Skilled in <b>MATLAB, Python, ESP32, PIC, and mechanical design</b>.</li>
        </ul>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold tracking-tight inline-block">
            <MagneticButton href="#projects">Projects</MagneticButton>
          </h2>
          <p className="text-[var(--muted)] mt-4">Hover a card to reveal it • click to open the full write-up.</p>
        </div>

        {/* Fanned deck of project cards */}
        <div className="relative h-[520px] flex justify-center items-end select-none">
          {projects.map((p, i) => (
            <DeckCard key={p.id} project={p} index={i} total={projects.length} />
          ))}
        </div>
      </motion.section>

      {/* ================= PROJECT DETAILS SECTION ================= */}
      <section
        id="project-details"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-20"
      >
        <h2 className="text-5xl font-bold text-center mb-12">
          Project Details
        </h2>

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
                <span key={item} className="text-xs px-3 py-1 rounded-full bg-green-500/15 text-[var(--accent)] border border-[var(--border)]">{item}</span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              className="inline-block bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors"
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
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center"
      >
        <h2 className="text-5xl font-bold mb-4">Have a Question?</h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto mb-10">
          Curious about a project, want to collaborate, or just want to say hi? Drop your
          question below and it’ll land straight in my inbox.
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

// ================= DECK CARD (fanned hand — draggable, hover-lift) =================
function DeckCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const center = (total - 1) / 2;
  const offset = index - center;            // symmetric around 0

  const xOffset = offset * 54;              // horizontal fan spread (tightened)
  const yOffset = Math.abs(offset) * 10;    // gentle arc dip for outer cards
  const rotation = offset * 4.2;            // fan rotation (tightened)

  const [dragging, setDragging] = useState(false);

  const goToDetails = () => {
    const target = document.getElementById(project.id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // Outer wrapper places the card in the fan. z-index only rises while dragging,
    // so hovering lifts a card WITHOUT covering its neighbours.
    <div
      className="absolute bottom-0 left-1/2"
      style={{
        transform: `translateX(-50%) translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
        transformOrigin: "bottom center",
        zIndex: dragging ? 100 : index,
      }}
    >
      <motion.div
        onTap={() => { if (!dragging) goToDetails(); }}
        drag
        dragSnapToOrigin
        dragMomentum={false}
        dragElastic={0.7}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        whileHover={{ y: -46, scale: 1.04 }}
        whileDrag={{ scale: 1.08, rotate: 0 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group w-[200px] h-[290px] cursor-grab active:cursor-grabbing"
      >
        <div className="w-full h-full rounded-2xl bg-[var(--card)] backdrop-blur-lg border border-[var(--border)] shadow-lg shadow-green-900/30 p-5 flex flex-col group-hover:border-green-500 group-hover:shadow-xl group-hover:shadow-green-700/40 transition-colors duration-300 overflow-hidden">
          <h3 className="text-lg font-bold leading-tight">{project.title}</h3>

          <p className="text-[var(--muted)] text-xs leading-relaxed mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-44 transition-all duration-300 overflow-hidden">
            {project.summary}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
            {project.tech.slice(0, 4).map((item) => (
              <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-[var(--accent)] border border-[var(--border)]">{item}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

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
