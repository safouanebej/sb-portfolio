// Replaced the previous external vite-tanstack-config wrapper with an explicit Vite config
// that composes the equivalent plugins used by the project. This removes the external
// wrapper while keeping the app behavior (React plugin, tsconfig paths,
// and tailwind integration).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwind from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    // TanStack Start / Router plugin must come before JSX transform plugins.
    tanstackStart({ server: { entry: "server" } }),
    nitro({ preset: "vercel" }),
    react(),
    tsconfigPaths(),
    tailwind(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/react-start"],
  },
  // Keep a small placeholder for server build targets; the project used a custom
  // tanstackStart wrapper before — the essential behavior (serving `src/server.ts`)
  // is still handled by the project's server entry files.
});
