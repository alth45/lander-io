import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Menghubungkan font variable dari Next.js Layout
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },

      // Menghubungkan variabel CSS Colors ke nama class Tailwind
      colors: {
        // Semantic Names (Gunakan ini di codingan HTML)
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        foreground: 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        border: 'var(--border)',
        
        brand: {
          50: 'var(--color-brand-50)',
          100: 'var(--color-brand-100)',
          400: 'var(--color-brand-400)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)', // Paling sering dipakai
          900: 'var(--color-brand-900)',
        },
        dark: {
          800: 'var(--color-dark-800)',
          900: 'var(--color-dark-900)',
          950: 'var(--color-dark-950)',
        }
      },
      // Animasi sudah kita handle di globals.css layer utilities, 
      // jadi section animation & keyframes di sini bisa dikosongkan/dihapus 
      // agar config lebih bersih.
    },
  },
  plugins: [],
};
export default config;