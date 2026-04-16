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
import MinecraftBatGenerator from "@comp/MinecraftBatGenerator.vue"
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

### Creating a server folder {#folder}

Having a good organisation early on is pretty important when you start creating multiple servers for different purposes:

- Start by creating a folder called "Minecraft Servers" or something similar somewhere where you will remember its location. I would recommend either putting it at the root (most top level folder) on an external harddrive, in documents or somewhere in your user folder.
- Inside that folder we will put all folders for our different minecraft servers. Start by creating a new folder inside that one and calling it "First Server" or something similar. The important part is that you remember which server is inside that folder without having to boot it up.

```tree
options:
  showToolbar: false
tree:
- name: "[LOCATION OF YOUR CHOOSING]"
  children:
    - name: "Minecraft Server"
      description: "This folder will contain all your servers."
      children:
        - name: First Minecraft Server
          description: "Give this a good name that you will remember"
          children:
            - server.jar
            - start.bat
        - name: Second Minecraft Server
          children:
            - ...
            - ...
        - name: ...
          children:
            - ...
```

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
When going through the installer make sure to

::: info
Temurin is a free, open-source distribution of the Java Development Kit (JDK) built from OpenJDK and maintained by the Eclipse Adoptium project.
:::

### Creating a batch (.bat) file to start the Server {#batch}

In order for the minecraft server to run we need to create a batch file.
::: info
You can think of the batch file as a "shortcut" or "preset" that tells the server file how to run the server e.g. how much RAM it should be able to use etc.
:::

1. **Step: Enabling File Extensions**
   - Make sure to have "show file extension" checked in the Explorer under:
     - View > Show > File Extension
2. **Step: Creating the file**
   - Right click inside the folder of your server:
   - Select: New > New text document
3. **Step: Renaming the file correctly**
   - Rename the file to "start.bat". Make sure that the file no longer has the .txt ending.
   - The only important part is that the file ends with ".bat" the actual name does not matter, I just think that "start" makes everything a bit more clear :)
4. **Confirm the renaming and check the file type**
   - Click "yes" when windows asks you if you want to change the file type.
   - After that double check while in "detail" view mode that in the "File type" row it says "Windows Batch file"
5. **Start editing the file**
   - Right click the file and then click "Edit in Notepad" or "Edit" depending on which Version of Windows you are on

#### Lets start the editing! 🎉

This is the most basic form of a batch file:
It gets executed from top to bottom.

```bat
java -Xms4G -Xmx4G -jar server.jar nogui
pause
```

Here are the important variables in this code:

| code       | function                                                                                                                                                                                                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| java       | calls java                                                                                                                                                                                                                                                                    |
| -Xms[...]  | Set the **minimum allocated** RAM for the Server. This means that this server will always be reserved for the server and cannot be used by other programs. If not set, the unused RAM from the maximum RAM variable will be used by other programs until the server needs it. |
| -Xmx[...]  | Sets the **maximum allowed** RAM for the Server. The server will never use more than this, so set this according to your needs like player count, mod count etc.                                                                                                              |
| -jar       | Tells Java to run the program from inside the .jar file                                                                                                                                                                                                                       |
| server.jar | This is the **exact** file name of your server file. Double check that this matches!                                                                                                                                                                                          |
| nogui      | Mojang also has their own little chat window that appears when only running the server from the server file without a batch file. But since we already have the chat inside our terminal we dont need this little custom window. We disable it with the flag "nogui"          |

#### Optimized Batch File {#opt-batch}

There are custom flags you can add in this code which tell the server more specifically how to handle memory.
The specific tweaks below are based on extensive research by Aikar, one of the developers behind PaperMC, who tried to find the most ideal flags to optimize server performance.
[Aikar's Flag Guide](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/) [Github](https://github.com/aikar)

```bat
java -Xms10G -Xmx10G ^
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 ^
-XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC ^
-XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 ^
-XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 ^
-XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 ^
-XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 ^
-XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 ^
-Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true ^
-jar server.jar nogui
pause
```

In the end your folder should only contain a valid batch file:

```tree
options:
  showToolbar: false
tree:
- name: "Minecraft Server"
  description: "This the "
  children:
      - start.bat

```

## Vanilla Server {#vanilla}

![Vanilla Server Banner](./vanilla.webp)

---

This section is meant to explain how to create a basic minecraft vanilla server. This means we will run an unmodified game server which does not support plugins or mods. If you want to create an SMP server for your friends I would recommend taking a look at the [Paper Section](#paper) instead.

Before continuing make sure to create a folder for your server as explained in the [folder creation](#folder) section and creating a [valid batch file](#batch)

### Download the Server file

In order to download the server file for a vanilla server you need to open your Minecraft Launcher. Make sure you have "Java Edition" selected and then click on the "Installations" tab

![An image](./1.webp)

![An image](./2.webp)

<div style="display:flex; gap:16px; align-items:top;">
<div>

## Minecraft Server

This guide shows how to create a server batch file and configure RAM.

</div>

![An image](./1.webp)

</div>
