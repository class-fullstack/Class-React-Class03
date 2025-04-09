import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // Đảm bảo Vite copy tệp _redirects và tệp khác từ thư mục public
    assetsInlineLimit: 0,
  },
});
