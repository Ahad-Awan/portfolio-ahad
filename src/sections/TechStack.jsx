"use client";

import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiGithub,
  SiGit,
  SiCss3,
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiPostman,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "ReactJS", icon: SiReact, color: "text-sky-400" },
  { name: "NextJS", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "Git", icon: SiGit, color: "text-orange-400" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Netlify", icon: SiNetlify, color: "text-teal-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600" },
];

const TechStack = () => {
  return (
    <section className="py-16 px-4 bg-[#1a191e] text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
        <motion.h2
          className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
            My Tech Stack
          </LinearGradient>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-5 sm:gap-x-12 gap-y-12 w-full relative overflow-visible">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative flex flex-col justify-center items-center p-4 bg-[#222228] rounded-xl shadow-lg hover:scale-110 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`transition-all duration-500 ${tech.color} mb-2 group-hover:translate-y-3`}
              >
                <tech.icon
                  size={40}
                  className="transition-all duration-500 group-hover:scale-150 group-hover:drop-shadow-[0_0_3px_currentColor]"
                />
              </div>
              <p className="text-center text-sm relative z-10 transition-transform duration-500 group-hover:-translate-y-24 group-hover:scale-150">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
