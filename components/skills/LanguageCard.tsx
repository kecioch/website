import React from "react";
import SkillBadge from "./SkillBadge";
import ProgressBar from "../ui/ProgressBar";

export interface LanguageCardData {
  title: string;
  iconPath: string;
  progressValue: number;
}

const LanguageCard = ({ title, iconPath, progressValue }: LanguageCardData) => {
  return (
    <div className="flex justify-center items-center gap-8 w-fit">
        <SkillBadge title={title} iconPath={iconPath} className="w-20" />
        <ProgressBar value={progressValue} className="mb-5" />
    </div>
  );
};

export default LanguageCard;
