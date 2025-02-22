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
    <div class="relative">
      <input
        :type="props.type"
        :placeholder="props.placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="w-full rounded-lg border border-[#E5E5E5] border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white md:shadow-sm shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)]"
      />

      <span class="absolute right-4 top-2">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
