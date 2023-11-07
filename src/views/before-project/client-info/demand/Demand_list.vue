<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <button
      type="button"
      class="btn btn-sm fw-bold btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modal_select_users"
    >
      新增需求單
    </button>
  </div>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-inline-flex flex-wrap gap-6">
      <StatisticsWidget7
        v-for="(statistic, index) in statistics"
        :key="index"
        widget-classes="mw-150px"
        :title="statistic.Title"
        :description="statistic.Num"
      ></StatisticsWidget7>
    </div>
  </div>
  <DemandList :requirementData="responseData"></DemandList>
  <SelectClientModalVue
    @client-selected="handleClientSelected"
  ></SelectClientModalVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import DemandList from "@/components/customers/datatable/DemandList.vue";

import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";

import SelectClientModalVue from "@/components/modals/general/SelectClientModal.vue";
import type { Customer } from "@/components/modals/general/SelectClientModal.vue";

interface StatisticItem {
  Title: string;
  Num: number;
}

export default defineComponent({
  name: "bj-demand-list",
  components: {
    StatisticsWidget7,
    DemandList,
    SelectClientModalVue,
  },
  setup() {
    const statistics = ref<StatisticItem[]>([]);
    const selectedCustomer = ref<Customer | null>(null);
    const authStore = useAuthStore();
    const useId = useIdStore();
    // selectedCustomer.value = selectedClient;

    const route = useRoute();
    const router = useRouter();

    const responseData = ref({
      success: {
        Statistics: [],
        AllRequirement: [],
      },
    });
    statistics.value = [];

    // 實現方法來處理從子組件傳遞的客戶數據
    const handleClientSelected = (client: Customer) => {
      selectedCustomer.value = client;
      // const clientDataString = JSON.stringify(selectedCustomer);
      router.push({
        name: "bj-demand-add", // 替换成新增需求页面的路由名称
      });
      useId.setSelectedClient(selectedCustomer.value);
    };

    onMounted(async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        const response = await ApiService.post(
          "/projectBefore/getRequirementList",
          formData
        );

        if (response.data.success) {
          responseData.value.success.Statistics =
            response.data.success.Statistics;
          responseData.value.success.AllRequirement =
            response.data.success.AllRequirement;
          statistics.value = response.data.success.Statistics;
        } else {
          console.error("獲取客戶數據失敗，狀態碼：", response.status);
        }
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    });

    return {
      responseData,
      statistics,
      handleClientSelected,
    };
  },
});
</script>
