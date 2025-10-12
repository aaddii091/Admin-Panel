<script setup lang="ts">
import { onMounted, ref } from 'vue'
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  e: Number,
  a: Number,
  c: Number,
  n: Number,
  o: Number
});

const chartData = {
  series: [props.e, props.a, props.c, props.n, props.o],
  labels: [
    'Extroversion',
    'Agreeableness',
    'Conscientiousness',
    'Neuroticism',
    'Openness to Experience'
  ]
}
 
onMounted(() => {
  console.log('e: ', props.e)
})

const chart = ref(null)

const apexOptions = {
  chart: {
    type: 'donut',
    width: 380
  },
  colors: ['#DB4F26', '#E4A22E', '#618289', '#AC3737', '#5D8262'],
  labels: chartData.labels,
  legend: {
    show: false,
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '0%',
        background: 'transparent'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200
        }
      }
    }
  ]
}
</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5"
  >
    <div class="mb-3 justify-between gap-4 sm:flex">
      <div>
        <h4 class="text-xl font-bold text-black dark:text-white">Personality traits scores</h4>
      </div>
    </div>
    <div class="mb-2">
      <div id="chartThree" class="mx-auto flex justify-center">
        <VueApexCharts
          type="donut"
          width="340"
          :options="apexOptions"
          :series="chartData.series"
          ref="chart"
        />
      </div>
    </div>
    <div class="cahrt-description -mx-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3">
      <div class="w-full px-8" v-for="(value, index) in chartData.labels" :key="index">
        <div class="flex w-full items-center">
          <span
            class="mr-2 block h-3 w-full max-w-3 rounded-full"
            :style="{ backgroundColor: apexOptions.colors[index] }"
          />
          <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
            <span> {{ value }} </span>
            <span> {{ chartData.series[index] }}% </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="deatailed-description">
    <p class="text-2xl font-bold text-[#16163f] px-4 border-l-4 border-[#d3b574] mb-5">
      Detailed Dimension Description
    </p>
    <div class="traits grid grid-cols-1 sm:grid-cols-2 gap-y-3">
      <div class="traits-description p-2 shadow-4 bg-white">
        <div class="bg-[#753131] px-4 pt-8 pb-4 flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <div
              class="flex items-center justify-center h-16 w-16 bg-red-700 text-white text-xl font-bold rounded-full border-4 border-white"
            >
              19
            </div>
            <p class="text-title-md2 font-medium text-white">Neuroticism</p>
          </div>
          <div class="w-full bg-[#A6817F] rounded-full h-4">
            <div class="bg-[#EFE9E9] h-4 rounded-full" style="width: 38%">
              <div class="text-red-900 text-right text-xs font-bold leading-4 pr-2">38%</div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-lg font-medium text-white">Emotional Stability</p>
            <p class="text-sm text-white">VS.</p>
            <p class="text-lg font-medium text-white">Reactivity</p>
          </div>
        </div>
        <div class="flex flex-col mt-2 p-4 font-medium gap-5">
          <h5 class="text-title-sm font-semibold text-[#753131]">You result: Moderately low</h5>
          <p>
            <span class="font-bold">Neuroticism</span> is characterized by frequent mood changes, a
            tendency to worry about things, ease of irritation and disturbance, and recurrent
            sadness.
          </p>
          <p>
            Because you scored moderately low on Neuroticism, you are primarily relaxed, have high
            self-esteem and efficiently deal with stress. You also tend to have realistic
            expectations.
          </p>
          <p>
            You are generally a calm person capable of coping with stress factors. However, you tend
            to experience more intense negative emotions like guilt, anger and sadness than you
            wished for.
          </p>
          <p>
            You are a calm, sensible and thoughtful person who shows his human side and is cautious.
          </p>
          <p>Read more about Neuroticism here (opens in a new tab).</p>
        </div>
      </div>
      <div class="traits-result flex justify-center items-center">
        <div>
          <h6 class="text-md font-semibold">
            You have a natural inclination for
            <span class="text-[#753131]">moderately low</span> levels of:
          </h6>
          <div class="grid grid-cols-2 gap-y-6 gap-x-4 my-10">
            <div>
              <p class="font-semibold">Anxiety</p>
              <div class="w-full bg-white rounded-full h-3">
                <div class="bg-[#C8C9C6] h-3 rounded-full" style="width: 25%"></div>
              </div>
            </div>
            <div>
              <p class="font-semibold">Depression</p>
              <div class="w-full bg-white rounded-full h-3">
                <div class="bg-[#C8C9C6] h-3 rounded-full" style="width: 25%"></div>
              </div>
            </div>
            <div>
              <p class="font-semibold">Vulnerability</p>
              <div class="w-full bg-white rounded-full h-3">
                <div class="bg-[#C8C9C6] h-3 rounded-full" style="width: 25%"></div>
              </div>
            </div>
            <div>
              <p class="font-semibold">Self-consciousness</p>
              <div class="w-full bg-white rounded-full h-3">
                <div class="bg-[#C8C9C6] h-3 rounded-full" style="width: 25%"></div>
              </div>
            </div>
            <div>
              <p class="font-semibold">Irritability</p>
              <div class="w-full bg-white rounded-full h-3">
                <div class="bg-[#C8C9C6] h-3 rounded-full" style="width: 25%"></div>
              </div>
            </div>
            <div>
              <p class="font-semibold">Immoderation</p>
              <div class="w-full bg-white rounded-full h-3">
                <div class="bg-[#C8C9C6] h-3 rounded-full" style="width: 25%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
