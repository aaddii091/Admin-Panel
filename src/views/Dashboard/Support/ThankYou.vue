<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

defineOptions({
  name: 'Support-tab'
})

const loading = ref(false)
</script>

<template>
  <DefaultLayout>
    <div class="mb-4"></div>
    <div class="support-screen bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark">
      <div
        class="submission-container border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] w-full max-w-[773px] h-[461px]support-container flex flex-col items-center justify-center h-full gap-y-6 mx-auto w-full dark:bg-meta-4 dark:border-none"
      >
        <img
          src="../../src/assets/images/illustration/Reset-Password.png"
          alt="illustration"
          class="sign-in-image"
        />
        <h2
          class="flex font-medium text-[18px] leading-[28px] text-[#404040] text-center dark:text-[#FFFFFF]"
        >
          Thank You! Your Support Ticket has been submitted.<br />We will get back to you shortly.
        </h2>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.support-screen {
  height: calc(100vh - 128px);
}
</style>
