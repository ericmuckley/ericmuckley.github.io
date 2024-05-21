/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				light: 'var(--light)',
				dim: 'var(--dim)',
				dim2: 'var(--dim2)',
				accent: 'var(--accent)',
				link: 'var(--link)',
				link2: 'var(--link2)'
			}
		}
	},
	plugins: []
};
