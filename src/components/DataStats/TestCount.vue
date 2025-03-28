<template>
  <div class="w-[592px] h-[108px] rounded-[6px] border-0 flex items-center px-4 md:shadow-sm shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)]" :class="background">
    <div class="flex w-full justify-between">
      <!-- Text Section -->
      <div class="flex flex-col items-start">
        <h2 class="text-[#404040] text-[18px] font-medium">{{ label }}</h2>
        <h2 class="mt-4 text-[28px] font-bold text-black">{{ count }}</h2>
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
</template>


<script setup>
defineOptions({
  name: 'TestCount'
});

defineProps({
  label: String,
  background : String,
  count : Number
});

// Format count to always show as 2 digits (e.g., 03, 07, 10)
// const formattedCount = computed(() => String(props.count).padStart(2, '0'));
</script>

