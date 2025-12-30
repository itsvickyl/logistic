import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Employment Services - Vision Services',
};

export default function Employment() {
    return (
        <div className="container section">
            <div className={styles.hero}>
                <h1>Employment Services</h1>
                <p>Connecting Talent with Opportunity</p>
            </div>

            <div className={styles.content}>
                <div className={styles.main}>
                    <h2>Workforce Solutions</h2>
                    <p>
                        At Vision Services, we understand that people are the biggest asset of any organization.
                        Our comprehensive recruitment and staffing solutions are designed to help you build a strong,
                        capable, and motivated workforce.
                    </p>

                    <div className={styles.serviceItem}>
                        <h3>Permanent Staffing</h3>
                        <p>
                            We handle the entire recruitment life cycle, from sourcing to onboarding.
                            Our rigorous screening process ensures you get candidates who not only fit the job description but also your company culture.
                        </p>
                    </div>

                    <div className={styles.serviceItem}>
                        <h3>Contract & Temporary Staffing</h3>
                        <p>
                            Need resources for a specific project or to cover seasonal demand?
                            Our pool of pre-vetted contact professionals is ready to deploy at short notice.
                        </p>
                    </div>

                    <div className={styles.serviceItem}>
                        <h3>RPO (Recruitment Process Outsourcing)</h3>
                        <p>
                            Entrust your entire recruitment function to us. We act as your internal recruitment department,
                            managing everything from job profiling to offer management.
                        </p>
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.contactCard}>
                        <h3>Looking to Hire?</h3>
                        <p>Get in touch with our HR consultants today.</p>
                        <Link href="/contact" className="btn btn-primary">Request Talent</Link>
                    </div>

                    <div className={styles.contactCard} style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ color: '#334155' }}>Looking for a Job?</h3>
                        <p>Browse our current openings or submit your resume.</p>
                        <Link href="/contact" className="btn btn-accent">Submit Resume</Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
