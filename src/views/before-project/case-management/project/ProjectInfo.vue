<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="case_project_info">
    <div class="card-header cursor-pointer">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">案件類型</h3>
      </div>
    </div>

    <InfoCard :tableData="tableData1"></InfoCard>
  </div>
  <!--end::details View-->

  <div class="card mb-5 mb-xl-10" id="case_project_info">
    <div class="card-header cursor-pointer">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">案件狀態</h3>
      </div>
    </div>

    <InfoCard :tableData="tableData2"></InfoCard>
  </div>

  <div class="card mb-5 mb-xl-10" id="case_project_info">
    <div class="card-header cursor-pointer">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">案件展開</h3>
      </div>
    </div>

    <InfoCard :tableData="tableData3"></InfoCard>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ref, onMounted, computed } from "vue";
import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";

export default defineComponent({
  name: "bj-case-p_info",
  components: {
    InfoCard,
  },
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);
    const idStore = useIdStore();

    const currentId = computed(() => idStore.currentId);

    const tableData1 = ref([
      { label: "案件類型", value: "" },
      { label: "案件編號", value: "" },
      { label: "設計案件編號", value: "" },
    ]);

    const tableData2 = ref([
      { label: "預計開始日", value: "" },
      { label: "預計結束日", value: "" },
      { label: "案件狀態", value: "" },
      { label: "案件進度", value: "" },
      { label: "執行階段", value: "" },
      { label: "案件負責人", value: "" },
      { label: "物件地址", value: "" },
    ]);

    const tableData3 = ref([
      { label: "客戶滿意度", value: "" },
      { label: "意見欄", value: "" },
    ]);

    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (currentId.value) {
          formData.append("projectID", currentId.value);
        }

        const response = await ApiService.post(
          "/projectBefore/getProjectInfo",
          formData
        );

        responseData.value = response.data;

        // 更新 tableData1
        const projectCategory = response.data.success.ProjectCategory;
        tableData1.value[0].value = projectCategory.Category;
        tableData1.value[1].value = projectCategory.ProjectID;
        tableData1.value[2].value = projectCategory.ProjectDesignID;

        // 更新 tableData2
        const projectStatus = response.data.success.ProjectStatus;
        tableData2.value[0].value = projectStatus.EstStartDate;
        tableData2.value[1].value = projectStatus.EstEndDate;
        tableData2.value[2].value = projectStatus.Status;
        tableData2.value[3].value = projectStatus.Progress;
        tableData2.value[4].value = projectStatus.Stage;
        tableData2.value[5].value = projectStatus.PIC;
        tableData2.value[6].value = projectStatus.ObjectAddress;

        // 更新 tableData3
        const projectFeedback = response.data.success.ProjectFeedback;
        tableData3.value[0].value = projectFeedback.CustomerSatisfaction;
        tableData3.value[1].value = projectFeedback.Feedback;
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    }
    onMounted(() => {
      fetchData();
    });

    return {
      getAssetPath,
      tableData1,
      tableData2,
      tableData3,
    };
  },
});
</script>
