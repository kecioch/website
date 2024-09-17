import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialLink from "./SocialLink";

const SocialLinkList = () => {
  return (
    <ul className="flex gap-5">
      <SocialLink
        icon={faGithub}
        href="https://www.github.com/kecioch"
        title="Github"
      />
      <SocialLink
        icon={faLinkedin}
        href="https://www.linkedin.com/in/kecioch"
        title="LinkedIn"
      />
    </ul>
  );
};

export default SocialLinkList;
