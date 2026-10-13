<script setup lang="ts">
import { computed } from 'vue'
import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { profile } from '@/data/profile'

const router = useRouter()

function openGithub() {
  window.open(profile.githubUrl, '_blank')
}

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
      class="max-w-7xl mx-auto h-full flex items-center justify-between px-6"
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
        <span class="text-xl font-bold tracking-tight" :class="$style.logoText">
          HBX Lab
        </span>
      </div>

      <!-- Center -->
      <nav class="flex items-center gap-8">
        <RouterLink
          v-for="menu in menuList"
          :key="menu.path"
          :to="menu.path"
          :class="[
            $style.navLink,
            { [$style.active]: $route.path === menu.path || (menu.path === '/home' && $route.path === '/') },
          ]"
        >
          {{ menu.title }}
        </RouterLink>
      </nav>

      <!-- Right -->
      <div class="flex items-center gap-4">
        <NButton quaternary circle @click="openGithub">
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
  background: color-mix(in srgb, var(--color-bg) 80%, transparent);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
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
  transition: color 0.25s var(--ease-out-expo);
  padding-bottom: 2px;
}

.navLink:hover {
  color: var(--color-text) !important;
}

.navLink::before {
  content: '';
  position: absolute;
  bottom: -21px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: width 0.3s var(--ease-out-expo), left 0.3s var(--ease-out-expo);
}

.navLink:hover::before {
  width: 100%;
  left: 0;
}

.navLink.active {
  color: var(--color-primary) !important;
}

.navLink.active::after {
  content: '';
  position: absolute;
  bottom: -21px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  box-shadow:
    0 0 10px var(--color-primary),
    0 0 20px var(--color-primary);
  border-radius: 2px;
  transition: width 0.3s var(--ease-out-expo), left 0.3s var(--ease-out-expo);
}

.navLink.active::after {
  width: 100%;
  left: 0;
}
</style>
