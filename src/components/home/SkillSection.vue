<script setup lang="ts">
import SkillRadar from './SkillRadar.vue'

import { skills } from '@/data/skill'
</script>

<template>
  <section class="mt-24">
    <div class="mb-10">
      <h2 class="text-3xl font-bold" style="color: var(--color-text)">
        技术栈
      </h2>
      <p class="mt-2" style="color: var(--color-text-secondary)">
        当前主要使用的技术与研究方向
      </p>
    </div>

    <div
      class="rounded-2xl p-6 backdrop-blur-md"
      :style="{ backgroundColor: 'var(--color-card)' }"
    >
      <SkillRadar :groups="skills" />
    </div>
  </section>
</template>
