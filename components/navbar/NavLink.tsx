export interface NavLinkData {
  title: string;
  href: string;
}

interface Props {
  data: NavLinkData;
  onClick?: () => void;
}

const NavLink = ({ data, onClick }: Props) => {
  return (
    <a
      className="font-light text-lg transition-all duration-200 hover:text-pink-700"
      href={data.href}
      onClick={onClick}
    >
      {data.title}
    </a>
  );
};

export default NavLink;
