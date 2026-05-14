import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://www.wonderdots.ch",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  vite: {
    resolve: {
      alias: {
        "@lib": path.resolve("src/lib"),
        "@utils": path.resolve("src/utils"),
        "@components": path.resolve("src/components"),
        "@layouts": path.resolve("src/layouts"),
        "@assets": path.resolve("src/assets"),
        "assets": path.resolve("src/assets"),
        "@pages": path.resolve("src/pages"),
      },
    },
  },
});
