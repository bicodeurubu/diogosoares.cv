/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                // Contemporary sans-serif stack - clean, not newspaper-like
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                // Modern, high-contrast palette - NOT pastel
                surface: {
                    DEFAULT: '#FFFFFF',
                    alt: '#F8FAFC', // Very subtle gray
                    dark: '#0F172A', // Deep navy for contrast sections
                },
                text: {
                    DEFAULT: '#0F172A',
                    muted: '#64748B',
                    inverted: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#2563EB', // Vibrant blue
                    hover: '#1D4ED8',
                    subtle: '#DBEAFE',
                },
                border: {
                    DEFAULT: '#E2E8F0',
                    strong: '#CBD5E1',
                }
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
