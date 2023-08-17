<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-inline-flex flex-wrap gap-6">
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="退件"
        description="3"
      ></StatisticsWidget7>
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="送審"
        description="4"
      ></StatisticsWidget7>
      <StatisticsWidget7
        widget-classes="mw-150px"
        title="待簽收"
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
  name: "bj-contract-termination_fee",
  components: {
    StatisticsWidget7,
    InvoicesCopyVue,
  },
});
</script>
