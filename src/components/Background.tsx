'use client';

import React from 'react';
import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mesh}></div>
      <div className={styles.noise}></div>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
    </div>
  );
};

export default Background;
