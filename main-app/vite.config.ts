import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "/main/",
  plugins: [
    react(),
    federation({
      name: "mainApp",
      filename: "remoteEntry.js",
      publicPath: "http://localhost:3000/main/",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],
  server: {
    port: 5001,
    host: "0.0.0.0",
  },
  build: {
    target: "chrome89",
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        sanitizeFileName: (name) => name.replace(/\x00/g, "").replace(/\.cjs$/, ""),
      },
    },
  },
  preview: {
    cors: true,
  },
});
