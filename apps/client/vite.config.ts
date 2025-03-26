import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
    //root: "apps/client/",
    resolve: {
        alias: {
          "@/client/": `${searchForWorkspaceRoot(process.cwd())}/apps/client/src/`,
        },
      },
});
