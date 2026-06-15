<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="border-t py-8 mt-12" :class="$style.footer">
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <!-- Copyright -->
        <p class="text-sm" :class="$style.copyright">
          © 2026 HBX Lab. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style module scoped>
.footer {
  border-top-color: var(--color-border) !important;
  color: var(--color-text-muted) !important;
}

.copyright {
  color: var(--color-text-muted) !important;
}

.socialLink {
  color: var(--color-text-secondary) !important;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.socialLink:hover {
  color: var(--color-primary) !important;
  transform: scale(1.1);
}
</style>
