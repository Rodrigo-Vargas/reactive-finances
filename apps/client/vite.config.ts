import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@/client/": `${searchForWorkspaceRoot(process.cwd())}/apps/client/src/`,
      "@reactive-finances/dto": `${searchForWorkspaceRoot(process.cwd())}/libs/dto/src/`,
    },
  },
});
