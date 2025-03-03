<template>
  <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
    <div class="flex flex-wrap xl:flex-nowrap items-center"> 
      <!-- Left Section: Text -->
      <div class="w-full bg-white border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-0 p-4 sm:p-12.5 xl:p-17.5">
        <span class="mb-1.5 block font-medium"></span> 
        <h2 class="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 sign-in-box">
          <!-- 404 Title -->
        </h2>
        <slot></slot>
      </div>

      <!-- Right Section: Background & Image -->
      <div class="hidden w-full xl:w-1/2 xl:flex items-center justify-center bg-indigo-50 py-13.5 px-26">
        <router-link class="mb-5.5 inline-block" to="/"></router-link>
        <img src="../../assets/images/illustration/404 Page Not Found.png" alt="illustration" class="sign-in-image ml-7"/>
      </div>
    </div>
  </div>
</template>

<style>
  .sign-in-image {
    width: 400px;
  }
</style>
