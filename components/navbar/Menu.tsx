import React, { useEffect, useState } from "react";
import NavLink, { NavLinkData } from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface Props {
  links: NavLinkData[];
  onClose: () => void;
}

const Menu = ({ links, onClose }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-40 backdrop-blur-sm w-full h-screen">
      <div
        className="bg-black bg-opacity-80 w-full h-screen fixed z-40"
        onClick={onClose}
      />
      <div
        className={`bg-slate-50 w-full px-5 pt-10 pb-5 fixed z-50 transition-all ${
          !show && "-translate-y-40 opacity-0"
        }`}
      >
        <button
          className="top-5 right-5 absolute"
          title="Close menu"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faX} className="w-6 h-6 text-black" />
        </button>
        <ul className="font-light text-black flex flex-col gap-3">
          {links.map((link, index) => (
            <li key={index} className="text-center">
              <NavLink data={link} onClick={onClose} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
