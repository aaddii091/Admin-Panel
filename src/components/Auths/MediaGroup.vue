<script setup lang="ts">
const props = defineProps<{
  label: string
  type: string
  placeholder?: string // optional const
  modelValue: File | null
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-4">
    <label class="mb-1 block font-medium text-black dark:text-white">{{ props.label }}</label>

    <div class="relative flex items-center w-full">
      <label
        :class="[
          'w-full rounded-lg border border-[#E5E5E5] border-stroke bg-transparent py-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white md:shadow-sm shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)] pl-4 pr-4 textAreaStyle flex items-center justify-center cursor-pointer'
        ]"
      >
        <input
          class="sr-only"
          :type="props.type"
          @change="emit('update:modelValue', ($event.target as HTMLInputElement).files?.[0])"
        />
        <slot></slot>
      </label>
      <!-- <file
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[
          'w-full rounded-lg border border-[#E5E5E5] border-stroke bg-transparent py-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white md:shadow-sm shadow-[0_1px_2px_rgba(16, 24, 40, 0.05) pl-4 pr-4 textAreaStyle'
        ]"
      >
      </file> -->
    </div>
  </div>
</template>

<style scoped>
.textAreaStyle {
  height: 18vh;
}
</style>
