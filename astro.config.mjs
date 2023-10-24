import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import compressor from 'astro-compressor'
import prefetch from '@astrojs/prefetch'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	experimental: {
		viewTransitions: true,
		assets: true,
	},
	site: 'http://localhost:3000',
	twitter: 'html4seo',
	integrations: [tailwind(), compressor(), prefetch(), sitemap()],
})
