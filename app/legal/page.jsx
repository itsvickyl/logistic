export const metadata = {
    title: 'Legal - Vision Services',
};

export default function Legal() {
    return (
        <div className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1>Legal Information</h1>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Privacy Policy</h2>
                    <p style={{ marginBottom: '1rem' }}>Last updated: December 2025</p>
                    <p>
                        Vision Services ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you use our website and services.
                        We only collect information necessary to provide our employment and logistics services. We do not sell your personal data to third parties.
                    </p>
                </section>

                <section>
                    <h2>Terms of Service</h2>
                    <p>
                        By accessing our website, you agree to be bound by these Terms of Service.
                        Our services are provided "as is" and we reserve the right to modify or discontinue any service with or without notice.
                        For logistics services, specific liability terms are outlined in individual service contracts.
                    </p>
                </section>
            </div>
        </div>
    );
}
