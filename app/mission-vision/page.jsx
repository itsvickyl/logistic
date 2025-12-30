import styles from './page.module.css';

export const metadata = {
    title: 'Mission & Vision - Vision Services',
};

export default function MissionVision() {
    return (
        <div className="container section">
            <div className={styles.mvContainer}>
                <div className={styles.card}>
                    <h1>Our Mission</h1>
                    <p>
                        To empower businesses by providing exceptional human resource solutions and seamless logistics support,
                        fostering growth and efficiency for our partners globally.
                    </p>
                </div>

                <div className={styles.card}>
                    <h1>Our Vision</h1>
                    <p>
                        To be the world's most trusted partner in workforce management and supply chain logistics,
                        setting the standard for reliability, innovation, and customer satisfaction.
                    </p>
                </div>

                <div className={styles.valuesSection}>
                    <h2>Our Core Values</h2>
                    <ul>
                        <li><strong>Integrity:</strong> We conduct our business with the highest standards of professional behavior and ethics.</li>
                        <li><strong>Quality:</strong> We are committed to delivering excellence in every engagement.</li>
                        <li><strong>Safety:</strong> We ensure the safety of our people, your goods, and the environment.</li>
                        <li><strong>Innovation:</strong> We embrace new technologies to improve our services.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
