/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        custom: '600px'
      },
      colors: {
        primary: '#6d28d9'
      },
      height: {
        blogItem: '260px',
        blogTitle: '64px',
        blogShortContent: '144px'
      },
      maxWidthwidth: {
        blogItem: '248px'
      },
      maxHeight: {
        blogTitle: '64px'
      }
    }
  },
  plugins: []
}
