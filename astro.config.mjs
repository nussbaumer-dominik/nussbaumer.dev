// @ts-check
import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: "https://nussbaumer.dev",
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        preact(),
        sitemap()
    ],
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: '[name]-[hash].js',
                },
            },
        },
    },
    server: {
        headers: {
            "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.spritkenig.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
        }
    }
});