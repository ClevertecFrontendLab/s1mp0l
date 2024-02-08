import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import {antdThemeConfig} from "./antd-theme-config";

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@entities': path.resolve(__dirname, 'src/entities'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly'
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: antdThemeConfig
            }
        }
    }
});
