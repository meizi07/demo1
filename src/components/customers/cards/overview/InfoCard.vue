<template>
  <!--begin::Card-->
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <table
          class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
        >
          <tbody class="fw-semibold text-gray-800">
            <tr v-for="(item, index) in tableData" :key="index">
              <td class="text-muted">{{ item.label }}</td>
              <td class="fw-bold">{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import type { PropType } from "vue";

interface TableItem {
  label: string;
  value: string;
}

export default defineComponent({
  name: "info-card",
  props: {
    cardClasses: String,
    tableData: {
      type: Array as PropType<TableItem[]>,
      required: true,
    },
  },
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
