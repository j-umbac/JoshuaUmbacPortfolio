<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps<{
  modelValue: boolean
  images: string[]
  initialIndex?: number
}>()

const emit = defineEmits(['update:modelValue'])

const activeIndex = ref(props.initialIndex || 0)
const carouselRef = ref<HTMLElement | null>(null)

watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    activeIndex.value = props.initialIndex || 0
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden'
    nextTick(() => {
      scrollToImage(activeIndex.value, 'instant')
    })
  } else {
    if (typeof window !== 'undefined') document.body.style.overflow = ''
  }
})

const close = () => {
  emit('update:modelValue', false)
}

const scrollToImage = (index: number, behavior: ScrollBehavior = 'smooth') => {
  activeIndex.value = index
  if (carouselRef.value) {
    const scrollAmount = carouselRef.value.clientWidth * index
    carouselRef.value.scrollTo({
      left: scrollAmount,
      behavior
    })
  }
}

const next = () => {
  if (activeIndex.value < props.images.length - 1) {
    scrollToImage(activeIndex.value + 1)
  }
}

const prev = () => {
  if (activeIndex.value > 0) {
    scrollToImage(activeIndex.value - 1)
  }
}

const handleScroll = () => {
  if (!carouselRef.value) return
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
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-6 md:p-12">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-pointer"
          @click="close"
        ></div>
        
        <!-- Modal Content -->
        <div class="relative w-full h-full max-w-7xl flex items-center justify-center z-10 group">
          
          <!-- Close Button -->
          <button 
            @click="close" 
            class="absolute top-2 right-2 md:-right-4 md:-top-4 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-bright/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-white hover:bg-surface-bright transition-colors border border-outline/20"
            aria-label="Close gallery"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
          </button>
          
          <!-- Prev Button -->
          <button 
            v-if="images.length > 1" 
            @click.stop="prev" 
            class="absolute left-2 md:left-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white bg-black/50 backdrop-blur rounded-full hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100" 
            :class="{ 'pointer-events-none opacity-30': activeIndex === 0 }"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <!-- Carousel -->
          <div 
            ref="carouselRef"
            class="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            <div 
              v-for="(img, idx) in images" 
              :key="idx"
              class="w-full h-full shrink-0 snap-center flex items-center justify-center p-2 md:p-8"
              @click.stop
            >
              <img :src="img" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            </div>
          </div>
          
          <!-- Next Button -->
          <button 
            v-if="images.length > 1" 
            @click.stop="next" 
            class="absolute right-2 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white bg-black/50 backdrop-blur rounded-full hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100" 
            :class="{ 'pointer-events-none opacity-30': activeIndex === images.length - 1 }"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          
          <!-- Dots -->
          <div v-if="images.length > 1" class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
             <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-md">
                <button 
                  v-for="(_, idx) in images" 
                  :key="idx"
                  @click.stop="scrollToImage(idx)"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="activeIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/90'"
                ></button>
              </div>
          </div>
          
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
