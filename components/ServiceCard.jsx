import Link from 'next/link';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, link, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={link} className={styles.link}>
                Learn More &rarr;
            </Link>
        </div>
    );
};

export default ServiceCard;
