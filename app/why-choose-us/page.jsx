import styles from '../mission-vision/page.module.css';

export const metadata = {
    title: 'Why Choose Us - Vision Services',
};

export default function WhyChooseUs() {
    return (
        <div className="container section">
            <div className={styles.mvContainer}>
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Partner With Vision Services?</h1>

                <div className={styles.valuesSection} style={{ marginTop: 0 }}>
                    <ul>
                        <li>
                            <strong>Industry Expertise</strong>
                            We possess over a decade of deep industry knowledge in both HR management and logistics supply chains.
                        </li>
                        <li>
                            <strong>End-to-End Solutions</strong>
                            From hiring the right people to moving your office, we handle it all, minimizing vendor management headaches for you.
                        </li>
                        <li>
                            <strong>Advanced Technology</strong>
                            We use modern tracking systems for logistics and AI-driven matching for recruitment.
                        </li>
                        <li>
                            <strong>Customer-Centric Approach</strong>
                            Our dedicated support team is available 24/7 to address your concerns.
                        </li>
                        <li>
                            <strong>Cost Efficiency</strong>
                            We offer competitive pricing without compromising on quality or safety.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
