import { ref } from "vue";
import { defineStore } from "pinia";

export const useUUIDStore = defineStore("uuid", () => {
  const currentUUID = ref();
  function setUUID(uuid: string) {
    currentUUID.value = uuid;
  }
  return {
    setUUID,
    currentUUID,
  };
});
