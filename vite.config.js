import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [react()],
    // Use '/' for development and '/Nathan-Castle.github.io/' for production
    base: isBuild ? '/Nathan-Castle.github.io/' : '/',
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
  };
});
