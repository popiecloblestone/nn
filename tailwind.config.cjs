/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#06b6d4", // Cyan 500 (Tech Blue)
                "primary-hover": "#0891b2", // Cyan 600
                "background-light": "#F8FAFC",
                "background-dark": "#020617", // Darker Slate/Black
                "slate-800": "#1e293b",
                "slate-900": "#0f172a",
                "neon-accent": "#22d3ee" // Cyan 400
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"]
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                'gradient': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
