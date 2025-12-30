import styles from './page.module.css';

export const metadata = {
    title: 'Our Clients - Vision Services',
};

export default function Clients() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1>Trusted By Industry Leaders</h1>
                <p>We are proud to serve a diverse range of clients across various industries, delivering excellence every time.</p>
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
                <h2>Real Client Stories</h2>
                <div className={styles.testimonialGrid}>
                    <div className={styles.testimonial}>
                        <p>"They handled our office move over a weekend with zero downtime. The IT setup was plug-and-play by Monday morning."</p>
                        <span>— Operations Lead, IT Services Company</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Finding specialized forklift operators was a nightmare until we partnered with Vision. They filled 20+ positions in 2 weeks."</p>
                        <span>— HR Director, Manufacturing Unit, Pune</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Moved my 3BHK from Bangalore to Delhi. Glassware was intact, and the team provided live tracking updates throughout."</p>
                        <span>— Rajesh K., Household Relocation Client</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Their contract staffing flexibility helped us manage the festive season peak without adding fixed costs."</p>
                        <span>— Supply Chain Manager, E-commerce Giant</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
