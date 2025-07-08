<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
<template>
  <DefaultLayout>
    <div>
      <div class="my-6">
        <table class="w-full table-auto">
          <thead>
            <!-- border-gray-2 -->
            <tr class="bg-[#FAFAFA] text-left dark:bg-meta-4 text-uppercase">
              <th
                class="min-w-[220px] py-4 px-4 font-medium text-[#525252] dark:text-white xl:pl-11"
              >
                Test Name
              </th>
              <th
                class="min-w-[150px] py-4 px-4 font-medium text-[#525252] dark:text-white text-center"
              >
                User
              </th>
              <th
                class="min-w-[150px] py-4 px-4 font-medium text-[#525252] dark:text-white text-center"
              >
                Assigned By
              </th>
              <th
                class="min-w-[120px] py-4 px-4 font-medium text-[#525252] dark:text-white text-center"
              >
                Date Taken
              </th>
              <th
                class="min-w-[120px] py-4 px-4 font-medium text-[#525252] dark:text-white text-center"
              >
                Report Status
              </th>
              <th class="py-4 px-4 font-medium text-[#525252] dark:text-white text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in packages" :key="index">
              <td class="py-5 px-4 pl-9 xl:pl-11">
                <h5 class="font-medium text-black dark:text-white">{{ item.title }}</h5>
              </td>
              <td class="py-5 px-4">
                <p class="text-black dark:text-white text-center">Zen</p>
              </td>
              <td class="py-5 px-4 text-center">
                <p
                  class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium capitalize text-center"
                  :class="{
                    'bg-graydark text-white': item.status === 'poll',
                    'bg-success text-success': item.status === 'mcq'
                  }"
                >
                  {{ item.type }}
                </p>
              </td>
              <td class="py-5 px-4">
                <p class="text-black dark:text-white text-center">Zen</p>
              </td>
              <td class="py-5 px-4 text-center">
                <div
                  class="items-center space-x-3.5 text-hover-1 cursor-pointer hover:text-primary"
                  @click="startQuiz(item._id, item.type)"
                >
                  View
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DefaultLayout>
</template>
<style lang=""></style>
