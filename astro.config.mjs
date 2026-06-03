// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import astroicon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
    base: '',

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [
        astroicon()
    ],
});