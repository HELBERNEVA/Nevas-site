"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Reveal({
  children,
}: PropsWithChildren<{
  delayMs?: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

