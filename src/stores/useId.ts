import { defineStore } from "pinia";
import type { Customer } from "@/utils/share";

export const useIdStore = defineStore("id", {
  state: () => ({
    currentId: null as string | null,
    selectedClient: null as Customer | null,
  }),
  actions: {
    setCurrentId(id: string) {
      this.currentId = id;
      console.log(this.currentId);
    },
    setSelectedClient(client: Customer) {
      this.selectedClient = client;
      console.log(this.selectedClient);
    },
  },
});
