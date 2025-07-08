<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import QuizList from '@/components/Quiz/QuizList.vue'
import TestCount from '@/components/DataStats/TestCount.vue'

// Dynamic count values
const assignedTests = 3
const completedTests = 9
const username = 'x'

defineOptions({
  name: 'Dashboard-tab'
})
</script>

<template>
  <DefaultLayout> </DefaultLayout>
</template>

<style>
.dashboardSpecific {
  padding-top: 0;
}
</style>
