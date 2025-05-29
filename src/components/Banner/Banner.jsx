import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation';

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-14 items-center">
        {/* BANNER IMAGE SECTION */}
        <div className="flex justify-center md:justify-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            src={image}
            alt=""
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain"
          />
        </div>

        {/* BANNER TEXT SECTION */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6 max-w-lg mx-auto md:mx-0">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold capitalize font-playfair"
          >
            {title}
          </motion.p>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-base md:text-lg text-gray-700"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
