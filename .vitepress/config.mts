import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Celtrius' Documentation",
  description: "Docs about anything and everything",
  outDir: "./docs",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    de: {
      label: "German",
      lang: "de", // optional, will be added  as `lang` attribute on `html` tag
      link: "/de/guide", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
