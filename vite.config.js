import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Nombre del repositorio de GitHub. GitHub Pages publica en https://<usuario>.github.io/<REPO_NAME>/
// Si cambias el nombre del repositorio, cambia solo esta línea.
const REPO_NAME = 'fishpro';
const BASE = `/${REPO_NAME}/`;

// Mismo azul que --navy en src/Theme/theme.css y la etiqueta theme-color de index.html.
const THEME = { color: '#0A2342', background: '#0A2342' };

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // el Service Worker se actualiza solo
      manifestFilename: 'manifest.json',
      includeManifestIcons: false, // no guardar los 12 iconos en caché: solo los necesarios
      manifest: {
        id: BASE,
        name: 'FISHPRO',
        short_name: 'FISHPRO',
        description: 'Identifica, consulta y registra tus capturas.',
        lang: 'es',
        dir: 'ltr',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'portrait',
        theme_color: THEME.color,
        background_color: THEME.background,
        categories: ['sports', 'lifestyle'],
        prefer_related_applications: false,
        icons: [
          { src: 'icons/icon-48.png', sizes: '48x48', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-72.png', sizes: '72x72', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-96.png', sizes: '96x96', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-128.png', sizes: '128x128', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-144.png', sizes: '144x144', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-256.png', sizes: '256x256', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-384.png', sizes: '384x384', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        screenshots: [
          { src: 'screenshots/inicio.png', sizes: '540x960', type: 'image/png', form_factor: 'narrow', label: 'Pantalla de inicio' },
          { src: 'screenshots/estado.png', sizes: '540x960', type: 'image/png', form_factor: 'narrow', label: 'Estado del proyecto' },
        ],
      },
      workbox: {
        // Guarda solo lo necesario para abrir la app sin conexión.
        globPatterns: ['**/*.{js,css,html}', 'manifest.json', 'favicon.svg', 'favicon-32.png', 'icons/icon-192.png', 'icons/icon-512.png'],
        cleanupOutdatedCaches: true,
        navigateFallback: 'index.html',
      },
    }),
  ],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
