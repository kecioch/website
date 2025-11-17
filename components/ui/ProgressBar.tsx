import React from "react";

interface Props {
  value: number;
  className?: string;
}

const ProgressBar = ({ value, className }: Props) => {
  return (
    <div
      className={`bg-blue-950 rounded-lg min-w-40 min-h-3 overflow-hidden ${className}`}
    >
      <div className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-3`} style={{ width: `${value}%` }} />
      {/* <div className={`bg-pink-700 min-h-3`} style={{ width: `${value}%` }} /> */}
    </div>
  );
};

export default ProgressBar;
