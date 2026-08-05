<script setup lang="ts">
// BentoCard.vue
</script>

<template>
  <div class="group relative overflow-hidden rounded-bento border border-stroke bg-surface p-6 transition-transform duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02] cursor-pointer">
    <!-- Halftone overlay that fades in on hover -->
    <div class="absolute inset-0 z-0 opacity-0 transition-opacity duration-600 ease-out group-hover:opacity-100 cosmic-halftone pointer-events-none"></div>
    
    <!-- Content wrapper to keep it above the overlay -->
    <div class="relative z-10 h-full w-full flex flex-col">
      <slot />
    </div>
  </div>
</template>
