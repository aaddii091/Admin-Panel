<template> 
<!-- To define HTML -->
 <div class='w-[592px] h-[108] rounded-[6px] border bg-[#EBEDFF] flex items-center justify-center'>
  <div class="px-16 py-4 gap-x-4 md:gap-x-8 lg:gap-x-12">
    <div class='w-[140px] h-[68px] inline-block'>
    <h2 class="text-[#404040]">Assigned Tests</h2>
    </div>
    <!--Count variable here-->
    <div class="mb-5 mt-0 inline-block">
          <button
            type="button"
            :disabled="loading"
            class="w-[78px] h-[38px] cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 text-[16px] font-normal text-white transition hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center"
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
</script>

