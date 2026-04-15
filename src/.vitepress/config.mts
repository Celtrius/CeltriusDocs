import { defineConfig } from "vitepress";

// Theme related config
import headConfig from "./config/headConfig";
// For use with loading Markdown plugins
import themeConfig from "./config/themeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: headConfig,
  title: "Celtrius' Documentation",
  description: "Documentation about anything and everything",
  cleanUrls: true,
  outDir: "../docs",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    de: {
      label: "German",
      lang: "de", // optional, will be added  as `lang` attribute on `html` tag
      link: "/de", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
  themeConfig,
  rewrites: {
    "en/:slug*": ":slug*",
  },
});
