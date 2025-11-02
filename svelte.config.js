import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors

	extensions: ['.svelte', '.svx'],

	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
		// default options
		pages: 'build',
		assets: 'build',
		fallback: 'index.html',
		precompress: false,
		strict: true
		}),
    paths: {
      base: '' // <--- empty for user/organization sites
    }
  }
};

export default config;
