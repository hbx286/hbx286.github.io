<script setup lang="ts">
defineProps<{
  tags: string[]
  activeTag: string
  noteCounts: Record<string, number>
}>()

const emit = defineEmits<{
  select: [tag: string]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <button
      class="tag-btn"
      :class="{ active: activeTag === '全部' }"
      @click="emit('select', '全部')"
    >
      全部
      <span class="tag-count">{{ noteCounts['全部'] }}</span>
    </button>

    <button
      v-for="tag in tags"
      :key="tag"
      class="tag-btn"
      :class="{ active: activeTag === tag }"
      @click="emit('select', tag)"
    >
      {{ tag }}
      <span class="tag-count">{{ noteCounts[tag] || 0 }}</span>
    </button>
  </div>
</template>

<style scoped>
.tag-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-secondary);
  outline: none;
}

.tag-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tag-btn.active {
  border-color: var(--color-primary);
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  color: #fff;
}

.tag-count {
  font-size: 12px;
  opacity: 0.7;
}
</style>
