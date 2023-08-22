'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeaturedSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const features = [
    { imageSrc: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Quality Ingredients', description: 'We use only the finest and freshest ingredients to create our delectable treats.' },
    { imageSrc: '/path-to-your-image2.jpg', title: 'Creative Flavors', description: 'Our expert pastry chefs create unique and innovative flavors that delight the senses.' },
    { imageSrc: '/path-to-your-image2.jpg', title: 'Creative Flavors', description: 'Our expert pastry chefs create unique and innovative flavors that delight the senses.' },

    // Add more feature items
  ];

  return (
    <section className="bg-primary text-mild-blue py-36">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Our Features
          </h2>
          <p className="text-lg md:text-xl">
            Explore the delightful features that set Sweets Delight apart from the rest.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <motion.div className="flex items-center" key={index} variants={featureVariants}>
              <div className="w-30 h-30 bg-secondary rounded-full flex items-center justify-center mr-4">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={80} // Adjust width as needed
                  height={80} // Adjust height as needed
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
