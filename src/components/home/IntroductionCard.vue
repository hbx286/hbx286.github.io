<script setup lang="ts">
import { NCard } from 'naive-ui'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

import { profile } from '@/data/profile'
import { getExperience } from '@/utils/date-utils'

const router = useRouter()

const workYear = computed(() => {
  return getExperience(profile.startWorkDate)
})

function navigateTo(path: string) {
  router.push(path)
}
</script>

<template>
  <NCard
    class="introduction-card"
    :bordered="false"
    content-style="height: 100%; display: flex; flex-direction: column;"
  >
    <div class="flex flex-col justify-between h-full">
      <div class="space-y-6">
        <div>
          <p
            class="text-slate-400"
            style="color: var(--color-text-secondary)"
          >
            Hi, I'm
          </p>

          <h1
            class="text-5xl font-bold mt-2"
            style="color: var(--color-text)"
          >
            {{ profile.name }}
          </h1>
        </div>

        <p
          class="text-xl leading-9"
          style="color: var(--color-text-secondary)"
        >
          专注于后端开发、数据平台建设与 AI 应用探索
        </p>

        <div
          class="text-slate-400 space-y-2"
          style="color: var(--color-text-muted)"
        >
          <p>{{ workYear }}开发经验</p>
          <p>Python · FastAPI · PostgreSQL · Doris</p>
          <p>正在学习 Kubernetes · Flink · Agent</p>
        </div>
      </div>
      <div class="flex gap-4">
        <button class="gradient-btn" @click="navigateTo('/project')">
          查看项目
        </button>

        <button class="outline-btn" @click="navigateTo('/about')">
          联系我
        </button>
      </div>
    </div>
  </NCard>
</template>

<style scoped>
.introduction-card {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: var(--color-card);
  border: 1px solid var(--color-border);
}

.gradient-btn {
  height: 34px;
  padding: 0 18px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );
  transition:
    opacity 0.3s ease,
    box-shadow 0.3s ease;
  outline: none;
}

.gradient-btn:hover {
  opacity: 0.85;
  box-shadow: 0 0 16px rgba(34, 211, 238, 0.25);
}

.gradient-btn:active {
  opacity: 0.75;
}

.outline-btn {
  height: 34px;
  padding: 0 18px;
  border: 1px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 14px;
  color: var(--color-secondary);
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;
  outline: none;
}

.outline-btn:hover {
  background: color-mix(
    in srgb,
    var(--color-secondary) 12%,
    transparent
  );
  box-shadow: 0 0 12px rgba(129, 140, 248, 0.15);
}

.outline-btn:active {
  opacity: 0.7;
}
</style>
