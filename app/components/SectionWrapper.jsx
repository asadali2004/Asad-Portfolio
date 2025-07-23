'use client';

import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', id, noPadding = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full min-h-[calc(100vh-80px)] flex flex-col ${!noPadding ? 'justify-center' : ''} ${className}`}
      id={id}
    >
      <div className={`w-full ${!noPadding ? 'px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24' : ''}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default SectionWrapper;
