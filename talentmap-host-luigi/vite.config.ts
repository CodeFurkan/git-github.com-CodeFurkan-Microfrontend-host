import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 5173,
		strictPort: true,
		cors: {
			origin: "http://localhost:3001/talent-view.js",
			methods: ["GET", "POST", "OPTIONS"],
		},
		headers: {
			"Access-Control-Allow-Origin": "http://localhost:3001/talent-view.js",
			"Access-Control-Allow-Headers": "http://localhost:3001/talent-view.js",
		},
	},
});
