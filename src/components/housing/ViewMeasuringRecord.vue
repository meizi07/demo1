<template>
  <div class="card pt-2">
    <div class="card-body pt-0">
      <Datatable
        :header="tableHeader"
        :data="singleHousingData?.Measure || []"
        :items-per-page="10"
        :items-per-page-dropdown-enabled="true"
        @on-sort="sort"
      >
        <template v-slot:FileName="{ row: measuring }">
          <span>
            {{ measuring.FileName }}
          </span>
        </template>

        <template v-slot:FilePath="{ row: measuring }">
          <span>
            <a
              :href="measuring.FilePath"
              class="text-gray-800 text-hover-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ formatFilePath(measuring.FilePath) }}
            </a>
          </span>
        </template>

        <template v-slot:Description="{ row: measuring }">
          <span>
            {{ measuring.Description }}
          </span>
        </template>

        <template v-slot:UploadDate="{ row: measuring }">
          <span>
            {{ moment(measuring.UploadDate).format("YYYY-MM-DD") }}
          </span>
        </template>

        <template v-slot:Uploader="{ row: measuring }">
          <span>
            {{ measuring.Uploader }}
          </span>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import moment from "moment";
import arraySort from "array-sort";
import { useHousingStore } from "@/stores/housing";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";

const housingStore = useHousingStore();
const { singleHousingData } = storeToRefs(housingStore);

const tableHeader = ref([
  {
    columnName: "檔案名稱",
    columnLabel: "FileName",
    sortEnabled: true,
    columnWidth: 150,
  },
  {
    columnName: "附加檔案",
    columnLabel: "FilePath",
    sortEnabled: false,
    columnWidth: 240,
  },
  {
    columnName: "說明",
    columnLabel: "Description",
    sortEnabled: false,
    columnWidth: 320,
  },
  {
    columnName: "檔案上傳日期",
    columnLabel: "UploadDate",
    sortEnabled: true,
    columnWidth: 150,
  },
  {
    columnName: "檔案上傳者",
    columnLabel: "Uploader",
    sortEnabled: true,
    columnWidth: 120,
  },
]);
const formatFilePath = computed(() => (filePath: string) => {
  const regexPattern = /([^/]+)$/;

  return filePath.match(regexPattern)?.[1] ?? "";
});

function sort(sort: Sort) {
  const reverse: boolean = sort.order === "asc";

  if (sort.label) {
    arraySort(singleHousingData.value?.Measure || [], sort.label, { reverse });
  }
}
</script>
