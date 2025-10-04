export interface NavLinkData {
  title: string;
  hrefID: string;
}

interface Props {
  data: NavLinkData;
  navBarID: string;
  scrollOffset?: number;
  onClick?: () => void;
}

const NavLink = ({ data, navBarID, scrollOffset=0, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(); // calls callback method of parent to close menu modal in case of mobile view

    const element = document.getElementById(data.hrefID);
    const navBar = document.getElementById(navBarID);
    if (!element || !navBar) return;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition =
      elementPosition - navBar.offsetHeight - scrollOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <a
      className="font-light text-lg transition-all duration-200 hover:text-pink-700"
      href={"#" + data.hrefID}
      onClick={handleClick}
    >
      {data.title}
    </a>
  );
};

export default NavLink;
