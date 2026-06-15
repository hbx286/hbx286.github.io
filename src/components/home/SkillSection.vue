<script setup lang="ts">
import SkillCard from './SkillCard.vue'

import { skills } from '@/data/skill'
</script>

<template>
  <section class="mt-24">
    <!-- Title -->
    <div class="mb-10">
      <h2 class="text-3xl font-bold" style="color: var(--color-text)">技术栈</h2>

      <p class="mt-2" style="color: var(--color-text-secondary)">当前主要使用的技术与研究方向</p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SkillCard
        v-for="item in skills"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :skills="item.skills"
      />
    </div>
  </section>
</template>
