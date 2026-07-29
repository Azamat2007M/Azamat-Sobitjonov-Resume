"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RoleFlipperProps {
  roles: string[];
}

export default function RoleFlipper({ roles }: RoleFlipperProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="inline-inline-flex relative overflow-hidden h-[1.15em] align-bottom mx-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent font-extrabold pb-1"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}