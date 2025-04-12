<script setup lang="ts">
const props = defineProps<{
  label: string
  type: string
  placeholder: string
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-4">
    <label class="mb-1 block font-medium text-black dark:text-white">{{ props.label }}</label>

    <div class="relative flex items-center w-full">
      
      <!-- LEFT ICON SLOT (if provided) -->
      <span v-if="$slots.left" class="absolute left-3 flex items-center justify-center text-gray-500 dark:text-gray-300">
        <slot name="left"></slot>
      </span>

      <input
        :type="props.type"
        :placeholder="props.placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[
          'w-full rounded-lg border border-[#E5E5E5] border-stroke bg-transparent py-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white md:shadow-sm shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)]',
          $slots.left ? 'pl-12' : 'pl-4',
          $slots.right ? 'pr-12' : 'pr-4'
        ]"
      />

      <!-- RIGHT ICON SLOT (if provided) -->
      <span v-if="$slots.right" class="absolute right-3 flex items-center justify-center text-gray-500 dark:text-gray-300">
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>
