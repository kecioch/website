export interface NavLinkData {
  title: string;
  href: string;
}

const NavLink = ({ data }: { data: NavLinkData }) => {
  return (
    <a className="font-light text-lg transition-all duration-200 hover:text-pink-700" href={data.href}>
      {data.title}
    </a>
  );
};

export default NavLink;
