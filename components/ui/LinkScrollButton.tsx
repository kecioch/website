"use client";

import {
  NAVBAR_ID,
  SCROLLOFFSET_DESKTOP,
  SCROLLOFFSET_MOBILE,
} from "@/constants/layout";
import useScreenDetector from "@/hooks/useScreenDetector";
import { useScrollToTarget } from "@/hooks/useScrollToTarget";
import React from "react";

interface Props {
  targetID: string;
  children: React.ReactNode;
  className?: string;
}

const LinkScrollButton = ({ targetID, children, className }: Props) => {
  const { isMobile } = useScreenDetector();

  const scrollTo = useScrollToTarget({
    navbarId: NAVBAR_ID,
    offset: isMobile ? SCROLLOFFSET_MOBILE : SCROLLOFFSET_DESKTOP,
  });

  return (
    <button className={className} onClick={() => scrollTo(targetID)}>
      {children}
    </button>
  );
};

export default LinkScrollButton;
