// tailwind.config.js
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'oda-blue': '#1E3A8A',
          'oda-gradient-from': '#1E3A8A',
          'oda-gradient-to': '#3B82F6',
        },
      },
    },
    plugins: [],
  }