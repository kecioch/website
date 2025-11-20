import React from "react";
import ProjectTag from "./ProjectTag";
import Image from "next/image";
import * as motion from "motion/react-client";

export interface ProjectCardData {
  title: string;
  href: string;
  coverSrc: string;
  tags: string[];
}

interface Props {
  data: ProjectCardData;
  animationDirection?: "left" | "right" | "top" | "bottom";
}

const ProjectCard = ({ data, animationDirection = "top" }: Props) => {
  let yAnimOffset = 0;
  if (animationDirection == "top") yAnimOffset = -100;
  if (animationDirection == "bottom") yAnimOffset = 100;

  let xAnimOffset = 0;
  if (animationDirection == "left") xAnimOffset = -100;
  if (animationDirection == "right") xAnimOffset = 100;

  return (
    <motion.a
      href={data.href}
      target="_blank"
      className="w-full sm:w-[45%] min-h-[17em] flex"
      initial={{
        opacity: 0,
        scale: 0.9,
        y: yAnimOffset,
        x: xAnimOffset,
      }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="border flex flex-col flex-1 border-indigo-800 backdrop-blur-md rounded-xl overflow-hidden shadow-md transition-all hover:scale-105">
        <div className="bg-slate-100 w-full h-[10em] relative">
          <Image
            src={data.coverSrc}
            alt="cover"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // objectFit="cover"
          />
        </div>
        <div className="flex-1">
          <p className="uppercase text-lg px-2 pt-3">{data.title}</p>
          <div className="flex gap-2 p-2 flex-wrap">
            {data.tags &&
              data.tags.map((tag, i) => <ProjectTag key={i}>{tag}</ProjectTag>)}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
