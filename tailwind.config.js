/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue-500
        accent: '#10B981', // emerald-500
        neutralLight: '#F9FAFB', // gray-50
        neutralDark: '#1F2937', // gray-800
        error: '#EF4444', // red-500
        warning: '#F59E0B', // amber-500
        success: '#10B981', // emerald-500
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
