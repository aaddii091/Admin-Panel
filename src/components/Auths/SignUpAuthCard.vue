<script setup lang="ts">
const props = defineProps(['subtitle', 'title', 'customClasses'])
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
  >
    <div class="flex flex-wrap items-stretch">
      <div class="hidden w-full xl:block xl:w-1/2 bg-indigo-50 xl:flex items-center justify-center">
        <div class="py-18.5 px-26 text-center">
          <router-link class="mb-5.5 inline-block" to="/">
            <img
              class="hidden dark:block zengarden-logo"
              src="../../assets/images/logo/Zengarden-dark.png"
              alt="Logo"
            />
            <img
              class="dark:hidden zengarden-logo"
              src="../../assets/images/logo/Zengarden-light.png"
              alt="Logo"
            />
          </router-link>

          <p class="font-medium 2xl:px-20">Register to Your Emotional Headquarters</p>

          <span class="mt-15 inline-block">
            <img
              src="../../assets/images/illustration/Register-image.png"
              alt="illustration"
              class="sign-in-image"
            />
          </span>
        </div>
      </div>
      <div class="w-full bg-white border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-0">
        <div class="w-full p-4 sm:p-12.5 xl:p-17.5">
          <span class="mb-1.5 block font-medium">{{ props.subtitle }}</span>
          <h2
            class="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 sign-in-box"
          >
            {{ props.title }}
          </h2>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
@theme {
  font-display: 'Nunito', sans-serif;
}

.sign-in-box {
  display: flex;
  justify-content: center;
}

.sign-in-image {
  width: 400px;
  height: 400px;
}

.zengarden-logo {
  width: 238px;
  height: 52px;
}
</style>
