"use client";

import useScreenDetector from "@/hooks/useScreenDetector";
import * as motion from "motion/react-client";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className }: Props) => {
  const { isMobile } = useScreenDetector();

  return (
    <motion.section
      className={`flex flex-col gap-10 lg:flex-row ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: -100 }}
      transition={{ duration: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: isMobile ? 0.2 : 0.4 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionContainer;
