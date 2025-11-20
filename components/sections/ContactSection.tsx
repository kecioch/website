import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactLink from "../contact/ContactLink";
import ContactForm from "../contact/ContactForm";

interface Props {
  className?: string;
}

const ContactSection = ({ className }: Props) => {
  return (
    <SectionContainer className={className}>
      <SectionHeader id="contact">Contact</SectionHeader>
      <div className="flex gap-5 flex-col sm:px-10 md:flex-row">
        <ContactForm />
        <div className="flex justify-center p-3 mt-10 md:mt-0">
          <div className="flex flex-col gap-8">
            <ContactLink href="mailto:contact@kevincioch.com" icon={faEnvelope}>
              contact@kevincioch.com
            </ContactLink>
            <ContactLink
              href="https://linkedin.com/in/kecioch"
              icon={faLinkedin}
            >
            /in/kecioch
            </ContactLink>
            <ContactLink href="https://github.com/kecioch" icon={faGithub}>
              /kecioch
            </ContactLink>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
