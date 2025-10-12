import { defineStore } from 'pinia';
import { ref, computed, type Ref } from 'vue';

export const useQuestionnairesStore = defineStore('questionnaires', () => {
  const data: Ref<{} | null> = ref(null);
  const id = ref('');

  function setData(newData: object | null) {
    sessionStorage.setItem('questionnaireData', JSON.stringify(newData));
    data.value = newData;
  }

  function setId(newData: string) {
    sessionStorage.setItem('questionnaireId', newData);
    id.value = newData;
  }

  function deleteData() {
    sessionStorage.removeItem('questionnaireId');
    sessionStorage.removeItem('questionnaireData');
    data.value = {};
  }

  // Getter for FormData from sessionStorage
  const getData = computed(() => {
    const sessionData = sessionStorage.getItem('questionnaireData');
    return sessionData ? JSON.parse(sessionData) : data.value;
  });

  // Getter for Id from sessionStorage
  const getId = computed(() => {
    const sessionData = sessionStorage.getItem('questionnaireId');
    return sessionData ? sessionData : id.value;
  });

  return { data, id, setData, deleteData, setId, getData, getId };
});
