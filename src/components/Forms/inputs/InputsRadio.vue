/// <reference path="path/types.d.ts" />
<script setup lang="ts">
import { ref, watch, defineProps, computed } from 'vue';

const props = defineProps({
  id: String,
  value: String,
  type: String,
  name: String,
  questionId: String,
  optionId: String,
  customClasses: String,
  label: String,
  modelValue: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const localModel = ref(props.modelValue);
const emit = defineEmits(['update:modelValue', 'clickEvent']);
const isSelected = computed(() => localModel.value == props.optionId);

const handleSelectClick = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
  setTimeout(() => {
    emit('clickEvent', target.value, props.questionId);
  });
  console.log('target.value: ', target.value, props.questionId)
}

watch(() => props.modelValue, (newValue) => {
  localModel.value = newValue;
});

</script>

<template>
  <label
    :key="id"
    :for="id"
    :customClasses="customClasses"
    class="flex cursor-pointer select-none items-center ease-in duration-200
      border-[1.5px] border-primary rounded-full
      font-medium
      py-3.5 px-6
    "
    :class="isSelected ? 
      'bg-primary text-white hover:bg-opacity-90' :
      'bg-transparent hover:bg-[#6476ff] hover:text-white'
    "
  >
    <div class="relative">
      <input
        :type="type"
        :id="id"
        :name="name"
        :value="optionId"
        @click="handleSelectClick"
        class="sr-only"
        v-model="localModel"
        v-bind="$attrs"
      />
      <label :for="id">
        {{label}}
      </label>
    </div>
  </label>
</template>
