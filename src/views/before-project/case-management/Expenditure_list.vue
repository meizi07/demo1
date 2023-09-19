<template>
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
    Ｆ
  </div>
  <InvoicesCopyVue></InvoicesCopyVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import InvoicesCopyVue from "@/components/customers/datatable/Invoices.vue";

export default defineComponent({
  name: "bj-case-expenditure-list",
  components: {
    StatisticsWidget7,
    InvoicesCopyVue,
  },
});
</script>
