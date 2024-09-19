import React from 'react';
import Image from 'next/image';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircle from './ui/BackgroundCircle';
import Link from 'next/link';
import { PageInfo } from '../typings';
import ProfilePic from './../public/res/KewinC1.jpg';
type Props = {
  pageInfo: PageInfo;
};

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hi I'm Kewin`,
      'Loves to <Build Innovative Solutions/>',
      'Loves to <Code/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="bg-white rounded-full w-14 h-14 overflow-hidden relative self-center float content-center justify-center object-cover">
        <img
          src="https://cdn.sanity.io/images/eq7abb07/production/b654ca01aebfc9d87dae474e6bed1b9530d0ac68-2218x2116.jpg"
          alt="profilePic"
          className="object-cover w-14 h-14"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 tracking-widest ">
          Full Stack Developer
        </h2>
        <h1 className="text-3xl font-semibold py-0 my-0">
          <span className="">{text}</span>
          <Cursor cursorColor="orangered" />
        </h1>
        <div className="pt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <div className="bg-white rounded-full w-14 h-14 overflow-hidden relative self-center float content-center justify-center  ">
        <Image
          src="/../public/res/KewinC1.jpg"
          width={100}
          height={120}
          //   quality="100"
          //   layout="fill"
          //   objectFit="cover"
          blurDataURL="data:..."
          placeholder="blur"
          className="object-fill align-bottom"
          alt="profile pic"
        />
      </div> */
}
