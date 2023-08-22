'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <header className="bg-primary text-mild-blue px-4 py-10 md:py-20 flex justify-between items-center">
      <div className="flex items-center">
        <motion.a
          className="text-3xl md:text-4xl font-semibold hover:text-white"
          initial="hidden"
          animate="visible"
          href={'/'}
          variants={itemVariants}
        >
          Sweets Delight
        </motion.a>
      </div>
      <div className="hidden md:flex space-x-4">
        <MenuItem href="/" text="Home" isVisible={true} itemVariants={itemVariants} />
        <MenuItem href="/about" text="About" isVisible={true} itemVariants={itemVariants} />
        <MenuItem href="/service" text="Service" isVisible={true} itemVariants={itemVariants} />
        <MenuItem href="/contact" text="Contact" isVisible={true} itemVariants={itemVariants} />
      </div>
      <div className="md:hidden">
        <button style={{ zIndex: '1000' }} className="text-[40px] z-101" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-0 left-0 w-full h-screen bg-gray-900 z-[-100]"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <motion.nav className="flex flex-col items-center justify-center h-full">
                <MenuItem href="/" text="Home" isVisible={isMenuOpen} itemVariants={itemVariants} />
                <MenuItem href="/about" text="About" isVisible={isMenuOpen} itemVariants={itemVariants} />
                <MenuItem href="/service" text="Service" isVisible={isMenuOpen} itemVariants={itemVariants} />
                <MenuItem href="/contact" text="Contact" isVisible={isMenuOpen} itemVariants={itemVariants} />
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
