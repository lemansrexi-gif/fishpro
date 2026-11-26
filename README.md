# FISHPRO (PWA)

Aplicación web instalable (React + Vite) para pesca. Fase 2: menú principal.

## Probar en un computador
Requisitos: Node.js 22 LTS.

```bash
npm install
npm run dev        # http://localhost:5173/fishpro/
npm run build      # genera la carpeta dist/ con el Service Worker y el manifest
npm run preview    # prueba la versión compilada (el Service Worker solo funciona aquí, no en "dev")
```

## Publicar (GitHub Pages)
1. Crea el repositorio `fishpro` en GitHub y sube TODO el contenido de esta carpeta (incluida `.github/`) a la rama `main`.
2. En GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Cada vez que subas cambios a `main`, GitHub compila y publica en `https://<tu-usuario>.github.io/fishpro/`.
4. Abre esa dirección en el celular (Chrome) y usa el menú → "Instalar app".

Si el repositorio tiene otro nombre, cambia `REPO_NAME` en `vite.config.js`.

## PWABuilder
1. Con la app publicada, entra a https://www.pwabuilder.com e introduce la dirección de GitHub Pages.
2. Revisa el informe (manifest, Service Worker, seguridad).
3. Elige "Package for stores" → Android.

## Estructura
```
index.html              página base (meta tags, iconos)
vite.config.js          Vite + PWA (manifest.json y Service Worker)
public/                 favicon, icons/ (48 a 512, maskable, Apple), screenshots/
src/main.jsx, App.jsx   punto de entrada y pantalla activa
src/Screens/            pantallas (inicio con el menú, 4 funciones y estado)
src/Components/         componentes reutilizables
src/Navigation/         rutas (#), hook useRoute y las 4 secciones del menú
src/Theme/              colores, espaciados, estilos globales
src/Services/           comprobaciones del dispositivo (futuro: servicios externos)
src/Camera|AI|Database|Library/   (futuro)
.github/workflows/      publicación automática en GitHub Pages
```

## Menú principal
Cuatro tarjetas: Identificar pescado, Asistente de pesca, Biblioteca de peces y Mis capturas. Cada una abre su pantalla (por ahora solo estructura: título, descripción y botón para volver al inicio). Las secciones se definen una sola vez en `src/Navigation/sections.js`.

## Pantalla de estado
Muestra comprobaciones reales del dispositivo con cuatro estados: correcto, normal (informativo), aviso y problema real. Las funciones pendientes (Cámara, IA, Biblioteca, Mis capturas, Servicios) se muestran aparte y no cuentan como errores.

## Colores
El azul oscuro `#0A2342` está en 3 sitios: `src/Theme/theme.css`, `vite.config.js` (THEME) e `index.html` (theme-color).
