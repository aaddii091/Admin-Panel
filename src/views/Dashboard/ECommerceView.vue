///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TestList from '@/components/Tables/TestList.vue'
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col gap-10">
      <TestList />
    </div>
  </DefaultLayout>
</template>
