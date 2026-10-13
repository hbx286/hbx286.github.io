<script setup lang="ts">
import { NCard, NAvatar } from 'naive-ui'
import { Icon } from '@iconify/vue'
import StatsCard from './StatsCard.vue'

import { getExperience } from '@/utils/date-utils'
import { profile } from '@/data/profile'
import { computed } from 'vue'

const workYear = computed(() => {
  return getExperience(profile.startWorkDate)
})

const languages = computed(() => profile.languages.join(' / '))
const exploring = computed(() => profile.exploring.join(' · '))
</script>

<template>
  <NCard
    class="glass-card"
    :bordered="false"
    content-style="height: 100%; display: flex; flex-direction: column;"
  >
    <div class="flex flex-col items-center gap-6 h-full">
      <!-- Avatar -->
      <NAvatar :size="90" :src="profile.avatar" round />

      <!-- Name & Tagline -->
      <div class="text-center">
        <h2 class="text-2xl font-bold" style="color: var(--color-text)">
          {{ profile.name }}
        </h2>
        <p class="text-sm mt-1" style="color: var(--color-text-muted)">
          Backend · Data · AI
        </p>
      </div>

      <!-- Info -->
      <div class="grid grid-cols-2 gap-2.5 w-full">
        <StatsCard title="地点" :value="profile.location">
          <template #icon>
            <Icon icon="mdi:map-marker-outline" />
          </template>
        </StatsCard>

        <StatsCard title="经验" :value="workYear">
          <template #icon>
            <Icon icon="mdi:briefcase-outline" />
          </template>
        </StatsCard>

        <StatsCard title="语言" :value="languages">
          <template #icon>
            <Icon icon="mdi:code-tags" />
          </template>
        </StatsCard>

        <StatsCard title="当前探索" :value="exploring">
          <template #icon>
            <Icon icon="mdi:compass-outline" />
          </template>
        </StatsCard>
      </div>
    </div>
  </NCard>
</template>
