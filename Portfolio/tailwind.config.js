/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
  theme: {
    extend: {
		colors: {
			'gray-bg': '#F6F6F6',
			'exp-bg': "#F5EFFF",
			"flutter": '#CDF5FD',
			"ML": "#D7C0AE",
			"Web": "#FFF6F6",
			"contact": "#E2DAD6",
			"footer": "#0F0F0F"
		  },
	},
  },
  plugins: [],
}

