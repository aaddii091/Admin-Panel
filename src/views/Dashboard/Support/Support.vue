<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

defineOptions({
  name: 'Support-tab'
})

const loading = ref(false)
const hasTicket = ref(false)
</script>

<template>
  <DefaultLayout>
    <div class="mb-4"></div>
    <div v-if="!hasTicket" class="support-screen bg-white py-7 pt-6 pb-6 dark:bg-boxdark shadow-default dark:border-strokedark">
      <h2 class="font-bold text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white">
        Support Ticket
      </h2>

      <div
      class="rounded-sm border-stroke bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
      <div class="max-w-full overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="text-[#6E7485] text-[14px] text-left text-transform">
            <th class="py-4 px-4 font-medium dark:text-white xl:pl-11">
              Date
            </th>
            <th class="min-w-[220px] py-4 px-4 font-medium dark:text-white text-center">
              Ticket Description
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium dark:text-white text-center">
              Status
            </th>
            <th class="py-4 px-4 font-medium dark:text-white text-center">Ticket ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in packages" :key="index">
            <td class="py-5 px-4 pl-9 xl:pl-11 bg-[#FAFAFA] border rounded-lg border-[#E5E5E5] text-left dark:bg-meta-4">
              <h5 class="font-medium text-black dark:text-white">{{ item.title }}</h5>
            </td>
            <td class="py-5 px-4">
              <p class="text-black dark:text-white text-center">{{ item.completedDate }}</p>
            </td>
            <td class="py-5 px-4 text-center">
              <p
                class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                :class="{
                  'bg-graydark text-white': item.status === 'poll',
                  'bg-success text-success': item.status === 'mcq'
                }"
              >
                {{ item.type }}
              </p>
            </td>
            <td class="py-5 px-4">
              <div class="flex items-center space-x-3.5 justify-center">
                <ButtonDefault
                  @click="startQuiz(item._id, item.type)"
                  v-if="item.status !== 'Done'"
                  label="Start test"
                  customClasses="bg-primary text-white rounded-xl min-w-20 max-h-10"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>

    <div v-else-if="hasTicket" class="support-screen bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark">
      <h2 class="font-bold text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white">
        Support Ticket
      </h2>

      <div
        class="support-container flex flex-col items-center justify-center h-full gap-y-6 mx-auto sm:max-w-[548px] w-full"
      >
        <h2
          class="flex font-bold text-[36px] leading-[44px] text-[#404040] text-center dark:text-white"
        >
          Request Support from Us
        </h2>
        <h2
          class="flex font-medium text-[18px] leading-[28px] text-[#404040] text-center dark:text-[#AEAEAE]"
        >
          We welcome any suggestions or reporting bugs to help with the improvement of our Zengarden
          Ecosystem!
        </h2>

        <div class="mb-5 mt-2">
          <router-link to="/support/raiseTicket">
            <button
              type="button"
              :disabled="loading"
              class="flex gap-x-2 w-sm cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50 items-center"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0285 5.91333V7.93241M16.0285 11.9706V13.9896M16.0285 18.0278V20.0469M5.93314 5.91333C4.81804 5.91333 3.91406 6.8173 3.91406 7.93241V10.961C5.02917 10.961 5.93314 11.865 5.93314 12.9801C5.93314 14.0952 5.02917 14.9992 3.91406 14.9992V18.0278C3.91406 19.1429 4.81804 20.0469 5.93314 20.0469H20.0667C21.1818 20.0469 22.0858 19.1429 22.0858 18.0278V14.9992C20.9707 14.9992 20.0667 14.0952 20.0667 12.9801C20.0667 11.865 20.9707 10.961 22.0858 10.961V7.93241C22.0858 6.8173 21.1818 5.91333 20.0667 5.91333H5.93314Z"
                  stroke="white"
                  stroke-width="2.16763"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {{ loading ? 'Initializing a ticket...' : 'Submit a Ticket' }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.support-screen {
  height: calc(100vh - 128px);
}

.text-transform{
  text-transform: uppercase;
}
</style>
