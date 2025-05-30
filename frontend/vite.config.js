import react from "@vitejs/plugin-react";
import { defineConfig, searchForWorkspaceRoot } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/portfolio/",
	server: {
		fs: {
			allow: ["../../.."],
		},
	},
});
