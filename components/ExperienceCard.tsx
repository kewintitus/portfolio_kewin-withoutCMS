import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col items-center
     bg-[#292929]  rounded-lg space-y-7 
     flex-shrink-0 w-[300px] md:w-[400px]
      xl:w-[400px] xl:mx-5 p-1 md:p-5  md:opacity-40 cursor-pointer 
      md:hover:opacity-100 md:transition-opacity md:duration-500"
    >
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-transparent  w-[50px] h-[50px] relative overflow-hidden "
      >
        <img
          src={`${experience.companyImage}`}
          className="object-contain w-[100px]  mt-20 align-bottom"
          alt="logo"
        />
      </motion.div>
      <div className="px-6">
        <span className="w-16">
          <img className="w-16" src={`${experience.companyImage}`}></img>
        </span>
        <h4 className=" text-2xl "> {experience.jobTitle}</h4>
        <p className="text-xl font-bold mt-2">{experience?.company}</p>
        <div className="flex space-x-2 my-2 flex-wrap">
          {experience.svgs.map((ico: any) => {
            return ico;
          })}
        </div>
        <p className="uppercase text-gray-300">
          {experience?.dateStarted}-
          {experience?.isCurrentlyWorkingHere
            ? 'Present'
            : experience?.dateEnded}
        </p>
        <ul className="list-disc space-y-2 text-sm  overflow-y-scroll text-gray-400 mt-4 overflow-scroll scrollbar-thin">
          {experience.jd.map((li: any) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

/** Legacy
 * 
 * Date
 * <p className="uppercase text-gray-300">
          {new Date(experience?.dateStarted).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
          -
          {experience?.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience?.dateEnded).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
        </p>
 * 
*/
