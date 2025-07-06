// eslint-disable-next-line vue/multi-word-component-names
<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <div class="mb-4"></div>
    <div class="support-screen bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark">
      <!-- <h2 class="font-bold text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white">{{pageTitle}}</h2> -->
      <!-- <BreadcrumbDefault :pageTitle="pageTitle" /> -->
      <!-- </div> -->
      <!-- Breadcrumb End -->

      <!-- <ul class="flex gap-6 text-l font-medium text-[#262626] dark:text-gray-300 ml-24"
          <li class="navbar focus:border-[#3C50E0] focus:bg-[#3C50E0] focus:text-white hover:border-[#3C50E0] hover:text-[#3C50E0] dark:text-white border border-[#737373] border-2 rounded-full dark:border-white text-[#737373] px-4 py-2">
            <router-link to="/tests">Assigned Tests</router-link>
          </li>
          <li class="navbar active:bg-violet-700 hover:border-[#3C50E0] hover:text-[#3C50E0] dark:text-white border border-[#737373] border-2 rounded-full dark:border-white text-[#737373] px-4 py-2">
            <router-link to="/tests" >Completed Tests</router-link>
          </li>
    </ul> -->

      <ul class="flex gap-6 text-l font-medium text-[#262626] dark:text-gray-300 ml-24">
        <li
          class="navbar cursor-pointer border-2 rounded-full px-4 py-2 dark:text-white border-[#737373] text-[#737373] hover:border-[#3C50E0] hover:text-[#3C50E0]"
        >
          Assigned Tests
        </li>

        <li
          class="navbar cursor-pointer border-2 rounded-full px-4 py-2 dark:text-white class='border-[#737373] text-[#737373] hover:border-[#3C50E0] hover:text-[#3C50E0]"
        >
          Completed Tests
        </li>
      </ul>

      <div class="flex ml-24 mr-24 gap-x-30">
        <TestCard
          v-for="(pkg, index) in packages"
          :key="index"
          :label="pkg?.testName || 'Untitled Test'"
          :stroke="'bg-[#3C50E0]'"
          :assignedBy="pkg?.assignedBy || 'Unknown Assigner'"
          :labelDescription="pkg?.description || 'No description available'"
          :estimatedMinutes="pkg?.estimatedMinutes || 'N/A'"
          :assignedDate="pkg?.assignedDate || 'Not assigned'"
          actionButton="Take Test"
        />
      </div>
    </div>
    <div class="flex flex-col gap-10">
      <TestList />
    </div>
  </DefaultLayout>
</template>

<script setup lang="js">
import { onBeforeMount, onMounted, ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TestList from '@/components/Tables/TestList.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TestCard from '@/components/DataStats/TestCard.vue'
import axios from 'axios'

const packages = ref([])

onBeforeMount(async () => {
  const authToken = localStorage.getItem('token')
  console.log('Auth Token:', authToken)

  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}users/getUserQuizzes`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    console.log(response.data.quizzes)
    packages.value = response.data.quizzes
  } catch (error) {
    console.error('Error fetching quizzes:', error)
  }
})
onMounted(() => {
  console.log(packages.value)
})
</script>

<style scoped>
.navbar {
  /* font-size: 16px; */
}
</style>
