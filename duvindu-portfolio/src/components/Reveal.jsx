import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
