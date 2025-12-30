export const metadata = {
    title: 'Environment & Culture - Vision Services',
};

export default function Environment() {
    return (
        <div className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem' }}>Our Environment & Culture</h1>

                <div style={{ marginBottom: '3rem' }}>
                    <h2>Work Culture</h2>
                    <p style={{ marginBottom: '1rem', color: '#334155' }}>
                        At Vision Services, we believe that a happy workforce leads to happy clients.
                        We foster an inclusive, collaborative, and growth-oriented environment.
                    </p>
                    <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: '#334155' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Continuous Learning & Development</li>
                        <li style={{ marginBottom: '0.5rem' }}>Diversity & Inclusion Initiatives</li>
                        <li style={{ marginBottom: '0.5rem' }}>Safety-First Mindset</li>
                    </ul>
                </div>

                <div>
                    <h2>Sustainability</h2>
                    <p style={{ marginBottom: '1rem', color: '#334155' }}>
                        We are committed to reducing our environmental footprint. Our logistics division is actively adopting eco-friendly practices.
                    </p>
                    <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: '#334155' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Fuel-efficient vehicle fleet</li>
                        <li style={{ marginBottom: '0.5rem' }}>Paperless operations where possible</li>
                        <li style={{ marginBottom: '0.5rem' }}>Recyclable packing materials</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
