/// <reference path="path/types.d.ts" />
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
const props = defineProps(['label', 'route', 'customClasses']);
const emit = defineEmits(["on_click"]);

const clickEvent = (e: any) => {
  if (props.route) {
    router.push({ path: props.route });
    return;
  }
  // emit event in case it needs to handle in the parent component
  emit("on_click", e);
}
</script>

<template>
  <button
    v-on:click="clickEvent"
    class="inline-flex items-center justify-center gap-2.5 py-4 px-10 text-center font-medium ease-in duration-200 hover:bg-opacity-90 lg:px-8 xl:px-10"
    :class="props.customClasses"
    v-bind="$attrs"
  >
    <slot></slot>
    {{ props.label }}
  </button>
</template>
