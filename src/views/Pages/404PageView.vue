<template>
  <!-- <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark  mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12"> -->
  <!-- <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark  mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12"> -->
    <div class="flex flex-wrap items-stretch flex-nowrap items-center min-h-screen"> 
      <!-- Left Section: Text -->
      <div class="flex items-center sm:justify-center xl:justify-end w-full bg-white border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-0 p-4 sm:p-12.5 xl:p-17.5">
        <div class="container-content ">
          <span class="mb-1.5 block font-medium"></span> 
          <h2 class="inline-block text-[#3C50E0] mb-5 mr-2 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 sign-in-box">
          404
          </h2>
          <h2 class="inline-block mb-5 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 sign-in-box">
           - Page Not Found
          </h2>
          <p class="mb-10 block font-medium text-black dark:text-white">Oops! It seems this page doesn’t exist or may have been removed. <br> <br>
          Let’s get you back on track</p>
          <div class="mb-5 mt-10 btn-return-to-home">
            <button
            type="submit"
            :disabled="loading"
            class="flex items-center justify-center gap-1 w-full cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
            >
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2437 15.8687C9.90201 16.2104 9.34799 16.2104 9.00628 15.8687L3.75628 10.6187C3.41457 10.277 3.41457 9.72299 3.75628 9.38128L9.00628 4.13128C9.34799 3.78957 9.90201 3.78957 10.2437 4.13128C10.5854 4.47299 10.5854 5.02701 10.2437 5.36872L6.48744 9.125H16.625C17.1082 9.125 17.5 9.51675 17.5 10C17.5 10.4832 17.1082 10.875 16.625 10.875L6.48744 10.875L10.2437 14.6313C10.5854 14.973 10.5854 15.527 10.2437 15.8687Z" fill="white"/>
            </svg>
            {{ loading ? 'Signing in...' : 'Return to Home' }}
          </button>
        </div>
      </div>
        <slot></slot>
      </div>

      <!-- Right Section: Background & Image -->
      <div class="hidden w-full xl:w-1/2 xl:flex items-center justify-center bg-indigo-50 py-13.5 px-26">
        <!-- <router-link class="mb-5.5 inline-block" to="/"></router-link> -->
        <img src="../../assets/images/illustration/404 Page Not Found.png" alt="illustration" class="sign-in-image ml-7"/>
      </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
</script>

<style>
  .sign-in-image {
    width: 400px;
  }

  .btn-return-to-home {
    width : 205px;
  }

  .container-content{
    width : 467px;
    /* height : 300px; */
  }
</style>
