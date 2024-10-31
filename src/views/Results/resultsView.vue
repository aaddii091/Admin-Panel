///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import PersonalityChart from '@/components/Charts/PersonalityChart.vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import { useSelectedValues } from '@/stores/selectedValues'
import {
  calcAgreeableness,
  calcConscientiousness,
  calcExtroversion,
  calcNeuroticism,
  calcOpennessToExperience
} from '@/utils/calculationTraits'
import LampSVG from '@/assets/icons/lamp.svg'
import AddToListSVG from '@/assets/icons/AddToList.svg'
import UserGroupSVG from '@/assets/icons/UserGroup.svg'
import AgreementSVG from '@/assets/icons/Agreement.svg'
import WorrySVG from '@/assets/icons/Worry.svg'
import HighScoreSVG from '@/assets/icons/HighScore.svg'
import LowScoreSVG from '@/assets/icons/LowScore.svg'

const router = useRouter()

const pageTitle = ref('Results')
const selectedValuesStore = useSelectedValues()
const resultData = ref(Array<string>())
const extroversion = ref(0)
const agreeableness = ref(0)
const conscientiousness = ref(0)
const neuroticism = ref(0)
const opennessToExperience = ref(0)
const isCompletedTest = ref(false)

onMounted(() => {
  isCompletedTest.value = JSON.parse(sessionStorage.getItem('IS_COMPLETED_OCEAN_TEST') ?? 'false')
  // resultData.value.push(...selectedValuesStore.selectedValues.values())
  resultData.value.push(
    ...JSON.parse(
      sessionStorage.getItem('OCEAN_TEST_RESULT') ??
        `${selectedValuesStore.selectedValues.values()}`
    )
  )
  calculateTraits(resultData.value)
})

const calculateTraits = (data: string[]) => {
  if (data.length > 0) {
    extroversion.value = calcExtroversion(data)
    agreeableness.value = calcAgreeableness(data)
    conscientiousness.value = calcConscientiousness(data)
    neuroticism.value = calcNeuroticism(data)
    opennessToExperience.value = calcOpennessToExperience(data)
  } else return 0
}

const goToTest = () => {
  router.push({ path: '/tests' })
}
</script>

