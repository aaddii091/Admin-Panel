///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import { computed } from 'vue'
import IconCheckbox from '@/assets/images/icon/icon-checkbox.svg'

const props = defineProps({
  id: String,
  value: String,
  type: String,
  name: String,
  optionId: {
    type: String,
    required: true
  },
  customClasses: String,
  modelValue: {
    type: Array as () => string[],
    default: () => []
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
const isSelected = computed(() => props.modelValue.includes(props.optionId))

const handleCheckboxChange = () => {
  let newValue = [...props.modelValue]
  if (isSelected.value) {
    if (newValue.includes(props.optionId)) {
      // Remove it from the array
      newValue = newValue.filter((item) => item !== props.optionId)
    }
  } else {
    newValue.push(props.optionId)
  }
  emit('update:modelValue', newValue)
}
</script>

<template>
  <label
    :key="id"
    :for="id"
    :customClasses="customClasses"
    class="flex cursor-pointer select-none items-center font-medium"
  >
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :name="name"
        :value="optionId"
        :checked="isSelected"
        @change="handleCheckboxChange"
        class="sr-only"
        v-bind="$attrs"
      />

      <div
        :class="isSelected && 'border-primary bg-gray dark:bg-transparent'"
        class="mr-4 flex h-5 w-5 items-center justify-center rounded border"
      >
        <span :class="isSelected && '!opacity-100'" class="opacity-0">
          <IconCheckbox />
        </span>
      </div>
    </div>
    {{ value }}
  </label>
</template>
