import Footer from "@/components/footer/Footer";
import SocialLinkList from "@/components/header/SocialLinkList";
import Navbar from "@/components/navbar/Navbar";
import SectionHeader from "@/components/ui/SectionHeader";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <main className="w-full max-w-5xl px-5 lg:px-10 mb-[15em]">
        <header className="mt-[8em]">
          <h2 className="uppercase text-2xl">Fullstack</h2>
          <h1 className="uppercase text-4xl mb-4">Software-Engineer</h1>
          <SocialLinkList />
          <div className="mt-10">
            <a href="#contact">
              <button className="border p-3 rounded-xl uppercase transition-all duration-200 hover:scale-110">Contact me</button>
            </a>
          </div>
        </header>
        <div className="mt-[15em]">
          <SectionHeader id="about">About</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader id="projects">Projects</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader id="skills">Skills</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader id="experience">Experience</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader id="contact">Contact</SectionHeader>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
