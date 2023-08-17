<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-inline-flex flex-wrap gap-6">
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="本月新增"
        description="3"
      ></StatisticsWidget7>
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="社群平台"
        description="4"
      ></StatisticsWidget7>
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="電話諮詢"
        description="2"
      ></StatisticsWidget7>
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="個人推薦"
        description="2"
      ></StatisticsWidget7>
    </div>
  </div>
  <InvoicesCopyVue></InvoicesCopyVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import InvoicesCopyVue from "@/components/customers/datatable/Invoices.vue";

export default defineComponent({
  name: "bj-client-list",
  components: {
    StatisticsWidget7,
    InvoicesCopyVue,
  },
});
</script>
