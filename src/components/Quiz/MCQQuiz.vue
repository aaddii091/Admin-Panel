<template>
  <div>
    <HeaderArea />
    <div class="progress_bar mx-10 lg:mx-70 my-4">
      <div class="flex flex-col items-center">
        <!-- Progress Bar Component -->
        <div class="w-full space-y-2">
          <p
            class="font-sans antialiased text-base text-stone-800 dark:text-white flex items-center justify-between font-semibold"
          >
            <span class="text-xs">Completed</span>
            <span class="text-xs">50%</span>
          </p>
          <div class="w-full bg-stone-200 block rounded-full overflow-hidden h-4">
            <div class="h-full rounded-none bg-lime-400 dark:bg-lime-400" style="width: 50%"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-center">Choose how accurately each statement reflects you</h3>

      <div class="btn-container">
        <div class="btn-choice my-4 mx-4" @click="toggleArrow">
          <div class="choice strongly-disagree"></div>
          <p class="text-xs my-2 mx-2 text-center">
            Strongly <br />
            Disagree
          </p>
        </div>

        <div class="btn-choice my-4 mx-4">
          <div class="choice disagree"></div>
          <p class="text-xs my-2 mx-2 text-center">Disagree</p>
        </div>
        <div class="btn-choice my-4 mx-4">
          <div class="choice neutral"></div>
          <p class="text-xs my-2 mx-2 text-center">Neutral</p>
        </div>
        <div class="btn-choice my-4 mx-4">
          <div class="choice agree"></div>
          <p class="text-xs my-2 mx-2 text-center">Agree</p>
        </div>
        <div class="btn-choice my-4 mx-4">
          <div class="choice strongly-agree"></div>
          <p class="text-xs my-2 mx-2 text-center">
            Strongly <br />
            Agree
          </p>
        </div>
      </div>
    </div>
    <div v-for="question in data" :key="question._id" class="options-outer flex justify-center">
      <div
        class="options bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none my-2 rounded-md flex justify-center flex-col w-[80%]"
      >
        <p class="question text-center my-4 mx-4">{{ question.text }}</p>

        <div class="btn-container">
          <div
            class="btn-choice my-4 mx-4"
            :class="{ selected: question.selectedChoice === 'strongly-disagree' }"
            @click="selectChoice(question._id, 'strongly-disagree')"
          >
            <div class="choice strongly-disagree">
              <svg
                v-if="question.selectedChoice === 'strongly-disagree'"
                viewBox="0 0 24 24"
                role="presentation"
                class="check"
                style="width: 1.5rem; height: 1.5rem; position: absolute"
              >
                <path
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  style="fill: rgb(0, 0, 0)"
                ></path>
              </svg>
            </div>
            <p class="text-xs my-2 mx-2 text-center">
              Strongly <br />
              Disagree
            </p>
          </div>

          <div
            class="btn-choice my-4 mx-4"
            :class="{ selected: question.selectedChoice === 'disagree' }"
            @click="selectChoice(question._id, 'disagree')"
          >
            <div class="choice disagree">
              <svg
                v-if="question.selectedChoice === 'disagree'"
                viewBox="0 0 24 24"
                role="presentation"
                class="check"
                style="width: 1.5rem; height: 1.5rem; position: absolute"
              >
                <path
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  style="fill: rgb(0, 0, 0)"
                ></path>
              </svg>
            </div>
            <p class="text-xs my-2 mx-2 text-center">Disagree</p>
          </div>

          <div
            class="btn-choice my-4 mx-4"
            :class="{ selected: question.selectedChoice === 'neutral' }"
            @click="selectChoice(question._id, 'neutral')"
          >
            <div class="choice neutral">
              <svg
                v-if="question.selectedChoice === 'neutral'"
                viewBox="0 0 24 24"
                role="presentation"
                class="check"
                style="width: 1.5rem; height: 1.5rem; position: absolute"
              >
                <path
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  style="fill: rgb(0, 0, 0)"
                ></path>
              </svg>
            </div>
            <p class="text-xs my-2 mx-2 text-center">Neutral</p>
          </div>

          <div
            class="btn-choice my-4 mx-4"
            :class="{ selected: question.selectedChoice === 'agree' }"
            @click="selectChoice(question._id, 'agree')"
          >
            <div class="choice agree">
              <svg
                v-if="question.selectedChoice === 'agree'"
                viewBox="0 0 24 24"
                role="presentation"
                class="check"
                style="width: 1.5rem; height: 1.5rem; position: absolute"
              >
                <path
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  style="fill: rgb(0, 0, 0)"
                ></path>
              </svg>
            </div>
            <p class="text-xs my-2 mx-2 text-center">Agree</p>
          </div>

          <div
            class="btn-choice my-4 mx-4"
            :class="{ selected: question.selectedChoice === 'strongly-agree' }"
            @click="selectChoice(question._id, 'strongly-agree')"
          >
            <div class="choice strongly-agree">
              <svg
                v-if="question.selectedChoice === 'strongly-agree'"
                viewBox="0 0 24 24"
                role="presentation"
                class="check"
                style="width: 1.5rem; height: 1.5rem; position: absolute"
              >
                <path
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  style="fill: rgb(0, 0, 0)"
                ></path>
              </svg>
            </div>
            <p class="text-xs my-2 mx-2 text-center">
              Strongly <br />
              Agree
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderArea from '@/components/Header/HeaderLogoStance.vue'
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const quizId = ref(route.params.id)

onBeforeMount(async () => {
  const authToken = localStorage.getItem('token')
  console.log(authToken)

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}users/getQuizByID`,
      {
        id: quizId.value
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )
    response.data.quiz[0].questions.forEach((element) => {
      element.selectChoice = ''
      data.value.push(element)
    })
    quizName.value = response.data.quiz[0].name
    console.log(data.value)
  } catch (error) {
    console.error('Error fetching quiz:', error)
  }
})

// Function to handle selection
const selectChoice = (questionId, choice) => {
  const question = data.value.find((q) => q._id === questionId)
  if (question) {
    question.selectedChoice = choice
  } else {
    console.log('error')
  }
}

const data = ref([])
const quizName = ref('')
console.log(data.value[0])
</script>

<style scoped lang="scss">
.choice {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #000626e5;
  box-shadow: 0 4px 8px -2px 0 2px 4px -2px rgba(0, 0, 0, 0.039) rgba(0, 0, 0, 0.078);
}
.strongly-disagree {
  background-color: $bg-strongly-disagree;
  border-color: $b-strongly-disagree;
}
.disagree {
  background-color: $bg-disagree;
  border-color: $b-disagree;
}
.neutral {
  background-color: $bg-neutral;
  border-color: $b-neutral;
}
.agree {
  background-color: $bg-agree;
  border-color: $b-agree;
}
.strongly-agree {
  background-color: $bg-strongly-agree;
  border-color: $b-strongly-agree;
}
.btn-choice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: baseline;
  align-items: center;
}
.btn-container {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.choice:hover {
  border-width: 3px;
}
</style>
