<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  o: Number,
  c: Number,
  e: Number,
  a: Number,
  n: Number
})

const opennessToExperience = ref(0)
const conscientiousness = ref(0)
const extroversion = ref(0)
const agreeableness = ref(0)
const neuroticism = ref(0)

onMounted(() => {
  console.log('extroversion: ', props.e)
  opennessToExperience.value = props.o ? props.o : 0
  conscientiousness.value = props.c ? props.c : 0
  extroversion.value = props.e ? props.e : 0
  agreeableness.value = props.a ? props.a : 0
  neuroticism.value = props.n ? props.n : 0
})

watch(
  () => props.a,
  (newValue) => {
    console.log('extroversion: ', newValue)
    agreeableness.value = newValue ? newValue : 0
  }
)

watch(
  () => props.c,
  (newValue) => {
    console.log('conscientiousness: ', newValue)
    conscientiousness.value = newValue ? newValue : 0
  }
)

watch(
  () => props.e,
  (newValue) => {
    console.log('extroversion: ', newValue)
    extroversion.value = newValue ? newValue : 0
  }
)

watch(
  () => props.n,
  (newValue) => {
    console.log('neuroticism: ', newValue)
    neuroticism.value = newValue ? newValue : 0
  }
)

watch(
  () => props.o,
  (newValue) => {
    console.log('opennessToExperience: ', newValue)
    opennessToExperience.value = newValue ? newValue : 0
  }
)

const myStyles = () => {
  return {
    position: 'relative'
  }
}
</script>

<template>
  <div>
    <Bar
      :data="{
        labels: [
          'Openness to experience',
          'Conscientiousness',
          'Extraversion',
          'Agreeableness',
          'Neuroticism'
        ],
        datasets: [
          {
            label: 'Big 5 (OCEAN) Personality Test Score',
            data: [
              opennessToExperience,
              conscientiousness,
              extroversion,
              agreeableness,
              neuroticism
            ], // Your data values here
            backgroundColor: ['#5DADE2', '#5D6D7E', '#E67E22', '#D4AC0D', '#CB4335']
          }
        ]
      }"
      :options="{
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 40,
            ticks: {
              stepSize: 10 // Set the interval steps
            }
          }
        }
      }"
      :style="myStyles"
    />
  </div>
</template>
