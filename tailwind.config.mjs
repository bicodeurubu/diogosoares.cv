/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                // Elegant serif for headings, clean sans for body
                display: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                // Light mode palette - warm, culture-focused
                surface: {
                    DEFAULT: '#FDFBF7',      // Warm white background
                    elevated: '#FFFFFF',     // Cards, elevated elements
                    subtle: '#F5F1EB',       // Subtle cream sections
                },
                text: {
                    DEFAULT: '#2D2A26',      // Warm black for headings
                    secondary: '#5C5650',    // Warm gray for body
                    muted: '#8A847D',        // Muted brown for labels
                    inverted: '#FDFBF7',     // Text on dark backgrounds
                },
                accent: {
                    DEFAULT: '#E07A5F',      // Coral/Terracotta - culture, warmth
                    hover: '#C96A51',        // Darker coral for hover
                    subtle: 'rgba(224, 122, 95, 0.12)', // Subtle coral bg
                },
                border: {
                    DEFAULT: '#E8E2D9',      // Warm border
                    strong: '#D4CCC0',       // Stronger borders
                    accent: '#E07A5F',       // Accent borders
                }
            },
            boxShadow: {
                'card': '0 1px 3px rgba(45, 42, 38, 0.06), 0 1px 2px rgba(45, 42, 38, 0.04)',
                'card-hover': '0 4px 12px rgba(224, 122, 95, 0.15), 0 2px 4px rgba(45, 42, 38, 0.08)',
                'glow': '0 0 24px rgba(224, 122, 95, 0.12)',
            },
            borderRadius: {
                'xl': '16px',
                '2xl': '24px',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
