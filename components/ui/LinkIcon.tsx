import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  faIconName: string;
  children?: React.ReactNode;
  className?: string;
}

const LinkIcon = ({ href, children, className, faIconName }: Props) => {
  return (
    <Link
      className={`transition-all hover:text-cyan-700 ${className}`}
      href={href}
    >
      {children} <i className={faIconName} />
    </Link>
  );
};

export default LinkIcon;
