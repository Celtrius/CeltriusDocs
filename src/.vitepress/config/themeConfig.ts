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
      appId: "AVBQ81CSFI",
      apiKey: "205c4c30185a5a76798bbec8262791b5",
      indexName: "Celtrius Docs",

      locales: {
        de: {
          placeholder: "Docs & Guides durchsuchen...",
          translations: {
            button: {
              buttonText: "Suchen",
              buttonAriaLabel: "suchen",
            },
            modal: {
              searchBox: {
                clearButtonTitle: "clearButtonTitle",
                clearButtonAriaLabel: "clearButtonAriaLabel",
                closeButtonText: "closeButtonText",

                searchInputLabel: "Suche",
                placeholderTextAskAi: "placeholderTextAskAi",

                placeholderTextAskAiStreaming: "placeholderTextAskAiStreaming",
                backToKeywordSearchButtonText: "backToKeywordSearchButtonText",
                newConversationPlaceholder: "newConversationPlaceholder",
                conversationHistoryTitle: "conversationHistoryTitle",
                startNewConversationText: "startNewConversationText",
                viewConversationHistoryText: "viewConversationHistoryText",
                threadDepthErrorPlaceholder: "Thread Depth Fehler",
              },
              newConversation: {
                newConversationTitle: "newConversationTitle",
                newConversationDescription: "newConversationDescription",
              },
              footer: {
                selectText: "auszuwählen",
                navigateText: "navigieren",
                closeText: "schließen",
                backToSearchText: "Zurück zur Suche",
                searchByText: "Suche mit",
              },
              errorScreen: {
                titleText: "titleText",
                helpText: "helpText",
              },
              startScreen: {
                recentSearchesTitle: "Zuletzt gesucht",
                noRecentSearchesText: "Keine vergangenen Suchanfragen.",
                saveRecentSearchButtonTitle: "Zu Favouriten hinzufügen",
                removeRecentSearchButtonTitle: "Aus Suchverlauf löschen",
                favoriteSearchesTitle: "Gespeicherte Suchanfragen",
                removeFavoriteSearchButtonTitle: "Aus Favourite entfernen",
                recentConversationsTitle: "recentConversationsTitle",
                removeRecentConversationButtonTitle: "removeRecentConversationButtonTitle",
              },
              noResultsScreen: {
                noResultsText: "Keine Ergebnisse für: ",
                suggestedQueryText: "Versuch's mal mit",
                reportMissingResultsText: "reportMissingResultsText",
                reportMissingResultsLinkText: "reportMissingResultsLinkText",
              },
              resultsScreen: {
                askAiPlaceholder: "askAiPlaceholder AI：",
                noResultsAskAiPlaceholder: "noResultsAskAiPlaceholder",
              },
            },
          },
        },
        root: {
          placeholder: "Search docs & guides...",
        },
      },
    },
  },
};

export default themeConfig;
