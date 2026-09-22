<script setup lang="ts">
import { ref } from 'vue'
import BentoCard from '~/components/BentoCard.vue'
import Button from '~/components/ui/Button.vue'
import StatusIndicator from '~/components/StatusIndicator.vue'
import LoadingCounter from '~/components/LoadingCounter.vue'
import DemoModal from '~/components/DemoModal.vue'
import ImageCarousel from '~/components/ImageCarousel.vue'
import GalleryModal from '~/components/GalleryModal.vue'
import HeroCarousel from '~/components/HeroCarousel.vue'
import type { ProjectData, ExperienceData, EducationData } from '~/types'
import { usePortfolio } from '~/composables/usePortfolio'

definePageMeta({
  pageTransition: {
    name: 'wipe',
    mode: 'out-in'
  }
})

const isLoaded = ref(false)
const isDemoOpen = ref(false)
const activeDemoUrl = ref('')

// Gallery state
const isGalleryOpen = ref(false)
const activeGalleryImages = ref<string[]>([])
const activeGalleryIndex = ref(0)

const openGallery = (images: string[], index: number) => {
  if (!images || images.length === 0) return
  activeGalleryImages.value = images
  activeGalleryIndex.value = index
  isGalleryOpen.value = true
}

const handleLoadingComplete = () => {
  isLoaded.value = true
}

const openDemo = (url: string) => {
  activeDemoUrl.value = url
  isDemoOpen.value = true
}

const { projects, experiences, skills, education } = usePortfolio()
</script>

