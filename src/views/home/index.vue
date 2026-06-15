<script setup lang="ts">
defineOptions({
  name: 'HomeView',
})
import ProfileCard from '@/components/home/ProfileCard.vue'
import IntroductionCard from '@/components/home/IntroductionCard.vue'
import SkillSection from '@/components/home/SkillSection.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-4">
        <ProfileCard />
      </div>

      <div class="col-span-8">
        <IntroductionCard />
      </div>
    </div>
    <SkillSection />
  </div>
</template>

<style scoped></style>
