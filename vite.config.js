import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/laurentcasagrande.github.io/",
	plugins: [sveltekit()]
});
