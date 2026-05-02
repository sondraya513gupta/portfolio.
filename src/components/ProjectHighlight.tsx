'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, Server, ShieldCheck, Zap, Database, Code2 } from 'lucide-react';
import styles from './ProjectHighlight.module.css';

const ProjectHighlight = () => {
  const projects = [
    {
      tag: 'Enterprise AI Solution',
      title: 'The Furniture Park Chatbot',
      description: 'Developed and deployed an enterprise-level RAG-based chatbot for "The Furniture Park". Integrated via custom snippet on WordPress, featuring a robust FastAPI backend and real-time query metrics.',
      features: [
        { icon: <Bot size={20} />, title: 'RAG Implementation', desc: 'Retrieval-Augmented Generation for accurate product responses.' },
        { icon: <Server size={20} />, title: 'FastAPI Backend', desc: 'High-performance Python API handling complex business logic.' },
        { icon: <ShieldCheck size={20} />, title: 'AWS Deployment', desc: 'Production-grade hosting on AWS for maximum uptime.' },
        { icon: <Zap size={20} />, title: 'Admin Metrics', desc: 'Sophisticated Next.js panel for tracking chatbot performance.' },
      ],
      link: 'https://thefurniturepark.com/'
    },
    {
      tag: 'Full Stack AI Solution',
      title: 'Nightclub AI Chatbot',
      description: 'Developed a full-stack, document-aware AI chatbot for a Nightclub Management platform. Implemented ConversationBufferMemory with optimized token budgeting to support complex multi-turn interactions.',
      features: [
        { icon: <Bot size={20} />, title: 'LangChain & OpenAI', desc: 'Document-aware AI system with optimized context compression.' },
        { icon: <Server size={20} />, title: 'Full-Stack Next.js', desc: 'Integrated with Python backend and MongoDB for scalability.' },
        { icon: <Zap size={20} />, title: 'Memory Management', desc: 'ConversationBufferMemory for multi-turn reliability.' },
        { icon: <ShieldCheck size={20} />, title: 'Admin Interface', desc: 'Streamlit-based admin dashboard with error handling.' },
      ],
      link: 'https://stgnightclubs.converiqo.ai/'
    },
    {
      tag: 'AI & Data Retrieval',
      title: 'RAG Search Engine',
      description: 'Built a Retrieval-Augmented Generation (RAG) based chatbot using LangChain, FAISS, and OpenAI. Designed an efficient retriever–reader architecture for context-aware response generation.',
      features: [
        { icon: <Database size={20} />, title: 'FAISS Vector DB', desc: 'Efficient semantic search and document retrieval.' },
        { icon: <Code2 size={20} />, title: 'Advanced Chunking', desc: 'Optimized document processing for better accuracy.' },
        { icon: <ShieldCheck size={20} />, title: 'Metadata Filtering', desc: 'Enhanced search relevance with metadata-based filtering.' },
        { icon: <Zap size={20} />, title: 'Semantic Ranking', desc: 'Improved response relevance using semantic ranking.' },
      ],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured <span className="text-gradient">Projects</span></h2>
          <p className={styles.sectionSub}>Architecting intelligent systems with cutting-edge AI technologies.</p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <div className={styles.tag}>{project.tag}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.featureGrid}>
                  {project.features.map((f, i) => (
                    <div key={i} className={styles.feature}>
                      <div className={styles.featureIcon}>{f.icon}</div>
                      <div>
                        <h4 className={styles.featureTitle}>{f.title}</h4>
                        <p className={styles.featureDesc}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.link} className={styles.link}>
                    Details <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className={styles.projectImage}>
                <div className={styles.imageOverlay}></div>
                <div className={index % 2 === 0 ? styles.mockup : styles.mockupAlt}>
                  <div className={styles.mockupHeader}>
                    <div className={styles.mockupDot}></div>
                    <div className={styles.mockupDot}></div>
                    <div className={styles.mockupDot}></div>
                  </div>
                  <div className={styles.mockupBody}>
                    {index % 2 === 0 ? (
                      <>
                        <div className={styles.chatMessage}>How can I help you?</div>
                        <div className={styles.chatMessageUser}>{index === 0 ? 'Looking for a sofa.' : 'Reserve a table.'}</div>
                        <div className={styles.chatMessageBot}>
                          {index === 0 ? 'We have several premium options...' : 'Sure! Which club?'}
                        </div>
                      </>
                    ) : (
                      <div className={styles.codeSnippet}>
                        <code>
                          {index === 1 ? (
                            <>
                              def handle_query(query):<br />
                              &nbsp;&nbsp;memory.add_user_message(query)<br />
                              &nbsp;&nbsp;return llm.predict(query)
                            </>
                          ) : (
                            <>
                              retriever = vector_db.as_retriever()<br />
                              qa_chain = RetrievalQA.from_chain_type(<br />
                              &nbsp;&nbsp;llm=OpenAI(), retriever=retriever<br />
                              )
                            </>
                          )}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
