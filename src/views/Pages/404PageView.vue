<template>
  <!-- <div
    class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
  > -->
  <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
    <div class="w-full bg-white border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-0">
        <div class="w-full p-4 sm:p-12.5 xl:p-17.5">
          <span class="mb-1.5 block font-medium"></span> <!--{{ props.subtitle }} -->
          <h2
            class="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 sign-in-box"
          >
            <!-- {{ props.title }} -->
          </h2>

          <slot></slot>
        </div>
      </div>
    <div class="flex flex-wrap items-center">
      <div class="hidden w-full xl:block xl:w-1/2 bg-indigo-50">
        <div class="py-13.5 px-26 text-center">
          <router-link class="mb-5.5 inline-block" to="/">
          </router-link>

          <span class="flex items-center mt-15 mb-26 inline-block">
            <img
              src="../../assets/images/illustration/404 Page Not Found.png"
              alt="illustration"
              class="sign-in-image ml-7"
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    <p>404 Page</p>
  </div> -->
</template>

<script setup></script>

<style>
  .sign-in-image{
    width : 400px;
  }
</style>
