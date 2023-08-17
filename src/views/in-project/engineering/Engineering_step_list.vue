<template>
  <InvoicesCopyVue></InvoicesCopyVue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvoicesCopyVue from "@/components/customers/datatable/Invoices.vue";

export default defineComponent({
  name: "ij-engineering-step",
  components: {
    InvoicesCopyVue,
  },
});
</script>
