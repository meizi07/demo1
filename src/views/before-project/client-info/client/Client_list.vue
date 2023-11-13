<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <router-link
      :to="`/befort-project/client-info/add-client`"
      class="btn btn-sm fw-bold btn-primary"
    >
      新增客戶資料
    </router-link>
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
  <ClientList :clientData="responseData"></ClientList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import ClientList from "@/components/customers/datatable/ClientList.vue";
import ApiService from "@/core/services/ApiService";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { formatDate } from "@/utils/function";

interface StatisticItem {
  Title: string;
  Num: number;
}
export default defineComponent({
  name: "bj-client-list",
  components: {
    StatisticsWidget7,
    ClientList,
  },
  setup() {
    const responseData = ref({
      success: {
        Statistics: [],
        AllCustomer: [],
        FollowUp: [],
        CloseCase: [],
      },
    });
    const statistics = ref<StatisticItem[]>([]);

    const authStore = useAuthStore();

    statistics.value = [];

    function formatCustomerDates(customer) {
      return {
        ...customer,
        FirstContactDate: formatDate(customer.FirstContactDate),
        UpdateDate: formatDate(customer.UpdateDate),
      };
    }

    onMounted(async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        const response = await ApiService.post(
          "/projectBefore/getCustomerList.php",
          formData
        );

        if (response.data.success) {
          const formattedAllCustomer =
            response.data.success.AllCustomer.map(formatCustomerDates);
          const formattedFollowUp =
            response.data.success.FollowUp.map(formatCustomerDates);
          const formattedCloseCase =
            response.data.success.CloseCase.map(formatCustomerDates);
          responseData.value.success.Statistics =
            response.data.success.Statistics;
          responseData.value.success.AllCustomer = formattedAllCustomer;
          responseData.value.success.FollowUp = formattedFollowUp;
          responseData.value.success.CloseCase = formattedCloseCase;
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
    };
  },
});
</script>
