/// <reference path="path/types.d.ts" />
<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TestList from '@/components/Tables/TestList.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TestCard from '@/components/DataStats/TestCard.vue'
import TestResultCard16PF from '@/components/DataStats/TestResultCard16PF.vue'
import FactorB from '@/assets/images/illustration/FactorB16PF.png'

const assignedDateBigFive = ref(new Date())
const assignedByBigFive = ref("Miss Chitrangda Chauhan")
const estimatedMinutesBigFive = ref(135)
const estimatedMinutes16PF = ref(60)
const labelDescriptionBigFive = ref("To access a person’s personality along five key dimensions")
const labelDescription16PF = ref("Measures an individual's personality across 16 primary factor")
const assignedBy16PF = ref("Dr. Nelson Nordman")
const assignedDate16PF = ref(new Date())
const factorBScore = ref(68)

const pageTitle = ref('Tests')

const currentTab = ref<'assigned' | 'completed'>('completed')

</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <div class="mb-4">
    </div>
    <div class="support-screen bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark">
      <!-- <h2 class="font-bold text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white">{{pageTitle}}</h2> -->
      <!-- <BreadcrumbDefault :pageTitle="pageTitle" /> -->
    <!-- </div> -->
    <!-- Breadcrumb End -->

    <!-- <ul class="flex gap-6 text-l font-medium text-[#262626] dark:text-gray-300 ml-24">
          <li class="navbar focus:border-[#3C50E0] focus:bg-[#3C50E0] focus:text-white hover:border-[#3C50E0] hover:text-[#3C50E0] dark:text-white border border-[#737373] border-2 rounded-full dark:border-white text-[#737373] px-4 py-2">
            <router-link to="/tests">Assigned Tests</router-link>
          </li>
          <li class="navbar active:bg-violet-700 hover:border-[#3C50E0] hover:text-[#3C50E0] dark:text-white border border-[#737373] border-2 rounded-full dark:border-white text-[#737373] px-4 py-2">
            <router-link to="/tests" >Completed Tests</router-link>
          </li>
    </ul> -->

    <ul class="flex gap-6 text-l font-medium text-[#262626] dark:text-gray-300 ml-24">
      <li
        :class="[
          'navbar cursor-pointer border-2 rounded-full px-4 py-2 dark:text-white',
          currentTab === 'assigned'
            ? 'bg-[#3C50E0] text-white border-[#3C50E0]'
            : 'border-[#737373] text-[#737373] hover:border-[#3C50E0] hover:text-[#3C50E0]'
        ]"
        @click="currentTab = 'assigned'"
      >
        Assigned Tests
      </li>

      <li
        :class="[
          'navbar cursor-pointer border-2 rounded-full px-4 py-2 dark:text-white',
          currentTab === 'completed'
            ? 'bg-[#3C50E0] text-white border-[#3C50E0]'
            : 'border-[#737373] text-[#737373] hover:border-[#3C50E0] hover:text-[#3C50E0]'
        ]"
        @click="currentTab = 'completed'"
      >
        Completed Tests
      </li>
    </ul>


    <div v-if="currentTab === 'assigned'" class="flex ml-24 mr-24 gap-x-30">
    <TestCard label="Big Five (Ocean) Personality Test" stroke="bg-[#3C50E0]" 
    :assignedBy="assignedByBigFive"
    :labelDescription="labelDescriptionBigFive" :estimatedMinutes="estimatedMinutesBigFive" 
    :assignedDate ="assignedDateBigFive"
    actionButton="Take Test"/>
    
    <TestCard label="16PF Personality Test" stroke="bg-[#3C50E0]" 
    :assignedBy="assignedBy16PF"
    :labelDescription="labelDescription16PF" :estimatedMinutes="estimatedMinutes16PF" 
    :assignedDate ="assignedDate16PF"
    actionButton="Take Test"/>
    
    </div>

    <div v-else class="flex ml-24 mr-24 gap-x-30">
      <TestCard label="Big Five (Ocean) Personality Test" stroke="bg-[#3C50E0]" 
    :assignedBy="assignedByBigFive"
    :labelDescription="labelDescriptionBigFive" :estimatedMinutes="estimatedMinutesBigFive" 
    :assignedDate ="assignedDateBigFive"
    actionButton="View Report"/>
    </div>

    <TestResultCard16PF :factorImage="FactorB" :factorScore="factorBScore"
    factorDescription="This shows how much you enjoy new experiences and ideas. This shows how much you enjoy new experiences and ideas.This shows how much you enjoy new experiences and ideas."
    factorType="Factor B" factorName="Reasoning"></TestResultCard16PF>

    </div>
    <div class="flex flex-col gap-10">
      <TestList />
    </div>
  </DefaultLayout>
</template>

<style scoped>
.navbar{
  /* font-size: 16px; */
}
</style>