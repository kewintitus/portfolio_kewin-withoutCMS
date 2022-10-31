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
      xl:w-[400px] xl:mx-auto p-5 snap-center md:opacity-40 cursor-pointer 
      md:hover:opacity-100 md:transition-opacity md:duration-500"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-transparent  w-[50px] h-[50px] relative overflow-hidden "
      >
        <Image
          src="/../public/res/illuminei-logo.png"
          width={100}
          height={100}
          blurDataURL="data:..."
          placeholder="blur"
          className="object-cover mt-1 align-bottom"
          alt="illuminei logo"
        />
      </motion.div>
      <div className="px-6">
        <h4 className=" text-3xl "> Engineer-I</h4>
        <p className="text-xl font-bold mt-2">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z" />
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            />
          </svg>
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 256 288"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
                fill="#A179DC"
                fill-rule="nonzero"
              ></path>
              <path
                d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376"
                fill="#280068"
                fill-rule="nonzero"
              ></path>
              <path
                d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
                fill="#390091"
                fill-rule="nonzero"
              ></path>
              <path
                d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z"
                fill="#FFFFFF"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
        <p className="uppercase text-gray-300">
          {experience?.dateStarted}-
          {experience?.isCurrentlyWorkingHere
            ? 'Present'
            : experience?.dateEnded}
        </p>
        <ul className="list-disc space-y-2 text-sm text-gray-400 mt-4 overflow-scroll scrollbar-thin">
          <li> Worked on developing add-ins for CAD automation using C# </li>
          <li>
            Responsible for developing model quality dashboards using C# and WPF
          </li>
          <li>
            Collaborated with cross-functional teams for timely project
            deliveries.
          </li>
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