<template>
  <div>
    <!-- Initial Loading Sequence -->
    <LoadingCounter :duration="1" @complete="handleLoadingComplete" />

    <!-- Main Content -->
    <div 
      class="transition-opacity duration-1000 ease-in-out px-4 md:px-8 max-w-max-width-wide mx-auto"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
    >
      <!-- Hero Section -->
      <section class="min-h-[80vh] flex flex-col justify-center py-section-v-padding relative">
        <!-- Animated Background Carousel -->
        <HeroCarousel />
        
        <div class="space-y-6 max-w-4xl relative z-10">
          <StatusIndicator text="Available for new projects" />
          <h1 class="font-display text-xl text-text">
            Crafting digital <br />
            <span class="text-transparent bg-clip-text bg-accent-gradient">masterpieces.</span>
          </h1>
          <p class="font-sans text-body-lg text-muted max-w-2xl">
            A minimalist approach with cinematic depth. Bridging the gap between technical precision and curated elegance.
          </p>
          <div class="flex items-center space-x-4 pt-4">
            <Button variant="primary" href="#work">Explore Work</Button>
            <Button variant="secondary" href="mailto:joshuarheyumbac14@gmail.com">Get in Touch</Button>
          </div>
        </div>

        <!-- Creative Work side navigation -->
        <div class="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center z-10">
          <NuxtLink to="/creative" class="group relative flex items-center gap-6 text-muted hover:text-white transition-all duration-500 hover:translate-x-2 p-4">
            <!-- Encapsulating Glow -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[50dvw] h-[100dvh] bg-white/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
            
            <div class="font-display text-3xl tracking-wide relative z-10">
              Creative Work
            </div>
            <div class="relative z-10 w-16 h-16 rounded-full border border-stroke flex items-center justify-center transition-all duration-500 group-hover:border-transparent group-hover:bg-white group-hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Featured Work (Bento Grid) -->
      <section id="work" class="py-section-v-padding scroll-mt-24">
        <h2 class="font-sans text-headline-section mb-12">Selected Works</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-bento-gap">
          <!-- Project 1: Interviewroom AI -->
          <BentoCard class="min-h-[500px]" @click="projects[0]?.link && window.open(projects[0].link, '_blank')">
            <div class="mb-6 relative w-full h-64 rounded-xl overflow-hidden border border-stroke bg-surface-dim">
              <ImageCarousel v-if="projects[0]?.images" :images="projects[0].images" alt-text="Interviewroom AI Screenshot" @open-gallery="openGallery(projects[0].images, $event)" />
            </div>
            <div class="mt-auto">
              <div class="flex flex-wrap items-center gap-2 mb-4">
                <span v-for="tag in projects[0]?.tags" :key="tag" class="text-xs font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">
                  {{ tag }}
                </span>
                <span v-if="projects[0]?.status" class="text-xs font-medium px-3 py-1 rounded-pill bg-accent-gradient text-primary-foreground">
                  {{ projects[0].status }}
                </span>
              </div>
              <h3 class="font-display text-4xl mb-2">{{ projects[0]?.title }}</h3>
              <p class="text-muted mb-4">{{ projects[0]?.description }}</p>
              <div class="flex gap-4">
                <a :href="projects[0]?.link" target="_blank" @click.stop class="text-primary hover:text-white transition-colors text-sm font-semibold flex items-center">
                  Live Site &rarr;
                </a>
                <button v-if="projects[0]?.demo" @click.stop="openDemo(projects[0].demo!)" class="text-primary hover:text-white transition-colors text-sm font-semibold flex items-center">
                  Storylane Demo &rarr;
                </button>
              </div>
            </div>
          </BentoCard>

          <!-- Project 2: PhotoDump -->
          <BentoCard class="min-h-[500px]" @click="projects[1]?.link && window.open(projects[1].link, '_blank')">
            <div class="mb-6 relative w-full h-64 rounded-xl overflow-hidden border border-stroke bg-surface-dim">
              <ImageCarousel v-if="projects[1]?.images" :images="projects[1].images" alt-text="PhotoDump Screenshot" @open-gallery="openGallery(projects[1].images, $event)" />
            </div>
            <div class="mt-auto">
              <div class="flex flex-wrap items-center gap-2 mb-4">
                <span v-for="tag in projects[1]?.tags" :key="tag" class="text-xs font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">
                  {{ tag }}
                </span>
              </div>
              <h3 class="font-display text-4xl mb-2">{{ projects[1]?.title }}</h3>
              <p class="text-muted mb-4">{{ projects[1]?.description }}</p>
              <div class="flex gap-4">
                <a :href="projects[1]?.link" target="_blank" @click.stop class="text-primary hover:text-white transition-colors text-sm font-semibold flex items-center">
                  Live Site &rarr;
                </a>
                <a v-if="projects[1]?.github" :href="projects[1].github" target="_blank" @click.stop class="text-primary hover:text-white transition-colors text-sm font-semibold flex items-center">
                  GitHub &rarr;
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-section-v-padding scroll-mt-24">
        <h2 class="font-sans text-headline-section mb-12">Experience</h2>
        
        <div class="flex flex-col gap-bento-gap">
          <BentoCard v-for="exp in experiences" :key="exp.id" class="w-full">
            <div class="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div>
                <h3 class="font-display text-3xl mb-1">{{ exp.role }}</h3>
                <p class="text-primary font-medium">{{ exp.company }} <span class="text-muted font-normal ml-2">{{ exp.location }}</span></p>
              </div>
              <div class="mt-2 md:mt-0">
                <span class="text-sm font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">{{ exp.period }}</span>
              </div>
            </div>
            
            <ul class="list-disc list-outside ml-5 space-y-2 text-muted text-body-md">
              <li v-for="(resp, index) in exp.responsibilities" :key="index">
                {{ resp }}
              </li>
            </ul>
          </BentoCard>
        </div>
      </section>

      <!-- Technical Skills Section -->
      <section id="skills" class="py-section-v-padding scroll-mt-24">
        <h2 class="font-sans text-headline-section mb-12">Technical Skills</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
          <BentoCard>
            <h3 class="font-display text-3xl mb-4 text-primary">Languages</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.languages" :key="skill" class="text-sm font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface border border-outline/20">
                {{ skill }}
              </span>
            </div>
          </BentoCard>

          <BentoCard>
            <h3 class="font-display text-3xl mb-4 text-primary">Frameworks</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.frameworks" :key="skill" class="text-sm font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface border border-outline/20">
                {{ skill }}
              </span>
            </div>
          </BentoCard>

          <BentoCard>
            <h3 class="font-display text-3xl mb-4 text-primary">Tools & DevOps</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.tools" :key="skill" class="text-sm font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface border border-outline/20">
                {{ skill }}
              </span>
            </div>
          </BentoCard>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="py-section-v-padding scroll-mt-24">
        <h2 class="font-sans text-headline-section mb-12">Education</h2>
        
        <div class="flex flex-col gap-bento-gap">
          <BentoCard v-for="edu in education" :key="edu.id" class="w-full">
            <div class="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 class="font-display text-3xl mb-1">{{ edu.degree }}</h3>
                <p class="text-primary font-medium">{{ edu.institution }}</p>
                <p v-if="edu.honors" class="text-tertiary mt-1 font-medium">{{ edu.honors }}</p>
              </div>
              <div class="mt-2 md:mt-0">
                <span class="text-sm font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">{{ edu.period }}</span>
              </div>
            </div>
            
            <div class="mt-4 text-muted text-body-md" v-if="edu.coursework">
              <strong class="text-on-surface">Relevant Coursework:</strong> {{ edu.coursework }}
            </div>

            <div class="mt-6" v-if="edu.awards && edu.awards.length > 0">
              <h4 class="font-sans font-semibold text-on-surface mb-2">Awards & Scholarships</h4>
              <ul class="list-disc list-outside ml-5 space-y-1 text-muted text-body-md">
                <li v-for="(award, index) in edu.awards" :key="index">
                  {{ award }}
                </li>
              </ul>
            </div>
          </BentoCard>
        </div>
      </section>
    </div>

    <!-- Demo Modal -->
    <DemoModal v-model="isDemoOpen" :url="activeDemoUrl" />
    
    <!-- Image Gallery Modal -->
    <GalleryModal 
      v-model="isGalleryOpen" 
      :images="activeGalleryImages" 
      :initial-index="activeGalleryIndex" 
    />
  </div>
</template>
