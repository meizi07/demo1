import { defineStore } from "pinia";
import type { Customer, CaseApiResponse } from "@/utils/share";

export const useIdStore = defineStore("id", {
  state: () => ({
    currentId: localStorage.getItem("currentId") || null,
    selectedClient: JSON.parse(
      localStorage.getItem("selectedClient") || "null"
    ),
    selectedCase: JSON.parse(localStorage.getItem("selectedCase") || "null"),
  }),
  actions: {
    setCurrentId(id: string) {
      this.currentId = id;
      localStorage.setItem("currentId", id);
      console.log(this.currentId);
    },
    // 儲存選擇的客戶編號狀態
    setSelectedClient(client: Customer) {
      this.selectedClient = client;
      localStorage.setItem("selectedClient", JSON.stringify(client));
      console.log(this.selectedClient);
    },
    // 儲存選擇的案件編號狀態
    setSelectedCase(caseItem: CaseApiResponse) {
      this.selectedCase = caseItem;
      localStorage.setItem("selectedClient", JSON.stringify(caseItem));
      console.log(this.selectedCase);
    },
  },
});
