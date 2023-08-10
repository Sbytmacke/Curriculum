import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Path relative
  plugins: [react()],
  build: {
    outDir: "docs", // Cambia la carpeta de salida a "docs" para github pages
  },
});
