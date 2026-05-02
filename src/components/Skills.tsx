'use client';

import React from 'react';
import { Code2, Database, Layout, Cpu, Globe, Terminal, Award } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const categories = [
    {
      title: 'Programming',
      icon: <Code2 size={20} />,
      skills: ['Python', 'JavaScript', 'React.JS', 'Next.JS', 'C/C++', 'SQL', 'MongoDB']
    },
    {
      title: 'AI & Tools',
      icon: <Cpu size={20} />,
      skills: ['RAG Systems', 'LangChain', 'OpenAI API', 'Prompt Engineering', 'Vector DBs (FAISS)']
    },
    {
      title: 'Design & Analytics',
      icon: <Layout size={20} />,
      skills: ['HTML/CSS', 'Bootstrap', 'Streamlit', 'PowerBI', 'Tableau', 'UI/UX Design']
    },
    {
      title: 'Engineering',
      icon: <Terminal size={20} />,
      skills: ['Git Version Control', 'REST APIs', 'Scalable Architectures', 'Clean Code', 'Problem Solving']
    },
    {
      title: 'Certifications',
      icon: <Award size={20} />,
      skills: ['Python Web Developer (ICT)', 'Data Analytics (Python)', 'Data Science (Tableau)', 'Master HTML/CSS (Udemy)', 'Python Bootcamp (Udemy)']
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Technical <span className="text-gradient">Expertise</span></h2>
          <p className={styles.subtitle}>A comprehensive list of tools and technologies I use to build robust software.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{cat.icon}</div>
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill, si) => (
                  <div key={si} className={styles.skillItem}>
                    <div className={styles.dot}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
