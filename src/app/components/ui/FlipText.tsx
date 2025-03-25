'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Ultimate", "Best", "Cute"];

export const FlipText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block w-[140px] h-[45px] md:w-[160px] md:h-[55px] mx-3">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ rotateX: 90, opacity: 0, y: 20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 whitespace-nowrap text-[#00BFFF] font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}; 