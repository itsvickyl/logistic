"use client";
import { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'employment',
        type: 'business', // or 'household' for logistics
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    return (
        <div className="container section">
            <div className={styles.splitLayout}>
                {/* Contact Info Side */}
                <div className={styles.contactInfo}>
                    <h1>Get in Touch</h1>
                    <p className={styles.lead}>Ready to start your next project? Contact us today for a free consultation.</p>

                    <div className={styles.infoBlock}>
                        <h3>📍 Visit Us</h3>
                        <p>123 Corporate Park, Tech Hub<br />Bangalore, Karnataka 560001</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>📞 Call Us</h3>
                        <p>+91 98765 43210<br />+91 12345 67890</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>✉️ Email</h3>
                        <p>hello@visionservices.com<br />careers@visionservices.com</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className={styles.formContainer}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Thank you!</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We have received your message and will get back to you within 24 hours.</p>
                            <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="service">Service Interested In</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="employment">Employment / Staffing</option>
                                    <option value="logistics">Logistics / Relocation</option>
                                </select>
                            </div>

                            {formData.service === 'logistics' && (
                                <div className={styles.formGroup}>
                                    <label htmlFor="type">Relocation Type</label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                    >
                                        <option value="household">Household Relocation</option>
                                        <option value="office">Office Relocation</option>
                                        <option value="vehicle">Vehicle Transport</option>
                                        <option value="storage">Warehousing</option>
                                    </select>
                                </div>
                            )}

                            {formData.service === 'employment' && (
                                <div className={styles.formGroup}>
                                    <label htmlFor="type">Hiring For</label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                    >
                                        <option value="business">Corporate / Business</option>
                                        <option value="industrial">Industrial / Factory</option>
                                        <option value="contract">Short-term Contract</option>
                                    </select>
                                </div>
                            )}

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
