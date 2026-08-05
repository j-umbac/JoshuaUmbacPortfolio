import { useWindowScroll, useElementBounding } from '@vueuse/core'
import { computed, type Ref, unref } from 'vue'

export function useParallax(targetElement: Ref<HTMLElement | null>, speed: number = 0.5) {
  const { y } = useWindowScroll()
  const bounding = useElementBounding(targetElement)
  
  // Calculate how far the element is from the center of the viewport
  const offset = computed(() => {
    if (!unref(targetElement)) return 0
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000
    // Center of element
    const elementCenter = bounding.top.value + (bounding.height.value / 2)
    const windowCenter = windowHeight / 2
    
    // Distance from center
    const distanceFromCenter = elementCenter - windowCenter
    
    return distanceFromCenter * speed
  })

  return { offset }
}
