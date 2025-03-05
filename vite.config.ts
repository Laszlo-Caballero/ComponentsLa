import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import preserveUseClientDirective from "rollup-plugin-preserve-use-client";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({ rollupTypes: true }),
    preserveUseClientDirective(),
  ],
  build: {
    lib: {
      entry: {
        index: "./src/main.ts",
        hooks: "./src/hooks/index.ts",
      },
      name: "componentsLa",
      fileName: (format, entry) => `${entry}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
