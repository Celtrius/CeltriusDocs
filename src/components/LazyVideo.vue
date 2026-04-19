<template>
  <div class="lazy-video" :style="{ aspectRatio }">
    <!-- Poster / Play Button -->
    <button
      v-if="!started"
      class="lazy-video__poster"
      type="button"
      :aria-label="`Play video: ${title}`"
      @click="start"
    >
      <img :src="poster" :alt="title" loading="lazy" />

      <span class="lazy-video__play">▶</span>
    </button>

    <!-- Actual video loads only after click -->
    <video
      v-else
      ref="videoEl"
      class="lazy-video__video"
      controls
      playsinline
      :autoplay="autoplay"
      :muted="autoplayMuted"
    >
      <source :src="src" :type="type" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  poster: { type: String, required: true },

  title: {
    type: String,
    default: "Video",
  },

  type: {
    type: String,
    default: "video/mp4",
  },

  aspectRatio: {
    type: String,
    default: "16 / 9",
  },

  autoplay: {
    type: Boolean,
    default: true,
  },

  autoplayMuted: {
    type: Boolean,
    default: true,
  },
});

const started = ref(false);
const videoEl = ref(null);

async function start() {
  started.value = true;

  if (props.autoplay) {
    await nextTick();
    videoEl.value?.play();
  }
}
</script>

<style scoped>
.lazy-video {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: #000;
}

.lazy-video__poster,
.lazy-video__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.lazy-video__poster {
  padding: 0;
  cursor: pointer;
  background: #000;
}

.lazy-video__poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.lazy-video__play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  border-radius: 999px;
  padding: 0.4em 0.55em;
}
</style>
