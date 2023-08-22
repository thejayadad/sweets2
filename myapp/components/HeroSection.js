
'use client'
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section className="bg-secondary px-8 text-white py-48 px-8">
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 px-8 md:px-0 lg:px-0 md:mb-0 lg:mb-0 md:mt-0 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Welcome to Sweets Delight
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Discover the joy of delightful sweets and treats for every occasion.
          </p>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6">
            Indulge in our carefully crafted confections that are sure to satisfy your cravings.
          </p>
          <motion.button
            className="bg-primary text-white py-2 px-6 rounded-full hover:bg-secondary-dark transition duration-200 text-base md:text-lg lg:text-xl"
            whileHover={{ scale: 1.05 }}
          >
            Explore Menu
          </motion.button>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.img
            src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Sweet Treats"
            className="rounded-lg shadow-lg"
            variants={gridItemVariants}
            whileHover={{ scale: 1.05 }}

          />
          <motion.img
            src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Delicious Desserts"
            className="rounded-lg shadow-lg"
            variants={gridItemVariants}
            whileHover={{ scale: 1.05 }}

          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
