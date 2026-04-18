import type { HeadConfig } from "vitepress";

const headConfig: HeadConfig[] = [
  ["meta", { name: "darkreader-lock" }],
  ["meta", { name: "theme-color", content: "#ea1350" }],
  ["meta", { name: "msapplication-TileColor", content: "#ea1350" }],
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["link", { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" }],
  ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
  ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
  ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ea1350" }],
  ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" }],
  ["meta", { name: "twitter:card", content: "summary" }],
  ["meta", { name: "twitter:site", content: "@TheRealCeltrius" }],
  ["meta", { name: "twitter:creator", content: "@TheRealCeltrius" }],
  ["meta", { property: "og:site_name", content: "Celtrius' Documentation" }],
  [
    "meta",
    {
      property: "og:description",
      content: "Celtrius' Documentation – Docs & Guides about anything and everything",
    },
  ],
  ["meta", { property: "og:locale", content: "en_US" }],
  ["meta", { property: "og:type", content: "website" }],
  // Google Analytics + Algolia
  ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-Q33CD0SG70" }],
  [
    "script",
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Q33CD0SG70');`,
  ],
  ["meta", { property: "algolia-site-verification", content: "9CD3C4AC3F5E81CC" }],
];

export default headConfig;
