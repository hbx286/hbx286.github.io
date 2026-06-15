<script setup lang="ts">
import { NCard } from 'naive-ui'
</script>

<template>
  <NCard class="introduction-card" :bordered="false">
    <div class="space-y-6">
      <div>
        <p class="text-slate-400">Hi, I'm</p>

        <h1 class="text-5xl font-bold text-white mt-2">hbx</h1>
      </div>

      <p class="text-xl text-slate-300 leading-9">专注于后端开发、数据平台建设与 AI 应用探索</p>

      <div class="text-slate-400 space-y-2">
        <p>3年开发经验</p>
        <p>Python · FastAPI · PostgreSQL · Doris</p>
        <p>正在学习 Kubernetes · Flink · Agent</p>
      </div>
    </div>
    <div class="mt-8 flex gap-4">
      <NButton type="primary"> 查看项目 </NButton>

      <NButton secondary> 联系我 </NButton>
    </div>
  </NCard>
</template>

<style scoped>
.introduction-card {
  width: 100%;
  min-height: 280px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.03);
}
</style>
