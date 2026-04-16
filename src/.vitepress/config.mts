import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from "unocss";
import { withFolderTree } from "vitepress-plugin-folder-tree";

// Theme related config
import headConfig from "./config/headConfig";
// For use with loading Markdown plugins
import themeConfig from "./config/themeConfig";

import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitepress.dev/reference/site-config
export default withFolderTree(
  defineConfig({
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

    vite: {
      resolve: {
        alias: {
          "@comp": path.resolve(__dirname, "../components"),
        },
      },
      plugins: [
        UnoCSS({
          presets: [
            presetUno(),
            presetIcons({
              extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
              },
            }),
            presetAttributify(),
          ],
          transformers: [transformerDirectives()],
        }),
      ],
    },
  }),
);
