<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/ui/Button.vue'
import BentoCard from '~/components/BentoCard.vue'

// Define custom page transition for a wipe effect
definePageMeta({
  pageTransition: {
    name: 'wipe',
    mode: 'out-in'
  }
})

// Mock data for creative works
const creativeWorks = ref([
  {
    id: 1,
    title: 'Brand Anthem',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Neon Nights',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Product Launch',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Urban Exploration',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop'
  }
])
</script>

<template>
  <div class="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-max-width-wide mx-auto relative">
    
    <div class="flex items-center justify-between mb-16">
      <div>
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-muted hover:text-white transition-colors font-medium mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Software
        </NuxtLink>
        <h1 class="font-display text-6xl md:text-8xl text-text">Creative <span class="text-transparent bg-clip-text bg-accent-gradient">Work.</span></h1>
        <p class="font-sans text-body-lg text-muted mt-4 max-w-2xl">
          A curated collection of video and photo editing projects. Visual storytelling that complements my technical foundation.
        </p>
      </div>
    </div>

    <!-- Masonry-like or Grid layout for creative work -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BentoCard v-for="work in creativeWorks" :key="work.id" class="min-h-[400px] overflow-hidden group p-0">
        <div class="relative w-full h-full min-h-[400px]">
          <img :src="work.image" :alt="work.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <span class="text-xs font-medium px-3 py-1 rounded-pill bg-black/40 backdrop-blur border border-white/10 text-white w-fit mb-3">
              {{ work.category }}
            </span>
            <h3 class="font-display text-3xl text-white">{{ work.title }}</h3>
          </div>
        </div>
      </BentoCard>
    </div>
  </div>
</template>


