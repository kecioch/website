import React from "react";
import ProjectTag from "./ProjectTag";
import Image from "next/image";

export interface ProjectCardData {
  title: string;
  href: string;
  coverSrc: string;
  tags: string[];
}

const ProjectCard = ({ data }: { data: ProjectCardData }) => {
  return (
    <a href={data.href} target="_blank" className="w-full sm:w-[45%] min-h-[17em] flex">
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
    </a>
  );
};

export default ProjectCard;
