<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  duration?: number // in ms
}>()

const emit = defineEmits(['complete'])

const count = ref(0)
const isVisible = ref(true)

onMounted(() => {
  const dur = props.duration || 2000
  const intervalTime = dur / 100
  
  const interval = setInterval(() => {
    if (count.value < 100) {
      count.value++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        isVisible.value = false
        emit('complete')
      }, 500)
    }
  }, intervalTime)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <!-- Progress Bar at top -->
      <div 
        class="absolute top-0 left-0 h-1 bg-accent-gradient shadow-cosmic-glow transition-all duration-75 ease-linear"
        :style="{ width: `${count}%` }"
      ></div>
      
      <!-- Counter Text -->
      <div class="font-display text-display-xl text-text tracking-tighter mix-blend-difference">
        {{ count.toString().padStart(3, '0') }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
