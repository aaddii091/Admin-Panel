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
            <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white text-center">
              Completed date
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white text-center">
              Status
            </th>
            <th class="py-4 px-4 font-medium text-black dark:text-white text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in packages" :key="index">
            <td class="py-5 px-4 pl-9 xl:pl-11">
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
</template>
<script setup>
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'

import { useStore } from '@/stores/store'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const packages = ref([])

const startQuiz = (quizId, type) => {
  if (type === 'poll') {
    router.push(`/mcq/${quizId}`)
  } else if (type === 'poll PF') {
    router.push(`/poll-pf/${quizId}`)
  }
}

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
</script>
<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
