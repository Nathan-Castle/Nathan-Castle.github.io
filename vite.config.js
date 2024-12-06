// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ command }) => {
//   const isBuild = command === 'build';

//   return {
//     plugins: [react()],
//     base: isBuild ? '/Nathan-Castle.github.io/' : '/', // Use '/' for dev and '/Nathan-Castle.github.io/' for build
//     build: {
//       rollupOptions: {
//         output: {
//           assetFileNames: (assetInfo) => {
//             const extType = assetInfo.name.split('.').pop();
//             if (extType === 'css') return 'assets/css/[name]-[hash][extname]';
//             if (extType === 'js') return 'assets/js/[name]-[hash][extname]';
//             return 'assets/images/[name]-[hash][extname]'; // Images go to assets/images
//           },
//         },
//       },
//     },
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [react()],
    base: isBuild ? '/Nathan-Castle.github.io/' : '/', // GitHub Pages base for build, '/' for dev
    build: {
      outDir: 'dist',
    },
  };
});
