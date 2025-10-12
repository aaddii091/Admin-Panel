<template>
  <HeaderArea />
  <div class="flex justify-center" v-if="isFlashCard">
    <div class="flex justify-center items-center flex-col h-full w-1/2 my-5">
      <h3 class="text-center">
        Uncover Your Unique Personality Blueprint with the Big Five (OCEAN) Personality Test
      </h3>
      <p class="paragraph text-center">
        Your personality shapes how you experience the world, make decisions, and connect with
        others. The Big Five test delves into the core traits that define you- openness,
        conscientiousness, extraversion, agreeableness, and emotional stability. By exploring where
        you stand in each of there, you’ll gain deeper understanding of your natural tendencies,
        empowering you to make more informed choices and build stronger, more meaningful
        relationships.
      </p>
      <h3 class="text-center">
        Uncover Your Unique Personality Blueprint with the Big Five (OCEAN) Personality Test
      </h3>
      <p class="paragraph text-center">
        Your personality shapes how you experience the world, make decisions, and connect with
        others. The Big Five test delves into the core traits that define you- openness,
        conscientiousness, extraversion, agreeableness, and emotional stability. By exploring where
        you stand in each of there, you’ll gain deeper understanding of your natural tendencies,
        empowering you to make more informed choices and build stronger, more meaningful
        relationships.
      </p>
      <button class="btn-zen my-5" @click="flash">Start</button>
    </div>
  </div>
  <div class="mt-4 md:mt-16 sm:mt-8 flex items-center justify-center" v-else>
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
              @click="selectChoice(key, value)"
              class="w-full py-4 px-6 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors font-medium text-lg dark:hover:bg-meta-4"
            >
              {{ value }}
            </button>
          </div>

          <div class="flex justify-center w-full mt-8">
            <div
              class="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-blue-500"
            >
              Q{{ currentIndex + 1 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderArea from '@/components/Header/HeaderLogoStance.vue'
import axios from 'axios'
import { watch, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()
const quizId = ref(route.params.id)
const data = ref([])
const quizName = ref('')
const currentIndex = ref(0)
const currentOptions = ref()
const currentQuestion = ref(null)
const isFlashCard = ref(true)

const answerSheet = ref({
  quizId: '',
  quizName: '',
  quizType: '',
  answers: {}
})

onBeforeMount(async () => {
  const authToken = localStorage.getItem('token')

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}users/getQuizByID`,
      { id: quizId.value },
      { headers: { Authorization: `Bearer ${authToken}` } }
    )

    const quiz = response.data.quiz[0]
    answerSheet.value.quizId = quizId.value
    answerSheet.value.quizName = quiz.title
    answerSheet.value.quizType = quiz.type
    data.value = quiz.questions
    quizName.value = quiz.title

    // Restore from localStorage if available
    const savedProgress = localStorage.getItem('currentQuizProgress')
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress)
      if (parsed.answerSheet.quizId === quizId.value) {
        const confirmResume = confirm('Do you want to resume where you left off?')
        if (confirmResume) {
          answerSheet.value = parsed.answerSheet
          currentIndex.value = parsed.currentIndex
        }
      }
    }

    if (data.value.length > 0) {
      currentQuestion.value = data.value[currentIndex.value]
      currentOptions.value = currentQuestion.value.options[0]
    }
  } catch (error) {
    console.error('Error fetching quiz:', error)
  }
})

watch(currentIndex, () => {
  currentQuestion.value = data.value[currentIndex.value]
  currentOptions.value = currentQuestion.value.options[0]
})

const flash = () => {
  isFlashCard.value = !isFlashCard.value
}

// Handle answer + localStorage save
const selectChoice = async (key, choice) => {
  const questionId = currentQuestion.value._id
  answerSheet.value.answers[questionId] = {
    point: key,
    answer: choice,
    trait: currentQuestion.value.trait
  }

  // Save to localStorage on every answer
  localStorage.setItem(
    'currentQuizProgress',
    JSON.stringify({
      currentIndex: currentIndex.value,
      answerSheet: answerSheet.value
    })
  )

  // Go to next question or submit
  if (currentIndex.value < data.value.length - 1) {
    currentIndex.value++
  } else {
    try {
      const authToken = localStorage.getItem('token')
      const response = await axios
        .post(`${import.meta.env.VITE_SERVER_URL}users/submit-quiz`, answerSheet.value, {
          headers: { Authorization: `Bearer ${authToken}` }
        })
        .then(() => {
          Swal.fire({
            title: 'Quiz is Submitted',
            icon: 'success',
            draggable: true
          })

          localStorage.removeItem('currentQuizProgress')
        })
    } catch (err) {
      Swal.fire({
        title: err.response.data.message,
        icon: 'error',
        draggable: true
      })
      console.log(err)
      err.response.data.message
    }
  }
}
</script>
<style scoped>
.btn-zen {
  align-items: center;
  width: 148px;
  height: 48px;
  border-radius: 40px;
  border-width: 1px;
  padding: 10px;
  gap: 10px;
  top: 600px;
  left: 648px;
}
.btn-zen:hover {
  transition: all 0.15s;
  border-color: #3c50e0;
}
</style>
