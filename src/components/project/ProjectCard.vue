<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { NButton } from 'naive-ui'
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="group flex flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
    :style="{
      borderColor: 'var(--color-border)',
      backgroundColor: 'var(--color-card)',
    }"
  >
    <!-- Header -->
    <div class="flex items-center gap-3 mb-4">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        :style="{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-primary)',
        }"
      >
        <Icon :icon="project.icon" class="text-2xl" />
      </div>

      <h3
        class="text-lg font-semibold"
        style="color: var(--color-text)"
      >
        {{ project.title }}
      </h3>
    </div>

    <!-- Description -->
    <p
      class="text-sm leading-relaxed mb-4 flex-grow"
      style="color: var(--color-text-secondary)"
    >
      {{ project.description }}
    </p>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="px-3 py-1 rounded-lg text-sm"
        :style="{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-text-secondary)',
          border: '1px solid var(--color-border)',
        }"
      >
        {{ tech }}
      </span>
    </div>

    <!-- GitHub Link -->
    <NButton
      tag="a"
      :href="project.githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full"
    >
      <template #icon>
        <Icon icon="mdi:github" />
      </template>
      GitHub
    </NButton>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

div:hover {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
}
</style>
