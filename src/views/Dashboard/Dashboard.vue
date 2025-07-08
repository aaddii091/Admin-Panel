<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import QuizList from '@/components/Quiz/QuizList.vue'
import TestCount from '@/components/DataStats/TestCount.vue'
import { changeLanguage } from '@/utils/languageSwitch'

// Dynamic count values
const assignedTests = 3
const completedTests = 9
const username = 'Lucas'

changeLanguage('en')

defineOptions({
  name: 'Dashboard-tab'
})
</script>

<template>
  <DefaultLayout>
    <div class="mb-4"></div>
    <div class="bg-white text-black pl-7 pt-6 pb-6 dark:bg-boxdark">
      <h2 class="font-bold text-[28px] leading-[36px] dark:text-white">
        {{ $t('dashboard.welcome', { name: username }) }}
      </h2>
      <h2 class="font-medium text-[18px] leading-[28px] dark:text-[#AEAEAE]">
        Discover qualified psychologists tailored to your needs.
      </h2>
    </div>
    <div class="flex justify-around gap=32px pb-12 bg-white dark:bg-boxdark">
      <TestCount label="Assigned Tests" background="bg-[#EBEDFF]" :count="assignedTests" />
      <TestCount label="Completed Tests" background="bg-[#FFF5EB]" :count="completedTests" />
    </div>
    <div class="bg-white dark:bg-boxdark">
      <h2 class="pl-7 text-black font-bold text-[20px] dark:text-white">Recent Test Reports</h2>
    </div>
    <QuizList />
  </DefaultLayout>
</template>

<style>
.dashboardSpecific {
  padding-top: 0;
}
</style>
