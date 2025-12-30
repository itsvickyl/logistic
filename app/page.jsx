import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import styles from './page.module.css';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1>Reliable Employment & logistics Solutions</h1>
                        <p>From connecting talent to opportunities, to moving your world safely. We are Vision Services.</p>
                        <div className={styles.heroButtons}>
                            <Link href="/services" className="btn btn-primary">Our Services</Link>
                            <Link href="/contact" className="btn btn-accent">Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-gray">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Our Core Services</h2>
                        <p>Excellence in every move, precision in every hire.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        <ServiceCard
                            title="Employment Services"
                            description="Connecting businesses with top-tier talent and providing comprehensive staffing solutions."
                            link="/services/employment"
                            icon="🤝"
                        />
                        <ServiceCard
                            title="Logistics Services"
                            description="Efficient transportation and supply chain management for businesses of all sizes."
                            link="/services/logistics"
                            icon="🚚"
                        />
                        <ServiceCard
                            title="Household Relocation"
                            description="Safe and secure moving services for your home, handling your belongings with care."
                            link="/services/logistics"
                            icon="🏠"
                        />
                        <ServiceCard
                            title="Office Relocation"
                            description="Minimize downtime with our professional office moving and setup services."
                            link="/services/logistics"
                            icon="🏢"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Teaser */}
            <section className="section">
                <div className="container">
                    <div className={styles.splitSection}>
                        <div className={styles.splitText}>
                            <h2>Why Choose Vision Services?</h2>
                            <ul className={styles.featureList}>
                                <li>✅ <strong>Expert Team:</strong> Professionals with years of industry experience.</li>
                                <li>✅ <strong>Customer First:</strong> Tailored solutions to meet your specific needs.</li>
                                <li>✅ <strong>Reliability:</strong> We deliver on time, every time.</li>
                                <li>✅ <strong>Safety focused:</strong> Strict protocols to ensure safety of goods and people.</li>
                            </ul>
                            <Link href="/why-choose-us" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                                Read More About Us
                            </Link>
                        </div>
                        <div className={styles.splitImage}>
                            {/* In a real app, use next/image here */}
                            <div className={styles.placeholderImage}>Vision Services Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Ready to streamline your business?</h2>
                    <p>Contact us today for a free consultation or quote.</p>
                    <Link href="/contact" className="btn btn-accent">Contact Us Now</Link>
                </div>
            </section>
        </>
    );
}
