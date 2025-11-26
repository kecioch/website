import React from "react";

export interface EducationItemData {
  dateFrom: string;
  dateTo: string;
  location: string;
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const EducationItem = ({
  dateFrom,
  dateTo,
  location,
  title,
  subTitle,
  children,
}: EducationItemData) => {
  return (
    <div className="flex gap-5">
      <div className="min-w-24">
        <p className="text-slate-300">
          {dateFrom} - {dateTo}
        </p>
      </div>
      <div className="max-w-96">
        <p className="text-base pb-1 text-slate-400">{location}</p>
        <p className="text-2xl">{title}</p>
        {subTitle && <p className="text-xl">{subTitle}</p>}
        <div className="text-slate-400 text-justify pt-1">{children}</div>
      </div>
    </div>
  );
};

export default EducationItem;
