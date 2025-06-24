"use client";
import { ProjectCard } from "../components/projectCard";

const projects = [
  {
    id: 6,
    title: "Foodie Me",
    description:
      "A stylish React-based UI showcasing modern layouts and responsive design.",
    tags: ["React"],
    link: "https://reactjs-foodie-me.vercel.app/",
    image: "/images/6.svg",
  },

  {
    id: 1,
    title: "Weather Application",
    description:
      "A React app that fetches real-time weather data with a clean and user-friendly interface.",
    tags: ["React", "API"],
    link: "https://reactjs-weather-app-phi.vercel.app/",
    image: "/images/1.svg",
  },
  {
    id: 9,
    title: "वसः  A clothing website",
    description:
      "Wosa (वसः) is a responsive fashion e-commerce site built with React.js and Context API.It features dynamic routing and localStorage persistence.",
    tags: ["React"],
    link: "https://reactjs-wosa.vercel.app/",
    image: "/images/9.svg",
  },
  {
    id: 2,
    title: "Technest",
    description:
      "A sleek tech UI built with React and Bootstrap to showcase media content.",
    tags: ["React", "Bootstrap"],
    link: "https://reactjs-tech-nest.vercel.app/",
    image: "/images/2.svg",
  },
  {
    id: 3,
    title: "Movies",
    description:
      "A movie browsing platform built with Next.js that displays films and ratings.",
    tags: ["NextJs", "Typescript", "Tailwind CSS"],
    link: "https://next-js-movies-phi-self.vercel.app/",
    image: "/images/3.svg",
  },
  {
    id: 5,
    title: "Quiz Application",
    description:
      "A dynamic quiz app using Next.js and TypeScript with and category selection feature.",
    tags: ["NextJs", "Typescript", "Tailwind CSS"],
    link: "https://next-js-quizz-app-ycfc.vercel.app/",
    image: "/images/5.svg",
  },
  {
    id: 4,
    title: "Dashboard",
    description:
      "An analytics dashboard built with modern UI components for data visualization.",
    tags: ["NextJs", "Typescript", "Tailwind CSS"],
    link: "https://next-js-dashboard-tlad.vercel.app/",
    image: "/images/4.svg",
  },
  {
    id: 7,
    title: "Automated face recognition Attendence System",
    description:
      "A Python-based system using facial recognition and SQLite to automate attendance tracking.",
    tags: ["Python", "SQLite"],
    link: "https://github.com/nikhilShakya7/Python_Face-Attendence-System",
    image: "/images/7.svg",
  },
  {
    id: 8,
    title: "Flappy Bird Clone",
    description:
      "A fun and engaging Flappy Bird clone built using Flutter and Dart. This project recreates the classic gameplay mechanics with smooth animations, collision detection, scoring, and customizable components. Ideal for learning Flutter game development using the Flame engine.",
    tags: ["Flutter", "Dart"],
    link: "https://github.com/nikhilShakya7/Flutter-Flappy_Bird",
    image: "/images/8.png",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[url('/images/projects-bg.jpg')] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30" />
      </div>

      <div className="relative min-h-screen p-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 mt--">
              My Mini Projects
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my featured projects. Each one represents unique
              challenges and creative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
