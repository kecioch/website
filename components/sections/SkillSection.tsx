import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import SkillBadge, { SkillBadgeData } from "../skills/SkillBadge";

interface Props {
  className?: string;
}

const SkillSection = ({ className }: Props) => {
  const SKILLS: SkillBadgeData[] = [
    { title: "Typescript", iconPath: "/icons/typescript.png" },
    { title: "Javascript", iconPath: "/icons/javascript.png" },
    { title: "Java", iconPath: "/icons/java.png" },
    { title: "C", iconPath: "/icons/c.png" },
    { title: "C++", iconPath: "/icons/c++.png" },
    { title: "C#", iconPath: "/icons/csharp.png" },
    { title: "HTML", iconPath: "/icons/html.png" },
    { title: "CSS", iconPath: "/icons/css.png" },
    { title: "React", iconPath: "/icons/react.png" },
    { title: "Next.js", iconPath: "/icons/next.png" },
    { title: "Express", iconPath: "/icons/express.png" },
    { title: "Tailwind", iconPath: "/icons/tailwind.png" },
    { title: "Bootstrap", iconPath: "/icons/bootstrap.png" },
    { title: "MySQL", iconPath: "/icons/mysql.png" },
    { title: "MongoDB", iconPath: "/icons/mongodb.png" },
    { title: "Git", iconPath: "/icons/git.png" },
  ];

  return (
    <SectionContainer className={className}>
      <div className="flex justify-start items-center lg:w-[20%] lg:justify-center">
        <SectionHeader id="skills">Skills</SectionHeader>
      </div>
      <div className="flex gap-y-5 gap-x-10 md:gap-y-10 flex-wrap justify-center">
        {SKILLS.map((skill, i) => (
          <SkillBadge key={i} title={skill.title} iconPath={skill.iconPath} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillSection;
