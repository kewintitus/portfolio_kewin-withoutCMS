import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    _id: 1,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/93a06f6f4d6a448c978d2028f437a98a31d37557-1917x867.png',
    title: 'ExpenSync',
    summary:
      "An application that helps manage one's daily expense and helps analyze their spending and income trends.Full stack application built with Next.js, React.js, TailwindCSS, Node.js and MongoDB.Compatible with all mobile and large screen devices",
    gitHubLink: 'https://github.com/kewintitus/expense-manager',
    siteLink: 'https://expensync.vercel.app/',
  },
  {
    _id: 2,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/e4bfe8d3ccd675b5b09502ba84742cad26c4c0d9-1900x890.png',
    title: 'Gmail clone',
    summary:
      'UI – React, React Router, Material-UI; Form validation - React Hook Form; App state management - Redux; Database - Firestore DB; Authentication - Google firebase auth.',
    gitHubLink: 'https://github.com/kewintitus/Gmail-clone',
    siteLink: 'https://clone-60e58.web.app/',
  },
  {
    _id: 3,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/52687cd1a849e2000fc7f5b0208243b726233862-1898x884.png',
    title: 'LinkedIn clone',
    summary:
      'UI - React, Material-UI; App State Management – Redux; Database -Firestore DB; Auth - Email/Password Firebase auth;',
    gitHubLink: 'https://github.com/kewintitus/LinkedIn-clone',
    siteLink: 'https://linkedin-clone-3782c.web.app/',
  },
  {
    _id: 4,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/313f1ffa5affaadc0107a06a1d1296cd492b3a14-1886x873.png',
    title: 'Prompt App',
    summary:
      'App to store frequently used AI Prompts for easy access built with Next.js, NextAuth, TailwindCSS, MongoDB',
    gitHubLink: 'https://github.com/kewintitus/prompt-app',
    siteLink: 'https://prompt-app-ten.vercel.app/',
  },
  {
    _id: 5,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/48c91ecb4921758cdb03a7401499daceb5978c30-1902x876.png',
    title: 'Workout logger',
    summary:
      'A Workout logging app built with JavaScript and Leaflet library which can be used to log running and cycling workouts marked on a map',
    gitHubLink: 'https://github.com/kewintitus/Workout-logger',
    siteLink: 'https://comforting-shortbread-66e591.netlify.app/',
  },
  {
    _id: 6,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/6fbdbfee03b88c92ef62622ab9ed68229b30263c-1898x874.png',
    title: 'Weather App',
    summary: 'UI - HTML, CSS; API Calls, DOM Manipulation - JavaScript',
    gitHubLink: 'https://github.com/kewintitus/WeatherApp/',
    siteLink: 'https://snazzy-bavarois-0e1c44.netlify.app/',
  },
  {
    _id: 7,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/d003afb3978c1f8efcdbd3947d2c98b95f73bbac-1920x884.png',
    title: 'Natours website',
    summary: 'Desktop and mobile responsive website built with HTML, CSS, SASS',
    gitHubLink: 'https://github.com/kewintitus/Natours',
    siteLink: 'https://eclectic-pasca-d5dcd9.netlify.app/',
  },

  {
    _id: 8,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/5163c95633d8ca5401ea0b86d2900302e7c2d12f-1898x884.png',
    title: 'Omnifood website',
    summary: 'Desktop and mobile responsive website built with HTML, CSS',
    gitHubLink: 'https://github.com/kewintitus/Omnifood-Project',
    siteLink: 'https://delightful-dieffenbachia-ae514f.netlify.app/',
  },
];

function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const project = projects[index];

  const go = (step: number) => {
    setDirection(step);
    setIndex(
      (current) => (current + step + projects.length) % projects.length
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
      className="relative z-0 mx-auto flex h-screen flex-col items-center justify-center overflow-hidden"
    >
      <h3 className="absolute top-24 z-10 text-xl uppercase tracking-[5px] text-gray-500 md:tracking-[15px]">
        Projects
      </h3>

      <div className="absolute top-[30%] z-10 h-[40%] w-full -skew-y-6 bg-red-800 opacity-20" />

      <div className="relative z-20 mt-10 flex w-full max-w-5xl items-center px-2">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => go(-1)}
          className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-[#1d1d1d]/80 text-gray-200 transition hover:border-red-500 hover:text-white md:left-0"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div
          className="w-full px-14"
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
          <AnimatePresence mode="wait">
            <motion.div
              key={project._id}
              initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-auto max-h-[240px] w-full max-w-[560px] object-contain md:max-h-[280px]"
              />
              <div className="mt-4 max-w-3xl space-y-3 px-2 text-center">
                <h4 className="text-xl font-semibold text-gray-300 underline decoration-red-600">
                  {project.title}
                </h4>
                <p className="text-sm font-normal text-gray-400 md:text-lg">
                  {project.summary}
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-slate-300 px-3 py-1 text-red-700 hover:text-red-500"
                >
                  Github
                </a>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-slate-300 px-3 py-1 text-red-700 hover:text-red-500"
                >
                  Site
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          aria-label="Next project"
          onClick={() => go(1)}
          className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-[#1d1d1d]/80 text-gray-200 transition hover:border-red-500 hover:text-white md:right-0"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="z-20 mt-6 flex items-center gap-2">
        {projects.map((item, itemIndex) => {
          const selected = itemIndex === index;
          return (
            <button
              key={item._id}
              type="button"
              aria-label={item.title}
              aria-current={selected ? 'true' : undefined}
              onClick={() => goTo(itemIndex)}
              className={`h-2.5 rounded-full transition ${
                selected ? 'w-8 bg-red-500' : 'w-2.5 bg-gray-500 hover:bg-gray-300'
              }`}
            />
          );
        })}
      </div>
      <p className="z-20 mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">
        {index + 1} / {projects.length}
      </p>
    </motion.div>
  );
}

export default Projects;

{
  /* <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-[700px] md:h-[384px] w-[280px] h-auto snap-center flex items-center justify-center"
            >
              <Image
                src={urlFor(project?.image).url()}
                width="480px"
                height="454px"
                // blurDataURL="data:..."
                // layout="fill"
                objectPosition="50% 50%"
                objectFit="contain"
                // placeholder="blur"
                className="inline-block"
              />
            </motion.div> */
}

// className="md:w-[600px] md:h-[450px] w-[280px] h-auto snap-center flex items-center justify-center"
