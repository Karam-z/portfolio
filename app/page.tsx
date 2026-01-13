"use client";

import { motion, Variants } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import MagneticButton from "./components/MagneticButton";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/50 flex items-center justify-center text-white font-bold">KZ</div>
          <span className="text-white font-semibold text-lg">Karam Zuheir</span>
        </div>
        <div className="flex items-center gap-6 text-white font-medium">
        
          <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          <button className="w-8 h-8 rounded-full bg-green-500/50 flex items-center justify-center text-black">🌙</button>
        </div>
      </nav>

      {/* Cursor glow & Particles */}
      <Particles />
      <CursorGlow />

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-green-700/10 to-black opacity-60 animate-pulse" />

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
            className="text-green-300/80 text-xl mb-4"
          >
            Builder of Intelligent Systems • Robotics & Embedded Hardware • Real-World Projects
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } } }}
            className="flex justify-center md:justify-start gap-4"
          >
            <motion.div variants={fadeUpVariants}><MagneticButton href="/cv.pdf">Download CV</MagneticButton></motion.div>
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
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          I’m a Mechatronics Engineer who loves turning ideas into functioning hardware. From a 2-DOF planar manipulator I designed and controlled in MATLAB, to autonomous robots that follow light or track hands with computer vision, I thrive at the intersection of mechanics, electronics, and software. My work isn’t just simulations — it’s real circuits, motors, sensors, and code that solve real problems.
        </p>
        <ul className="mt-4 space-y-2 text-green-400 max-w-3xl">
          <li>⚡ Designed a <b>2-DOF manipulator</b> including mechanics and control.</li>
          <li>🤖 Built a <b>light-following autonomous robot</b> using sensors and embedded logic.</li>
          <li>👋 Created a <b>real-time hand tracking system</b> with Python & computer vision.</li>
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
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold tracking-tight inline-block">
            <MagneticButton href="#">Projects</MagneticButton>
          </h2>
        </div>

        {/* Cards */}
        <div className="relative h-[480px] flex justify-center items-end">
          <StackedCard
            title="2-DOF Planar Elbow Manipulator"
            description="Mechanical design, power transmission, and control."
            tech={["Control Systems", "MATLAB", "Mechanics"]}
            link="https://github.com/Karam-z/2-DOF-Planar-Elbow-Manipulator-Design-Power-Control"
            index={0}
          />
          <StackedCard
            title="Hand Tracking System"
            description="Real-time hand tracking with computer vision."
            tech={["Computer Vision", "Python"]}
            link="https://github.com/Karam-z/Hand-Tracking"
            index={1}
          />
          <StackedCard
            title="Light Following Robot"
            description="Autonomous robot that follows light intensity."
            tech={["Embedded Systems", "Robotics"]}
            link="https://github.com/Karam-z/LIGHT-FOLLOWING-ROBOT"
            index={2}
          />
          <StackedCard
            title="4-Cylinder Engine Model"
            description="Mechanical modeling of a 4-cylinder engine."
            tech={["Mechanical Design", "Kinematics"]}
            link="https://github.com/Karam-z/4-cylider-engine"
            index={3}
          />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-gray-400 text-sm text-center py-10 border-t border-green-400/20">
        © 2026 Karam Zuheir • <a href="karam.zuheir2@gmail.com" className="text-green-400 hover:underline">Contact</a>
      </footer>
    </main>
  );
}

// ================= STACKED CARD COMPONENT =================
function StackedCard({ title, description, tech, link, index }: {
  title: string;
  description: string;
  tech: string[];
  link: string;
  index: number;
}) {
  const totalCards = 4;
  const centerIndex = (totalCards - 1) / 2;
  const direction = index < centerIndex ? -1 : 1;
  const distanceFromCenter = Math.abs(index - centerIndex);

  const yOffset = index * 40;
  const xOffset = index * 65;
  const rotation = -28 + index * 14;

  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ y: yOffset, x: xOffset, rotate: rotation, opacity: 0 }}
      whileInView={{ y: yOffset, x: xOffset, rotate: rotation, opacity: 1 }}
      whileHover={{ x: direction * (80 + distanceFromCenter * 40), y: -60, scale: 1.2, rotate: 5 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      viewport={{ once: true }}
      className="absolute bottom-0 cursor-pointer"
      style={{ zIndex: index }}
    >
      <div className="w-[400px] h-[420px] rounded-2xl bg-black/40 backdrop-blur-lg border border-green-400/30 shadow-lg shadow-green-900/30 p-8 flex flex-col justify-between hover:border-green-500 hover:shadow-xl transition-all duration-300">
        <div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-400/20">{item}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

// ================= FRAMER MOTION VARIANTS =================
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
