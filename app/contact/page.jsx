import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us - Vision Services',
};

export default function Contact() {
    return (
        <div className="container section">
            <div className={styles.splitLayout}>
                <div className={styles.contactInfo}>
                    <h1>Get in Touch</h1>
                    <p className={styles.lead}>
                        Have a question or need a quote? Use the form below or reach out to us directly.
                    </p>

                    <div className={styles.infoBlock}>
                        <h3>📍 Address</h3>
                        <p>123 Corporate Park, Tech District<br />Cityname, State, 12345</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>📞 Phone</h3>
                        <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>✉️ Email</h3>
                        <p>info@visionservices.com<br />support@visionservices.com</p>
                    </div>
                </div>

                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service">Interested Service</label>
                            <select id="service">
                                <option>Choose a service...</option>
                                <option>Employment / Staffing</option>
                                <option>Household Relocation</option>
                                <option>Office Relocation</option>
                                <option>Storage</option>
                                <option>Vehicle Transport</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
