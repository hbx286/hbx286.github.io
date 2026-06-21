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
      backgroundColor: 'var(--color-card)',
    }"
  >
    <div class="flex items-center gap-3 mb-5">
      <div
        class="w-9 h-9 rounded-lg flex items-center justify-center"
        :style="{ backgroundColor: color + '20' }"
      >
        <Icon :icon="icon" class="text-xl" :style="{ color }" />
      </div>
      <h3 class="text-lg font-semibold" style="color: var(--color-text)">
        {{ title }}
      </h3>
    </div>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in skills"
        :key="item.name"
        class="skill-tag px-3 py-1.5 rounded-lg text-sm inline-flex items-center gap-1.5"
        :style="{
          backgroundColor: color + '10',
          color: 'var(--color-text-secondary)',
          border: '1px solid' + ' ' + color + '25',
        }"
      >
        <Icon :icon="item.icon" class="text-sm flex-shrink-0" :style="{ color }" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.skill-card:hover {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
}

.skill-tag {
  transition: all 0.2s;
}
</style>