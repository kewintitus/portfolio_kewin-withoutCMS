import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ExperienceCard from './ExperienceCard';

// type Props = {
//   experiences: Experience[];
// };

const javscript = (
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
);

const csharp = (
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
);

const reactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 32 32"
  >
    <g
      transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
      fill="none"
      fill-rule="evenodd"
    >
      <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" />
      <g stroke="#00d8ff" stroke-width="24">
        <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
        <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
        <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
      </g>
    </g>
  </svg>
);
const htmlIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 32 32"
  >
    <path
      d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z"
      fill="#e44d26"
    />
    <path d="M25.337 26.964l2.197-24.608H16v27.197z" fill="#f16529" />
    <path
      d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z"
      fill="#ebebeb"
    />
    <path
      d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z"
      fill="#fff"
    />
  </svg>
);

const cssIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
  >
    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
    <path
      fill="#FFF"
      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
    />
    <path
      fill="#EEE"
      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
    />
  </svg>
);

const nodeJs = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid"
    fill="#8cc84b"
  >
    <path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z" />
  </svg>
);

const mongoDB = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
  >
    <path
      fill="#5d4037"
      d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
    />
    <path
      fill="#4caf50"
      d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
    />
    <path fill="#dcedc8" d="M23 28H25V36H23z" />
    <path
      fill="#4caf50"
      d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
    />
    <path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z" />
  </svg>
);
const skillIcon = (src: string, alt: string) => (
  <img
    src={src}
    alt={alt}
    width={48}
    height={48}
    className="h-12 w-12 object-contain"
  />
);

const experiences = [
  {
    _id: 1,
    jobTitle: 'Developer 2',
    companyImage:
      'https://cdn.sanity.io/images/eq7abb07/production/4fa300b98b7840f9433612d8895762db664fc55c-483x247.png',
    company: 'Metayb',
    dateStarted: 'October 2024',
    dateEnded: 'Present',
    isCurrentlyWorkingHere: true,
    jd: [
      'Led architecture and development of enterprise SaaS applications.',
      'Designed scalable REST APIs and responsive React applications on the PERN stack (PostgreSQL, Express.js, React.js, Node.js).',
      'Led a team of 4 engineers from planning through delivery of a production SaaS product.',
      'Built a multi-tenant SaaS platform with tenant isolation and tenant-specific workflows.',
      'Integrated Azure and AWS with third-party authentication, payment, email, and storage services.',
      'Delivered workflow, reporting, access control, and mobile API features, and resolved security assessment findings.',
    ],
    svgs: [
      reactIcon,
      nodeJs,
      skillIcon('/res/icons/postgresql.svg', 'PostgreSQL'),
      skillIcon('/res/icons/azure.svg', 'Azure'),
      skillIcon('/res/icons/aws.svg', 'AWS'),
    ],
  },
  {
    _id: 2,
    jobTitle: 'Full Stack Developer',
    companyImage:
      'https://cdn.sanity.io/images/eq7abb07/production/4cc8c005921fb12cdbb21d0c3a5d86b9828b50e0-5000x3178.png',
    company: 'TVS Electronics',
    dateStarted: 'January 2023',
    dateEnded: 'October 2024',
    isCurrentlyWorkingHere: false,
    jd: [
      'Designed enterprise web applications with the MERN stack for manufacturing and business process automation.',
      'Built reusable React components that reduced development time across projects.',
      'Worked with product owners in Agile, planning sprint backlogs and coordinating feature delivery.',
      'Mentored junior developers through code reviews, architecture discussions, and engineering practices.',
      'Delivered OPTIM, a BOM and product costing platform, and EYEQ, a quality-assurance app for defect and recall tracking.',
    ],
    svgs: [
      htmlIcon,
      cssIcon,
      javscript,
      reactIcon,
      nodeJs,
      mongoDB,
      skillIcon('/res/icons/sql.svg', 'SQL'),
    ],
  },
  {
    _id: 3,
    jobTitle: 'Engineer - I',
    companyImage:
      'https://cdn.sanity.io/images/eq7abb07/production/9e2260eb64c673f520b04c0e635b8eda1e747f8c-563x530.png',
    company: 'Illumine-i',
    dateStarted: 'April 2021',
    dateEnded: 'August 2022',
    isCurrentlyWorkingHere: false,
    jd: [
      'Developed web-based 3D model visualization with Autodesk Forge for digital delivery of construction projects.',
      'Built CAD automation add-ins in C# that removed repetitive engineering workflows.',
      'Developed model quality dashboards using C# and WPF.',
    ],
    svgs: [javscript, csharp],
  },
];
function WorkExperience() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const experience = experiences[index];

  const go = (step: number) => {
    setDirection(step);
    setIndex(
      (current) => (current + step + experiences.length) % experiences.length
    );
  };

  const goTo = (nextIndex: number) => {
    if (nextIndex === index) return;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-start px-4 pb-6 pt-24 md:h-screen md:justify-center md:overflow-hidden md:px-8 md:pb-0 md:pt-0"
    >
      <h3 className="mb-4 text-center text-xl uppercase tracking-[5px] text-gray-500 md:absolute md:top-24 md:mb-0 md:tracking-[15px]">
        Work Experience
      </h3>

      <div className="relative flex w-full items-center md:mt-16">
        <button
          type="button"
          aria-label="Previous experience"
          onClick={() => go(-1)}
          className="absolute left-0 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-[#1d1d1d]/80 text-gray-200 transition hover:border-red-500 hover:text-white md:flex"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div
          className="w-full md:px-16"
          onTouchStart={(event) => {
            const touch = event.changedTouches[0];
            touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={(event) => {
            if (!touchStart.current) return;
            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - touchStart.current.x;
            const deltaY = touch.clientY - touchStart.current.y;
            if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
              go(deltaX < 0 ? 1 : -1);
            }
            touchStart.current = null;
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={experience._id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          aria-label="Next experience"
          onClick={() => go(1)}
          className="absolute right-0 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-[#1d1d1d]/80 text-gray-200 transition hover:border-red-500 hover:text-white md:flex"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-4 flex w-full items-center justify-center gap-2 md:mt-6 md:gap-3">
        <button
          type="button"
          aria-label="Previous experience"
          onClick={() => go(-1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-600 bg-[#1d1d1d] text-gray-200 md:hidden"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {experiences.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item._id}
                type="button"
                aria-current={selected ? 'true' : undefined}
                onClick={() => goTo(itemIndex)}
                className={`rounded-full px-3 py-1 text-xs transition sm:px-4 sm:py-1.5 sm:text-sm ${
                  selected
                    ? 'bg-white/10 text-white ring-1 ring-red-500'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Next experience"
          onClick={() => go(1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-600 bg-[#1d1d1d] text-gray-200 md:hidden"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">
        {index + 1} / {experiences.length}
      </p>
    </motion.div>
  );
}

export default WorkExperience;
