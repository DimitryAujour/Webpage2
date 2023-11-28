import React from 'react';
import { motion } from 'framer-motion';
import me from './me.jpg';

const HomePage = () => {


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.img
        src= {me}
        alt="Your Name"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full w-32 h-32 md:w-48 md:h-48"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-4"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Dimitry Aujour</h1>
        <p className="text-md md:text-lg mt-2">I am a junior developer who has recently graduated from Lasalle College, eager to embark on a journey to enhance my programming skills.
            Beyond my passion for coding, I find inspiration in the gym, where I pursue my fitness goals.
            I also have a profound interest in philosophy, exploring the depths of thought, and I am driven by a strong desire to use my skills to make a positive impact on people's lives.
            As I seek opportunities to grow and contribute, I bring a unique blend of technical aptitude and a compassionate, philosophical perspective to my work.</p>
      </motion.div>
    </div>
  );
};

export default HomePage;