<template>
  <DefaultLayout>
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <div v-if="isCompletedTest" class="px-2 md:px-10">
      <div class="grid grid-cols-4 gap-10 border rounded-lg px-4 py-4 bg-white">
        <PersonalityChart
          class="col-span-3 w-full h-auto"
          :e="extroversion"
          :c="conscientiousness"
          :o="opennessToExperience"
          :a="agreeableness"
          :n="neuroticism"
        />
        <div class="flex flex-col justify-center">
          <div
            class="flex flex-col p-8 border rounded-lg border-[#E5E5E5] gap-4 text-[16px] font-medium text-black shadow"
          >
            <p>0-9 Low</p>
            <p>10-19 Moderately Low</p>
            <p>20 Moderate</p>
            <p>21-30 Moderately High</p>
            <p>31-40 High</p>
          </div>
        </div>
      </div>
      <div class="text-center text-black mt-20 mb-5">
        <p class="text-3xl font-bold">Personality Blueprint</p>
        <p class="text-sm">A Detailed Guide to Understanding Different Personality Traits</p>
      </div>
      <div class="border border-[#E5E5E5] rounded-lg px-10 py-4 text-black shadow my-6 bg-white">
        <div class="flex flex-col justify-center items-center my-6">
          <div class="flex justify-center items-center w-fit bg-[#7383FD] rounded-full px-6 py-1">
            <LampSVG />
            <p class="px-4 py-2 text-white text-xl font-semibold">Openness to experience</p>
          </div>
          <p class="text-[16px] my-4">This shows how much you enjoy new experiences and ideas.</p>
        </div>
        <hr class="w-full text-[#E5E5E5] my-3" />
        <div class="flex justify-start items-start gap-2">
          <HighScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">High score:</span> You love exploring new things, thinking
            creatively, and tackling change. But, you may get bored with repetitive tasks.
          </p>
        </div>
        <div class="flex justify-start items-start my-5 gap-2">
          <LowScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">Low score:</span> You prefer sticking to what you know and tend
            to like routine and logical tasks.
          </p>
        </div>
      </div>
      <div class="border border-[#E5E5E5] rounded-lg px-10 py-4 text-black shadow my-6 bg-white">
        <div class="flex flex-col justify-center items-center my-6">
          <div class="flex justify-center items-center w-fit bg-[#6E878C] rounded-full px-6 py-1">
            <AddToListSVG />
            <p class="px-4 py-2 text-white text-xl font-semibold">Conscientiousness</p>
          </div>
          <p class="text-[16px] my-4">This reflects how organized and responsible you are.</p>
        </div>
        <hr class="w-full text-[#E5E5E5] my-3" />
        <div class="flex justify-start items-start gap-2">
          <HighScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">High score:</span> You are diligent, like planning, and work
            hard to achieve your goals. You probably enjoy following schedules and meeting
            deadlines.
          </p>
        </div>
        <div class="flex justify-start items-start my-5 gap-2">
          <LowScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">Low score:</span> You may take a more flexible approach to work,
            preferring less structure. You might struggle with deadlines and organization.
          </p>
        </div>
      </div>
      <div class="border border-[#E5E5E5] rounded-lg px-10 py-4 text-black shadow my-6 bg-white">
        <div class="flex flex-col justify-center items-center my-6">
          <div class="flex justify-center items-center w-fit bg-[#D9673F] rounded-full px-6 py-1">
            <UserGroupSVG />
            <p class="px-4 py-2 text-white text-xl font-semibold">Extraversion</p>
          </div>
          <p class="text-[16px] my-4">This measures how much you enjoy interacting with others.</p>
        </div>
        <hr class="w-full text-[#E5E5E5] my-3" />
        <div class="flex justify-start items-start gap-2">
          <HighScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">High score:</span> You thrive in social situations, love
            teamwork, and feel energized by being around people.
          </p>
        </div>
        <div class="flex justify-start items-start my-5 gap-2">
          <LowScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">Low score:</span> You prefer working alone and might find social
            interactions tiring, but you do your best work independently.
          </p>
        </div>
      </div>
      <div class="border border-[#E5E5E5] rounded-lg px-10 py-4 text-black shadow my-6 bg-white">
        <div class="flex flex-col justify-center items-center my-6">
          <div class="flex justify-center items-center w-fit bg-[#D3A558] rounded-full px-6 py-1">
            <AgreementSVG />
            <p class="px-4 py-2 text-white text-xl font-semibold">Agreeableness</p>
          </div>
          <p class="text-[16px] my-4">This shows how cooperative and helpful you are.</p>
        </div>
        <hr class="w-full text-[#E5E5E5] my-3" />
        <div class="flex justify-start items-start gap-2">
          <HighScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">High score:</span> You’re a team player, willing to help others,
            and good at resolving problems.
          </p>
        </div>
        <div class="flex justify-start items-start my-5 gap-2">
          <LowScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">Low score:</span> You may be more focused on your own opinions
            and less interested in working collaboratively, but you stand firm in your ideas.
          </p>
        </div>
      </div>
      <div class="border border-[#E5E5E5] rounded-lg px-10 py-4 text-black shadow my-6 bg-white">
        <div class="flex flex-col justify-center items-center my-6">
          <div class="flex justify-center items-center w-fit bg-[#A54F4E] rounded-full px-6 py-1">
            <WorrySVG />
            <p class="px-4 py-2 text-white text-xl font-semibold">Neuroticism</p>
          </div>
          <p class="text-[16px] my-4">
            This trait shows how well you handle stress and emotional situations.
          </p>
        </div>
        <hr class="w-full text-[#E5E5E5] my-3" />
        <div class="flex justify-start items-start gap-2">
          <HighScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">High score:</span> You may find high-pressure situations
            stressful and might get anxious easily in tough moments.
          </p>
        </div>
        <div class="flex justify-start items-start my-5 gap-2">
          <LowScoreSVG class="overflow-visible" />
          <p class="text-[16px]">
            <span class="font-bold">Low score:</span> You stay calm under pressure and tend to be
            more optimistic, handling stress well.
          </p>
        </div>
      </div>
    </div>
    <div v-if="!isCompletedTest">
      <div class="w-full p-4 md:p-6 2xl:p-6">
        <h1 class="text-3xl text-center font-bold mb-4">
          No results yet, take a test to see your results here
        </h1>
        <div class="flex justify-center">
          <ButtonDefault
            @on_click="goToTest"
            label="Take Test"
            customClasses="bg-primary text-white rounded-xl mt-6"
            class="min-w-48"
          />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
