///
<reference path="path/types.d.ts" />
<script setup lang="ts">
// svg files
import IconAlert from '../../assets/images/icon/icon-alert.svg'

const props = defineProps({
  errorFlg: Boolean,
  msg: String
})
</script>

<template>
  <div v-show="errorFlg" class="flex">
    <IconAlert /><span class="ml-2 font-bold text-[#B45454]">{{ msg }}</span>
  </div>
</template>
