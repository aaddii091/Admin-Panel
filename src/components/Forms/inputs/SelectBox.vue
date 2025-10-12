/// <reference path="path/types.d.ts" />
<script setup lang="ts">

const props = defineProps({
  id: String,
  name: String,
  options: {
    type: Array as () => { id: number; value: string }[],
    required: true,
  },
  customClasses: String,
  modelValue: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'clickEvent']);

const handleSelectChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
  setTimeout(() => {
    emit('clickEvent', target.value);
  });
}

</script>

<template>
  <label
    :for="id"
    :customClasses="customClasses"
    class="flex select-none items-center font-medium"
  >
    <select
      :id="id"
      :name="name"
      :value="modelValue"
      @change="handleSelectChange"
      :required="required"
      class="mr-4 flex w-full items-center justify-center cursor-pointer rounded border-[1.5px] px-2 py-4 text-slate-600 
        ease-in duration-200 hover:border-2 hover:border-primary 
      "
      v-bind="$attrs"
    >
      <option value="" disabled>Select</option>
      <option 
        v-for="option in options"
        :key="'o_' + option.id.toString()"
        :value="option.id.toString()"
        class="text-lg"
      >
        {{ option.value }}
      </option>
      <option 
        v-if="!required"
        value=""
      >I don't know</option>

    </select>
  </label>
</template>
