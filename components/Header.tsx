import React from 'react';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

const socials = [
  { url: 'https://www.linkedin.com/in/kewin-titus-ba570417a', id: 1 },
  { url: 'https://github.com/kewintitus', id: 2 },
  { url: 'https://twitter.com/KewinTitus', id: 3 },
];

function Header() {
  return (
    <header className=" flex justify-between sticky top-0 p-5 max-w-7xl mx-auto xl:items-center z-40">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center justify-left z-20"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className=" cursor-pointer "
          />
        ))}
        {/* <SocialIcon
          url="https://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
          className=" cursor-pointer "
        />
        <SocialIcon
          url="https://youtube.com/"
          fgColor="gray"
          bgColor="transparent"
          className=" cursor-pointer "
        /> */}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-row items-center content-center cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className=" cursor-pointer "
        />
        <Link href="#contact">
          <p className=" uppercase hidden md:inline-flex text-sm text-gray-400 ">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
