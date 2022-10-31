import Image from 'next/image';
import React from 'react';

import { motion } from 'framer-motion';
import { Project } from '../typings';

import Link from 'next/link';

type Props = {
  projects: Project[];
};

const projects = [
  {
    _id: 1,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/e4bfe8d3ccd675b5b09502ba84742cad26c4c0d9-1900x890.png',
    title: 'Gmail clone',
    summary:
      'UI – React, React Router, Material-UI; Form validation - React Hook Form; App state management - Redux; Database - Firestore DB; Authentication - Google firebase auth.',
    gitHubLink: 'https://github.com/kewintitus/Gmail-clone',
    siteLink: 'https://clone-60e58.web.app/',
  },
  {
    _id: 2,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/52687cd1a849e2000fc7f5b0208243b726233862-1898x884.png',
    title: 'LinkedIn clone',
    summary:
      'UI - React, Material-UI; App State Management – Redux; Database -Firestore DB; Auth - Email/Password Firebase auth;',
    gitHubLink: 'https://github.com/kewintitus/LinkedIn-clone',
    siteLink: 'https://linkedin-clone-3782c.web.app/',
  },
  {
    _id: 3,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/d003afb3978c1f8efcdbd3947d2c98b95f73bbac-1920x884.png',
    title: 'Natours website',
    summary: 'Desktop and mobile responsive website built with HTML, CSS, SASS',
    gitHubLink: 'https://github.com/kewintitus/Natours',
    siteLink: 'https://eclectic-pasca-d5dcd9.netlify.app/',
  },
  {
    _id: 4,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/6fbdbfee03b88c92ef62622ab9ed68229b30263c-1898x874.png',
    title: 'Weather App',
    summary: 'UI - HTML, CSS; API Calls, DOM Manipulation - JavaScript',
    gitHubLink: 'https://github.com/kewintitus/WeatherApp/',
    siteLink: 'https://snazzy-bavarois-0e1c44.netlify.app/',
  },
  {
    _id: 5,
    image:
      'https://cdn.sanity.io/images/eq7abb07/production/5163c95633d8ca5401ea0b86d2900302e7c2d12f-1898x884.png',
    title: 'Omnifood website',
    summary: 'Desktop and mobile responsive website built with HTML, CSS',
    gitHubLink: 'https://github.com/kewintitus/Omnifood-Project',
    siteLink: 'https://delightful-dieffenbachia-ae514f.netlify.app/',
  },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex 
    overflow-hidden 
    flex-col items-center justify-evenly mx-auto z-0"
    >
      <h3
        className="absolute z-10 top-24 uppercase 
        tracking-[5px] md:tracking-[15px]
        text-gray-500 
        text-xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full 
        flex overflow-x-scroll gap-10
      overflow-y-hidden snap-x snap-mandatory z-20 px-7 md:scrollbar sm:scrollbar-thin scrollbar-track-gray-700/20 scrollbar-thumb-red-700"
      >
        {projects.map((project) => (
          <div
            key={project?._id}
            className="flex flex-col w-screen relative items-center justify-center p-32 md:p-44 snap-center"
          >
            <div className=" mx-auto my-auto mb-3">
              {' '}
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                className=" object-contain w-[400px] h-auto"
                alt="project image"
              ></motion.img>
            </div>
            <div className="text-xl font-semibold text-center px-8 space-y-3 w-[400px] md:w-[600px] xl:w-[800px] ">
              <h4 className="underline decoration-red-600 text-gray-300">
                {project?.title}
              </h4>
              <p className="text-lg font-normal text-gray-400">
                {project?.summary}
              </p>
            </div>
            <div className="flex flex-row gap-1 mt-3">
              <div className="px-3 py-1 bg-slate-300 text-red-700 hover:text-red-500 rounded-md">
                <Link href={project?.gitHubLink || '#'}>Github</Link>
              </div>
              <div className="px-3 py-1 bg-slate-300 text-red-700 hover:text-red-500 rounded-md">
                <Link href={project?.siteLink || '#'}>Site</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] h-[40%] bg-red-800 opacity-20 -skew-y-6 z-10"></div>
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
