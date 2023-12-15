<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <Datatable
        :header="tableHeader"
        :data="allHousingData"
        :items-per-page="10"
        :items-per-page-dropdown-enabled="true"
      >
        <template v-slot:Area="{ row: housing }">
          {{ housing.Area }}
        </template>

        <template v-slot:Description="{ row: housing }">
          <span>
            {{ housing.Description }}
          </span>
        </template>

        <template v-slot:DetailRecord="{ row: housing }">
          <span>
            {{ housing.DetailRecord }}
          </span>
        </template>

        <template v-slot:Action="{ row: housing }">
          <button
            type="button"
            class="d-block btn btn-sm btn-icon text-muted text-hover-danger"
          >
            <i class="ki-duotone ki-cross fs-1">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
          </button>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";

const tableHeader = ref([
  {
    columnName: "區域",
    columnLabel: "Area",
    sortEnabled: false,
  },
  {
    columnName: "說明",
    columnLabel: "Description",
    sortEnabled: false,
  },
  {
    columnName: "照片",
    columnLabel: "DetailRecord",
    sortEnabled: false,
  },
  {
    columnName: "",
    columnLabel: "Action",
    sortEnabled: false,
  },
]);
</script>
