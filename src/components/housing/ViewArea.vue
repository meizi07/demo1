<template>
  <div class="card card-area">
    <div class="card-body d-flex flex-column p-9">
      <Datatable
        :header="tableHeader"
        :data="singleHousingData?.Detail || []"
        :items-per-page="10"
        :items-per-page-dropdown-enabled="true"
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
            <span>{{ attachment.Description }}</span>
          </div>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useHousingStore } from "@/stores/housing";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";

const housingStore = useHousingStore();
const { singleHousingData } = storeToRefs(housingStore);

const tableHeader = ref([
  {
    columnName: "區域",
    columnLabel: "Area",
    sortEnabled: true,
  },
  {
    columnName: "說明",
    columnLabel: "Description",
    sortEnabled: true,
  },
  {
    columnName: "照片",
    columnLabel: "Attachments",
    sortEnabled: true,
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
</script>

<style lang="scss">
.card-area {
  .table {
    vertical-align: top !important;

    th {
      &.text-end {
        text-align: left !important;
      }

      &:nth-of-type(1) {
        width: 20% !important;
      }

      &:nth-of-type(2) {
        width: 45% !important;
      }

      &:nth-of-type(3) {
        width: 35% !important;
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
