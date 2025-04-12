<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

defineOptions({
  name: 'Support-tab-raise-a-ticket'
});
</script>

<template>
  <DefaultLayout>
    <div class="mb-4">
    </div>
    <div class="support-screen bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark">
      <h2 class="font-bold text-center text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white">Raise A Support Ticket</h2>

      <div class="support-container flex flex-col items-center justify-center h-full gap-y-6 mx-auto sm:max-w-[548px] w-full">
        <h2 class="flex font-bold text-[36px] leading-[44px] text-[#404040] text-center dark:text-white">Request Support from Us</h2>
        <h2 class="flex font-medium text-[18px] leading-[28px] text-[#404040] text-center dark:text-[#AEAEAE]">We welcome any suggestions or reporting bugs to help with the improvement of our Zengarden Ecosystem!</h2>

        <div class="mb-5 mt-2">
            <router-link to="/support/raiseATicket">
                <button
                type="submit"
                :disabled="loading"
                class="flex gap-x-2 w-sm cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50 items-center"
                >
                
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0285 5.91333V7.93241M16.0285 11.9706V13.9896M16.0285 18.0278V20.0469M5.93314 5.91333C4.81804 5.91333 3.91406 6.8173 3.91406 7.93241V10.961C5.02917 10.961 5.93314 11.865 5.93314 12.9801C5.93314 14.0952 5.02917 14.9992 3.91406 14.9992V18.0278C3.91406 19.1429 4.81804 20.0469 5.93314 20.0469H20.0667C21.1818 20.0469 22.0858 19.1429 22.0858 18.0278V14.9992C20.9707 14.9992 20.0667 14.0952 20.0667 12.9801C20.0667 11.865 20.9707 10.961 22.0858 10.961V7.93241C22.0858 6.8173 21.1818 5.91333 20.0667 5.91333H5.93314Z" stroke="white" stroke-width="2.16763" stroke-linecap="round" stroke-linejoin="round"/>
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
        height : calc(100vh - 128px);
    }
</style>
