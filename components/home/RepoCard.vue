<script setup lang="ts">
import type { repoCard } from "~/schema";
defineProps<{
  props: repoCard;
}>();
</script>

<template>
  <div
    class="w-full h-[200px] flex flex-col justify-between rounded-[12px] border border-[#c7c7c7] bg-[#f1f2f4] dark:border-[#34343a] p-3 dark:bg-[#232425]"
  >
    <NuxtLink target="_blank" :href="props.url" class="h-full flex flex-col justify-between">
      <div>
        <div class="flex items-center mb-1">
          <IconsRepoIcon />
          <h2 class="ml-2 text-2xl font-recoleta font-semibold truncate max-w-[85%]">
            {{ props.name.length > 17 ? props.name.slice(0, 17) + "..." : props.name }}
          </h2>
        </div>
        <p
          class="mb-3 text-[13px] text-[#6f6f6f] dark:text-[#9ba1a6] line-clamp-2"
        >
          {{ props.description }}
        </p>
      </div>

      <div class="flex">
        <div class="mr-2 flex items-center gap-1">
          <IconsStarIcon />
          <span>{{ props.stars }}</span>
        </div>

        <div class="flex items-center gap-1">
          <IconsForkIcon />
          <span>{{ props.forks }}</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
