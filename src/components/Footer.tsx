'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copyright}>© {new Date().getFullYear()} <span className="text-gradient">Sondrya Gupta</span>. All rights reserved.</p>
            <p className={styles.tagline}>Engineering Excellence in AI & Full Stack Development.</p>
          </div>
          <div className={styles.links}>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
