<script setup lang="ts">
defineProps<{
  title: string
  value: string
}>()
</script>

<template>
  <div
    class="group h-[90px] rounded-2xl border px-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
    :style="{
      borderColor: 'var(--color-border)',
      backgroundColor: 'var(--color-card)',
    }"
  >
    <div class="flex h-full items-center gap-4">
      <!-- 左侧 Icon -->
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        :style="{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-primary)',
        }"
      >
        <slot name="icon" />
      </div>

      <!-- 右侧内容 -->
      <div class="flex flex-col items-start justify-center text-left">
        <span class="text-xs tracking-wider" style="color: var(--color-text-muted)">
          {{ title }}
        </span>
        <span class="mt-1 text-sm font-semibold whitespace-nowrap" style="color: var(--color-text)">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

div:hover {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
}
</style>
