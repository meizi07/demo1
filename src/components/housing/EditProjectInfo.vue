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
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  案件編號
                </label>
              </td>
              <td class="fw-bold">{{ projectInfoData.ProjectID }}</td>
            </tr>

            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold">
                  紀錄日期
                </label>
              </td>
              <td class="fw-bold">
                <el-date-picker
                  v-model="projectInfoData.RecordDate"
                  type="date"
                  placeholder="選擇紀錄日期"
                  size="large"
                  value-format="YYYY-MM-DD"
                />
              </td>
            </tr>

            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold">
                  紀錄者
                </label>
              </td>
              <td class="fw-bold">
                <el-select
                  v-model="projectInfoData.Recorder"
                  class="m-2"
                  placeholder="請選擇記錄者"
                  size="large"
                >
                  <el-option
                    v-for="item in recorderOptions"
                    :key="item.UUID"
                    :label="item.Name"
                    :value="item.AccountID"
                  />
                </el-select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import moment from "moment";
import { useHousingStore } from "@/stores/housing";
import { useAuthStore } from "@/stores/auth";
import ApiService from "@/core/services/ApiService";
import type { Account } from "@/types/Project";
import type { ProjectInfo } from "@/types/Housing";

const authStore = useAuthStore();
const housingStore = useHousingStore();
const route = useRoute();

const recorderOptions = ref<Account[]>([]);
const projectInfoData = ref<ProjectInfo>({
  ProjectID: route.query.projectId as string,
  Recorder: "",
  RecordDate: moment().format("YYYY-MM-DD"),
});

function handleDefaultRecorder() {
  const defaultRecorder = recorderOptions.value.find(
    (item) => item.AccountID.trim() == authStore.user.account.trim()
  );

  if (defaultRecorder) {
    projectInfoData.value.Recorder = defaultRecorder.Name;
  }
}

async function fetchRecorderOptions() {
  const formData = authStore.createAuthFormData({
    orgId: true,
    account: true,
    token: true,
  });

  formData.append("category", "0");

  try {
    const response = await ApiService.post("account/getDropdownList", formData);

    if (response.data && response.data.success) {
      recorderOptions.value = response.data.success;
      handleDefaultRecorder();
    } else {
      console.error(
        `獲取記錄者失敗，狀態： ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("API 請求錯誤：", error);
  }
}

fetchRecorderOptions();

watch(projectInfoData.value, () => {
  housingStore.syncWithProjectInfoData(projectInfoData.value);
});
</script>
