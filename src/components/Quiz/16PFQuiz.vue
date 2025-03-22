<template>
  <HeaderArea />
  <div class="mt-4 md:mt-16 sm:mt-8 flex items-center justify-center">
    <div class="w-full max-w-2xl px-4">
      <div
        class="rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <div class="flex flex-col items-center justify-center gap-10 py-8">
          <h2
            v-if="currentQuestion"
            class="text-3xl font-medium text-black dark:text-white text-center"
          >
            {{ currentQuestion.text }}
          </h2>

          <div v-if="currentOptions" class="flex flex-col w-full gap-4 mt-4">
            <button
              v-for="([key, value], index) in Object.entries(currentOptions)"
              :key="index"
              @click="selectChoice(currentQuestion.text, value)"
              class="w-full py-4 px-6 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors font-medium text-lg dark:hover:bg-meta-4"
            >
              {{ value }}
            </button>
          </div>

          <!-- Navigation -->
          <div class="flex justify-between w-full mt-8">
            <button
              @click="prevQuestion"
              :disabled="currentIndex === 0"
              class="flex items-center gap-2 py-4 px-8 rounded-full border-2 border-gray-300 text-blue-500 hover:bg-blue-50 transition-colors font-medium dark:hover:bg-meta-4"
            >
              <span class="mr-2">←</span>
              Back
            </button>

            <div
              class="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-blue-500"
            >
              Q{{ currentIndex + 1 }}
            </div>

            <button
              @click="nextQuestion"
              class="flex items-center gap-2 py-4 px-8 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors font-medium dark:hover:bg-meta-4"
            >
              Next
              <span class="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderArea from '@/components/Header/HeaderLogoStance.vue'
import axios from 'axios'
import { watch } from 'vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const quizId = ref(route.params.id)
const data = ref([])
const quizName = ref('')
const currentIndex = ref(0)
const currentOptions = ref()
const currentQuestion = ref(null)

onBeforeMount(async () => {
  const authToken = localStorage.getItem('token')

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}users/getQuizByID`,
      { id: quizId.value },
      { headers: { Authorization: `Bearer ${authToken}` } }
    )

    data.value = response.data.quiz[0].questions
    quizName.value = response.data.quiz[0].name
  } catch (error) {
    console.error('Error fetching quiz:', error)
  }

  if (data.value.length > 0) {
    currentQuestion.value = data.value[currentIndex.value]
    currentOptions.value = data.value[0].options[0]
  }

  Object.entries(data.value[0].options[0]).forEach(([key, value]) => {
    console.log(key, value)
  })
})

watch(currentIndex, () => {
  currentQuestion.value = data.value[currentIndex.value]
  currentOptions.value = data.value[currentIndex.value].options[0]
})

// Function to handle selection
const selectChoice = (questionText, choice) => {
  console.log(`Selected for "${questionText}": ${choice}`)
  currentIndex.value++
}

// Navigation functions
const nextQuestion = () => {
  if (currentIndex.value < data.value.length - 1) {
    currentIndex.value++
  }
}

const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
