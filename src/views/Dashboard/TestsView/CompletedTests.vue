/// <reference path="path/types.d.ts" />
<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TestList from '@/components/Tables/TestList.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const pageTitle = ref('Tests')
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

    <ul class="flex gap-6 text-xl font-medium text-[#262626] dark:text-gray-300 ml-6">
          <li class="navbar dark:text-white border border-[#737373] border-2 rounded-full dark:border-white text-[#737373] px-6 py-2">
            <router-link to="/tests/assigned">Assigned Tests</router-link>
          </li>
          <li class="navbar dark:text-white border border-[#737373] border-2 rounded-full dark:border-white text-[#737373] px-6 py-2">
            <router-link to="/tests/completed" >Completed Tests</router-link>
          </li>
    </ul>
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
