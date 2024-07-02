import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      i18next: path.resolve(__dirname, "node_modules/i18next"),
      "react-i18next": path.resolve(__dirname, "node_modules/react-i18next"),
    },
  },
});
