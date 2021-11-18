import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({
      pages: "./firebase/public",
      assets: "./firebase/public",
      fallback: "index.html",
    }),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
