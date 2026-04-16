<script setup lang="ts">
import { computed, ref } from "vue";

const ram = ref(4);

const batCode = computed(() => {
  return `java -Xms${ram.value}G -Xmx${ram.value}G -jar server.jar nogui
pause`;
});
</script>

<template>
  <div class="bat-generator">
    <label> Max RAM: {{ ram }} GB </label>

    <input v-model="ram" type="range" min="1" max="32" step="1" />

    <pre><code>{{ batCode }}</code></pre>
  </div>
</template>
