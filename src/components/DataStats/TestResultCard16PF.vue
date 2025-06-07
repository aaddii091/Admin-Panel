<template>
  <div
    class="w-[578px] px-8 py-8 rounded-[16px] border-0 flex flex-col gap-y-4 drop-shadow-xs mt-10 mb-14 bg-white border-2 border-black"
  >
    <div class="flex flex-col w-full justify-center items-center px-8 gap-y-8 max-w-434">
      <img :src="factorImage" :alt="imageAltText" class="w-[240px] h-[240px] object-contain">
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <div class="flex bg-[#7383FD] py-3 px-6 rounded-full text-white text-[20px] font-normal w-fit">{{ factorType }} - {{ factorName }}</div>
        <div class="flex flex-col text-black text-[16px] items-start gap-y-10">
          {{ factorDescription }}
        </div>
      </div>
    </div>

    <div class="w-[514px] h-[1px] bg-[#E5E5E5] text-[16px] font-normal"></div>

    <div class="flex flex-col text-[#111827] text-[16px] font-medium gap-y-2">
      <div class="flex justify-between">
        <h1>Scale 1</h1>
        <h1>Scale 10</h1>
      </div>
      <!--Progress Bar-->
      <div class="progress-bar">
        <div class="progress-fill " :style="{ width: scoreWidth }"></div> <!-- This is where you set the score -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: '16PFResultCard'
})

const props = defineProps({
  factorType: String,
  factorName: String,
  factorDescription: String,
  factorImage: String,
  imageAltText: String,
  factorScore: Number,
})

const scoreWidth = computed(() => {
  return `${props.factorScore}%`
})
</script>

<style scoped>
.progress-bar {
  width: 100%;
  max-width: 514px;
  height: 17px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  background-color: #6366F1; /* Green */
  transition: width 0.5s ease-in-out;
}

</style>
