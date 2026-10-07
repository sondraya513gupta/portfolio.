'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Grubpac Technologies Pvt. Ltd.',
      role: 'Junior Front-end Developer',
      period: 'June 2026 - Sept 2026',
      description: 'Engineered responsive user interfaces and optimized frontend performance for high-load web applications.',
      points: [
        'Developed responsive and scalable user interfaces based on UI/UX designs and product requirements.',
        'Integrated REST APIs and backend services to enable seamless data flow and application functionality.',
        'Improved frontend performance, cross-browser compatibility, and code maintainability through debugging and optimization.',
        'Collaborated with developers, designers, product, and QA teams in Agile workflows, code reviews, and feature delivery.'
      ],
      skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'REST APIs', 'UI/UX Design', 'Agile']
    },
    {
      company: 'Mobiloitte India Pvt. Ltd.',
      role: 'Junior Full-Stack Software Developer',
      period: 'June 2025 - June 2026',
      description: 'Assisted in the engineering of full-stack web and mobile applications with AI and RAG integrations.',
      points: [
        'Assisting in the development and maintenance of web and mobile applications.',
        'Working with technologies like Python, Next.JS, Integrated API and Artificial Intelligence.',
        'Collaborating with senior developers and QA teams to deliver high-quality solutions.',
        'Writing clean, efficient code and participating in regular code reviews.'
      ],
      skills: ['Python', 'Next.js', 'FastAPI', 'REST APIs', 'AI / RAG', 'AWS', 'React.js']
    },
    {
      company: 'India Marketing Solutions',
      role: 'Web Designer',
      period: 'July 2024 - Aug 2024',
      description: 'Designed and enhanced user-centred, responsive digital interfaces tailored to client business needs.',
      points: [
        'Designed and enhanced user-centred, responsive websites for clients.',
        'Worked with front-end technologies including HTML5, CSS3, JavaScript, Bootstrap, Streamlit and React.JS.',
        'Contributed to UI improvements focused on usability and client requirements.',
        'Gained hands-on experience in creating visually appealing and functional digital interfaces.'
      ],
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
                {exp.points && (
                  <ul className={styles.pointsList}>
                    {exp.points.map((point, pi) => (
                      <li key={pi} className={styles.pointItem}>
                        <span className={styles.bullet}>▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
