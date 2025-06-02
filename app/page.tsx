"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  SparklesIcon,
  CommandLineIcon,
  CubeIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const skills = [
  { name: "Frontend Development", level: 80, icon: CodeBracketIcon },
  { name: "UI/UX Design", level: 80, icon: PaintBrushIcon },
  { name: "Mobile Development", level: 60, icon: DevicePhoneMobileIcon },
  { name: "Cloud Services", level: 72, icon: CloudIcon },
];

const technologies = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next.js",
  "TypeScript",
  "SQL",
  "Node.js",
  "Python",
  "AWS",
  "Figma",
  "Tailwind CSS",
  "Graphics",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-pink-50/80 dark:from-blue-950/30 dark:to-pink-950/30" />

        {/* Reduced background grid complexity */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Reduced Motion Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-pink-400/20 dark:from-blue-500/15 dark:to-pink-500/15 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-bl from-cyan-400/15 to-indigo-400/15 dark:from-cyan-500/10 dark:to-indigo-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-gray-900 dark:text-white mb-2">
                Hi, I am{" "}
              </span>
              <span className="block relative">
                <h1 className="text-5xl font-black text-gray-900 dark:text-white overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x bg-[length:300%_300%]">
                    Nikhil
                  </span>
                </h1>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed"
            >
              A passionate developer crafting digital experiences that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                inspire and connect
              </span>{" "}
              with people around the world 🚀
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start relative"
            >
              <Link
                href="/project"
                className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-lg">View my work</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                href="/about"
                className="group relative px-10 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className="relative text-lg">Learn more about me</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative py-32 bg-gradient-to-br from-white/50 via-blue-50/80 to-purple-50/60 dark:from-gray-900/80 dark:via-blue-950/40 dark:to-purple-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and skills I leverage to transform creative visions
              into exceptional digital realities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mr-4 shadow-lg">
                      <skill.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Proficiency Level
                      </span>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + index * 0.1,
                            ease: "easeOut",
                          }}
                          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <span className="relative block px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-xl border border-gray-200/60 dark:border-gray-700/60 font-medium shadow hover:shadow-md transition-all duration-200 cursor-default">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reduced Motion Media Query */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
