<template>
  <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark  mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
    <div class="flex flex-wrap items-stretch xl:flex-nowrap items-center"> 
      <!-- Left Section: Text -->
      <div class="flex items-center justify-end w-full bg-white border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-0 p-4 sm:p-12.5 xl:p-17.5">
        <div class="container-content ">
          <span class="mb-1.5 block font-medium"></span> 
          <h2 class="mb-5 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 sign-in-box">
          404 - Page Not Found
          </h2>
          <p class="mb-10 block font-medium text-black dark:text-white">Oops! It seems this page doesn’t exist or may have been removed. <br> <br>
          Let’s get you back on track</p>
          <div class="mb-5 mt-10 btn-return-to-home">
            <button
            type="submit"
            :disabled="loading"
            class="w-full cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
            >
              <img src="C:\Users\PRANAV BHANDAWAT\Documents\Zengarden\ZengardenCode\Admin-Panel\src\assets\images\icon\icon-copy-alt.svg">
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
  </div>
</template>

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
