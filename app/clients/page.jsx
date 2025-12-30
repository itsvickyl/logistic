import styles from './page.module.css';

export const metadata = {
    title: 'Our Clients - Vision Services',
};

export default function Clients() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1>Trusted By</h1>
                <p>We are proud to serve a diverse range of clients across various industries.</p>
            </div>

            <div className={styles.clientsGrid}>
                <div className={styles.clientLogo}>Acme Corp</div>
                <div className={styles.clientLogo}>Global Tech</div>
                <div className={styles.clientLogo}>Urban Retail</div>
                <div className={styles.clientLogo}>Nexus Logistics</div>
                <div className={styles.clientLogo}>BlueSky Inc</div>
                <div className={styles.clientLogo}>Horizon Group</div>
                <div className={styles.clientLogo}>Starlight Media</div>
                <div className={styles.clientLogo}>Eco Systems</div>
            </div>

            <div className={styles.testimonialsSection}>
                <h2>What Our Clients Say</h2>
                <div className={styles.testimonialGrid}>
                    <div className={styles.testimonial}>
                        <p>"Vision Services made our office move seamless. Highly professional team!"</p>
                        <span>- Sarah J., Operations Manager</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Their recruitment team found us the perfect candidates in record time."</p>
                        <span>- David K., HR Director</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Reliable, safe, and cost-effective. Best logistics partner we've had."</p>
                        <span>- Michael R., Supply Chain Lead</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
