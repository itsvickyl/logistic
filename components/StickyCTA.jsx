import Link from 'next/link';
import styles from './StickyCTA.module.css';

const StickyCTA = () => {
    return (
        <div className={styles.stickyWrapper}>
            <Link href="/contact" className={styles.ctaBtn}>
                Get Free Quote
            </Link>
        </div>
    );
};

export default StickyCTA;
