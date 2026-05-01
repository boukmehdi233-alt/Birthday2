import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.css';

const BirthdaySite = () => {
  const line1 = 'Happy Birthday Malaak! Aka my manager';
  const line2 =
    "Today is not just about celebrating your age, but celebrating the person you are, someone who brings light, kindness, and meaning to the people lucky enough to know you. I hope this year gives you moments that make you smile unexpectedly, dreams that turn into reality, and memories you'll never want to forget. You truly deserve something beautiful. Enjoy your day 🤍";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.025,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const flowerParticlesConfig = {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: { value: 22, density: { enable: true, value_area: 900 } },
      color: { value: ['#FFC0CB', '#FFB6C1', '#FFF0F5', '#DDA0DD'] },
      shape: {
        type: 'image',
        options: {
          image: [
            {
              src: 'https://cdn.icon-icons.com/icons2/1461/PNG/512/2998141-flower-garden-spring-sunflower_99865.png',
              width: 100,
              height: 100,
            },
            {
              src: 'https://cdn.icon-icons.com/icons2/1461/PNG/512/2998135-spring-tulip-flower_99859.png',
              width: 100,
              height: 100,
            },
          ],
        },
      },
      opacity: { value: 0.65, random: true },
      size: { value: { min: 10, max: 18 }, random: true },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'bottom',
        random: true,
        straight: false,
        outModes: 'out',
      },
    },
  };

  return (
    <>
      <style>
        {"@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Poppins:wght@300;400&display=swap');"}
      </style>

      <main className="birthday-page">
        <Particles id="tsparticles" init={particlesInit} options={flowerParticlesConfig} />

        <motion.section
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="birthday-content"
        >
          <h1 className="birthday-title">
            {line1.split('').map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h1>

          <p className="birthday-message">
            {line2.split('').map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </p>
        </motion.section>
      </main>
    </>
  );
};

export default BirthdaySite;
