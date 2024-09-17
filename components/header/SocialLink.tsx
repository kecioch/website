import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  href: string;
  title?: string;
}

const SocialLink = ({ icon, href, title }: Props) => {
  return (
    <li className="w-8 hover:scale-125 hover:text-violet-400 transition-all duration-200">
      <a href={href} target="_blank" title={title}>
        <FontAwesomeIcon size="lg" icon={icon} />
      </a>
    </li>
  );
};

export default SocialLink;
