import NavLink, { NavLinkData } from "./NavLink";

const Navbar = () => {
  const LINKS: NavLinkData[] = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full flex justify-center pt-7 lg:pt-16 pb-5 uppercase sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-b border-purple-950 border-opacity-50 lg:border-none">
      <div className="w-full max-w-5xl px-5 lg:px-10 flex justify-between">
        <p className="font-bold text-xl">Kevin Cioch</p>
        <ul className="gap-8 font-light hidden lg:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <NavLink data={link} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
