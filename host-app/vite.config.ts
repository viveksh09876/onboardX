import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        mainApp: "http://localhost:3000/main/remoteEntry.js",
        analystApp: "http://localhost:3000/analyst/remoteEntry.js",
        qcApp: "http://localhost:3000/qc/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
