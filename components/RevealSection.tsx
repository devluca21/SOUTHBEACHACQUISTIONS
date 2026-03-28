"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: keyof typeof motion;
}

export function RevealSection({
  children,
  className = "",
  id,
  delay = 0,
  as = "section",
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Component = motion[as] as typeof motion.section;

  const scrollMargin = id ? "scroll-mt-[220px] md:scroll-mt-[268px] " : "";

  return (
    <Component
      ref={ref}
      id={id}
      className={`${scrollMargin}${className}`.trim()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={defaultVariants}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}

export function RevealChild({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
