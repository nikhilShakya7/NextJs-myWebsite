"use client";
import { ProjectCard } from "../components/projectCard";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import { motion } from "../../lib/framer-exports";

const projects = [
  {
    id: 6,
    title: "Foodie Me",
    description:
      "A stylish React-based UI showcasing modern layouts and responsive design.",
    tags: ["React"],
    link: "https://reactjs-foodie-me.vercel.app/",
    image: "6.svg",
  },
  {
    id: 1,
    title: "Weather Application",
    description:
      "A React app that fetches real-time weather data with a clean and user-friendly interface.",
    tags: ["React", "API"],
    link: "https://reactjs-weather-app-phi.vercel.app/",
    image: "1.svg",
  },
  {
    id: 2,
    title: "Technest",
    description:
      "A sleek tech UI built with React and Bootstrap to showcase media content.",
    tags: ["React", "Bootstrap"],
    link: "https://reactjs-tech-nest.vercel.app/",
    image: "2.svg",
  },
  {
    id: 3,
    title: "Movies",
    description:
      "A movie browsing platform built with Next.js that displays films and ratings.",
    tags: ["NextJs", "Typescript", "Tailwind CSS"],
    link: "https://next-js-movies-phi-self.vercel.app/",
    image: "3.svg",
  },
  {
    id: 5,
    title: "Quiz Application",
    description:
      "A dynamic quiz app using Next.js and TypeScript with and category selection feature.",
    tags: ["NextJs", "Typescript", "Tailwind CSS"],
    link: "https://next-js-quizz-app-ycfc.vercel.app/",
    image: "5.svg",
  },
  {
    id: 4,
    title: "Dashboard",
    description:
      "An analytics dashboard built with modern UI components for data visualization.",
    tags: ["NextJs", "Typescript", "Tailwind CSS"],
    link: "https://next-js-dashboard-tlad.vercel.app/",
    image: "4.svg",
  },
  {
    id: 7,
    title: "Automated face recognition Attendence System",
    description:
      "A Python-based system using facial recognition and SQLite to automate attendance tracking.",
    tags: ["Python", "SQLite"],
    link: "https://github.com/nikhilShakya7/Python_Face-Attendence-System",
    image: "7.svg",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-screen"
    >
      {/* Background elements with animations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="absolute inset-0 bg-[url('/images/projects-bg.jpg')] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9))",
          }}
        />
        <motion.div
          variants={zoomIn(0.5, 1)}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"
        />

        {/* Animated floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        className="relative min-h-screen p-8 pt-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              My Mini Projects
            </h1>
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto inline-block"
            >
              Here are some of my featured projects. Each one represents unique
              challenges and creative solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
