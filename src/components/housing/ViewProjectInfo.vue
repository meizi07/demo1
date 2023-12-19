<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <table
          class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
        >
          <tbody class="fw-semibold text-gray-800">
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold">
                  案件編號
                </label>
              </td>
              <td class="fw-bold">{{ singleHousingData?.ProjectID }}</td>
            </tr>

            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold">
                  紀錄日期
                </label>
              </td>
              <td class="fw-bold">
                {{
                  moment(singleHousingData?.RecordDate).format("YYYY-MM-DD") ||
                  "-"
                }}
              </td>
            </tr>

            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold">
                  紀錄者
                </label>
              </td>
              <td class="fw-bold">
                {{ singleHousingData?.Recorder || "-" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import moment from "moment";
import { useHousingStore } from "@/stores/housing";

const housingStore = useHousingStore();
const { singleHousingData } = storeToRefs(housingStore);
</script>
