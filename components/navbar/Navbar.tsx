"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink, { NavLinkData } from "./NavLink";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Menu from "./Menu";

const LINKS: NavLinkData[] = [
  { title: "About", hrefID: "about" },
  { title: "Projects", hrefID: "projects" },
  { title: "Skills", hrefID: "skills" },
  { title: "Experience", hrefID: "experience" },
  { title: "Contact", hrefID: "contact" },
];

const SCROLLOFFSET_DESKTOP = 100;
const NAVBAR_ID = "nav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const enableScrolling = (val: boolean) =>
    (document.body.style.overflow = val ? "auto" : "hidden");

  const handleOpenMenu = () => {
    setShowMenu(true);
    enableScrolling(false);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
    enableScrolling(true);
  };

  return (
    <>
      <nav
        id={NAVBAR_ID}
        className="w-full z-20 flex justify-center pt-7 lg:pt-16 pb-5 uppercase sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-b border-purple-950 border-opacity-50 lg:border-none"
      >
        <div className="w-full max-w-5xl px-5 lg:px-10 flex justify-between">
          <p className="font-bold text-xl">Kevin Cioch</p>
          <ul className="gap-8 font-light hidden lg:flex">
            {LINKS.map((link, index) => (
              <li key={index}>
                <NavLink
                  data={link}
                  navBarID={NAVBAR_ID}
                  scrollOffset={SCROLLOFFSET_DESKTOP}
                />
              </li>
            ))}
          </ul>
          <button className="block lg:hidden" onClick={handleOpenMenu}>
            <FontAwesomeIcon
              icon={faHamburger}
              className="text-red-50 h-7 w-7"
            />
          </button>
        </div>
      </nav>
      {showMenu && <Menu links={LINKS} navBarID={NAVBAR_ID} onClose={handleCloseMenu} />}
    </>
  );
};

export default Navbar;
