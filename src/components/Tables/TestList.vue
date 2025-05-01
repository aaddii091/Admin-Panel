<script setup lang="ts">
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const packages = ref([
  { id: 1237, name: 'Big Five (OCEAN) Personality Test', completedDate: '-', status: 'Available' },
  { id: 1238, name: 'Cattell’s 16 Personality Factors', completedDate: '-', status: 'Available' }
])

const userId = 12345

const goToPage = (questionnaireId: number) => {
  router.push({ path: '/questionnaires/' + userId + '/' + questionnaireId })
}
</script>

<template>
  <div
    class="rounded-sm border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
  <!--removed border from the above div-->
    <div class="max-w-full overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-2 text-left dark:bg-meta-4 text-uppercase">
            <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Test
            </th>
            <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Completed date
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Status</th>
            <th class="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in packages" :key="index">
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <h5 class="font-medium text-black dark:text-white">{{ item.name }}</h5>
            </td>
            <td class="py-5 px-4">
              <p class="text-black dark:text-white ">{{ item.completedDate }}</p>
            </td>
            <td class="py-5 px-4">
              <p
                class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                :class="{
                  'bg-graydark text-white': item.status === 'Done',
                  'bg-success text-success': item.status === 'Available'
                }"
              >
                {{ item.status }}
              </p>
            </td>
            <td class="py-5 px-4">
              <div class="flex items-center space-x-3.5">
                <ButtonDefault
                  v-on:click="goToPage(item.id)"
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
</template>

<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
