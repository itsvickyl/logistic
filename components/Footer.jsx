import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.col}>
                    <h3 className={styles.logo}>Vision Services</h3>
                    <p className={styles.desc}>
                        Your trust, our priority. Providing top-tier Employment and Logistics services tailored to your needs.
                    </p>
                </div>

                <div className={styles.col}>
                    <h4>Quick Links</h4>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/clients">Clients</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.col}>
                    <h4>Services</h4>
                    <Link href="/services/employment">Employment Services</Link>
                    <Link href="/services/logistics">Logistics Services</Link>
                    <Link href="/services/logistics">Household Relocation</Link>
                    <Link href="/services/logistics">Office Relocation</Link>
                </div>

                <div className={styles.col}>
                    <h4>Legal</h4>
                    <Link href="/legal">Privacy Policy</Link>
                    <Link href="/legal">Terms of Service</Link>
                </div>
            </div>

            <div className={styles.credibilityBlock}>
                <div className="container">
                    <p>Vision Services is a registered entity under the Companies Act, 2013. GSTIN: 29ABCDE1234F1Z5</p>
                    <p>Operating in: Bangalore, Mumbai, Delhi-NCR, Chennai, Hyderabad, Pune.</p>
                </div>
            </div>

            <div className={styles.copyright}>
                <div className="container">
                    &copy; {new Date().getFullYear()} Vision Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
