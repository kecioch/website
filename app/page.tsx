import Footer from "@/components/footer/Footer";
import SocialLinkList from "@/components/header/SocialLinkList";
import Navbar from "@/components/navbar/Navbar";
import SectionContainer from "@/components/sections/SectionContainer";
import SectionHeader from "@/components/sections/SectionHeader";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <main className="w-full max-w-5xl px-5 lg:px-10 mb-[15em]">
        <header className="mt-[5em] lg:mt-[8em]">
          <h2 className="uppercase text-2xl text-pink-700">Fullstack</h2>
          <h1 className="uppercase text-4xl mb-4">Software-Engineer</h1>
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
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quisquam fugit recusandae molestias. Maiores cupiditate deleniti,
              provident totam incidunt minima veritatis, explicabo qui aliquam
              quod pariatur, eaque quisquam ducimus? Fugiat! Quidem, maxime quae
              cum porro, velit iure libero mollitia qui nisi, quo minima
              explicabo et quibusdam perspiciatis ullam obcaecati aut adipisci.
              Accusamus eius maxime totam possimus veniam rerum minima maiores.
            </p>
          </div>
        </SectionContainer>
        <SectionContainer className="mt-[5em] lg:mt-[15em]">
          <div className="flex justify-start items-center lg:w-[20%] lg:justify-center">
            <SectionHeader id="projects">Projects</SectionHeader>
          </div>
          <div className="flex-1">
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="w-full md:w-[45%] h-[15em] bg-purple-800"></div>
              <div className="w-full md:w-[45%] h-[15em] bg-purple-800"></div>
              <div className="w-full md:w-[45%] h-[15em] bg-purple-800"></div>
              <div className="w-full md:w-[45%] h-[15em] bg-purple-800"></div>
            </div>
            <div className="mt-7 flex justify-center">
              <a
                href="https://www.github.com/kecioch"
                target="_blank"
                className="w-full md:w-auto"
              >
                <button className="w-full border p-4 rounded-xl uppercase transition-all duration-200 hover:scale-105 md:px-7">
                  <span className="flex justify-center gap-2">
                    See all repositories on Github
                    <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer className="mt-[5em] lg:mt-[15em]">
          <SectionHeader id="skills">Skills</SectionHeader>
        </SectionContainer>
        <SectionContainer className="mt-[5em] lg:mt-[15em]">
          <SectionHeader id="experience">Experience</SectionHeader>
        </SectionContainer>
        <SectionContainer className="mt-[5em] lg:mt-[15em]">
          <SectionHeader id="contact">Contact</SectionHeader>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
