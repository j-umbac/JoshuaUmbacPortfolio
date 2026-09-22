<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  images: string[]
  altText?: string
}>()

const emit = defineEmits(['open-gallery'])

const activeIndex = ref(0)
const carouselRef = ref<HTMLElement | null>(null)

const scrollToImage = (index: number) => {
  activeIndex.value = index
  if (carouselRef.value) {
    const scrollAmount = carouselRef.value.clientWidth * index
    carouselRef.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  if (!carouselRef.value) return
  // Calculate which slide is currently most visible
  const index = Math.round(carouselRef.value.scrollLeft / carouselRef.value.clientWidth)
  if (index !== activeIndex.value) {
    activeIndex.value = index
  }
}

onMounted(() => {
  if (carouselRef.value) {
    carouselRef.value.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div class="relative w-full h-full group" @click.stop>
    <!-- Scroll Container -->
    <div 
      ref="carouselRef"
      class="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth cursor-pointer"
      style="scrollbar-width: none; -ms-overflow-style: none;"
      @click.stop="emit('open-gallery', activeIndex)"
    >
      <div 
        v-for="(img, idx) in images" 
        :key="idx"
        class="w-full h-full shrink-0 snap-center relative overflow-hidden"
      >
        <img 
          :src="img" 
          :alt="`${altText || 'Project Image'} ${idx + 1}`"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
    </div>
    
    <!-- Dots Navigation -->
    <div 
      v-if="images.length > 1"
      class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10"
    >
      <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md">
        <button 
          v-for="(_, idx) in images" 
          :key="idx"
          @click.stop="scrollToImage(idx)"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="activeIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/90'"
          :aria-label="`Go to image ${idx + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
