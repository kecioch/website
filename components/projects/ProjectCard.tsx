import React from "react";
import ProjectTag from "./ProjectTag";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <Link href="/projects/teetasse" className="w-full md:w-[45%] min-h-[15em]">
      <div className="border border-indigo-800 backdrop-blur-md rounded-xl overflow-hidden shadow-md transition-all hover:scale-105 test">
        <div className="bg-slate-100 w-full h-[10em] relative">
          <Image
            // src="/projects/teetasse/screenshot-home.PNG"
            src="/projects/weather-dashboard/weather-dashboard.PNG"
            alt="cover"
            fill
            objectFit="cover"
          />
        </div>
        <p className="uppercase text-xl px-2 pt-2">Teetasse</p>
        <div className="flex gap-2 p-2 flex-wrap">
          <ProjectTag>React</ProjectTag>
          <ProjectTag>Next.js</ProjectTag>
          <ProjectTag>Full-Stack</ProjectTag>
          <ProjectTag>Webdev</ProjectTag>
          <ProjectTag>MongoDB</ProjectTag>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
