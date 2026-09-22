<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  url: string
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

// Prevent body scrolling when modal is open
watch(() => props.modelValue, (isOpen) => {
  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          @click="close"
        ></div>
        
        <!-- Modal Content -->
        <div class="relative w-full max-w-6xl aspect-video bg-surface rounded-xl overflow-hidden border border-stroke shadow-2xl z-10 flex flex-col">
          <!-- Header / Close button -->
          <div class="absolute top-4 right-4 z-20">
            <button 
              @click="close" 
              class="w-10 h-10 rounded-full bg-surface-bright/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-white hover:bg-surface-bright transition-colors border border-outline/20"
              aria-label="Close demo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <!-- Loading placeholder behind iframe -->
          <div class="absolute inset-0 flex items-center justify-center -z-10">
            <div class="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
          </div>
          
          <!-- Iframe -->
          <iframe 
            :src="url" 
            class="w-full h-full border-0" 
            allowfullscreen 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
}
</style>
