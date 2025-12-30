import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Vision Services - Employment & Logistics Solutions',
    description: 'Professional employment and logistics services ranging from household relocation to office storage.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main style={{ minHeight: 'calc(100vh - 200px)' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
