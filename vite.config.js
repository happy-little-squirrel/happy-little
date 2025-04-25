import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Unfonts from 'unplugin-fonts/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Merriweather',
            local: 'Merriweather',
            src: 'src/assets/fonts/Merriweather-Black.ttf',
            display: 'swap',
          },
          {
            name: 'Montserrat',
            src: 'src/assets/fonts/Montserrat.ttf',
            display: 'swap',
          },
        ],
      },
      injectTo: 'head',
      preload: true,
    }),
  ],
});
