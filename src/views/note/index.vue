<script setup lang="ts">
import { ref, computed } from 'vue'
import NoteFilter from '@/components/note/NoteFilter.vue'
import NoteGroup from '@/components/note/NoteGroup.vue'

import { notes } from '@/data/notes'
import { categories } from '@/data/note-categories'

defineOptions({
  name: 'NoteView',
})

const activeTag = ref('全部')

const allTags = computed(() => {
  const tagSet = new Set<string>()
  for (const note of notes) {
    for (const tag of note.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
})

const filteredNotes = computed(() => {
  if (activeTag.value === '全部') return notes
  return notes.filter((note) => note.tags.includes(activeTag.value))
})

const groupedNotes = computed(() => {
  const groups: { category: string; notes: typeof notes }[] = []
  for (const cat of categories) {
    const matched = filteredNotes.value.filter(
      (note) => note.category === cat.key,
    )
    if (matched.length > 0) {
      groups.push({ category: cat.label, notes: matched })
    }
  }
  return groups
})

const noteCounts = computed(() => {
  const counts: Record<string, number> = { '全部': notes.length }
  for (const tag of allTags.value) {
    counts[tag] = notes.filter((n) => n.tags.includes(tag)).length
  }
  return counts
})

function onTagSelect(tag: string) {
  activeTag.value = tag
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-3" style="color: var(--color-text)">
        笔记
      </h1>

      <p style="color: var(--color-text-muted)">
        后端 · 数据 · AI · 基础设施 — 记录技术实践与思考
      </p>
    </div>

    <template v-if="notes.length > 0">
      <div class="mb-10">
        <NoteFilter
          :tags="allTags"
          :active-tag="activeTag"
          :note-counts="noteCounts"
          @select="onTagSelect"
        />
      </div>

      <div class="space-y-10">
        <NoteGroup
          v-for="group in groupedNotes"
          :key="group.category"
          :category="group.category"
          :notes="group.notes"
        />
      </div>
    </template>

    <div v-else class="text-center py-24">
      <div style="color: var(--color-text-muted)">
        <p class="text-lg">暂无笔记</p>
        <p class="text-sm mt-2">笔记正在路上，敬请期待</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
