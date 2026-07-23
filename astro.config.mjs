// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import solid from "@astrojs/solid-js";

import sitemap from '@astrojs/sitemap';

import playformCompress from "@playform/compress";

import partytown from "@astrojs/partytown";

// Dev-only allowance so Impeccable live mode can load.
const __impeccableLiveDev =
    process.env.NODE_ENV === "development" ? " http://localhost:8400" : "";

export default defineConfig({
    site: "https://nussbaumer.dev",
    // Keep v6 whitespace handling: the v7 default ('jsx') strips spaces
    // between text and inline elements across line breaks ("on <a>" → "on<a>").
    compressHTML: true,
    prefetch: {
        prefetchAll: true,
    },
    integrations: [solid(), sitemap(), playformCompress({
        // Disabled: the default csso processor drops Tailwind v4's
        // `@media (width >= …)` range syntax, breaking responsive variants.
        CSS: false,
    }), partytown()],
    vite: {
        plugins: [tailwindcss()],
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
            "Content-Security-Policy": `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.spritkenig.com${__impeccableLiveDev}; connect-src 'self'${__impeccableLiveDev}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self' http://localhost:4321; upgrade-insecure-requests;`
        }
    }
});
