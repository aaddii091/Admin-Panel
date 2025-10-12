/// <reference path="path/types.d.ts" />
<script setup lang="ts">

const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
  }
});

</script>

<template>
  <div class="w-full bg-gray-3 rounded-full h-2.5 mb-4 dark:bg-graydark">
    <div class="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" :style="'width: ' + Math.round(props.percentage) + '%'"></div>
  </div>
</template>
