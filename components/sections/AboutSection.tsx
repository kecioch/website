import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";

interface Props {
  className?: string;
}

const AboutSection = ({ className }: Props) => {
  return (
    <SectionContainer className={className}>
      <div className="flex justify-start items-center lg:w-[20%] lg:justify-center">
        <SectionHeader id="about">About</SectionHeader>
      </div>
      <div className="flex-1">
        <p className="text-justify text-2xl font-thin px-10">
          Welcome!
          <br />
          I&apos;m Kevin Cioch, a software engineer based in Lüdenscheid,
          Germany. I specialize in full-stack web technologies with a strong
          passion for frontend development. I love exploring new tech trends and
          working on hobby projects in my spare time. Dive in to see how I bring
          ideas to life through code!
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
