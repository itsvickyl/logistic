import styles from './StatsStrip.module.css';

const StatsStrip = () => {
    return (
        <section className={styles.statsSection}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.statItem}>
                    <span className={styles.number}>10+</span>
                    <span className={styles.label}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.number}>500+</span>
                    <span className={styles.label}>Relocations Managed</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.number}>200+</span>
                    <span className={styles.label}>Happier Clients</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.number}>PAN-India</span>
                    <span className={styles.label}>Logistics Support</span>
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
