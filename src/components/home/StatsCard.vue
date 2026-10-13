<script setup lang="ts">
defineProps<{
  title: string
  value: string
}>()
</script>

<template>
  <div
    class="group stats-card flex items-center gap-3 rounded-xl border py-3 px-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
    :style="{
      borderColor: 'var(--color-border)',
      backgroundColor: 'color-mix(in srgb, var(--color-card) 60%, transparent)',
    }"
  >
    <span
      class="text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
      style="color: var(--color-primary)"
    >
      <slot name="icon" />
    </span>

    <div class="flex flex-col">
      <span
        class="text-xs tracking-wide"
        style="color: var(--color-text-muted)"
      >
        {{ title }}
      </span>
      <span
        class="text-xs leading-snug font-medium"
        style="color: var(--color-text)"
      >
        {{ value }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.stats-card:hover {
  border-color: var(--color-border-hover) !important;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
  background: color-mix(in srgb, var(--color-card) 80%, transparent) !important;
}
</style>
