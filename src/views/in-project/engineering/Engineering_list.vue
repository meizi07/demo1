<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-inline-flex flex-wrap gap-6">
      <StatisticsWidget7 title="退件" description="3"></StatisticsWidget7>
      <StatisticsWidget7 title="送審" description="4"></StatisticsWidget7>
      <StatisticsWidget7 title="待簽收" description="2"></StatisticsWidget7>
      <StatisticsWidget7 title="階段性確認" description="2"></StatisticsWidget7>
      <StatisticsWidget7 title="待驗收工程" description="2"></StatisticsWidget7>
      <StatisticsWidget7 title="待總驗收" description="2"></StatisticsWidget7>
    </div>
  </div>
  <InvoicesCopyVue></InvoicesCopyVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget7 from "@/components/widgets/statsistics/Widget7.vue";
import InvoicesCopyVue from "@/components/customers/datatable/Invoices.vue";

export default defineComponent({
  name: "ij-engineering-list",
  components: {
    StatisticsWidget7,
    InvoicesCopyVue,
  },
});
</script>
