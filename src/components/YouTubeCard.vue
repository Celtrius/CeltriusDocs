<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
  thumbnail?: string;
  description?: string;
}>();
</script>

<template>
  <a class="yt-card" :href="href" target="_blank" rel="noreferrer">
    <img v-if="thumbnail" class="yt-card__thumb no-viewer" :src="thumbnail" :alt="title" />

    <div class="yt-card__content">
      <div class="yt-card__label">Video</div>
      <div class="yt-card__title">{{ title }}</div>
      <div v-if="description" class="yt-card__description">
        {{ description }}
      </div>
      <div class="yt-card__cta">Watch on YouTube →</div>
    </div>
  </a>
</template>

<style scoped>
.yt-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  align-items: stretch;
  margin: 20px 0 28px;
  padding: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease;
}

.yt-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
}

.yt-card__thumb {
  width: 100%;
  height: 124px;
  object-fit: cover;
  border-radius: 12px;
}

.yt-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.yt-card__label {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
}

.yt-card__title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 8px;
}

.yt-card__description {
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 10px;
}

.yt-card__cta {
  font-weight: 600;
}

@media (max-width: 640px) {
  .yt-card {
    grid-template-columns: 1fr;
  }

  .yt-card__thumb {
    height: 180px;
  }
}
</style>
