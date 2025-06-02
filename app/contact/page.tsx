"use client";

import { useState } from "react";
import { Send, Sparkles, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("./api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 shadow-2xl shadow-purple-500/25">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 tracking-tight">
              Let's Connect
            </h1>

            <p className="text-xl text-slate-300 max-w-md mx-auto leading-relaxed">
              Drop me a message and let's create something amazing together.
            </p>

            <div className="flex items-center justify-center mt-4 space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-sm text-purple-300">
                Usually respond within 24 hours
              </span>
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
          </div>

          {/* Form card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name field */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-200 mb-3 transition-colors duration-300 group-focus-within:text-purple-400"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Name"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-pink-500/10 group-focus-within:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-200 mb-3 transition-colors duration-300 group-focus-within:text-purple-400"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Email"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-pink-500/10 group-focus-within:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-200 mb-3 transition-colors duration-300 group-focus-within:text-purple-400"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-pink-500/10 group-focus-within:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 group-hover:scale-110"></div>

                    <div className="relative flex items-center justify-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Message sent successfully!
                        </p>
                        <p className="text-sm text-emerald-400">
                          I'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 text-red-300 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Something went wrong</p>
                        <p className="text-sm text-red-400">
                          Please try again later or contact me directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Other Ways to Connect
            </h3>

            <div className="flex justify-center space-x-8">
              {[
                {
                  name: "Email",
                  href: "mailto:shakyanikhil2003@gmail.com",
                  icon: "📧",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/nikhil-shakya-00250b290/",
                  icon: "💼",
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/s._.nikk/",
                  icon: "➕",
                },
              ].map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="group flex flex-col items-center space-y-3 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-purple-300 font-medium transition-colors duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
