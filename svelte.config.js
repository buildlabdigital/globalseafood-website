import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "./firebase/public",
      assets: "./firebase/public",
      fallback: "index.html",
    }),
    vite: {
      resolve: {
        alias: {
          $components: resolve("src/components"),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  prerender: {
    crawl: true,
    enabled: true,
    onError: "fail",
    entries: ["*"],
  },
};

export default config;
