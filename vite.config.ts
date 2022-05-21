import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import DefineOptions from 'unplugin-vue-define-options/vite';
import VueTypeImports from 'vite-plugin-vue-type-imports';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), VueTypeImports(), DefineOptions()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/components/index.ts'),
			name: 'vue-headless-calendar',
			fileName: format => `vue-headless-calendar.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', 'date-fns'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
