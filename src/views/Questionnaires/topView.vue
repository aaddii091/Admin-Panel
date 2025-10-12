///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuestionnairesStore } from '@/stores/questionnaires'
import QuestionnairesLayout from '@/layouts/QuestionnairesLayout.vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import LoadingSpinner from '@/components/Spinner/LoadingSpinner.vue'
import type { QuestionnairesI } from './formView.vue'
import { API_GET_TEST_LIST } from '@/utils/constants'

import axios from 'axios'
// Access the route parameters
const route = useRoute()
const router = useRouter()
const userId = route.params.id
const questionnaireId = route.params.questionnaireId
const questionnairesStore = useQuestionnairesStore()

// State to hold the form HTML
const formData: Ref<QuestionnairesI | null> = ref(null)
const isLoading = ref(true)

// Fetch Google Form data list
const fetchForm = async () => {
  const postData = {
    userId,
    questionnaireId
  }
  console.log(postData)
  try {
    const response = await axios.post(API_GET_TEST_LIST, postData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    formData.value = response?.data || null
    if (formData.value) return true
    else return false
    // return true;
  } catch (error) {
    console.error('Error fetching the form:', error)
    return false
  }
}

// Fetch form on component mount
onMounted(async () => {
  questionnairesStore.setId(questionnaireId.toString())
  const fetchFormFlg = await fetchForm()
  if (!fetchFormFlg) {
    alert('Test is tempolary unavailable.')
    return
  }
  console.log(formData.value?.title)
  questionnairesStore.setData(formData.value)
  isLoading.value = false
})

const goToPage = (props: any) => {
  console.log('id', questionnairesStore.id)
  console.log('clicked', props)
  router.push({ path: '/questionnaires/form' })
}
</script>

<template>
  <QuestionnairesLayout>
    <div class="w-full p-4 md:p-6 2xl:p-6">
      <div v-show="isLoading" class="w-full flex justify-center my-8">
        <LoadingSpinner class="w-16 h-16" />
      </div>
      <h1 class="text-2xl text-center font-bold mb-4">{{ formData?.title }}</h1>
      <h2 class="text-xl mt-2 mb-4">{{ formData?.subTitle }}</h2>

      <div class="flex justify-center">
        <ButtonDefault
          @on_click="goToPage"
          label="Start"
          customClasses="bg-primary text-white rounded-xl mt-6 disabled:text-graydark"
          :disabled="isLoading"
          class="min-w-48"
        />
      </div>
    </div>
  </QuestionnairesLayout>
</template>
