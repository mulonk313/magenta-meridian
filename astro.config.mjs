import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    output: 'server',
    integrations: [
        svelte(),
        tailwind({
            config: {
                applyBaseStyles: true,
            },
        }),
    ],
    optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    }
});