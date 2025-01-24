/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '420px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
        extend: {
            colors: {
                alabaster: '#F2E5E3',
                seashell: '#FEEEEC',
                orange: {
                    100: '#ED7636'
                },
                gray: {
                    100: '#ECECEF',
                    200: '#333438',
                    300: '#C8CAD0',
                    400: '#F4F4F5'
                },
                black: {
                    100: '#0E0E10'
                },
                red: {
                    100: '#E23F27'
                }
            },
            fontFamily: {
                matter: ['var(--font-matter)'],
                neue: ['var(--font-neue)'],
                sans: ['var(--font-dm-sans)'],
                luckiest: ['var(--font-luckiest)']
            },
            keyframes: {
                extend: {
                    '0%': { width: '0px' },
                    '100%': { width: '48px' },
                }
            },
            animation: {
                extend: 'extend 1s ease-in',
            }
        }
    },
    plugins: []
};
