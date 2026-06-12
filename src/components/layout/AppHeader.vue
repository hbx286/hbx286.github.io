<script setup lang="ts">
import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="h-16 border-b border-slate-800 backdrop-blur-md">
    <div class="max-w-7xl mx-auto h-full flex items-center justify-between">
      <!-- Left -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg border border-cyan-500 flex items-center justify-center">
          ◇
        </div>
        <span class="text-xl font-bold"> HBX Lab </span>
      </div>

      <!-- Center -->
      <nav class="flex items-center gap-10">
        <RouterLink to="/" class="nav-link active"> 首页 </RouterLink>

        <RouterLink to="/projects"> 项目 </RouterLink>

        <RouterLink to="/labs"> 实验室 </RouterLink>

        <RouterLink to="/notes"> 笔记 </RouterLink>

        <RouterLink to="/about"> 关于我 </RouterLink>
      </nav>

      <!-- Right -->
      <div class="flex items-center gap-4">
        <NButton quaternary circle>
          <Icon icon="mdi:github" class="text-2xl" />
        </NButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference "tailwindcss";

.nav-link {
  @apply relative text-slate-300 transition;
}

.nav-link:hover {
  @apply text-white;
}

.router-link-active {
  color: white;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 2px;

  background: #3b82f6;

  box-shadow:
    0 0 10px #3b82f6,
    0 0 20px #3b82f6;
}
</style>
