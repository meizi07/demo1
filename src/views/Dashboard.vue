<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <div class="col-xxl-6">
      <CalendarApp2></CalendarApp2>
    </div>
    <!--begin::Col-->
    <div class="col-xxl-6">
      <!-- <Widget5 className="h-md-100" /> -->
      <ListsWidget3
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></ListsWidget3>
    </div>
    <!--end::Col-->

    <div class="col-xxl-6">
      <TodoWidget />
    </div>
  </div>
  <!--end::Row-->

  <div class="row gx-5 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xxl-6 mb-5 mb-xl-10">
      <div class="card card-flush mb-5 mb-xl-10">
        <div class="card-header border-0 pt-5 min-h-50px">
          <h2 class="card-title align-items-start flex-column">
            <span class="fw-bold text-dark">文件清單</span>
          </h2>
        </div>
        <div class="card-body d-inline-flex flex-wrap gap-6">
          <StatisticsWidget7
            v-for="(docitem, index) in docList"
            :key="index"
            widget-classes="equal-3"
            :title="docitem.Title"
            :description="docitem.Num"
          ></StatisticsWidget7>
        </div>
      </div>
      <div class="card card-flush">
        <div class="card-header border-0 pt-5 min-h-50px">
          <h2 class="card-title align-items-start flex-column">
            <span class="fw-bold text-dark">案件狀態</span>
          </h2>
        </div>
        <div class="position-relative card-body d-inline-flex flex-wrap gap-6">
          <StatisticsWidget7
            v-for="(caseitem, index) in caseList"
            :key="index"
            widget-classes="equal-2"
            :title="caseitem.Title"
            :description="caseitem.Num"
          ></StatisticsWidget7>
        </div>
      </div>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6 mb-5 mb-xl-10">
      <ListsWidget2
        widget-classes="card-xl-stretch h-xl-100 mb-xl-8"
      ></ListsWidget2>
    </div>
    <!--end::Col-->
  </div>

  <!--begin::Row-->
  <div class="row gx-5 gx-xl-10">
    <!--begin::Col-->
    <div class="col-lg-12 col-xl-12 mb-5 mb-xl-0">
      <dashboardDatatable className="h-xl-100"></dashboardDatatable>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";

import CalendarApp2 from "@/components/calendar/CalendarApp2.vue";
import TodoWidget from "@/components/todos/TodoWidget.vue";
import ListsWidget3 from "@/components/widgets/lists/Widget3.vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import ListsWidget2 from "@/components/widgets/lists/Widget2.vue";
import dashboardDatatable from "@/components/customers/datatable/dashboard-datatable.vue";

import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";

interface StatisticItem {
  Title: string;
  Num: number;
}

export default defineComponent({
  name: "main-dashboard",
  components: {
    CalendarApp2,
    TodoWidget,
    ListsWidget3,
    StatisticsWidget7,
    ListsWidget2,
    dashboardDatatable,
  },
  setup() {
    const authStore = useAuthStore();
    const docList = ref<StatisticItem[]>([]);
    const caseList = ref<StatisticItem[]>([]);
    docList.value = [];
    caseList.value = [];

    async function fetchAndHandleData(apiPath: string, formData: FormData) {
      try {
        const response = await ApiService.post(apiPath, formData);
        if (response.data.success) {
          return response.data.success;
        } else {
          console.error(`获取数据失败，状态码：${response.status}`);
        }
      } catch (error) {
        console.error("API 请求错误：", error);
      }
      return null;
    }

    onMounted(async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);

        // 文件清單api
        const getDocumentList = await fetchAndHandleData(
          "/projectBefore/getDocumentList",
          formData
        );

        // 案件狀態api
        const getCaseList = await fetchAndHandleData(
          "/projectBefore/getAllProjectList",
          formData
        );

        if (getDocumentList) {
          docList.value = getDocumentList;
        }

        const statisticsData = getCaseList.Statistics;

        if (getCaseList) {
          caseList.value = statisticsData;
          console.log(statisticsData);
        }
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    });
    return {
      getAssetPath,
      docList,
      caseList,
    };
  },
});
</script>
<style lang="scss" scoped>
.equal {
  &-3 {
    width: calc((100% / 3) - 3rem);
    max-width: auto !important;
  }
  &-2 {
    width: calc((100% / 2) - 3rem);
    max-width: auto !important;
  }
}
</style>
