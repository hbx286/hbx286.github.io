<script setup lang="ts">
defineOptions({
  name: 'HomeView',
})
import ProfileCard from '@/components/home/ProfileCard.vue'
import IntroductionCard from '@/components/home/IntroductionCard.vue'
import SkillSection from '@/components/home/SkillSection.vue'
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true
  })
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-12 gap-6">
      <div
        class="col-span-12 md:col-span-8 h-full transition-all duration-700"
        :style="{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }"
      >
        <IntroductionCard />
      </div>

      <div
        class="col-span-12 md:col-span-4 h-full transition-all duration-700 delay-150"
        :style="{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }"
      >
        <ProfileCard />
      </div>
    </div>
    <div
      class="transition-all duration-700 delay-300"
      :style="{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }"
    >
      <SkillSection />
    </div>
  </div>
</template>

<style scoped></style>
