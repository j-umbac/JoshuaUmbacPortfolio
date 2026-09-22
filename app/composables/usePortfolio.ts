import { useState } from '#imports'
import type { ProjectData, ExperienceData, EducationData } from '~/types'

export const usePortfolio = () => {
  const projects = useState<ProjectData[]>('portfolio-projects', () => [
    {
      id: '1',
      title: 'Interviewroom AI',
      description: 'AI-Powered Interviews to cut hiring costs and accelerate time-to-hire. A proprietary recruitment software platform for talent leaders.',
      tags: ['Vue 3', 'Laravel', 'AI', 'SaaS'],
      images: ['/images/interviewroom-1.png', '/images/interviewroom-2.png'],
      link: 'https://interviewroom.ai/',
      demo: 'https://multiplai.storylane.io/demo/nn9g0gm7ualq',
      status: 'Proprietary Tool'
    },
    {
      id: '2',
      title: 'PhotoDump',
      description: 'The cleanest way to collect high-res media from your community, guests, or team. Straight to your storage, no compression, no account required.',
      tags: ['Nuxt', 'TypeScript', 'Tailwind', 'Firebase'],
      images: ['/images/photodump-1.png', '/images/photodump-2.png'],
      link: 'https://photodump-app--photodump-4d917.asia-southeast1.hosted.app/',
      github: 'https://github.com/j-umbac/photodump-app'
    },
    {
      id: '3',
      title: 'Starlight CLI',
      description: 'A blazing fast command line tool for scaffolded projects.',
      tags: ['Go', 'CLI']
    }
  ])

  const experiences = useState<ExperienceData[]>('portfolio-experiences', () => [
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

  const skills = useState('portfolio-skills', () => ({
    languages: ['TypeScript', 'PHP', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS', 'Python'],
    frameworks: ['Vue', 'Laravel', 'Nuxt', '.NET', 'React', 'Tailwind', 'n8n'],
    tools: ['Docker', 'Git', 'Jira', 'AWS', 'WSL', 'Vapor', 'Firebase', 'Figma', 'Cursor', 'Claude Code', 'AI Automation']
  }))

  const education = useState<EducationData[]>('portfolio-education', () => [
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

  return {
    projects,
    experiences,
    skills,
    education
  }
}
