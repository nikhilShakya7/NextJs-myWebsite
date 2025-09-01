"use client";
import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { motion, AnimatePresence } from "framer-motion";

export default function SecretExplosion() {
  const [explode, setExplode] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 
  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400"
        >
          ✨ Congrats You Entered the Secret Page ✨
        </h1>

        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Click the button below to create a magical celebration explosion!
        </p>

        <motion.button
          onClick={() => {
            setExplode(true);
            setTimeout(() => setExplode(false), 2500);
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">Launch Celebration!</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Confetti Explosion (centered) */}
      <AnimatePresence>
        {explode && (
          <motion.div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ConfettiExplosion
              force={0.8}
              duration={2200}
              particleCount={300}
              width={2500}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
