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
            title="合約"
            description="3"
            widget-classes="equal-3"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="請款單"
            description="4"
            widget-classes="equal-3"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="報價單"
            description="2"
            widget-classes="equal-3"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="需求單"
            description="2"
            widget-classes="equal-3"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="採購單"
            description="2"
            widget-classes="equal-3"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="總驗收單"
            description="2"
            widget-classes="equal-3"
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
            title="未開始專案"
            description="3"
            widget-classes="equal-2"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="執行中專案"
            description="4"
            widget-classes="equal-2"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="執行中專案"
            description="2"
            widget-classes="equal-2"
          ></StatisticsWidget7>
          <StatisticsWidget7
            title="已結案專案"
            description="2"
            widget-classes="equal-2"
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
import CalendarApp2 from "@/components/calendar/CalendarApp2.vue";
import ListsWidget3 from "@/components/widgets/lists/Widget3.vue";

import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import ListsWidget2 from "@/components/widgets/lists/Widget2.vue";

import dashboardDatatable from "@/components/customers/datatable/dashboard-datatable.vue";

export default defineComponent({
  name: "main-dashboard",
  components: {
    CalendarApp2,
    ListsWidget3,
    StatisticsWidget7,
    ListsWidget2,
    dashboardDatatable,
  },
  setup() {
    return {
      getAssetPath,
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
