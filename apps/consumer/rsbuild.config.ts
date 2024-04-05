// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
	server: {
		port: 2000,
	},
	dev: {
		// It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
		assetPrefix: "http://localhost:2000",
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			appendPlugins([
				new ModuleFederationPlugin({
					name: "consumer",
					remotes: {
						producer: "producer@http://localhost:3000/mf-manifest.json",
					},
					exposes: {
						"./root": "./src/routes/root.tsx",
					},
					shared: {
						react: {
							singleton: true,
							requiredVersion: "^17.0.0",
						},
						"react-dom": {
							singleton: true,
							requiredVersion: "^17.0.0",
						},
						"@tanstack/react-router": {
							singleton: true,
							requiredVersion: "^0.0.1",
						},
					},
				}),
			]);
		},
	},
	plugins: [pluginReact()],
});
