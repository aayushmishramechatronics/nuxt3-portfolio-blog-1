<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Initialize the blog stats store on app mount
const blogStatsStore = useBlogStatsStore()

onMounted(() => {
  blogStatsStore.loadStats()
})
</script>



