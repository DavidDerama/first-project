"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = ["Get More Done Tomorrow", "Turn late night ideas into reality"];

const HeaderText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0;
        return state + 1;
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full items-start justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute cursor-pointer text-accent_custom"
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderText;
