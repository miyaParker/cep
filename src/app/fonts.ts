import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google';

export const matter = localFont({
    variable: '--font-matter',
    src: './assets/fonts/Matter-Regular.woff2',
    display: 'swap',
    style: 'normal'
});

export const neue = localFont({
    variable: '--font-neue',
    src: [
        {
            path: './assets/fonts/NeueMontreal-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: './assets/fonts/NeueMontreal-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './assets/fonts/NeueMontreal-Light.woff2',
            weight: '300',
            style: 'normal'
        }
    ]
});

export const dm_sans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});
