import { ref } from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useAuthStore } from "@/stores/auth";
import ApiService from "@/core/services/ApiService";
import type {
  AllHousingData,
  EditHousingData,
  ProjectInfo,
  MeasuringData,
  AreaData,
} from "@/types/Housing";

export const useHousingStore = defineStore("housing", () => {
  const authStore = useAuthStore();

  const DEFAULT_QUERY_PARAMS = {
    orgId: authStore.user.orgId,
    account: authStore.user.account,
  };

  const allHousingData = ref<AllHousingData[]>([]);
  const projectInfoData = ref<ProjectInfo | null>(null);
  const measuringData = ref<MeasuringData[]>([]);
  const areaData = ref<AreaData[]>([]);
  const isLoading = ref<boolean>(false);

  async function fetchHousingData(formData: FormData) {
    allHousingData.value = [];

    try {
      const response = await ApiService.post(
        "projectBefore/getHousingInitList",
        formData
      );

      if (response.data && response.data.success) {
        allHousingData.value = response.data.success.AllHousingInit;
      } else {
        console.error(
          `獲取屋況初始紀錄失敗，狀態： ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  async function fetchAllHousingData() {
    const formData = authStore.createAuthFormData({
      orgId: true,
      account: true,
    });

    await fetchHousingData(formData);
  }

  async function searchHousingWithKeyword(keyword: string) {
    const formData = authStore.createAuthFormData({
      orgId: true,
      account: true,
    });

    formData.append("keyword", keyword);

    await fetchHousingData(formData);
  }

  async function searchHousingWithDate(startDate: string, endDate: string) {
    const formData = authStore.createAuthFormData({
      orgId: true,
      account: true,
    });

    formData.append("searchStartDate", startDate);
    formData.append("searchEndDate", endDate);

    await fetchHousingData(formData);
  }

  function syncWithProjectInfoData(data: ProjectInfo) {
    projectInfoData.value = data;
  }

  function syncWithMeasuringData(data: MeasuringData[]) {
    measuringData.value = data;
  }

  function syncWithAreaData(data: AreaData[]) {
    areaData.value = data;
  }

  function _packHousingData(): EditHousingData {
    return {
      HousingInfo: {
        ProjectInfo: projectInfoData.value as ProjectInfo,
        HousingDetail: areaData.value,
      },
      Measure: measuringData.value,
    };
  }

  async function submitHousingData() {
    isLoading.value = true;

    try {
      const housingData = _packHousingData();
      const response = await ApiService.post(
        "projectBefore/addHousingInitData",
        {
          ...DEFAULT_QUERY_PARAMS,
          ...housingData,
        }
      );
      if (response.data && response.data.success) {
        alert("新增屋況初始紀錄成功！");
      } else {
        Swal.fire({
          text: `新增屋況初始紀錄失敗，狀態： ${response.data.ErrorCode} ${response.data.ErrorMsg}`,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "繼續",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });

        console.error(
          `新增屋況初始紀錄失敗，狀態： ${response.data.ErrorCode} ${response.data.ErrorMsg}`
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    allHousingData,
    projectInfoData,
    measuringData,
    areaData,
    isLoading,
    fetchAllHousingData,
    searchHousingWithKeyword,
    searchHousingWithDate,
    syncWithProjectInfoData,
    syncWithMeasuringData,
    syncWithAreaData,
    submitHousingData,
  };
});
