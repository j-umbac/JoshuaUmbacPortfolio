<script setup lang="ts">
// StatusIndicator.vue
defineProps<{
  text?: string
}>()
</script>

<template>
  <div class="inline-flex items-center space-x-2">
    <div class="relative flex h-2 w-2">
      <!-- Pulsing ring -->
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-green opacity-75"></span>
      <!-- Solid dot -->
      <span class="relative inline-flex h-2 w-2 rounded-full bg-status-green"></span>
    </div>
    <span v-if="text" class="text-sm font-medium text-muted">{{ text }}</span>
  </div>
</template>
