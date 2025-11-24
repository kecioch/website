import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectCard, { ProjectCardData } from "../projects/ProjectCard";

const ProjectsSection = () => {
  const PROJECTS: ProjectCardData[] = [
    {
      title: "Enigma",
      coverSrc: "/projects/enigma/screenshot-enigma.png",
      href: "https://github.com/kecioch/enigma",
      tags: ["frontend", "js", "react", "enigma", "encryption", "decryption"],
    },
    {
      title: "Weather Dashboard",
      coverSrc: "/projects/weather-dashboard/weather-dashboard.png",
      href: "https://github.com/kecioch/weather-dashboard",
      tags: [
        "frontend",
        "js",
        "react",
        "dashboard",
        "weather-api",
        "recharts",
        "minimalistic",
      ],
    },
    {
      title: "Teetasse",
      coverSrc: "/projects/teetasse/screenshot-home.png",
      href: "https://github.com/kecioch/teetasse",
      tags: [
        "fullstack",
        "ts",
        "next.js",
        "e-commerce",
        "postgres",
        "stripe",
        "cloudinary",
        "auth",
        "seo",
      ],
    },
    {
      title: "Showtime",
      coverSrc: "/projects/showtime/home.png",
      href: "https://github.com/kecioch/showtime",
      tags: [
        "fullstack",
        "js",
        "react",
        "ticket-booking",
        "express",
        "jwt",
        "mongodb",
        "auth",
        "stripe",
      ],
    },
    {
      title: "Sorting Visualizer",
      coverSrc: "/projects/sorting-visualizer/sv-cover.png",
      href: "https://github.com/kecioch/sorting-visualizer",
      tags: [
        "frontend",
        "js",
        "react",
        "sorting",
        "bootstrap",
        "selection",
        "quick",
        "bubble",
        "merge",
        "configurable",
      ],
    },
    {
      title: "Pathfinding Visualizer",
      coverSrc: "/projects/pathfinding-visualizer/PV-Screenshot-1.png",
      href: "https://github.com/kecioch/pathfinding-visualizer",
      tags: [
        "c#",
        "winforms",
        "pathfinding",
        "astar",
        "dijkstra",
        "configurable",
        "analyze",
      ],
    },
  ];

  return (
    <SectionContainer className="mt-[5em] lg:mt-[15em]">
      <div className="flex justify-start items-start lg:w-[20%] lg:justify-center">
        <SectionHeader id="projects">Projects</SectionHeader>
      </div>
      <div className="flex-1">
        <div className="flex gap-7 md:gap-5 flex-wrap justify-center">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              data={project}
              animationDirection={i % 2 == 0 ? "left" : "right"}
            />
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <a
            href="https://www.github.com/kecioch"
            target="_blank"
            className="w-full md:w-auto"
          >
            <button className="w-full border p-4 rounded-xl uppercase transition-all duration-200 hover:scale-105 md:px-7">
              <span className="flex justify-center items-center gap-2 text-balance">
                See all repositories on Github
                <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
