<script setup lang="ts"></script>

<template>
  <footer class="border-t py-8 mt-12" :class="$style.footer">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <div
        class="flex flex-col items-center justify-center gap-3"
      >
        <!-- Copyright -->
        <p class="text-sm" :class="$style.copyright">
          © 2026 HBX Lab. All rights reserved.
        </p>
        <p class="text-xs" style="color: var(--color-text-muted)">
          Built with Vue 3 + Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<style module scoped>
.footer {
  border-top-color: var(--color-border) !important;
  background: color-mix(in srgb, var(--color-bg) 50%, transparent);
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
