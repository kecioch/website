import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  href: string;
  icon: IconProp;
  children: React.ReactNode;
  className?: string;
}

const ContactLink = ({ href, icon, children, className }: Props) => {
  return (
    <a
      href={href}
      className={`transition-all hover:text-pink-600 ${className}`}
      target="_blank"
    >
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon className="w-9 h-9" icon={icon} />
        <p>{children}</p>
      </div>
    </a>
  );
};

export default ContactLink;
