<script setup lang="ts">
import { computed } from 'vue'
import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const router = useRouter()

const menuList = computed(() => {
  const routes = router.getRoutes()

  return routes
    .filter((r) => r.path !== '/')
    .map((r) => ({
      path: r.path,
      title: r.meta?.title,
    }))
})
</script>

<template>
  <header class="h-16 border-b backdrop-blur-md" :class="$style.header">
    <div
      class="max-w-7xl mx-auto h-full flex items-center justify-between"
    >
      <!-- Left -->
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-lg border flex items-center justify-center"
          :class="$style.logoBorder"
        >
          <Icon
            icon="mdi:cube-outline"
            class="text-2xl"
            :class="$style.logoIcon"
          />
        </div>
        <span class="text-xl font-bold" :class="$style.logoText">
          HBX Lab
        </span>
      </div>

      <!-- Center -->
      <nav class="flex items-center gap-10">
        <RouterLink
          v-for="menu in menuList"
          :key="menu.path"
          :to="menu.path"
          :class="[
            $style.navLink,
            { [$style.active]: $route.path === menu.path },
          ]"
        >
          {{ menu.title }}
        </RouterLink>
      </nav>

      <!-- Right -->
      <div class="flex items-center gap-4">
        <NButton quaternary circle>
          <Icon icon="mdi:github" class="text-2xl" />
        </NButton>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style module scoped>
.header {
  border-bottom-color: var(--color-border) !important;
}

.logoBorder {
  border-color: var(--color-primary) !important;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}

.logoBorder:hover {
  box-shadow:
    0 0 15px rgba(34, 211, 238, 0.5),
    0 0 30px rgba(34, 211, 238, 0.2);
}

.logoIcon {
  color: var(--color-primary) !important;
}

.logoText {
  color: var(--color-text) !important;
}

.navLink {
  position: relative;
  color: var(--color-text-secondary) !important;
  transition: color 0.2s ease;
}

.navLink:hover {
  color: var(--color-text) !important;
}

.navLink.active {
  color: var(--color-primary) !important;
}

.navLink.active::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
  box-shadow:
    0 0 10px var(--color-primary),
    0 0 20px var(--color-primary);
}
</style>
