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
      class="flex flex-col items-center justify-center py-24 text-center"
    >
      <div
        class="flex h-24 w-24 items-center justify-center rounded-full mb-6 border"
        :style="{
          backgroundColor: 'color-mix(in srgb, var(--color-card) 60%, transparent)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-muted)',
        }"
      >
        <Icon icon="mdi:rocket-launch-outline" class="text-4xl" />
      </div>

      <h3
        class="text-xl font-semibold mb-2 tracking-tight"
        style="color: var(--color-text)"
      >
        暂无项目
      </h3>

      <p style="color: var(--color-text-muted)">
        项目正在筹备中，敬请期待
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
