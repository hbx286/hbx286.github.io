<script setup lang="ts">
import { ref } from 'vue'
import SkillCard from './SkillCard.vue'
import SkillRadar from './SkillRadar.vue'

import { skills } from '@/data/skill'

const showGraph = ref(false)
</script>

<template>
  <section class="mt-24">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <h2 class="text-3xl font-bold" style="color: var(--color-text)">
          技术栈
        </h2>
        <p class="mt-2" style="color: var(--color-text-secondary)">
          当前主要使用的技术与研究方向
        </p>
      </div>

      <button
        class="view-toggle-btn rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2 border"
        :style="{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card)',
          color: showGraph ? 'var(--color-primary)' : 'var(--color-text-secondary)',
        }"
        @click="showGraph = !showGraph"
      >
        <!-- card icon -->
        <svg
          v-if="!showGraph"
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        <!-- graph icon -->
        <svg
          v-else
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <line x1="6" y1="6" x2="18" y2="6" />
          <line x1="6" y1="6" x2="12" y2="18" />
          <line x1="18" y1="6" x2="12" y2="18" />
        </svg>
        {{ showGraph ? '卡片视图' : '关系视图' }}
      </button>
    </div>

    <!-- Card view (default) -->
    <div
      v-if="!showGraph"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <SkillCard
        v-for="item in skills"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :color="item.color"
        :skills="item.skills"
      />
    </div>

    <!-- Graph view -->
    <div
      v-else
      class="rounded-2xl p-6 backdrop-blur-md"
      :style="{ backgroundColor: 'var(--color-card)' }"
    >
      <SkillRadar :groups="skills" />
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.view-toggle-btn {
  cursor: pointer;
}

.view-toggle-btn:hover {
  border-color: var(--color-primary) !important;
  color: var(--color-primary) !important;
}
</style>
