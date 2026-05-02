'use client';

import React from 'react';
import { Trophy, Award, Music, Shield } from 'lucide-react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const awards = [
    {
      title: 'Top 10 HACKOG of Esys’23',
      organization: 'IIIT Delhi',
      year: '2023',
      icon: <Trophy size={24} />
    },
    {
      title: 'Tech Riddle Winner',
      organization: 'Techspardha @ IMSEC',
      year: '2024',
      icon: <Award size={24} />
    },
    {
      title: '2nd Position - Dance Competition',
      organization: 'Melange @ IMSUC',
      year: '2022',
      icon: <Music size={24} />
    },
    {
      title: '1st Position - Tug-Of-War',
      organization: 'Sangram @ IMSEC',
      year: '2023',
      icon: <Shield size={24} />
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Key <span className="text-gradient">Achievements</span></h2>
          <p className={styles.subtitle}>Recognitions and milestones from my professional and academic journey.</p>
        </div>

        <div className={styles.grid}>
          {awards.map((award, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                {award.icon}
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{award.year}</span>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.org}>{award.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
