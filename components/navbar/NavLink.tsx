export interface NavLinkData {
  title: string;
  href: string;
}

const NavLink = ({ data }: { data: NavLinkData }) => {
  return (
    <a className="font-light text-lg" href={data.href}>
      {data.title}
    </a>
  );
};

export default NavLink;
