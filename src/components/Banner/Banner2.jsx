import React from 'react';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '../../utility/animation';

const Banner2 = () => {
  return (
    <div className="container mx-auto px-4 my-14">
      <div className="py-14 md:py-24 flex justify-center items-center">
        {/* BRAND INFO */}
        <div className="flex flex-col justify-center text-center space-y-8 max-w-4xl px-4 md:px-0">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase"
          >
            Get 20% Discount on Your First Order, Are You Ready To Buy
          </motion.h1>

          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-base md:text-lg text-gray-700"
          >
            We will make sure you get the right and the best quality products for your workout
          </motion.p>

          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <button className="primary-btn">Learn More</button>
            <button className="border-2 border-primary text-primary font-bold px-5 rounded-lg">
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
