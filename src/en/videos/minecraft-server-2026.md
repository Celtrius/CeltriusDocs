---
title: How to create a Minecraft Server (2026)
titleTemplate: Vite & Vue powered static site generator
layout: doc

outline:
  level: [2, 3]
  label: "Contents"
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

## General Information

### Terminology

Before we continue with this tutorial lets talk about some basic terminology I will use going forward so you dont get confused :)

| Term            | Meaning                                                                                                                                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client          | The Client is effectively the game that you start on your local computer. Lets compare it to a plane for now.                                                                                                                                                               |
| Server          | An instance of minecraft running in your terminal without a graphical preview, this is what your client connects to. You can imagine this similar to a big airport.                                                                                                         |
| Terminal        | The Terminal, Command Prompt or "CMD" is a Windows Application that lets you run "commands". It lets you interact with apps that dont have a graphical user interface (GUI)                                                                                                 |
| Vanilla         | This word in general describes the unmodified version of a game, directly as it came from the game developer. This definition is not unique to Minecraft.                                                                                                                   |
| Server Software | Once we want plugins and mods to work on our server, the vanilla **server** software will not be sufficient anymore. Therefore developers created their own "Server Software", which includes all the features from the vanilla server aswell new ones like plugin support. |
| Mod Loaders     | Similar to Server Software, Mod Loaders describe modified Version of the vanilla **client** that include further features like mod support and performance improvements.                                                                                                    |

### Choosing the correct Java Version {#java}

Minecraft is a pretty old game at this point and to keep the code safe and up to modern standards Mojang updated they Java version of the game every few updates. When want to run a minecraft server we need to have the java version installed on our computer that our server was originally developed with.

| Minecraft Version |    Java | Download                                                          |
| ----------------- | ------: | ----------------------------------------------------------------- |
| 1.16.5 and older  |  Java 8 | [Adoptium](https://adoptium.net/de/temurin/releases?version=8)    |
| 1.17              | Java 16 | [Adoptium](https://adoptium.net/de/temurin/releases?version=16)\* |
| 1.18 - 1.20.4     | Java 17 | [Adoptium](https://adoptium.net/de/temurin/releases?version=17)   |
| 1.20.5            | Java 21 | [Adoptium](https://adoptium.net/de/temurin/releases?version=21)   |
| 26.1 and newer    | Java 25 | [Adoptium](https://adoptium.net/de/temurin/releases?version=25)   |

\*only JDK available

When you have decided on which Minecraft Version your server will run, click the download link next to the corresponding Java version. This will redirect you to download page for Eclipse Temurin.

::: info
Temurin is a free, open-source distribution of the Java Development Kit (JDK) built from OpenJDK and maintained by the Eclipse Adoptium project.
:::

### Creating a batch (.bat) file to start the Server {#batch}

In order for the minecraft server to run we need to create a batch file.
::: info
You can think of the batch file as a "shortcut" or "preset" that tells the server file how to run the server e.g. how much RAM it should be able to use etc.
:::

1. Step: Creating the file
   - Make sure to have "show file extension" checked in the Explorer under:
     - View > Show > File Extension

```bat
java
```

## Vanilla Server {#vanilla}

This section is meant to explain how to create a basic minecraft vanilla server. This means we will run an unmodified game server which does not support plugins or mods. If you want to create an SMP server for your friends I would recommend taking a look at the [Spigot Section](#spigot) instead.
