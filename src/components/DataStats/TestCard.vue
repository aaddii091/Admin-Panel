<template>
  <div
    class="w-[578px] h-[416px] rounded-[6px] border-0 flex felx-col drop-shadow-xs mt-10 mb-14 bg-[#F5F5F5]"
  >
    <div class="h-[6px] w-full rounded-t-[6px]" :class="stroke">
      <div
        class="flex flex-col w-full h-[88px] justify-between items-start mt-1.5 px-6 py-4 gap-y-2 bg-[#E5E5E5]"
      >
        <div class="text-[#262626] text-[20px] font-bold">{{ label }}</div>
        <div class="text-[14px] text-[#262626] font-normal">{{ labelDescription }}</div>
      </div>
      <div class="flex w-full justify-between px-4">
        <!-- Text Section -->
        <div class="flex flex-col items-start mt-4 mx-2 gap-y-6">
          <div class="flex gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="#141B34"
                stroke-width="1.5"
              />
              <path
                d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <h2 class="text-[#404040] text-[16px] font-medium">Assigned By: {{ assignedBy }}</h2>
          </div>
          <div class="flex gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M9 9L13.0001 12.9996M16 8L11 13"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 class="text-[#404040] text-[16px] font-medium">
              Estimated Time: {{ formattedTime }}
            </h2>
          </div>
          <div class="flex gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2V4M6 2V4"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 8H18"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 class="text-[#404040] text-[16px] font-medium">Due On {{ assignedDate }}</h2>
          </div>
          <h2 class="mt-4 text-[28px] font-bold text-black">{{ formattedTime }}</h2>
        </div>

        <!-- Button Section (Moved to Right) -->
        <div class="flex items-end">
          <button
            type="button"
            :disabled="loading"
            class="w-[78px] h-[38px] cursor-pointer rounded-full border border-primary bg-primary text-[16px] font-normal text-white transition hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center"
          >
            {{ loading ? 'Signing in...' : 'View' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'TestCard'
})

const props = defineProps({
  label: String,
  labelDescription: String,
  assignedBy: String,
  estimatedMinutes: Number,
  assignedDate: Date,
  description: String,
  stroke: String
})

// Format count to always show as 2 digits (e.g., 03, 07, 10)
const formattedTime = computed(() => {
  const hours = Math.floor(props.estimatedMinutes / 60)
  const minutes = props.estimatedMinutes % 60

  if (hours > 0 && minutes > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`
  } else {
    return `${minutes} minute{minutes>1 ? "s" : ""}`
  }
})
// String(props.count).padStart(2, '0'));
</script>
