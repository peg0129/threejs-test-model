import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
	css: {
		preprocessorOptions: {
			scss: {
				// importしたいファイルを記載 
				additionalData: `
				@import "src/styles/foundation/_base.scss";
				@import "src/styles/foundation/_reset.scss";
				@import "src/styles/global/_variable.scss";
				@import "src/styles/global/_mixin.scss";
				@import "src/styles/global/_functions.scss";`
			}
		}}
	},
	includes: [
		'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css'
	],
});
