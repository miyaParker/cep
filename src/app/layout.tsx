"use client"
import './globals.css';
import React, {Children, ReactNode, useState} from 'react';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import {matter, neue, dm_sans} from '@/app/fonts';

const RootLayout = ({children}: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <html
            lang='en'
            className={`${matter.variable} ${neue.variable} ${dm_sans.variable}`}
        >
        <body className="relative">
        <Navbar isModalOpen={isModalOpen}/>
        {children}
        <Footer isModalOpen={isModalOpen}/>
        </body>
        </html>
    );
};

export default RootLayout;
