// @ts-check
import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solid from "@astrojs/solid-js";

import sitemap from '@astrojs/sitemap';

import playformCompress from "@playform/compress";

import partytown from "@astrojs/partytown";

export default defineConfig({
    site: "https://nussbaumer.dev",
    prefetch: {
        prefetchAll: true,
    },
    integrations: [tailwind({
        applyBaseStyles: false,
    }), solid(), sitemap(), playformCompress(), partytown()],
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
            "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.spritkenig.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self' http://localhost:4321; upgrade-insecure-requests;"
        }
    }
});