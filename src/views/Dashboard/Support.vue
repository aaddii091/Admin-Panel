<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import QuizList from '@/components/Quiz/QuizList.vue'
import TestCount from '@/components/DataStats/TestCount.vue'

// Dynamic count values
const assignedTests = 3;
const completedTests = 9;
const username = 'x';

defineOptions({
  name: 'Support-tab'
});
</script>

<template>
  <DefaultLayout>
    <div class="bg-white text-black pl-7 pt-6 pb-6">
      <h2 class="font-bold text-[28px] leading-[36px]">Welcome, {{ username }}!</h2>
      <h2 class="font-medium text-[18px] leading-[28px]">Discover qualified psychologists tailored to your needs.</h2>
    </div>
    <div class="flex justify-around gap=32px pb-12 bg-white"> 
      <TestCount label="Assigned Tests" background="bg-[#EBEDFF]" :count="assignedTests"/>
      <TestCount label="Completed Tests" background="bg-[#FFF5EB]" :count="completedTests"/>
    </div>
    <div>
      <h2 class="bg-white pl-7 text-black font-bold text-[20px]">Recent Test Reports</h2>
    </div>
    <QuizList />
  </DefaultLayout>
</template>

<style>
.dashboardSpecific {
  padding-top: 0;
}
</style>
