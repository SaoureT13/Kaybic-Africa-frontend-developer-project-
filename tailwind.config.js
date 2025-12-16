/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1768AB',
        background: {
          DEFAULT: '#FFFFFF',
          card: '#EFF8FF',
        },
        text: {
          primary: '#000000',
          secondary: '#757575',
          tertiary: '#616161',
          inverse: '#FFFFFF',
        },
        status: {
          success: '#4CAF50',
          pending: '#FFA500',
          failed: '#F44336',
        },
        divider: '#E0E0E0',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      borderRadius: {
        button: '8px',
        card: '12px',
        badge: '20px',
      },
    },
  },
  plugins: [],
}
