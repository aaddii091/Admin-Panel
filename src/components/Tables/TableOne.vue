<script setup lang="ts">
import { ref } from 'vue'

import BrandOne from '@/assets/images/brand/brand-01.svg'
import BrandTwo from '@/assets/images/brand/brand-02.svg'
import BrandThree from '@/assets/images/brand/brand-03.svg'
import BrandFour from '@/assets/images/brand/brand-04.svg'
import BrandFive from '@/assets/images/brand/brand-05.svg'
import UserFive from '@/assets/images/user/user-05.png'

const userData = ref([
  {
    logo: BrandFive,
    username: 'john_doe',
    UID: '12345',
    psychologist: 'Dr. Smith',
    name: 'John Doe',
    percentageOfCompletion: 75
  },
  {
    logo: BrandFive,
    username: 'jane_smith',
    UID: '67890',
    psychologist: 'Dr. Brown',
    name: 'Jane Smith',
    percentageOfCompletion: 85
  },
  {
    logo: BrandFive,
    username: 'bob_jones',
    UID: '11223',
    psychologist: 'Dr. Taylor',
    name: 'Bob Jones',
    percentageOfCompletion: 60
  },
  {
    logo: BrandFive,
    username: 'alice_white',
    UID: '44556',
    psychologist: 'Dr. Green',
    name: 'Alice White',
    percentageOfCompletion: 90
  },
  {
    logo: BrandFive,
    username: 'mike_black',
    UID: '77889',
    psychologist: 'Dr. Miller',
    name: 'Mike Black',
    percentageOfCompletion: 50
  }
])
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">User Details</h4>

    <div class="flex flex-col">
      <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">User</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">UID</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Psychologist</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Completion</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Report</h5>
        </div>
      </div>

      <div
        v-for="(brand, key) in userData"
        :key="key"
        :class="`grid grid-cols-3 sm:grid-cols-5 ${
          key === userData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
        }`"
      >
        <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
            <img :src="brand.logo" alt="Brand" />
          </div>
          <p class="hidden text-black dark:text-white sm:block">{{ brand.name }}</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">{{ brand.UID }}</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">{{ brand.psychologist }}</p>
        </div>

        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">{{ brand.percentageOfCompletion }}%</p>
        </div>

        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="reportDownload"
              viewBox="0 0 24 24"
              style="fill: rgba(248, 247, 247, 1); transform:; msfilter:"
            >
              <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
              <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.reportDownload {
  cursor: pointer;
}
</style>
