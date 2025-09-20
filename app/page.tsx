import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeaderSection from "@/components/sections/HeaderSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillSection from "@/components/sections/SkillSection";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center" id="home">
      <Navbar />
      <main className="w-full max-w-5xl px-5 lg:px-10 md:mb-[5em]">
        <HeaderSection className="mt-[5em] lg:mt-[8em]" />
        <AboutSection className="mt-[7em] lg:mt-[15em]" />
        <ProjectsSection />
        <SkillSection className="mt-[5em] lg:mt-[15em]" />
        <ExperienceSection className="mt-[5em] lg:mt-[15em]" />
        <ContactSection className="mt-[5em] mb-12 lg:mt-[15em]" />
        <div className="w-full flex justify-end">
          <button title="back to top">
            <a href="#home">
              <FontAwesomeIcon icon={faArrowTurnUp} className="text-3xl" />
            </a>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
