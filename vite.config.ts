import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  let basePath = process.env.BASE_PATH;

  if (!basePath) {
    const cnamePath = path.resolve(__dirname, 'public/CNAME');
    const hasCNAME = fs.existsSync(cnamePath) && fs.readFileSync(cnamePath, 'utf-8').trim().length > 0;

    if (hasCNAME) {
      basePath = '/';
    } else if (process.env.GITHUB_REPOSITORY) {
      const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
      basePath = `/${repoName}/`;
    } else {
      basePath = '/';
    }
  }

  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
