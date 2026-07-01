import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@set\/sushi-mantine-react\/core\/styles\.css$/,
        replacement: path.resolve(
          __dirname,
          "../sushi-mantine-react/src/lib/core-styles.scss",
        ),
      },
      {
        find: /^@set\/sushi-mantine-react\/core$/,
        replacement: path.resolve(__dirname, "../sushi-mantine-react/src/lib/core.ts"),
      },
      {
        find: /^@set\/sushi-mantine-react\/icons$/,
        replacement: path.resolve(__dirname, "../sushi-mantine-react/src/lib/icons.ts"),
      },
      {
        find: /^@sushi-mantine-react\/examples\/(.*)$/,
        replacement: path.resolve(__dirname, "../sushi-mantine-react/src/examples/$1"),
      },
    ],
  },
});
