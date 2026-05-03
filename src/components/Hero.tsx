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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={styles.imageContainer}
        >
          <div className={styles.glow}></div>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dotRed}></div>
              <div className={styles.dotYellow}></div>
              <div className={styles.dotGreen}></div>
            </div>
            <div className={styles.cardBody}>
              <code className={styles.code}>
                <span className={styles.keyword}>const</span> <span className={styles.variable}>engineer</span> = {'{'}<br />
                &nbsp;&nbsp;name: <span className={styles.string}>'Sondrya Gupta'</span>,<br />
                &nbsp;&nbsp;role: <span className={styles.string}>'Full Stack Developer'</span>,<br />
                &nbsp;&nbsp;company: <span className={styles.string}>'Mobiloitte Technologies'</span>,<br />
                &nbsp;&nbsp;passion: <span className={styles.string}>'Turning ideas into intelligent code'</span><br />
                {'}'};
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;