import React from 'react';

export type ExperienceItem = {
  _id: number;
  jobTitle: string;
  companyImage: string;
  company: string;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jd: string[];
  svgs: React.ReactNode[];
};

type Props = {
  experience: ExperienceItem;
};

function ExperienceCard({ experience }: Props) {
  const dates = `${experience.dateStarted} – ${
    experience.isCurrentlyWorkingHere ? 'Present' : experience.dateEnded
  }`;

  return (
    <article className="w-full rounded-2xl bg-[#292929] px-4 py-4 shadow-lg shadow-black/20 md:px-10 md:py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-xl bg-[#1c1c1c] px-2 md:h-16 md:w-28">
            <img
              src={experience.companyImage}
              alt={`${experience.company} logo`}
              className="max-h-8 w-auto max-w-[4.5rem] object-contain md:max-h-12 md:max-w-[6.5rem]"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-tight md:text-2xl">
              {experience.jobTitle}
            </h4>
            <p className="text-base font-medium text-gray-200 md:mt-1 md:text-lg">
              {experience.company}
            </p>
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.14em] text-gray-400 md:text-sm">
          {dates}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 [&_img]:h-8 [&_img]:w-8 [&_svg]:h-8 [&_svg]:w-8 md:gap-3 md:[&_img]:h-9 md:[&_img]:w-9 md:[&_svg]:h-9 md:[&_svg]:w-9">
        {experience.svgs.map((icon, index) => (
          <span key={index} className="flex h-8 w-8 items-center justify-center md:h-9 md:w-9">
            {icon}
          </span>
        ))}
      </div>

      <ul className="mt-4 grid list-disc grid-cols-1 gap-x-10 gap-y-2 pl-4 text-[13px] leading-5 text-gray-300 md:mt-6 md:gap-y-2.5 md:pl-5 md:text-sm md:leading-6 md:grid-cols-2">
        {experience.jd.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
