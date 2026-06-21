<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Note } from '@/types/note'

defineProps<{
  note: Note
}>()
</script>

<template>
  <a
    :href="note.link"
    target="_blank"
    rel="noopener noreferrer"
    class="note-card group"
  >
    <div class="flex items-start justify-between mb-3">
      <h3 class="note-title">{{ note.title }}</h3>
      <Icon
        icon="mdi:open-in-new"
        class="external-icon"
      />
    </div>

    <p class="note-summary">{{ note.summary }}</p>

    <div class="flex items-center justify-between mt-4">
      <span class="note-date">{{ note.date }}</span>

      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in note.tags"
          :key="tag"
          class="note-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.note-card {
  display: block;
  padding: 20px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: var(--color-card);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  text-decoration: none;
}

.note-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
  transform: translateY(-2px);
}

.note-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
}

.external-icon {
  font-size: 18px;
  color: var(--color-text-muted);
  flex-shrink: 0;
  margin-left: 12px;
  transition: color 0.3s ease;
}

.note-card:hover .external-icon {
  color: var(--color-primary);
}

.note-summary {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.note-date {
  font-size: 12px;
  color: var(--color-text-muted);
}

.note-tag {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  background: var(--color-bg);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}
</style>
