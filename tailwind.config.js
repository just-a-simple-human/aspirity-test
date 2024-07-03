/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-primary": "#141414",
      "bg-secondary": "#232324",
      "bg-tertiary": "#202021",
      "text-primary": "#E1E3E6",
      "text-secondary": "#B0B1B6",
      "text-tertiary": "#76787A",
      border: "#363738",
      modal: "#303030",
      accent: "#0047BB",
      'accent-hover': "#003182",
      'accent-focused': "#4C7ECF",
      success: "#2E7D32",
      error: "#D32F2F"
    },
    fontFamily: {
      sans: ["var(--font-poppins)"]
    },
    screens: {
      'desktop': '661px'
    }
  },
  plugins: [],
};
