<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import QuizList from '@/components/Quiz/QuizList.vue'
import TestCount from '@/components/DataStats/TestCount.vue'

// Dynamic count values
const assignedTests = 3;
const completedTests = 9;
</script>

<template>
  <DefaultLayout>
    <div class="flex justify-around gap=32px mb-8"> 
      <TestCount label="Assigned Tests" background="bg-[#EBEDFF]" :count="assignedTests"/>
      <TestCount label="Completed Tests" background="bg-[#FFF5EB]" :count="completedTests"/>
    </div>
    <QuizList />
  </DefaultLayout>
</template>
