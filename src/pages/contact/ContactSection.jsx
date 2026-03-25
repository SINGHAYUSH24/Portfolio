import React, { useState } from 'react';
import './ContactSection.css';
import Header from '../../components/header/Header';
import { blueTheme } from '../../theme';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    setFormData({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  };

  return (
    <>
    <Header theme={blueTheme}/>
    <div className="contact-main">
    <section className="contact-section">
      <div className="contact-section__heading">
        <h2 className="contact-section__title">
          Get In Touch with <span className="contact-section__title-accent">Me</span>
        </h2>
        <p className="contact-section__subtitle">
          Want to Hire or collaborate on a Project? Let's discuss how we can bring your ideas to life. I'm always excited to work on new challenges and collaborate with amazing people.
        </p>
      </div>

      <div className="contact-section__content">
        <div className="contact-section__info">
          <h3 className="contact-section__info-title">Contact Details</h3>

          <div className="contact-section__details">
            <div className="contact-section__detail">
              <div className="contact-section__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact-section__detail-label">Location</div>
                <div className="contact-section__detail-value">Punjab, India</div>
                <div className="contact-section__detail-sub">Lovely Professional University, Phagwara</div>
              </div>
            </div>

            <div className="contact-section__detail">
              <div className="contact-section__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <div className="contact-section__detail-label">Email</div>
                <div className="contact-section__detail-value">ayushsingh123102@gmail.com</div>
                <div className="contact-section__detail-sub">Feel free to drop me a mail</div>
              </div>
            </div>

            <div className="contact-section__detail">
              <div className="contact-section__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="contact-section__detail-label">Availability</div>
                <div className="contact-section__detail-value">24/7 Response</div>
                <div className="contact-section__detail-sub">Quick turnaround guaranteed</div>
              </div>
            </div>

            <div className="contact-section__detail">
              <div className="contact-section__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="contact-section__detail-label">Call Me</div>
                <div className="contact-section__detail-value">+91 700747 1499</div>
                <div className="contact-section__detail-sub">Available for calls</div>
              </div>
            </div>
          </div>

          <div className="contact-section__socials">
            <h4 className="contact-section__socials-title">Connect With Me</h4>
            <div className="contact-section__socials-icons">
              <a href="https://www.linkedin.com/in/ayush_singh123/" className="contact-section__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/SINGHAYUSH24" className="contact-section__social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="" className="contact-section__social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-section__form-wrap">
          <h3 className="contact-section__form-title">Send Me a Message</h3>
          <p className="contact-section__form-desc">Let's discuss your project and turn your ideas into reality.</p>

          <form className="contact-section__form" onSubmit={handleSubmit}>
            <div className="contact-section__form-row">
              <div className="contact-section__form-group">
                <label className="contact-section__label">First Name <span className="contact-section__required">*</span></label>
                <div className="contact-section__input-wrap">
                  <svg className="contact-section__input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <input type="text" name="firstName" placeholder="Your first name" value={formData.firstName} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact-section__form-group">
                <label className="contact-section__label">Last Name <span className="contact-section__required">*</span></label>
                <div className="contact-section__input-wrap">
                  <svg className="contact-section__input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <input type="text" name="lastName" placeholder="Your last name" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="contact-section__form-group">
              <label className="contact-section__label">Email Address <span className="contact-section__required">*</span></label>
              <div className="contact-section__input-wrap">
                <svg className="contact-section__input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                <input type="email" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>


            <div className="contact-section__form-group">
              <label className="contact-section__label">Your Message <span className="contact-section__required">*</span></label>
              <div className="contact-section__input-wrap contact-section__textarea-wrap">
                <svg className="contact-section__input-icon contact-section__textarea-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <textarea name="message" placeholder="Tell me about your project, ideas, or anything you'd like to discuss..." rows={5} value={formData.message} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="contact-section__submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default ContactSection;
