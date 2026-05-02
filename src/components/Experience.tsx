'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Mobiloitte Technologies',
      role: 'Full Stack Software Engineer',
      period: '2025 - Present',
      description: 'Leading AI initiatives and full-stack development projects. Specialized in building and deploying RAG-based chatbots and enterprise administrative panels.',
      skills: ['FastAPI', 'Next.js', 'AWS', 'Python', 'React', 'JavaScript']
    },
    {
      company: 'India Marketing Solutions',
      role: 'Web Designer',
      period: 'July 2024 - Aug 2024',
      description: 'Designed and enhanced user-centered, responsive websites using front-end technologies. Focused on UI improvements, usability, and meeting specific client requirements.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Streamlit', 'React.js']
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Work <span className="text-gradient">Experience</span></h2>
          <p className={styles.subtitle}>My professional journey in software engineering.</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className={styles.timelineItem}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.topRow}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <h4 className={styles.role}>{exp.role}</h4>
                <p className={styles.desc}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.skills.map((s, si) => (
                    <span key={si} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
