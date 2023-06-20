"use client"
import './globals.css';
import React, {Children, ReactNode, useState} from 'react';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import {matter, neue, dm_sans} from '@/app/fonts';

const RootLayout = ({children}: { children: ReactNode }) => {
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
