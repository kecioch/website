import React from "react";

interface Props {
  children: React.ReactNode;
}

const ProjectTag = ({ children }: Props) => {
  return <div className="border-indigo-400 border p-1 rounded-lg text-indigo-400 text-sm">{children}</div>;
};

export default ProjectTag;
