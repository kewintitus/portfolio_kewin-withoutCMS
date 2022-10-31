import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  svg: any;
  directionLeft?: boolean;
};

function Skill({ svg, directionLeft }: Props) {
  return (
    <div>
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {svg}
      </motion.div>
    </div>
  );
}

export default Skill;
