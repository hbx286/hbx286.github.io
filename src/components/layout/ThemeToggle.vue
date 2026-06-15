<script setup lang="ts">
import { computed } from 'vue'
import { NButton, NTooltip } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const icon = computed((): string => {
  switch (themeStore.mode) {
    case 'dark':
      return 'mdi:weather-night'
    case 'light':
      return 'mdi:weather-sunny'
    case 'auto':
      return 'mdi:theme-light-dark'
    default:
      return 'mdi:weather-night'
  }
})

const label = computed((): string => {
  switch (themeStore.mode) {
    case 'dark':
      return '暗黑模式'
    case 'light':
      return '亮色模式'
    case 'auto':
      return '跟随系统'
    default:
      return '暗黑模式'
  }
})

function handleToggle() {
  themeStore.toggle()
}
</script>

<template>
  <NTooltip :show-arrow="false" placement="bottom">
    <template #trigger>
      <NButton
        quaternary
        circle
        @click="handleToggle"
        class="transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <Icon
          :icon="icon"
          class="text-2xl transition-transform duration-300"
        />
      </NButton>
    </template>
    <span>{{ label }}</span>
  </NTooltip>
</template>

<style scoped>
@reference "tailwindcss";
</style>
