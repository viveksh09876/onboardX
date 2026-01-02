import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mainApp",
      filename: "remoteEntry.js",
      publicPath: "http://localhost:5001/",
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
    target: "esnext",
  },
});
