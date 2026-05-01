import React from 'react';
import { motion } from 'framer-motion';
// Nous allons installer cette bibliothèque pour les fleurs
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BirthdaySite = () => {
  const line1 = "Happy Birthday Malaak! Aka my manager";
  const line2 = "Today is not just about celebrating your age,but celebrating the person you are ,someone who brings light, kindness, and meaning to the people lucky enough to know you. I hope this year gives you moments that make you smile unexpectedly, dreams that turn into reality, and memories you’ll never want to forget. You truly deserve something beautiful. Enjoy your day 🤍";

  // Configuration de l'animation pour chaque lettre (plus douce)
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8, // Délai avant le début
        staggerChildren: 0.12, // Vitesse de frappe plus lente
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 15 }, // Légère montée
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 } // Durée d'apparition de la lettre
    },
  };

  // Configuration pour la pluie de fleurs
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const flowerParticlesConfig = {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: ["#FFC0CB", "#FFB6C1", "#FFF0F5", "#DDA0DD"] }, // Tons roses et violets
      shape: {
        type: "image",
        options: {
          image: [
            // Ces liens sont des exemples de petites images de fleurs/pétales transparents
            { src: "https://cdn.icon-icons.com/icons2/1461/PNG/512/2998141-flower-garden-spring-sunflower_99865.png", width: 100, height: 100 },
            { src: "https://cdn.icon-icons.com/icons2/1461/PNG/512/2998135-spring-tulip-flower_99859.png", width: 100, height: 100 }
          ]
        }
      },
      opacity: { value: 0.7, random: true },
      size: { value: { min: 10, max: 20 }, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom", // Tombe vers le bas
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
  };

  return (
    <>
      {/* Intégration des polices Google Fonts */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Poppins:wght@300&display=swap');
      </style>

      <div style={styles.container}>
        {/* L'arrière-plan de fleurs qui tombent */}
        <Particles id="tsparticles" init={particlesInit} options={flowerParticlesConfig} />

        <motion.div
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={styles.textWrapper}
        >
          <h1 style={styles.title}>
            {line1.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h1>
          
          <p style={styles.subtitle}>
            {line2.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0a0f1e', // Un bleu encore plus profond, presque noir
    color: '#f8fafc',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
  },
  textWrapper: {
    zIndex: 10, // Pour rester au-dessus des fleurs
    padding: '20px',
    maxWidth: '800px',
  },
  title: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: '5rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(to right, #f472b6, #d946ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 15px rgba(244, 114, 182, 0.4)',
    
    // --- AJOUTE CES LIGNES ICI ---
    lineHeight: '1.4',      // Donne de la hauteur à la ligne
    padding: '20px 0',      // Ajoute de l'espace en haut et en bas
    display: 'inline-block', // Force le titre à respecter le padding
    width: '100%',          // Assure que le texte reste centré
  },
  subtitle: {
    fontFamily: "'Poppins', sans-serif", // Une police secondaire épurée
    fontSize: '1.4rem',
    opacity: 0.85,
    fontWeight: '300',
    lineHeight: '1.6',
  }
};

export default BirthdaySite;