import Footer from "@/components/footer/Footer";
import SocialLinkList from "@/components/header/SocialLinkList";
import Navbar from "@/components/navbar/Navbar";
import SectionHeader from "@/components/ui/SectionHeader";

const Home = () => {
  return (
    <div className="w-full max-w-5xl px-10">
      <Navbar />
      <main className="mb-[15em]">
        <header className="mt-[8em]">
          <h2 className="uppercase text-2xl">Fullstack</h2>
          <h1 className="uppercase text-4xl mb-8">Software-Engineer</h1>
          <SocialLinkList />
        </header>
        <div className="mt-[15em]">
          <SectionHeader>About</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader>Projects</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader>Skills</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader>Experience</SectionHeader>
        </div>
        <div className="mt-[15em]">
          <SectionHeader>Contact</SectionHeader>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
