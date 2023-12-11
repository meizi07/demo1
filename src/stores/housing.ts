import { ref } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";
import ApiService from "@/core/services/ApiService";
import type { AllHousingData } from "@/types/Housing";

export const useHousingStore = defineStore("housing", () => {
  const authStore = useAuthStore();

  const allHousingData = ref<AllHousingData[]>([]);

  async function fetchAllHousingData() {
    try {
      const formData = authStore.createAuthFormData({
        orgId: true,
        account: true,
      });

      const response = await ApiService.post(
        "projectBefore/getHousingInitList",
        formData
      );

      if (response.data && response.data.success) {
        allHousingData.value = response.data.success.AllHousingInit;
      } else {
        console.error(
          "獲取全部屋況初始紀錄失敗，狀態： " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  async function searchHousingWithKeyword(keyword: string) {
    try {
      const formData = authStore.createAuthFormData({
        orgId: true,
        account: true,
      });

      formData.append("keyword", keyword);

      const response = await ApiService.post(
        "projectBefore/getHousingInitList",
        formData
      );

      if (response.data && response.data.success) {
        allHousingData.value = response.data.success.AllHousingInit;
      } else {
        console.error(
          `獲取 ${keyword} 的屋況初始紀錄失敗,狀態: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  async function searchHousingWithDate(startDate: string, endDate: string) {
    try {
      const formData = authStore.createAuthFormData({
        orgId: true,
        account: true,
      });

      formData.append("searchStartDate", startDate);
      formData.append("searchEndDate", endDate);

      const response = await ApiService.post(
        "projectBefore/getHousingInitList",
        formData
      );

      if (response.data && response.data.success) {
        allHousingData.value = response.data.success.AllHousingInit;
      } else {
        console.error(
          `獲取 ${startDate} - ${endDate} 的屋況初始紀錄失敗,狀態: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  return {
    allHousingData,
    fetchAllHousingData,
    searchHousingWithKeyword,
    searchHousingWithDate,
  };
});
