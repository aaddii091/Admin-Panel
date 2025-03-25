<template> 
<!-- To define HTML -->
 <div>
    <h2>Assigned Tests</h2>
    <!--Count variable here-->
    <div class="mb-5 mt-10">
          <button
            type="View"
            :disabled="loading"
            class="w-full cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
          >
            {{ loading ? 'Signing in...' : 'Reset' }}
          </button>
        </div>
 </div>
</template>

<script>
export default {
    name: 'TestCount'
};
</script>

