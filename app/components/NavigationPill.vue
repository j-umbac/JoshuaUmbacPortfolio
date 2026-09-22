<script setup lang="ts">
import { computed } from 'vue'

export interface NavItem {
  label: string
  href: string
}

const props = defineProps<{
  items: NavItem[]
  activeHref?: string
}>()

const emit = defineEmits<{
  (e: 'update:activeHref', href: string): void
}>()

const activeLink = computed(() => props.activeHref || '/')
</script>

<template>
  <nav class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-pill bg-surface/70 backdrop-blur-[12px] border border-stroke p-2 shadow-xl">
    <ul class="flex items-center space-x-1">
      <li v-for="item in items" :key="item.href">
        <a 
          :href="item.href"
          :class="[
            'relative block px-5 py-2 rounded-pill text-sm font-medium transition-all duration-300',
            activeLink === item.href ? 'text-bg' : 'text-muted hover:text-text'
          ]"
          @click="emit('update:activeHref', item.href)"
        >
          <div v-if="activeLink === item.href" class="absolute inset-0 bg-accent-gradient rounded-pill -z-10 shadow-cosmic-glow"></div>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
