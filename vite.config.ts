import { resolve } from "path";

import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import eslintPlugin from "vite-plugin-eslint";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

import { wrapperEnv } from "./src/utils/getEnv";

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());
	const viteEnv = wrapperEnv(env);

	return {
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			//使用svg图标
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			}),
			//eslint报错信息展示在浏览器界面上
			eslintPlugin(),
			//是否生成包预览
			viteEnv.VITE_REPORT && visualizer(),
			//gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: "gzip",
					ext: ".gz"
				})
		],
		//global css
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		// server config
		server: {
			host: "0.0.0.0", //服务器主机名 如果允许外部访问 可设置为0.0.0.0
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 配置代理跨域
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45",
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		//build configure
		build: {
			outDir: "dist",
			//esbuild打包更快，但是不能去除console.log 去除console使用terser模式
			minify: "esbuild",
			// minify: "terser",
			// terserOptions: {
			// 	compress: {
			// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
			// 		drop_debugger: true
			// 	}
			// },
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};
});
