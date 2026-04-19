// src/.vitepress/config/navigation/sidebar.ts
import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.SidebarMulti = {
  "/": defaultSidebarEN(),
  /* German Sidebar Below */
  "/de/*": defaultSidebarDE(),
};

function defaultSidebarEN(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: "📚 Getting Started",
          link: "/getting-started",
        },
        { text: "🎥 Videos", link: "/videos" },
        { text: "📖 Guides", link: "/guides" },
      ],
    },
    {
      text: "Minecraft Guides",
      collapsed: false,
      items: [
        {
          text: "🎉 Minecraft Server",
          link: "/minecraft/server/",
          collapsed: true,
          items: [
            {
              text: "Detailed Guides",
              collapsed: true,
              items: [
                { text: "🌟 Vanilla Server", link: "/minecraft/server/detailed-guide/vanilla" },
                { text: "🌍 Plugin Server", link: "/minecraft/server/detailed-guide/plugins" },
                { text: "🚀 Modded Server", link: "/minecraft/server/detailed-guide/modded" },
              ],
            },
            { text: "Glossary", link: "/minecraft/server/glossary" },
            { text: "Portforwarding", link: "/minecraft/server/portforwarding" },
          ],
        },
        {
          text: "🚗 Minecraft Plugins",
          link: "/guides/minecraft-server/",
          collapsed: true,
          items: [{ text: "ViaVersion", link: "/minecraft/plugins/viaversion" }],
        },
      ],
    },
  ];
}

function defaultSidebarDE(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: "Docs", link: "/docs/" },
        { text: "News", link: "/news/" },
        { text: "Changelogs", link: "/changelogs/" },
      ],
    },
    {
      text: "Documentation",
      items: [{ text: "Getting Started", link: "/docs/getting-started" }],
    },
    {
      text: "News",
      items: [
        { text: "Latest News", link: "/news/" },
        { text: "First Post", link: "/news/first-post" },
      ],
    },
  ];
}

export default sidebar;
