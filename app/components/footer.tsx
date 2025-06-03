"use client";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  GithubIcon,
  Instagram,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

import { motion } from "../../lib/framer-exports";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/nikhilShakya7",
      icon: GithubIcon,
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-shakya-00250b290/",
      icon: LinkedinIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/s._.nikk/",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  shakyanikhil2003@gmail.com
                </span>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  +977 9840836559
                </span>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 md:mt-0">
            Built with Next.js, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
