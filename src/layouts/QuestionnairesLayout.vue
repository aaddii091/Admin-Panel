///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import SimpleHeaderArea from '@/components/Header/SimpleHeaderArea.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = route.name
const alertFlg = routeName === 'questionnairesForm' ? true : false
const alertMsg = alertFlg ? 'Are you sure you want to leave?' : ''
const SimpleHeaderAreaData = {
  alertFlg: alertFlg,
  alertMsg: alertMsg
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <SimpleHeaderArea :data="SimpleHeaderAreaData" />
      <main>
        <div class="mx-auto max-w-[700px] p-4 md:p-6 2xl:p-10 text-slate-700 dark:text-slate-50">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
