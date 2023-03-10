/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'app-specific': 'min-content 1fr min-content',
			},
		},
	},
	plugins: [],
};
