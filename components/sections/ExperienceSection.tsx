import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import ExperienceItem, {
  ExperienceItemData,
} from "../experience/ExperienceItem";
import ItemConnector from "../experience/ItemConnector";
import LinkIcon from "../ui/LinkIcon";

interface Props {
  className?: string;
}

const ExperienceSection = ({ className }: Props) => {
  const EXPERIENCE: ExperienceItemData[] = [
    {
      dateFrom: "2024",
      dateTo: "present",
      title: "Master",
      subTitle: "Applied Computer Science",
      location: "Fachhochschule Südwestfalen",
      children: (
        <p>
          Pursuing a Master&apos;s degree in Applied Computer Science through a
          part-time program, alongside professional work and personal
          development projects.
        </p>
      ),
    },
    {
      dateFrom: "2020",
      dateTo: "2024",
      title: "Bachelor",
      subTitle: "Computer Science",
      location: "Fachhochschule Südwestfalen",
      children: (
        <p>
          <LinkIcon
            href="https://github.com/kecioch/teetasse"
            target="_blank"
            faIconName="fa-solid fa-arrow-up-right-from-square"
          >
            Thesis
          </LinkIcon>{" "}
          focused on developing an e-commerce platform using Next.js, with an
          emphasis on optimizing and analyzing SEO factors and web rendering
          technologies.
        </p>
      ),
    },
    {
      dateFrom: "2017",
      dateTo: "2020",
      title: "Abitur",
      location: "Berufskolleg für Technik Lüdenscheid",
      children: (
        <p>
          High school education with a focus on computer science and electrical
          engineering, covering topics such as programming, circuit design, and
          technical problem-solving.
        </p>
      ),
    },
  ];

  return (
    <SectionContainer className={className}>
      <SectionHeader id="experience">Experience</SectionHeader>
      <div className="w-full flex justify-center">
        <div className="flex flex-col">
          {EXPERIENCE.map((item, i) => (
            <div key={i}>
              <ExperienceItem
                key={i}
                dateFrom={item.dateFrom}
                dateTo={item.dateTo}
                title={item.title}
                subTitle={item.subTitle}
                location={item.location}
              >
                {item.children}
              </ExperienceItem>
              {i < EXPERIENCE.length - 1 && <ItemConnector />}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
