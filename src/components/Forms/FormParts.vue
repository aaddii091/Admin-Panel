///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import InputsRadio from '@/components/Forms/inputs/InputsRadio.vue'
import { ref, watch } from 'vue'

export interface OptionI {
  id: Number,
  label: string,
  value: Number,
}

// Define props using defineProps
const props = defineProps({
  id: String,
  type: String,
  name: String,
  optionList: Array<OptionI>,
  placeholder: {
    type: String,
    default: ''
  },
  customClasses: String,
  modelValue: {
    type: [String],
    default: null
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'clickEvent'])
let iniLocalModel: any = null
iniLocalModel = props.modelValue
const localModel = ref<string>(iniLocalModel)

const clickEvent = (value: any, id: any) => {
  console.log('id: ', id, props.id)
  emit('clickEvent', value, id)
}

// Watch for changes to the local model and emit them
watch(localModel, (newValue) => {
  // Emit the updated value to the parent
  emit('update:modelValue', newValue)
})

// Watch for changes to the prop and update the local model
watch(
  () => props.modelValue,
  (newValue) => {
    localModel.value = newValue
  }
)
</script>
<template>
  <template v-if="type === 'radio' || type === 'checkbox'">
    <div v-for="option in optionList" :key="id + '_' + option.id">
      <InputsRadio
        :id="id + '_' + option.id"
        :optionId="option.id.toString()"
        :value="option.value.toString()"
        :name="'o_' + id"
        :type="type"
        :label="option.label"
        :class="customClasses"
        :required="required"
        @clickEvent="clickEvent"
        placeholder=""
        v-model="localModel"
        v-bind="$attrs"
        class="my-2"
      />
    </div>
  </template>
</template>
