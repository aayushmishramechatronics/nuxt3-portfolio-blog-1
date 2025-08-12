<!-- components/blog/BlogAnalytics.vue -->
<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Blog Statistics
    </h3>
    
    <div class="grid grid-cols-2 gap-4">
      <!-- Total Views -->
      <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ formatCount(totalViews) }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Total Views
        </div>
      </div>

      <!-- Total Likes -->
      <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div class="text-2xl font-bold text-red-600 dark:text-red-400">
          {{ formatCount(totalLikes) }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Total Likes
        </div>
      </div>
    </div>

    <!-- Most Popular Posts -->
    <div v-if="popularPosts.length > 0" class="mt-6">
      <h4 class="text-md font-medium text-gray-900 dark:text-white mb-3">
        Most Popular Posts
      </h4>
      <div class="space-y-2">
        <div
          v-for="post in popularPosts.slice(0, 3)"
          :key="post.slug"
          class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm"
        >
          <span class="truncate flex-1 mr-2">{{ getPostTitle(post.slug) }}</span>
          <div class="flex items-center gap-3 text-xs text-gray-500">
            <span class="flex items-center gap-1">
              <EyeIcon class="w-3 h-3" />
              {{ post.stats.views }}
            </span>
            <span class="flex items-center gap-1">
              <HeartIcon class="w-3 h-3" />
              {{ post.stats.likes }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const blogStatsStore = useBlogStatsStore()

// Computed values for analytics
const totalViews = computed(() => {
  return Object.values(blogStatsStore.stats).reduce((sum, stats) => sum + stats.views, 0)
})

const totalLikes = computed(() => {
  return Object.values(blogStatsStore.stats).reduce((sum, stats) => sum + stats.likes, 0)
})

const popularPosts = computed(() => {
  return Object.entries(blogStatsStore.stats)
    .map(([slug, stats]) => ({ slug, stats }))
    .sort((a, b) => (b.stats.views + b.stats.likes * 2) - (a.stats.views + a.stats.likes * 2))
})

// Format large numbers
const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return Math.floor(count / 100000) / 10 + 'M'
  } else if (count >= 1000) {
    return Math.floor(count / 100) / 10 + 'K'
  }
  return count.toString()
}

// Get post title from slug (you might want to fetch this from your content)
const getPostTitle = (slug: string): string => {
  // Convert slug to title (simple version)
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<script lang="ts">
// Reuse the same icons from BlogStats
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
