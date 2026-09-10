// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://paligakrzychu.github.io',
	base: '/ai-alm-oss-landing',
	vite: {
		plugins: [tailwindcss()],
	},
});
