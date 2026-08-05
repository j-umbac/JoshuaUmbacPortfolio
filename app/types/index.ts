export interface NavItem {
  label: string
  href: string
}

export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  link?: string
}

export interface ExperienceData {
  id: string
  role: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export interface EducationData {
  id: string
  degree: string
  institution: string
  period: string
  honors?: string
  coursework?: string
  awards?: string[]
}
