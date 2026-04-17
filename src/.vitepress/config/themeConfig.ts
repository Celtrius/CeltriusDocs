import type { DefaultTheme } from "vitepress";

import nav from "./navigation/navbar";
import sidebar from "./navigation/sidebar";

const themeConfig: DefaultTheme.Config = {
  logo: {
    light: "/img/logo/svg/standard_black.svg",
    dark: "/img/logo/svg/standard_white.svg",
    width: 24,
    height: 24,
  },

  nav,
  sidebar,

  outline: [2, 3],

  socialLinks: [
    {
      icon: "patreon",
      link: "https://patreon.com/Celtrius",
      ariaLabel: "YouTube Channel",
    },
    {
      icon: "youtube",
      link: "https://www.youtube.com/@Celtrii",
      ariaLabel: "YouTube Channel",
    },
    {
      icon: "discord",
      link: "https://discord.gg/WEEKAvK8fQ",
      ariaLabel: "Discord Server",
    },
    {
      icon: "x",
      link: "https://x.com/TheRealCeltrius",
      ariaLabel: "X Page",
    },
    { icon: "instagram", link: "https://instagram.com/celtrius", ariaLabel: "Instagram Page" },
    {
      icon: "github",
      link: "https://github.com/Celtrius",
      ariaLabel: "Project GitHub",
    },
  ],

  footer: {
    message:
      '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Open-source Apache Licensed</a> <span class="divider">|</span> <a href="/privacy/">Privacy policy</a>',
    copyright: `Copyright © ${new Date().getFullYear()} Celtrius Studios`,
  },

  editLink: {
    pattern: "https://github.com/Celtrius/CeltriusDocs/edit/main/src/:path",
    text: "Help me improve this page",
  },

  lastUpdated: {
    text: "Last updated",
    formatOptions: {
      forceLocale: true,
      dateStyle: "long",
      timeStyle: "short",
    },
  },

  search: {
    provider: "algolia",
    options: {
      appId: "IXX45N1P5C",
      apiKey: "a7a819b0bd88bc7333c7f42d611ec04e",
      indexName: "mihon",
    },
  },
};

export default themeConfig;
