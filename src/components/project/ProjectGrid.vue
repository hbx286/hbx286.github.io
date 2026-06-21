<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ProjectCard from './ProjectCard.vue'
import type { Project } from '@/types/project'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- 空状态 -->
    <div
      v-if="projects.length === 0"
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <div
        class="flex h-20 w-20 items-center justify-center rounded-full mb-6"
        :style="{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-text-muted)',
        }"
      >
        <Icon icon="mdi:inbox-outline" class="text-4xl" />
      </div>

      <h3
        class="text-xl font-semibold mb-2"
        style="color: var(--color-text)"
      >
        暂无项目
      </h3>

      <p style="color: var(--color-text-muted)">
        敬请期待，我会在这里分享我的项目作品
      </p>
    </div>

    <!-- 项目网格 -->
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<style scoped></style>
