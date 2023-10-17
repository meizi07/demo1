<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <router-link
      :to="`/befort-project/case-management/add-project`"
      class="btn btn-sm fw-bold btn-primary"
    >
      新增案件
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
  <ProjectList :clientData="responseData"></ProjectList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import ProjectList from "@/components/customers/datatable/ProjectList.vue";
import ApiService from "@/core/services/ApiService";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

interface StatisticItem {
  Title: string;
  Num: number;
}

export default defineComponent({
  name: "bj-case-management",
  components: {
    StatisticsWidget7,
    ProjectList,
  },
  setup() {
    const responseData = ref({
      success: {
        Statistics: [],
        All: [],
        FollowUp: [],
        CloseCase: [],
      },
    });
    const statistics = ref<StatisticItem[]>([]);

    const authStore = useAuthStore();

    statistics.value = [];
    onMounted(async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        const response = await ApiService.post(
          "/projectBefore/getAllProjectList.php",
          formData
        );

        if (response.data.success) {
          responseData.value.success.Statistics =
            response.data.success.Statistics;
          responseData.value.success.All = response.data.success.All;
          responseData.value.success.FollowUp = response.data.success.FollowUp;
          responseData.value.success.CloseCase =
            response.data.success.CloseCase;
          statistics.value = response.data.success.Statistics;
          // console.log(responseData);
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
