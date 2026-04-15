---
title: How to create a Minecraft Server (2026)
---

<script setup lang="ts">
import YouTubeCard from "@comp/YoutubeCard.vue"
</script>

# Minecraft Server Tutorial (2026)

<YouTubeCard
  title="How to create a Minecraft Server (2026)"
  href="https://www.youtube.com/watch?v=-h_D9IEJOeM"
  thumbnail="https://img.youtube.com/vi/-h_D9IEJOeM/maxresdefault.jpg"
  description="A walkthrough of the feature shown in this guide."
/>

## Choose the correct Java Version {#java}

| Minecraft Version |    Java | Download                                                          |
| ----------------- | ------: | ----------------------------------------------------------------- |
| 1.16.5 and older  |  Java 8 | [Adoptium](https://adoptium.net/de/temurin/releases?version=8)    |
| 1.17              | Java 16 | [Adoptium](https://adoptium.net/de/temurin/releases?version=16)\* |
| 1.18 - 1.20.4     | Java 17 | [Adoptium](https://adoptium.net/de/temurin/releases?version=17)   |
| 1.20.5            | Java 21 | [Adoptium](https://adoptium.net/de/temurin/releases?version=21)   |
| 26.1 and newer    | Java 25 | [Adoptium](https://adoptium.net/de/temurin/releases?version=25)   |

\*only JDK available

## Creating a batch (.bat) file to start the Server {#batch}

In order for the minecraft server to run we need to create a batch file.
::: info
You can think of the batch file as a "shortcut" or "preset" that tells the server file how to run the server e.g. how much RAM it should be able to use etc.
:::

```bat
java
```
