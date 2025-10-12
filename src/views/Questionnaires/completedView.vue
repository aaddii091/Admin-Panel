///
<reference path="path/types.d.ts" />
<script setup lang="ts">
// import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { useQuestionnairesStore } from '@/stores/questionnaires'
import QuestionnairesLayout from '@/layouts/QuestionnairesLayout.vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'

// Access the route parameters
const router = useRouter()
const questionnairesStore = useQuestionnairesStore()

// Delete session
questionnairesStore.deleteData()

// Navigate to the page
const goToPage = () => {
  sessionStorage.setItem('IS_COMPLETED_OCEAN_TEST', JSON.stringify(true));
  router.push({ path: '/results' })
}
</script>

<template>
  <QuestionnairesLayout>
    <div class="w-full p-4 md:p-6 2xl:p-6">
      <h1 class="text-3xl text-center font-bold mb-4">Your Results Are In!</h1>
      <h2 class="text-xl mt-2 mb-4">
        You’ve completed the test—now discover your Personality Blueprint! Head to the Reports
        section on our home page and unlock insights that reveal how your traits shape your choices,
        relationships, and more. Your journey to self-awareness starts now!” Keep the formatting of
        this text also the way it is currently there in our interfaces. I have made italics or used
        double quotes to just specify the headings for these paragraphs.
      </h2>
      <div class="flex justify-center">
        <ButtonDefault
          @on_click="goToPage"
          label="See Results"
          customClasses="bg-primary text-white rounded-xl mt-6"
          class="min-w-48"
        />
      </div>
    </div>
  </QuestionnairesLayout>
</template>
