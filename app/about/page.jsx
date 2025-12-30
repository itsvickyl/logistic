import styles from './page.module.css';

export const metadata = {
    title: 'About Us - Vision Services',
};

export default function About() {
    return (
        <div className="container section">
            <div className={styles.aboutContainer}>
                <h1>About Vision Services</h1>
                <p className={styles.lead}>
                    Vision Services is a premier provider of comprehensive solutions in Employment and Logistics.
                    Established with a commitment to excellence, we have grown to become a trusted partner for businesses and individuals alike.
                </p>

                <div className={styles.contentBlock}>
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2010, Vision Services started with a simple mission directly addressing the gap in reliable manpower and efficient logistics.
                        Over the years, we have expanded our fleet, refined our recruitment processes, and adopted cutting-edge technology to serve our clients better.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>15+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Corporate Clients</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10k+</span>
                        <span className={styles.statLabel}>Successful Moves</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
