<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen theme-transition">
    <AppHeader />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s var(--ease-out-expo), transform 0.35s var(--ease-out-expo);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.fade-enter-from {
  transform: translateY(8px);
}

.fade-leave-to {
  transform: translateY(-4px);
}

.theme-transition {
  transition: opacity 0.3s ease;
}
</style>
