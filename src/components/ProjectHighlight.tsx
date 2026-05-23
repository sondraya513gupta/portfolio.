'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, Server, ShieldCheck, Zap, Database, Code2, ArrowUpRight, Layers } from 'lucide-react';
import styles from './ProjectHighlight.module.css';

const featuredProject = {
  tag: 'Current Project',
  status: 'Live & In Progress',
  title: 'BankProps AI Chatbot & CRM',
  client: 'BankProps — India\'s Premier Bank Auction Property Platform',
  description: 'Building an enterprise-grade RAG-based AI chatbot and multi-tenant CRM platform for BankProps. The system enables investors to query 200+ vetted residential & commercial auction listings, access deep legal audit reports, and receive real-time guided bidding assistance — all powered by a Python FastAPI backend with S3-backed vector storage.',
  tech: ['RAG / LangChain', 'FastAPI', 'Next.js', 'AWS S3', 'OpenAI', 'PostgreSQL', 'CRM'],
  features: [
    { icon: <Bot size={20} />, title: 'RAG-Powered Chatbot', desc: 'Context-aware AI assistant answering property queries, legal audits & bidding guidance in real time.' },
    { icon: <Database size={20} />, title: 'Investor CRM', desc: 'Centralized CRM to manage investor leads, property interactions, follow-ups & deal pipelines.' },
    { icon: <Server size={20} />, title: 'FastAPI + S3 Backend', desc: 'High-performance Python API with S3-backed FAISS vector store for sub-second retrieval.' },
    { icon: <ShieldCheck size={20} />, title: 'Multi-Tenant Architecture', desc: 'Isolated, secure data environments per tenant — BankProps and future partners.' },
  ],
  link: 'https://bankprops.converiqo.ai/demo',
  chat: [
    { role: 'bot', text: 'Welcome to BankProps! I can help you find vetted auction properties. What are you looking for?' },
    { role: 'user', text: 'Show retail listings near Mumbai under ₹2Cr.' },
    { role: 'bot', text: '4 vetted commercial spaces found — all with legal audits & direct bidding access.' },
  ],
};

const projects = [
  {
    tag: 'Enterprise AI',
    title: 'Furniture Park Chatbot',
    description: 'Enterprise RAG chatbot for The Furniture Park integrated via WordPress custom snippet, with FastAPI backend and real-time admin metrics.',
    tech: ['RAG', 'FastAPI', 'AWS', 'Next.js'],
    features: [
      { icon: <Bot size={18} />, title: 'RAG Implementation' },
      { icon: <Server size={18} />, title: 'FastAPI Backend' },
      { icon: <ShieldCheck size={18} />, title: 'AWS Deployment' },
      { icon: <Zap size={18} />, title: 'Admin Metrics Panel' },
    ],
    link: 'https://furniture.converiqo.ai/demo',
  },
  {
    tag: 'Full Stack AI',
    title: 'Nightclub AI Chatbot',
    description: 'Document-aware AI chatbot for a Nightclub Management platform using ConversationBufferMemory, LangChain, and a Streamlit admin dashboard.',
    tech: ['LangChain', 'OpenAI', 'Next.js', 'MongoDB', 'Streamlit'],
    features: [
      { icon: <Bot size={18} />, title: 'LangChain + OpenAI' },
      { icon: <Server size={18} />, title: 'Full-Stack Next.js' },
      { icon: <Zap size={18} />, title: 'Memory Management' },
      { icon: <ShieldCheck size={18} />, title: 'Admin Dashboard' },
    ],
    link: 'https://stgnightclubs.converiqo.ai/',
  },
  {
    tag: 'AI & Retrieval',
    title: 'RAG Search Engine',
    description: 'LangChain + FAISS-based Retrieval-Augmented Generation engine with advanced document chunking, metadata filtering, and semantic ranking.',
    tech: ['FAISS', 'LangChain', 'OpenAI', 'Python'],
    features: [
      { icon: <Database size={18} />, title: 'FAISS Vector DB' },
      { icon: <Code2 size={18} />, title: 'Advanced Chunking' },
      { icon: <ShieldCheck size={18} />, title: 'Metadata Filtering' },
      { icon: <Zap size={18} />, title: 'Semantic Ranking' },
    ],
    link: '',
  },
];

const ProjectHighlight = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Featured <span className="text-gradient">Projects</span></h2>
            <p className={styles.sectionSub}>Enterprise-grade AI systems architected for real-world scale.</p>
          </motion.div>
        </div>

        {/* ── Featured Project (BankProps) ── */}
        <motion.div
          className={styles.featuredCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow orbs */}
          <div className={styles.glowOrbA} />
          <div className={styles.glowOrbB} />

          <div className={styles.featuredInner}>
            {/* Left — Content */}
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredTag}>★ {featuredProject.tag}</span>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {featuredProject.status}
                </span>
              </div>

              <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
              <p className={styles.featuredClient}>{featuredProject.client}</p>
              <p className={styles.featuredDescription}>{featuredProject.description}</p>

              {/* Tech stack pills */}
              <div className={styles.techRow}>
                {featuredProject.tech.map((t) => (
                  <span key={t} className={styles.techPill}>{t}</span>
                ))}
              </div>

              {/* Feature highlights */}
              <div className={styles.featuredFeatureGrid}>
                {featuredProject.features.map((f, i) => (
                  <div key={i} className={styles.featuredFeature}>
                    <div className={styles.featuredFeatureIcon}>{f.icon}</div>
                    <div>
                      <h4 className={styles.featuredFeatureTitle}>{f.title}</h4>
                      <p className={styles.featuredFeatureDesc}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={featuredProject.link} className={styles.featuredLink} target="_blank" rel="noopener noreferrer">
                View Live Demo <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Right — Chat mockup */}
            <div className={styles.featuredMockupWrap}>
              <div className={styles.featuredMockup}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDotRed} />
                  <div className={styles.mockupDotYellow} />
                  <div className={styles.mockupDotGreen} />
                  <span className={styles.mockupTitle}>BankProps AI Portal</span>
                  <span className={styles.mockupLive}>● Live</span>
                </div>
                <div className={styles.featuredMockupBody}>
                  {featuredProject.chat.map((msg, i) => (
                    <motion.div
                      key={i}
                      className={msg.role === 'user' ? styles.chatUser : styles.chatBot}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    >
                      {msg.role === 'bot' && <span className={styles.chatAvatar}>AI</span>}
                      <span className={msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleBot}>
                        {msg.text}
                      </span>
                    </motion.div>
                  ))}
                  <div className={styles.chatInputRow}>
                    <div className={styles.chatInputFake}>Ask about properties, legal audits…</div>
                    <div className={styles.chatSendBtn}><ArrowUpRight size={14} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other Projects Grid ── */}
        <div className={styles.gridLabel}>
          <Layers size={16} />
          <span>More Projects</span>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.gridCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className={styles.gridCardTop}>
                <span className={styles.gridTag}>{project.tag}</span>
                {project.link && (
                  <a href={project.link} className={styles.gridExternalLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <h3 className={styles.gridTitle}>{project.title}</h3>
              <p className={styles.gridDesc}>{project.description}</p>

              <div className={styles.gridFeatures}>
                {project.features.map((f, i) => (
                  <div key={i} className={styles.gridFeaturePill}>
                    <span className={styles.gridFeatureIcon}>{f.icon}</span>
                    <span>{f.title}</span>
                  </div>
                ))}
              </div>

              <div className={styles.gridTechRow}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.gridTechPill}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectHighlight;
