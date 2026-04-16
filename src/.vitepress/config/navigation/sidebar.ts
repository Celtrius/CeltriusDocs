// src/.vitepress/config/navigation/sidebar.ts
import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.SidebarMulti = {
  "/docs/": defaultSidebarEN(),
  "/videos/": defaultSidebarEN(),
  "/changelogs/": defaultSidebarEN(),
  "/de/docs/": defaultSidebarDE(),
  "/de/videos/": defaultSidebarDE(),
  "/de/changelogs/": defaultSidebarDE(),
};

function defaultSidebarEN(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: "📚 Getting Started",
          link: "/docs/",
        },
        { text: "🎥 Videos", link: "/videos/" },
        { text: "📖 Guides", link: "/guides/" },
      ],
    },
    {
      text: "Video Guides",
      items: [
        {
          text: "🎮 Minecraft Server (2026)",
          link: "/videos/minecraft-server/",
          items: [
            { text: "Portforwarding", link: "/videos/minecraft-server/portforwarding" },
            { text: "Via Version", link: "/videos/minecraft-server/viaversion" },
          ],
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
