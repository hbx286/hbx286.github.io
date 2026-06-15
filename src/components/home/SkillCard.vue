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
    class="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]"
  >
    <!-- Header -->
    <div class="flex items-center gap-3 mb-5">
      <Icon :icon="icon" class="text-2xl text-cyan-400" />

      <h3 class="text-lg font-semibold text-white">
        {{ title }}
      </h3>
    </div>

    <!-- Skills -->
    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in skills"
        :key="item"
        class="px-3 py-1 rounded-lg bg-slate-900/70 text-slate-300 text-sm"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>
