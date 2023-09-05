"use client"
import './globals.css';
import React, {ReactNode, useEffect} from 'react';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import {matter, neue, dm_sans} from '@/app/fonts';
import Hotjar from '@hotjar/browser';

const RootLayout = ({children}: { children: ReactNode }) => {

    const siteId = 3641494;
    const hotjarVersion = 6;

    useEffect(() => {
        Hotjar.init(siteId, hotjarVersion);
    }, []);
    return (
        <html
            lang='en'
            className={`${matter.variable} ${neue.variable} ${dm_sans.variable}`}
        >
        <body className="relative">
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        <div id="modal-root"></div>
        </body>
        </html>
    );
};

export default RootLayout;
