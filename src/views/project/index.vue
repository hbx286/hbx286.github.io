<script setup lang="ts">
defineOptions({
  name: 'ProjectView',
})
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <!-- Header -->
    <div class="mb-10">
      <h1
        class="text-3xl font-bold mb-3"
        style="color: var(--color-text)"
      >
        项目
      </h1>
      <p style="color: var(--color-text-muted)">
        这里展示我的项目作品，涵盖后端开发、数据平台与 AI 应用
      </p>
    </div>

    <!-- Project Grid -->
    <ProjectGrid :projects="projects" />
  </div>
</template>

<style scoped></style>
