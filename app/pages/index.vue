<script setup lang="ts">
import { ref } from 'vue'
import BentoCard from '~/components/BentoCard.vue'
import Button from '~/components/ui/Button.vue'
import StatusIndicator from '~/components/StatusIndicator.vue'
import LoadingCounter from '~/components/LoadingCounter.vue'
import type { ProjectData, ExperienceData, EducationData } from '~/types'

const isLoaded = ref(false)

const handleLoadingComplete = () => {
  isLoaded.value = true
}

const projects = ref<ProjectData[]>([
  {
    id: '1',
    title: 'Cosmic Dark',
    description: 'A cinematic design system for high-end digital experiences.',
    tags: ['Design System', 'Nuxt', 'Tailwind']
  },
  {
    id: '2',
    title: 'Nexus Platform',
    description: 'Next-generation data visualization and analytics dashboard.',
    tags: ['Vue 3', 'D3.js']
  },
  {
    id: '3',
    title: 'Starlight CLI',
    description: 'A blazing fast command line tool for scaffolded projects.',
    tags: ['Go', 'CLI']
  }
])

const experiences = ref<ExperienceData[]>([
  {
    id: '1',
    role: 'Lead Full Stack Developer',
    company: 'Multiplai Tech / GoTeam',
    location: 'Cebu, PH',
    period: 'Aug 2023 — Present',
    responsibilities: [
      'Collaborated with cross-functional teams to pioneer Multiplai Interviews, reducing hiring time by 50% and costs by 75%.',
      'Engineered robust data architecture using Laravel and MySQL for real-time analytics on thousands of applicant records.',
      'Built and maintained dynamic analytics dashboards using a robust Vue3/TypeScript frontend.',
      'Analyzed and synthesized raw candidate data to uncover trends and provide strategic insights.'
    ]
  },
  {
    id: '2',
    role: 'Software Developer',
    company: 'Miller Development',
    location: 'Dumaguete, PH',
    period: 'Aug 2022 — Jun 2023',
    responsibilities: [
      'Designed and developed an AI-powered internal knowledge-sharing platform using Nuxt, TypeScript, and Supabase.',
      'Executed system modernizations and frontend overhauls using Vue, Magento, and PHP.',
      'Operated within Agile/Scrum environments utilizing Git and Jira.'
    ]
  },
  {
    id: '3',
    role: 'Software Developer Trainee',
    company: 'Miller Development',
    location: 'Dumaguete, PH',
    period: 'May 2022 — Jun 2022',
    responsibilities: [
      'Designed and implemented websites with Vue3 and TypeScript.',
      'Practiced backend functionality and API using Python and MySQL.'
    ]
  }
])

const skills = {
  languages: ['TypeScript', 'PHP', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS', 'Python'],
  frameworks: ['Vue', 'Laravel', 'Nuxt', '.NET', 'React', 'Tailwind', 'n8n'],
  tools: ['Docker', 'Git', 'Jira', 'AWS', 'WSL', 'Vapor', 'Firebase', 'Figma', 'Cursor', 'Claude Code', 'AI Automation']
}

const education = ref<EducationData[]>([
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Silliman University',
    period: 'June 2022',
    honors: 'QPA: 3.47, Cum Laude',
    coursework: 'Data Structures and Algorithms, OOP, System Administration, Embedded Systems',
    awards: [
      'Class Honor, Silliman University (2018 — 2021)',
      'College Honor, Silliman University (2022)',
      'Academic Scholarship, Silliman University (2018 — 2022)'
    ]
  }
])
</script>

<template>
  <div>
    <!-- Initial Loading Sequence -->
    <LoadingCounter :duration="2000" @complete="handleLoadingComplete" />

    <!-- Main Content -->
    <div 
      class="transition-opacity duration-1000 ease-in-out px-4 md:px-8 max-w-max-width-wide mx-auto"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
    >
      <!-- Hero Section -->
      <section class="min-h-[80vh] flex flex-col justify-center py-section-v-padding">
        <div class="space-y-6 max-w-4xl">
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
            <Button variant="secondary" href="mailto:hello@example.com">Get in Touch</Button>
          </div>
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
      <!-- Featured Work (Bento Grid) -->
      <section id="work" class="py-section-v-padding scroll-mt-24">
        <h2 class="font-sans text-headline-section mb-12">Selected Works</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap">
          <!-- Main featured item spans 2 columns on desktop -->
          <BentoCard class="md:col-span-2 lg:col-span-2 min-h-[400px]">
            <div class="mt-auto">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in projects[0]?.tags" :key="tag" class="text-xs font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">
                  {{ tag }}
                </span>
              </div>
              <h3 class="font-display text-4xl mb-2">{{ projects[0]?.title }}</h3>
              <p class="text-muted">{{ projects[0]?.description }}</p>
            </div>
          </BentoCard>

          <BentoCard class="min-h-[400px]">
            <div class="mt-auto">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in projects[1]?.tags" :key="tag" class="text-xs font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">
                  {{ tag }}
                </span>
              </div>
              <h3 class="font-display text-3xl mb-2">{{ projects[1]?.title }}</h3>
              <p class="text-muted">{{ projects[1]?.description }}</p>
            </div>
          </BentoCard>

          <BentoCard class="md:col-span-2 lg:col-span-3 min-h-[300px]">
            <div class="mt-auto">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in projects[2]?.tags" :key="tag" class="text-xs font-medium px-3 py-1 rounded-pill bg-surface-bright text-on-surface">
                  {{ tag }}
                </span>
              </div>
              <h3 class="font-display text-3xl mb-2">{{ projects[2]?.title }}</h3>
              <p class="text-muted">{{ projects[2]?.description }}</p>
            </div>
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
  </div>
</template>
