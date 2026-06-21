<script setup lang="ts">
import type { Note } from '@/types/note'
import NoteCard from './NoteCard.vue'

defineProps<{
  category: string
  notes: Note[]
}>()
</script>

<template>
  <div>
    <h3 class="group-title">{{ category }}</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NoteCard
        v-for="note in notes"
        :key="note.title"
        :note="note"
      />
    </div>
  </div>
</template>

<style scoped>
.group-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
  padding-left: 4px;
  border-left: 3px solid var(--color-primary);
  padding-left: 12px;
}
</style>