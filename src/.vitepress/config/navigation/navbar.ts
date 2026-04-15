// src/.vitepress/config/navigation/navbar.ts
import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  {
    text: "✨ Main Website",
    link: "https://celtrius.net",
  },
  {
    text: "📖 Docs",
    link: "/docs/",
    activeMatch: "/docs/",
  },
  {
    text: "📹 Videos",
    link: "/videos/",
    activeMatch: "/videos/",
  },
];

export default nav;
