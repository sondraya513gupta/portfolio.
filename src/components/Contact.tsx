'use client';

import React from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [result, setResult] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dea724c4-a281-4969-bfec-be7238f9bb4b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus('error');
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus('error');
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Let's <span className="text-gradient">Connect</span></h2>
            <p className={styles.desc}>
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>sondraya513gupta@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91-7017802302</p>
                </div>
              </div>
              <div className={styles.socials}>
                <a href="https://github.com/sondraya513gupta" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/sondrya-gupta/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" name="name" required placeholder="John Doe" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea name="message" required placeholder="Your message here..." className={styles.textarea}></textarea>
            </div>
            
            {status !== 'idle' && (
              <div className={`${styles.feedback} ${styles[status]}`}>
                {status === 'success' && <CheckCircle size={18} />}
                {status === 'error' && <AlertCircle size={18} />}
                {result}
              </div>
            )}

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'} 
              {status !== 'submitting' && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
