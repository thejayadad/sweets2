'use client'
import { motion } from 'framer-motion';

const MenuItem = ({ href, text, isVisible, itemVariants }) => {
  return (
    <span>
      <motion.a
        className="text-lg hover:text-gray-400"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        href={href}
        variants={itemVariants}
      >
        {text}
      </motion.a>
    </span>
  );
};

export default MenuItem;
