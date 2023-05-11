import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import { matter, neue, dm_sans } from '@/app/fonts';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html
            lang='en'
            className={`${matter.variable} ${neue.variable} ${dm_sans.variable}`}
        >
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
