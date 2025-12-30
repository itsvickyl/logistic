import ServiceTabs from '@/components/ServiceTabs';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Services - Vision Services',
};

export default function Services() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1>Comprehensive Solutions</h1>
                <p>Choose from our wide range of professional services designed to move your business forward.</p>
            </div>

            <ServiceTabs />
        </div>
    );
}
