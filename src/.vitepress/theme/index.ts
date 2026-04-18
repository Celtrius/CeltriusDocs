// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "virtual:uno.css";
import "vitepress-plugin-folder-tree/style.css";
import ImageViewerP from "@miletorix/vitepress-image-viewer"; //[!code ++]
import "@miletorix/vitepress-image-viewer/style.css"; //[!code ++]
import type { EnhanceAppContext } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    ImageViewerP(app);
  },
} satisfies Theme;
