<template>
    <div
      class="rounded-sm border-stroke bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
      <div class="max-w-full overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="text-[#6E7485] text-[14px] bg-[#FAFAFA] dark:bg-meta-4 text-left text-transform">
            <th class="py-4 px-4 font-medium dark:text-white xl:pl-11">
              Date
            </th>
            <th class="min-w-[220px] py-4 px-4 font-medium dark:text-white text-left">
              Ticket Description
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium dark:text-white text-left">
              Status
            </th>
            <th class="py-4 px-4 font-medium dark:text-white text-right xl:pr-11">Ticket ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in packages" :key="index" class="m\py-5 px-4 pl-9 xl:pl-11 text-left">
            <td class="py-5 px-4 pl-9 xl:pl-11 text-[15px]">
              <h5 class="font-regular text-black dark:text-white">{{ item.dateOfIssue }}</h5>
            </td>
            <td class="py-5 px-4">
              <p class="text-black dark:text-white text-left text-[14px]">{{ item.ticketDescription }}</p>
            </td>
            <td class="py-5 px-4 text-left">
              <p
                class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                :class="{
                  'bg-graydark text-black dark:bg-meta-4 dark:text-[#E5E7EB]': item.status === 'poll',
                  'bg-success text-success': item.status === 'mcq'
                }"
              >
                {{ item.type }}
              </p>
            </td>
            <td class="py-5 px-4">
              <p class="text-black dark:text-white text-right text-[14px] xl:pr-7">{{ item.ticketID }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const packages = ref([
  {
    dateOfIssue: '2025-06-01',
    ticketDescription: 'Issue with login functionality not working on mobile.',
    status: 'poll',
    type: 'Open',
    ticketID: 'TICKET001'
  },
  {
    dateOfIssue: '2025-05-25',
    ticketDescription: 'Dark mode UI glitch on dashboard.',
    status: 'mcq',
    type: 'Resolved',
    ticketID: 'TICKET002'
  },
  {
    dateOfIssue: '2025-05-15',
    ticketDescription: 'App crashes when clicking on settings.',
    status: 'poll',
    type: 'Open',
    ticketID: '003'
  }
])
</script>

<style scoped>
.text-transform{
  text-transform: uppercase;
}
</style>
