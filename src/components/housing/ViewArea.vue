<template>
  <div class="card card-area">
    <div class="card-body d-flex flex-column p-9">
      <Datatable
        :header="tableHeader"
        :data="singleHousingData?.Detail || []"
        :items-per-page="10"
        :items-per-page-dropdown-enabled="true"
        @on-sort="sort"
      >
        <template v-slot:Area="{ row: area }">
          <span>
            {{ area.Area }}
          </span>
        </template>

        <template v-slot:Description="{ row: area }">
          <span>
            {{ area.Description }}
          </span>
        </template>

        <template v-slot:Attachments="{ row: area }">
          <template v-if="area.Attachments.length > 0">
            <div
              v-for="(attachment, index) in area.Attachments"
              :key="attachment.UUID"
              class="d-flex align-items-start gap-6"
              :class="area.Attachments.length - 1 === index ? '' : 'mb-4'"
            >
              <el-image
                class="w-80px h-80px object-fit-cover rounded"
                :src="attachment.FileUrl"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="generateImgPreviewList(area.Attachments)"
                :initial-index="
                  getCurrentImgPreviewIndex(area.Attachments, attachment)
                "
                fit="cover"
              />

              <span class="flex-grow-1 text-start" style="flex-basis: 0">{{
                attachment.Description
              }}</span>
            </div>
          </template>

          <template v-else>
            <div></div>
          </template>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import arraySort from "array-sort";
import { useHousingStore } from "@/stores/housing";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";

const housingStore = useHousingStore();
const { singleHousingData } = storeToRefs(housingStore);

const tableHeader = ref([
  {
    columnName: "區域",
    columnLabel: "Area",
    sortEnabled: true,
    columnWidth: 150,
  },
  {
    columnName: "說明",
    columnLabel: "Description",
    sortEnabled: false,
    columnWidth: 240,
  },
  {
    columnName: "照片",
    columnLabel: "Attachments",
    sortEnabled: false,
    columnWidth: 320,
  },
]);

function generateImgPreviewList(attachments) {
  return attachments.map((attachment) => attachment.FileUrl);
}

function getCurrentImgPreviewIndex(attachments, currentAttachment) {
  return attachments.findIndex(
    (attachment) => attachment.UUID === currentAttachment.UUID
  );
}

function sort(sort: Sort) {
  const reverse: boolean = sort.order === "asc";

  if (sort.label) {
    arraySort(singleHousingData.value?.Detail || [], sort.label, { reverse });
  }
}
</script>

<style lang="scss">
.card-area {
  .table {
    vertical-align: top !important;

    th {
      &.text-end {
        text-align: left !important;
      }
    }

    tbody {
      td {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
      }
    }
  }
}
</style>
