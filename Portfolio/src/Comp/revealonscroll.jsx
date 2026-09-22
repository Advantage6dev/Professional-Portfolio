import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.7,
  delay = 0,
  amount = 0.2,
  once = true,
  className = '',
}) => {
  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
