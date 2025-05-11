import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 1. Increase chunk size warning limit (in KB)
    chunkSizeWarningLimit: 1000,

    // 2. Smart manual chunking to avoid empty chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendors";
            if (id.includes("react-router-dom")) return "router";
            // Add more libraries below only if you're sure they're used
            // if (id.includes("axios")) return "axios";
          }
        },
      },
    },
  },
});
