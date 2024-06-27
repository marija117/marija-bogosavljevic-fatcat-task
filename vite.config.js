import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@homework-task': path.resolve(__dirname, './src'),
        },
    },
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
});
