<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <AppHeader />

    <div class="flex-1 overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
