<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import QuizList from '@/components/Quiz/QuizList.vue'
import TestCount from '@/components/DataStats/TestCount.vue'

</script>

<template>
  <DefaultLayout>
    <TestCount/>
    <QuizList />
  </DefaultLayout>
</template>
