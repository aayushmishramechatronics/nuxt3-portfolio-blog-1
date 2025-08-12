<!-- components/blog/BlogStats.vue -->
<template>
  <div class="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
    <!-- View Count -->
    <div class="flex items-center gap-2">
      <EyeIcon class="w-4 h-4" />
      <span>{{ formatCount(stats.views) }} {{ stats.views === 1 ? 'view' : 'views' }}</span>
    </div>

    <!-- Like Button -->
    <button
      @click="handleLike"
      :disabled="isLiking"
      class="flex items-center gap-2 transition-colors duration-200 hover:text-red-500 disabled:opacity-50"
      :class="{ 'text-red-500': stats.likedByUser }"
    >
      <HeartIcon 
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'fill-current scale-110': stats.likedByUser }"
      />
      <span>{{ formatCount(stats.likes) }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slug: string
}

const props = defineProps<Props>()
const blogStatsStore = useBlogStatsStore()

const isLiking = ref(false)

// Get stats for this post
const stats = computed(() => blogStatsStore.getPostStats(props.slug))

// Format large numbers
const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return Math.floor(count / 100000) / 10 + 'M'
  } else if (count >= 1000) {
    return Math.floor(count / 100) / 10 + 'K'
  }
  return count.toString()
}

// Handle like button click
const handleLike = async () => {
  if (isLiking.value) return
  
  isLiking.value = true
  try {
    await blogStatsStore.toggleLike(props.slug)
  } catch (error) {
    console.error('Error toggling like:', error)
  } finally {
    isLiking.value = false
  }
}

// Track view when component mounts
onMounted(() => {
  blogStatsStore.incrementView(props.slug)
})
</script>

<script lang="ts">
// Simple SVG icons as components
const EyeIcon = defineComponent({
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  `
})

const HeartIcon = defineComponent({
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  `
})
</script>
