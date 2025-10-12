///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuestionnairesStore } from '@/stores/questionnaires'
import { useSelectedValues } from '@/stores/selectedValues'
import QuestionnairesLayout from '@/layouts/QuestionnairesLayout.vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import FormParts from '@/components/Forms/FormParts.vue'
import ValidationError from '@/components/Alerts/ValidationError.vue'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'
import LoadingSpinner from '@/components/Spinner/LoadingSpinner.vue'
import { API_SAVE_TEST_ANSWER } from '@/utils/constants'
import type { OptionI } from '@/components/Forms/FormParts.vue'

import axios from 'axios'

export interface QuestionaryI {
  id: number
  label: string
  type: string
  required: boolean
  optionList: OptionI[]
}

export interface QuestionnairesI {
  title: string,
  subTitle: string,
  questionnaireId: string,
  list: QuestionaryI[]
}

const router = useRouter()
const selectedValueStore = useSelectedValues()
const questionnairesStore = useQuestionnairesStore()

const formData: Ref<QuestionnairesI | null> = ref(null)
const currentForm: Ref<QuestionaryI | null> = ref(null)
const isLoading = ref(false)
const questionnaireId = ref('')
let selectedValues: Array<string> = Array<string>(50).fill('')

onMounted(async () => {
  questionnaireId.value = questionnairesStore.getId
  formData.value = questionnairesStore.getData

  if (!questionnaireId.value || formData.value?.list.length === 0) {
    alert('Something is wrong. Start from the top again.')
    router.push({ path: '/' })
    return
  }
  if (formData.value?.list !== undefined) {
    currentForm.value = formData.value?.list[0]
  } else currentForm.value = null
})

const page = ref(0)
const paging = (num: number) => {
  let index = page.value + num
  if (formData.value === null) return
  if (formData.value?.list.length - 1 < index || index < 0) return
  if (0 < num && !validationCheck()) return
  page.value = index
  currentForm.value = { ...formData.value.list[index] }
  validationErrorFlg.value = false
}

const formChangeEvent = (selectedValue: string, selectedId: any) => {
  console.log('selectedID: ', selectedId, selectedValue)
  selectedValues[selectedId] = selectedValue
}

// Validation
const validationErrorFlg = ref(false)
const validationErrorMsg = ref('This is a required question')
// Check required validation
const validationCheck = () => {
  if (currentForm.value === null) return false
  if (!currentForm.value?.required) {
    return true
  }
  let validFlg = false
  if (
    selectedValues[currentForm?.value.id] ||
    (typeof selectedValues[currentForm.value.id] === 'object' &&
      selectedValues[currentForm.value.id].length > 0)
  ) {
    validFlg = true
  }
  validationErrorFlg.value = !validFlg
  return validFlg
}

const submit = async () => {
  isLoading.value = true
  const postData = {
    questionnaireId: questionnaireId.value,
    testAnswer: selectedValues
  }
  selectedValueStore.setSelectedValues(postData.testAnswer)
  console.log('result: ', selectedValueStore.selectedValues)

  try {
    const response = await axios.post(API_SAVE_TEST_ANSWER, postData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = response?.data?.result || {}
    if (result === 'ok') {
      router.push({ path: '/questionnaires/completed' })
    }
  } catch (error) {
    console.error('Error fetching the form:', error)
    alert('Submit failed')
  }
  isLoading.value = false
}
</script>

<template>
  <QuestionnairesLayout>
    <div v-if="formData">
      <ProgressBar :percentage="((page + 1) / formData.list?.length) * 100" />
      <div class="w-full p-4 md:p-6 2xl:p-6">
        <h1 class="text-2xl text-center font-bold mb-4">{{ 'Before You Begin Each Question:' }}</h1>
        <h2 class="text-xl mt-2 mb-4">{{ "For each question 1-50, add an 'I' at the start and answer based on how much you agree or disagree with the given statement." }}</h2>
        <div
          class="slide-container w-full bg-white dark:bg-boxdark rounded min-h-70 mt-4 md:mt-6 2xl:mt-7.5 px-4 py-6 md:p-6 2xl:p-7.5"
        >
          <TransitionGroup name="slide" tag="ul" class="w-full">
            <template v-for="(item, index) in formData.list" :key="'q_' + item.id">
              <li v-show="page === index">
                <div class="mb-4 text-xl font-semibold">
                  {{ item.label }}
                  <span v-if="item.required" class="text-meta-1">*</span>
                </div>
                <template
                  v-if="item.type === 'radio' || item.type === 'checkbox' || item.type === 'select'"
                >
                  <FormParts
                    :id="item.id.toString()"
                    :type="item.type"
                    :name="'o_' + item.id"
                    :optionList="item.optionList"
                    :required="item.required"
                    @clickEvent="formChangeEvent"
                    v-model="selectedValues[item.id]"
                    customClasses="text-lg"
                  />
                </template>
              </li>
            </template>
          </TransitionGroup>
          <ValidationError
            :errorFlg="validationErrorFlg"
            :msg="validationErrorMsg"
            class="m-1 animate-shake"
          />
          <div class="w-full flex justify-end mt-8" v-show="formData.list?.length - 1 !== page">
            <ButtonDefault
              v-on:click="paging(1)"
              label="Next"
              customClasses="bg-primary text-white rounded-xl min-w-48"
            />
          </div>
          <div class="flex justify-center mt-8" v-show="formData.list?.length - 1 === page">
            <ButtonDefault
              v-on:click="submit"
              label="Submit"
              customClasses="bg-primary text-white rounded-xl min-w-48"
            >
              <span v-show="isLoading" class="mr-1">
                <LoadingSpinner class="w-8 h-8" />
              </span>
            </ButtonDefault>
          </div>
        </div>
        <div class="mt-4">
          <ButtonDefault
            v-show="page > 0"
            v-on:click="paging(-1)"
            label="Back"
            customClasses="
            border-2 border-primary bg-transparent text-primary rounded-xl hover:border-blue-500 hover:text-blue-500
            min-w-40 max-h-12"
          />
        </div>
      </div>
    </div>
  </QuestionnairesLayout>
</template>
<style scoped>
.slide-move,
.slide-enter-active {
  transition: opacity 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-leave-active {
  display: none;
  transition: opacity 0.05s ease;
  position: absolute;
}
</style>
