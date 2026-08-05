<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  as?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  as: 'button',
})

const isLink = computed(() => !!props.href)
const component = computed(() => (isLink.value ? 'a' : props.as))

const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50'

const primaryClasses = 'rounded-pill border-[2px] border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-pill before:bg-accent-gradient hover:scale-[1.02] hover:shadow-cosmic-glow bg-surface text-on-surface px-6 py-3 font-medium'

const secondaryClasses = 'text-muted hover:text-text group px-2 py-1 font-medium'
</script>

<template>
  <component
    :is="component"
    :href="href"
    :class="[baseClasses, variant === 'primary' ? primaryClasses : secondaryClasses]"
  >
    <slot />
    <span v-if="variant === 'secondary'" class="ml-2 inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
      ↗
    </span>
  </component>
</template>
