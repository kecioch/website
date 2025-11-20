import React from "react";
import * as motion from "motion/react-client";

interface Props {
  value: number;
  className?: string;
}

const ProgressBar = ({ value, className }: Props) => {
  return (
    <div
      className={`bg-blue-950 rounded-lg min-w-40 min-h-3 overflow-hidden ${className}`}
    >
      <motion.div
        className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-3`}
        // style={{ width: `${value}%` }}
        initial={{ width: "0%" }}
        transition={{ duration: 1.8 }}
        whileInView={{
          width: `${value}%`,
        }}
        viewport={{ once: true }}
      />
      {/* <div className={`bg-pink-700 min-h-3`} style={{ width: `${value}%` }} /> */}
    </div>
  );
};

export default ProgressBar;
