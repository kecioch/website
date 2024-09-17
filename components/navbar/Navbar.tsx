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
    <nav className="w-full flex justify-between mt-10 py-5 uppercase">
      <p className="font-bold text-xl">Kevin Cioch</p>
      <ul className="flex gap-8 font-light">
        {LINKS.map((link, index) => (
          <li key={index}>
            <NavLink data={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
