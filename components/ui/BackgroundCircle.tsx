import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircle({}: Props) {
  //   const initial = {
  //     opacity: 0,
  //   };

  //   const final = {
  //     opacity: 1,
  //   };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.4, 1],
        scale: [0.1, 0.4, 1],
        borderRadius: ['220%', '80%', '20%'],
      }}
      transition={{ duration: 3.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border rounded-full  border-red-700 h-[100px] w-[100px] md:h-[300px] md:w-[300px] mt-52 animate-spin opacity-10"></div>
      <div className="absolute border rounded-full  border-red-600 h-[200px] w-[200px] md:h-[400px] md:w-[400px] mt-52 animate-pulse opacity-20"></div>
      <div className="absolute border rounded-full opacity-80  border-red-500 h-[350px] w-[350px] md:h-[500px] md:w-[500px] mt-52 animate-pulse"></div>
      {/* <div className="absolute border rounded-full border-orange-500 h-[650px] w-[650px] mt-52 animate-pulse"></div> */}
      {/* <div className="absolute border rounded-full border-orange-200 h-[800px] w-[800px] mt-52 animate-pulse"></div> */}

      {/* <div
        className="w-0 h-0 
        border-l-[200px] border-l-transparent
        border-b-[450px] border-b-orange-500
        border-r-[200px] border-r-transparent
         opacity-10"
      ></div> */}
      <div></div>
    </motion.div>
  );
}

export default BackgroundCircle;
