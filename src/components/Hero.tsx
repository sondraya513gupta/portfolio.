'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay}></div>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.badge}
          >
            Full Stack Developer @ Mobiloitte
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.title}
          >
            Crafting the Future with <span className="text-gradient">AI & Full Stack</span> Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.subtitle}
          >
            Proficient in Next.js, Python, and RAG systems. Building scalable,
            AI-powered solutions with clean code and enterprise-grade architecture.
          </motion.p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View Projects
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get In Touch
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.visualContainer}
        >
          <div className={styles.visualGlow}></div>
          <img 
            src="/enterprise_ai_hero_visual_1777755201838.png" 
            alt="Enterprise AI Engineering" 
            className={styles.heroImage}
          />
        </motion.div>

        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
