import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

export default defineConfig({
	server: { port: 3000 },
	adapter: node({
		mode: 'standalone',
	}),
});
