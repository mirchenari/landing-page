"use client";

import { motion } from "framer-motion";

export default function AnimateSection({ dir, className, id, children }) {
  return (
    <motion.section
      className={className + " animate-section"}
      id={id}
      initial={dir == "left" ? { opacity: 0, x: -200 } : { opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
}
