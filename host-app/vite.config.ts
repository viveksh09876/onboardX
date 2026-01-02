import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        mainApp: "http://localhost:5001/remoteEntry.js",
        analystApp: "http://localhost:5002/remoteEntry.js",
        qcApp: "http://localhost:5003/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
