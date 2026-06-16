<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  icon: string
  skills: string[]
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
    <!-- Header -->
    <div class="flex items-center gap-3 mb-5">
      <Icon
        :icon="icon"
        class="text-2xl"
        style="color: var(--color-primary)"
      />

      <h3
        class="text-lg font-semibold"
        style="color: var(--color-text)"
      >
        {{ title }}
      </h3>
    </div>

    <!-- Skills -->
    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in skills"
        :key="item"
        class="px-3 py-1 rounded-lg text-sm"
        :style="{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-text-secondary)',
          border: '1px solid var(--color-border)',
        }"
      >
        {{ item }}
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
</style>
