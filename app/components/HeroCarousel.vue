<script setup lang="ts">
// All images inside public/images
const images = [
  '/images/interviewroom-1.png',
  '/images/interviewroom-2.png',
  '/images/photodump-1.png',
  '/images/photodump-2.png'
]
</script>

<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-20 opacity-30">
    <!-- Gradient masks to blend the edges perfectly into the background -->
    <div class="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg z-10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg z-10"></div>
    
    <!-- Outer container to establish the gap and row -->
    <div class="flex h-full w-full items-center gap-8 rotate-[-5deg] scale-110 translate-y-12">
      <!-- First track -->
      <div class="flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee">
        <div v-for="img in images" :key="img" class="h-[40vh] md:h-[60vh] aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
           <img :src="img" class="w-full h-full object-cover blur-[1px] brightness-[0.8] scale-110" />
        </div>
      </div>
      
      <!-- Second track (duplicate for seamless loop) -->
      <div aria-hidden="true" class="flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee">
        <div v-for="img in images" :key="img + '-dup'" class="h-[40vh] md:h-[60vh] aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
           <img :src="img" class="w-full h-full object-cover blur-[1px] brightness-[0.8] scale-110" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { 
    transform: translateX(0); 
  }
  100% { 
    transform: translateX(calc(-100% - 2rem)); 
  }
}

.animate-marquee {
  animation: marquee 60s linear infinite;
}
</style>
