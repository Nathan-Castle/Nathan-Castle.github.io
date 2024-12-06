import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Nathan-Castle.github.io/', // Update this to match your GitHub Pages repo name
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (extType === 'css') return 'assets/css/[name]-[hash][extname]';
          if (extType === 'js') return 'assets/js/[name]-[hash][extname]';
          return 'assets/images/[name]-[hash][extname]'; // Images go to assets/images
        },
      },
    },
  },
});
