"use client";
import Link from "next/link";
import { motion } from "../lib/framer-exports";
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
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-all duration-500">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/80 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-pink-950/30" />

        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 dark:from-blue-500/20 dark:via-purple-500/15 dark:to-pink-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-bl from-cyan-400/25 via-blue-400/20 to-indigo-400/25 dark:from-cyan-500/15 dark:via-blue-500/12 dark:to-indigo-500/15 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-violet-400/25 via-pink-400/20 to-rose-400/25 dark:from-violet-500/15 dark:via-pink-500/12 dark:to-rose-500/15 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/6 opacity-20 dark:opacity-10"
        >
          <div className="relative">
            <CodeBracketIcon className="h-14 w-14 text-blue-600 dark:text-blue-400" />
            <div className="absolute -inset-2 bg-blue-500/10 dark:bg-blue-500/5 rounded-lg blur-sm" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 right-1/6 opacity-20 dark:opacity-10"
        >
          <div className="relative">
            <SparklesIcon className="h-12 w-12 text-purple-600 dark:text-purple-400" />
            <div className="absolute -inset-2 bg-purple-500/10 dark:bg-purple-500/5 rounded-lg blur-sm" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/3 left-1/4 opacity-20 dark:opacity-10"
        >
          <div className="relative">
            <CubeIcon className="h-10 w-10 text-pink-600 dark:text-pink-400" />
            <div className="absolute -inset-2 bg-pink-500/10 dark:bg-pink-500/5 rounded-lg blur-sm" />
          </div>
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/5 right-1/3 w-6 h-6 border-2 border-blue-400/30 dark:border-blue-400/20 rotate-45"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-full"
        />
      </div>

      {/* Enhanced Hero Section */}
      <div className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-4 opacity-30">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </motion.div>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-gray-900 dark:text-white mb-2">
                Hi, I'm{" "}
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

      <div className="relative py-32 bg-gradient-to-br from-white/50 via-blue-50/80 to-purple-50/60 dark:from-gray-900/80 dark:via-blue-950/40 dark:to-purple-950/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent dark:via-gray-900/20" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 relative">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-16 right-12 opacity-20 dark:opacity-10"
          >
            <LightBulbIcon className="h-20 w-20 text-yellow-500" />
          </motion.div>

          <motion.div
            animate={{
              x: [0, 15, 0],
              y: [0, -8, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-24 left-12 opacity-15 dark:opacity-8"
          >
            <PaintBrushIcon className="h-16 w-16 text-pink-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="w-12 h-12 border-2 border-dashed border-blue-400 dark:border-blue-500 rounded-full opacity-40" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and skills I leverage to transform creative visions
              into exceptional digital realities
            </p>
          </motion.div>

          {/* Enhanced Skills Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-pink-950/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                            duration: 1.5,
                            delay: 0.8 + index * 0.15,
                            ease: "easeOut",
                          }}
                          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative block px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
}
