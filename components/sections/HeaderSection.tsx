import React from "react";
import SocialLinkList from "../header/SocialLinkList";

interface Props {
  className?: string;
}

const HeaderSection = ({ className }: Props) => {
  return (
    <header className={className}>
      <h2 className="uppercase text-2xl lg:text-3xl mb-2 text-pink-700">Fullstack</h2>
      <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl mb-4">Software Developer</h1>
      <SocialLinkList />
      <div className="mt-10">
        <a href="#contact">
          <button className="border p-3 rounded-xl uppercase transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:text-pink-600 hover:border-pink-600">
            Contact me
          </button>
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
