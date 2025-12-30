import Link from 'next/link';
import styles from '../employment/page.module.css'; // Reusing layout styles

export const metadata = {
    title: 'Logistics Services - Vision Services',
};

export default function Logistics() {
    return (
        <div className="container section">
            <div className={styles.hero}>
                <h1>Logistics & Relocation</h1>
                <p>Moving Your World, Safely and Efficiently</p>
            </div>

            <div className={styles.content}>
                <div className={styles.main}>
                    <h2>Comprehensive Logistics Solutions</h2>
                    <p>
                        Whether you are moving your home across town or shipping commercial goods across the country,
                        Vision Services provides the infrastructure and expertise to ensure your items arrive safely and on time.
                    </p>

                    <div className={styles.serviceItem}>
                        <h3>Household Relocation</h3>
                        <p>
                            Our packers and movers are trained to handle delicate items, heavy furniture, and everything in between.
                            We offer full-service packing, loading, transportation, and unpacking.
                        </p>
                    </div>

                    <div className={styles.serviceItem}>
                        <h3>Office & Corporate Relocation</h3>
                        <p>
                            We minimize business downtime with our organized office relocation services.
                            We handle IT equipment, documents, and furniture with specialized care.
                        </p>
                    </div>

                    <div className={styles.serviceItem}>
                        <h3>Secure Storage / Warehousing</h3>
                        <p>
                            Need short-term or long-term storage? Our warehouses are climate-controlled,
                            monitored 24/7, and fully insured to keep your assets safe.
                        </p>
                    </div>

                    <div className={styles.serviceItem}>
                        <h3>Vehicle Transportation</h3>
                        <p>
                            We provide dedicated car and bike carrier services to move your vehicles without adding mileage,
                            ensuring they reach the destination in showroom condition.
                        </p>
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.contactCard}>
                        <h3>Planning a Move?</h3>
                        <p>Get a free, no-obligation quote for your relocation needs.</p>
                        <Link href="/contact" className="btn btn-primary">Get Quote</Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
