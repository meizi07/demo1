import { ref } from "vue";
import { defineStore } from "pinia";

export const useIdStore = defineStore("id", () => {
  const currentId = ref<string | null>(null);

  function setCurrentId(id: string) {
    currentId.value = id;
    console.log(currentId);
  }

  return {
    currentId,
    setCurrentId,
  };
});
