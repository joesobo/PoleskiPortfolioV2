/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Roboto Mono', 'sans-serif'],
		},
		extend: {
			colors: {
				dark: '#263940',
				light: '#326891',
				accent: '#7698A6',
				black: '#151d23',
				white: '#DAD9D5',
			},
		},
	},
	plugins: [],
}
