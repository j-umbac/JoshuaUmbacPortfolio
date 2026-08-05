<script setup lang="ts">
import NavigationPill from '~/components/NavigationPill.vue'
import { ref } from 'vue'
import type { NavItem } from '~/types'

const navItems = ref<NavItem[]>([
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
])
</script>

<template>
  <div class="min-h-screen selection:bg-primary selection:text-primary-foreground">
    <!-- Global Halftone Overlay for Texture -->
    <div class="fixed inset-0 z-[-1] cosmic-halftone opacity-20 pointer-events-none"></div>

    <NavigationPill :items="navItems" activeHref="#work" />
    
    <main>
      <slot />
    </main>
  </div>
</template>
