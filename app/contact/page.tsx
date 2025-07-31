"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { Send, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "../../utils/motion";
import { contactSchema } from "../../lib/validation/contactSchema";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    emailjs
      .send("service_6yofzip", "template_fk5h9f7", data, "2Ae5oRFqdT9lxGXz9")
      .then(
        () => {
          setSubmitStatus("success");
          reset();
        },
        () => {
          setSubmitStatus("error");
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={slideIn("up", "tween", 0.2, 1)}
            className="relative"
          >
            <motion.h1
              className="text-4xl  text-center py-2 md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-600 to-pink-500  bg-clip-text text-transparent mb-4"
              initial="hidden"
              animate="visible"
            >
              Drop A Message
            </motion.h1>
            <motion.div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 sm:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-200 mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-400 mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-200 mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400 mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-200 mb-3"
                  >
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    id="subject"
                    type="text"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-400 mt-2">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-200 mb-3"
                  >
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 resize-none"
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-400 mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold disabled:opacity-60 hover:cursor-pointer hover:tracking-wide"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
