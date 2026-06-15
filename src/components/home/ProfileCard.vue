<script setup lang="ts">
import { NCard, NAvatar } from 'naive-ui'
import { Icon } from '@iconify/vue'
import StatsCard from './StatsCard.vue'

import { getExperience } from '@/utils/date-utils.ts'
import { profile } from '@/data/profile.ts'
import { computed } from 'vue'

const workYear = computed(() => {
  return getExperience(profile.startWorkDate)
})
</script>

<template>
  <NCard class="profile-card" :bordered="false">
    <div class="flex flex-col items-center gap-6">
      <!-- Avatar -->
      <NAvatar :size="90" :src="profile.avatar" round />

      <!-- Name -->
      <div class="text-center">
        <h2 class="text-2xl font-bold">
          {{ profile.name }}
        </h2>
        <!-- <div class="text-sm text-gray-500 mt-1">
          {{ profile.role }}
        </div> -->
      </div>

      <!-- Info -->
      <div class="grid grid-cols-2 gap-3 w-full">
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
      </div>
    </div>
  </NCard>
</template>

<style scoped>
.profile-card {
  width: 100%;
  max-width: 400px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.03);
}
</style>
