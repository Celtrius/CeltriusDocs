<template>
  <div class="lazy-youtube" :style="{ aspectRatio }">
    <button
      v-if="!started"
      class="lazy-youtube__poster"
      type="button"
      :aria-label="`Play video: ${title}`"
      @click="started = true"
    >
      <img :src="posterUrl" :alt="title" loading="lazy" />
      <span class="lazy-youtube__play">▶</span>
    </button>

    <iframe
      v-else
      class="lazy-youtube__iframe"
      :src="embedUrl"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  videoId: { type: String, required: true },
  title: { type: String, default: "YouTube video" },
  aspectRatio: { type: String, default: "16 / 9" },
});

const started = ref(false);

const posterUrl = computed(() => {
  return `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`;
});

const embedUrl = computed(() => {
  return `https://www.youtube.com/embed/${props.videoId}?autoplay=1`;
});
</script>

<style scoped>
.lazy-youtube {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: #000;
}

.lazy-youtube__poster,
.lazy-youtube__iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.lazy-youtube__poster {
  padding: 0;
  cursor: pointer;
  background: #000;
}

.lazy-youtube__poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.lazy-youtube__play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  line-height: 1;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  border-radius: 999px;
  padding: 0.4em 0.55em;
}
</style>
