import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  svg: any;
  directionLeft?: boolean;
  name: String;
};

function Skill({ svg, directionLeft, name }: Props) {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col justify-center justify-self-end"
      >
        <div className="self-center justify-self-center">
          {svg}
          <p className="text-center text-gray-400">{name}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;
