<script setup lang="ts">
defineProps<{
  title: string
  value: string
}>()
</script>

<template>
  <div
    class="group h-[90px] rounded-2xl border border-slate-800 bg-slate-950/40 px-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]"
  >
    <div class="flex h-full items-center gap-4">
      <!-- 左侧 Icon -->
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/60 text-cyan-400 text-xl transition-transform duration-300 group-hover:scale-110"
      >
        <slot name="icon" />
      </div>

      <!-- 右侧内容 -->
      <div class="flex flex-col items-start justify-center text-left">
        <span class="text-xs tracking-wider text-slate-500">
          {{ title }}
        </span>

        <span class="mt-1 text-sm font-semibold text-white">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>
