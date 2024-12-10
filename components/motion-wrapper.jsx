"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function MotionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            y: 20,
            position: "absolute",
            width: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
            position: "relative",
          }}
          exit={{
            opacity: 0,
            y: -20,
            position: "absolute",
          }}
          transition={{
            duration: 0.4,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
