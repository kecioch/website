import Footer from "@/components/footer/Footer";
import SocialLinkList from "@/components/header/SocialLinkList";
import Navbar from "@/components/navbar/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SectionContainer from "@/components/sections/SectionContainer";
import SectionHeader from "@/components/sections/SectionHeader";
import SkillSection from "@/components/sections/SkillSection";
import { faArrowAltCircleUp, faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center" id="home">
      <Navbar />
      <main className="w-full max-w-5xl px-5 lg:px-10 md:mb-[5em]">
        <header className="mt-[5em] lg:mt-[8em]">
          <h2 className="uppercase text-2xl text-pink-700">Fullstack</h2>
          <h1 className="uppercase text-4xl mb-4">Software Engineer</h1>
          <SocialLinkList />
          <div className="mt-10">
            <a href="#contact">
              <button className="border p-3 rounded-xl uppercase transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:text-pink-600 hover:border-pink-600">
                Contact me
              </button>
            </a>
          </div>
        </header>
        <SectionContainer className="mt-[7em] lg:mt-[15em]">
          <div className="flex justify-start items-center lg:w-[20%] lg:justify-center">
            <SectionHeader id="about">About</SectionHeader>
          </div>
          <div className="flex-1">
            <p className="text-justify text-2xl font-thin">
              Welcome!
              <br />
              I&apos;m Kevin Cioch, a software engineer based in Lüdenscheid,
              Germany. I specialize in full-stack web technologies with a strong
              passion for frontend development. I love exploring new tech trends
              and working on hobby projects in my spare time. Dive in to see how
              I bring ideas to life through code!
            </p>
          </div>
        </SectionContainer>
        <ProjectsSection />
        <SkillSection className="mt-[5em] lg:mt-[15em]" />
        <ExperienceSection className="mt-[5em] lg:mt-[15em]" />
        <ContactSection className="mt-[5em] mb-12 lg:mt-[15em]" />
        <button>
          <a href="#home">
            <FontAwesomeIcon icon={faArrowTurnUp} />
          </a>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
