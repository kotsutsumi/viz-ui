/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary))',
                secondary: 'hsl(var(--color-secondary))'
            }
        }
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
