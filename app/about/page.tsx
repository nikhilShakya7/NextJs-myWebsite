"use client";
import { motion } from "../../lib/framer-exports";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I am Nikhil Shakya
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                An enthusiastic developer with a strong passion for learning and
                building impactful software.{" "}
              </p>

              <p>
                Outside of coding, I enjoy hiking, reading sci-fi, and
                experimenting with recipes. I'm always learning and exploring
                what’s next in tech.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Tailwind CSS",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2" />

            <div className="space-y-12">
              {[
                {
                  year: "2025",
                  role: "Junior Frontend Developer",
                  company: "Peace Nepal Dot Com",
                  description:
                    " Worked on building responsive user interfaces using ReactJS and other frameworks. Web applications for enterprise clients.",
                },
                {
                  year: "2025-2025",
                  role: "Intern",
                  company: "Peace Nepal Dot Com",
                  description:
                    " Learn to build responsive user interfaces using NextJS and other frameworks.",
                },
                {
                  year: "2022 - 2025",
                  role: "Freelancer",
                  company: "GeoSpatial Pvt.Ltd",
                  description:
                    "Freelanced with GeoSpatial Systems Pvt. Ltd., specializing in the processing and interpretation of Lidar data.",
                },
                {
                  year: "2025",
                  role: "Computer Science Degree",
                  company: "The British Collage",
                  description: "Graduated with honors in Computer Science.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div
                      className={`inline-block p-6 rounded-2xl shadow-lg ${
                        index % 2 === 0
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30"
                          : "bg-gradient-to-l from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30"
                      }`}
                    >
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-24 flex-shrink-0 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "pl-8" : "pr-8 text-right"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
