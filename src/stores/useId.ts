import { defineStore } from "pinia";
import type { Customer } from "@/utils/share";

export const useIdStore = defineStore("id", {
  state: () => ({
    currentId: localStorage.getItem("currentId") || null,
    selectedClient: JSON.parse(
      localStorage.getItem("selectedClient") || "null"
    ),
  }),
  actions: {
    setCurrentId(id: string) {
      this.currentId = id;
      localStorage.setItem("currentId", id);
      console.log(this.currentId);
    },
    setSelectedClient(client: Customer) {
      this.selectedClient = client;
      localStorage.setItem("selectedClient", JSON.stringify(client));
      console.log(this.selectedClient);
    },
  },
});
