import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mainApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-redux",
        "@reduxjs/toolkit",
      ],
    }),
  ],
  build: {
    target: "esnext",
  },
});
