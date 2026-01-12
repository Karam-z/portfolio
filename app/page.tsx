"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import MagneticButton from "./components/MagneticButton";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">

      {/* Background Effects */}
      <Particles />
      <CursorGlow />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-400 to-black opacity-40 animate-pulse" />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 text-center sm:text-left">
        {/* Hero Heading */}
        <motion.h1
          initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-bold mb-4"
        >
          Karam Zuheir
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-16"
        >
          <motion.div variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            <MagneticButton href="/cv.pdf">Download CV</MagneticButton>
          </motion.div>
          <motion.div variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            <MagneticButton href="https://github.com" target="_blank">GitHub</MagneticButton>
          </motion.div>
          <motion.div variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            <MagneticButton href="https://linkedin.com" target="_blank">LinkedIn</MagneticButton>
          </motion.div>
        </motion.div>

        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-full sm:max-w-3xl mx-auto sm:mx-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            I’m a Mechatronics Engineer passionate about building intelligent hardware systems that interact
            with the real world. I specialize in embedded systems, robotics, and control systems — creating
            solutions that are not just simulations but fully functional prototypes.
          </p>
        </motion.section>
      </section>

      {/* PROJECTS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-40"
      >
        {/* Title */}
        <div className="mb-12 sm:mb-32 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight inline-block px-4 py-2 bg-green-500/20 rounded-lg">
            Projects
          </h2>
          <p className="text-gray-400 mt-2">Selected engineering and robotics work</p>
        </div>

        {/* Cards */}
        <div className="relative flex flex-col sm:flex-row justify-center items-end gap-6 h-auto sm:h-[560px]">
          <StackedCard
            title="2-DOF Planar Elbow Manipulator"
            description="Mechanical design, power transmission, and control of a planar elbow manipulator."
            tech={["Control Systems", "MATLAB", "Mechanics"]}
            link="https://github.com/Karam-z/2-DOF-Planar-Elbow-Manipulator-Design-Power-Control"
            index={0}
          />
          <StackedCard
            title="Hand Tracking System"
            description="Real-time hand tracking using computer vision techniques."
            tech={["Computer Vision", "Python"]}
            link="https://github.com/Karam-z/Hand-Tracking"
            index={1}
          />
          <StackedCard
            title="Light Following Robot"
            description="Autonomous robot that follows light intensity using sensors and control logic."
            tech={["Embedded Systems", "Robotics"]}
            link="https://github.com/Karam-z/LIGHT-FOLLOWING-ROBOT"
            index={2}
          />
          <StackedCard
            title="4-Cylinder Engine Model"
            description="Mechanical modeling and visualization of a 4-cylinder internal combustion engine."
            tech={["Mechanical Design", "Kinematics"]}
            link="https://github.com/Karam-z/4-cylider-engine"
            index={3}
          />
        </div>
      </motion.section>
    </main>
  );
}

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
      whileInView={{ opacity: 1 }}
      whileHover={{ x: direction * (80 + distanceFromCenter * 40), y: -60, scale: 1.18, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      viewport={{ once: true }}
      className="absolute bottom-0 cursor-pointer w-full sm:w-[400px] h-auto sm:h-[560px]"
      style={{ zIndex: index }}
    >
      <div className="w-full h-full rounded-[26px] bg-black/70 border border-green-500/20 shadow-2xl shadow-black/70 backdrop-blur-xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item) => (
            <span key={item} className="text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
