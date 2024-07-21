<script setup lang="ts">
import TableOne from '@/components/Tables/TableOne.vue'
import BrandFive from '@/assets/images/brand/brand-05.svg'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

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
  <DefaultLayout>
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
            <h5 class="text-sm font-medium uppercase xsm:text-base">Assign</h5>
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
                style="fill: rgba(255, 255, 255, 1); transform:; msfilter:"
              >
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style>
.reportDownload {
  cursor: pointer;
  border: 1px solid rgb(61 76 92);
  border-radius: 50%;
  background-color: rgb(61 76 92);
}
</style>
