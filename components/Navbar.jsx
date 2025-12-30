"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    Vision Services
                </Link>

                <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>

                    <div className={styles.dropdown}>
                        <Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
                        {/* Simple dropdown concept via CSS hover or click could go here, 
                            keeping it simple for now as per requirements */}
                    </div>

                    <Link href="/clients" className={styles.navLink} onClick={() => setIsOpen(false)}>Clients</Link>
                    <Link href="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>

                    <Link href="/contact" className={`btn btn-accent ${styles.ctaBtn}`} onClick={() => setIsOpen(false)}>
                        Get Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
