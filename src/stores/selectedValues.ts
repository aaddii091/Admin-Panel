import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSelectedValues = defineStore('selectedValues', () => {
  const selectedValues = ref(Array<string>());

  function setSelectedValues(newData: Array<string>) {
    sessionStorage.setItem('OCEAN_TEST_RESULT', JSON.stringify(newData));
    selectedValues.value.push(...newData);
  }

  const getSelectedValues = computed(() => {
    return selectedValues.value.values();
  });

  return { selectedValues, setSelectedValues, getSelectedValues }
})
