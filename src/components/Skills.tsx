'use client';

import React from 'react';
import { Code2, Database, Layout, Cpu, Terminal, Award, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} />,
      skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Streamlit']
    },
    {
      title: 'Backend & APIs',
      icon: <Server size={20} />,
      skills: ['Python', 'Node.js', 'FastAPI', 'REST APIs']
    },
    {
      title: 'AI / Machine Learning',
      icon: <Cpu size={20} />,
      skills: ['LangChain', 'LlamaIndex', 'OpenAI API', 'RAG', 'LLM', 'FAISS', 'NLP', 'Prompt Engineering', 'Embeddings']
    },
    {
      title: 'Data Analysis & Visualization',
      icon: <Terminal size={20} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Tableau']
    },
    {
      title: 'Databases & Storage',
      icon: <Database size={20} />,
      skills: ['MongoDB', 'MySQL', 'Vector Database', 'ConversationBufferMemory']
    },
    {
      title: 'Tools & Platforms',
      icon: <Code2 size={20} />,
      skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'Vercel', 'AWS', 'Figma', 'CI/CD Pipeline', 'Microsoft Office']
    }
  ];

  const certifications = [
    {
      title: 'Python Web Developer Training',
      issuer: 'ICT Infosys'
    },
    {
      title: 'Data Analytics using Python',
      issuer: 'ShapeMySkills'
    },
    {
      title: 'Data Science - Tableau (30 Hours)',
      issuer: 'IMS Engineering College'
    },
    {
      title: 'Master HTML and CSS by Building Real World Projects',
      issuer: 'Udemy'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)'
    },
    {
      title: 'The Complete Python Bootcamp: Zero to Expert',
      issuer: 'Udemy'
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Technical <span className="text-gradient">Expertise</span></h2>
          <p className={styles.subtitle}>A comprehensive breakdown of technical skills and tools from my engineering toolkit.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
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
            </motion.div>
          ))}
        </div>

        {/* Certifications Showcase */}
        <motion.div 
          className={styles.certSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.certHeader}>
            <div className={styles.certIconBadge}>
              <Award size={22} />
            </div>
            <div>
              <h3 className={styles.certHeading}>Certifications & Training</h3>
              <p className={styles.certSubheading}>Verified credentials and completed professional training programs</p>
            </div>
          </div>
          <div className={styles.certGrid}>
            {certifications.map((cert, ci) => (
              <div key={ci} className={styles.certCard}>
                <div className={styles.certDot} />
                <div className={styles.certContent}>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
