<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Skill } from '@/types/skill'

defineProps<{
  title: string
  icon: string
  color: string
  skills: Skill[]
}>()
</script>

<template>
  <div
    class="group skill-card rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
    :style="{
      borderColor: 'var(--color-border)',
      backgroundColor: 'color-mix(in srgb, var(--color-card) 60%, transparent)',
    }"
  >
    <div class="flex items-center gap-3 mb-5">
      <div
        class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        :style="{ backgroundColor: color + '20' }"
      >
        <Icon :icon="icon" class="text-lg" :style="{ color }" />
      </div>
      <h3 class="text-base font-semibold" style="color: var(--color-text)">
        {{ title }}
      </h3>
    </div>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in skills"
        :key="item.name"
        class="skill-tag px-2.5 py-1 rounded-lg text-xs inline-flex items-center gap-1.5"
        :style="{
          backgroundColor: color + '10',
          color: 'var(--color-text-secondary)',
          border: '1px solid' + ' ' + color + '30',
        }"
      >
        <Icon :icon="item.icon" class="text-xs flex-shrink-0" :style="{ color }" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.skill-card:hover {
  border-color: var(--color-border-hover) !important;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
  background: color-mix(in srgb, var(--color-card) 80%, transparent) !important;
}

.skill-tag {
  transition: all 0.25s var(--ease-out-expo);
}

.skill-tag:hover {
  transform: translateY(-1px);
  border-color: var(--color-border-hover) !important;
}
</style>
