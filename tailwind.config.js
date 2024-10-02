/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  // Custom colors can be uncommented and added here
		  // background: "var(--background)",
		  // foreground: "var(--foreground)",
		},
	  },
	},
	plugins: [
	  require('daisyui'),
	  require("rippleui"),
	],
	daisyui: {
	  themes: ["light"], // Use only the light theme
	},
	rippleui: {
	  removeThemes: ["dark"], // Remove dark theme from RippleUI
	},
  };
  