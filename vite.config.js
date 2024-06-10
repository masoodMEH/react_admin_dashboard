import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
            public: `${path.resolve(__dirname, './public/')}`,
            components: `${path.resolve(__dirname, './src/components/')}`,
            assets: `${path.resolve(__dirname, './src/assets/')}`,
            contexts: `${path.resolve(__dirname, './src/contexts/')}`,
            core: `${path.resolve(__dirname, './src/core/')}`,
            features: `${path.resolve(__dirname, './src/features/')}`,
            layoutes: `${path.resolve(__dirname, './src/layouts/')}`,
            pages: `${path.resolve(__dirname, './src/pages/')}`,
        },
    },
    plugins: [react()],
});
