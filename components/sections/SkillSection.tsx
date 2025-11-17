import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import SkillBadge, { SkillBadgeData } from "../skills/SkillBadge";
import LanguageCard, { LanguageCardData } from "../skills/LanguageCard";

interface Props {
  className?: string;
}

const SkillSection = ({ className }: Props) => {
  const LANGUAGES: LanguageCardData[] = [
    {
      title: "Typescript",
      iconPath: "/icons/typescript.png",
      progressValue: 100,
    },
    {
      title: "Javascript",
      iconPath: "/icons/javascript.png",
      progressValue: 100,
    },
    { title: "C#", iconPath: "/icons/csharp.png", progressValue: 60 },
    { title: "Java", iconPath: "/icons/java.png", progressValue: 50 },
    { title: "C", iconPath: "/icons/c.png", progressValue: 30 },
  ];

  const SKILLS: SkillBadgeData[] = [
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
      <div className="flex justify-start items-start lg:w-[20%] lg:justify-center">
        <SectionHeader id="skills">Skills</SectionHeader>
      </div>
      <div className="flex justify-center flex-row flex-wrap gap-10 w-fit">
        {LANGUAGES.map((lang, i) => (
          <LanguageCard
            key={i}
            title={lang.title}
            iconPath={lang.iconPath}
            progressValue={lang.progressValue}
          />
        ))}
      </div>
      <div className="h-[0.1em] w-full bg-gradient-to-r from-[#17255400] via-pink-500 to-[#17255400] lg:hidden"></div>
      <div className="flex gap-y-5 gap-x-10 md:gap-y-10 flex-wrap justify-center px-5 lg:px-0">
        {SKILLS.map((skill, i) => (
          <SkillBadge key={i} title={skill.title} iconPath={skill.iconPath} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillSection;
