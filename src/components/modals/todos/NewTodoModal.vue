<template>
  <div
    class="modal fade"
    id="modal_new_todo"
    ref="newTodoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-500px">
      <div class="modal-content rounded">
        <div class="modal-header pb-0 border-0">
          <h3 class="modal-title">新增待辦事項</h3>
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ki-duotone ki-cross fs-1">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
          </div>
        </div>

        <div class="separator mt-7 mb-9"></div>

        <div class="modal-body scroll-y p-9 pt-0">
          <el-form
            @submit.prevent="submit()"
            id="modal_new_todo_form"
            class="form"
            ref="formRef"
            :model="targetData"
            :rules="rules"
            label-position="top"
            size="large"
          >
            <el-form-item label="事項" required>
              <el-input
                v-model="targetData.title"
                name="title"
                placeholder="事項"
              />
            </el-form-item>

            <el-form-item label="說明">
              <el-input
                v-model="targetData.description"
                type="textarea"
                name="description"
                placeholder="說明"
              />
            </el-form-item>

            <el-form-item label="完成期限" required>
              <el-date-picker
                v-model="targetData.dueDate"
                type="date"
                name="dueDate"
                placeholder="請選擇完成期限"
                style="width: 100%"
              />
            </el-form-item>

            <el-form-item label="指定案件">
              <el-select
                v-model="targetData.project"
                filterable
                name="project"
                placeholder="請指定案件"
              >
                <el-option
                  v-for="item in projectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <div class="separator mt-9 mb-6"></div>

            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-primary">
                建立代辦事項
              </button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import ApiService from "@/core/services/ApiService";

interface NewTodoData {
  title: string;
  description: string;
  dueDate: string;
  project: string;
}

interface ProjectOption {
  label: string;
  value: string;
}

const authStore = useAuthStore();

const newTodoModalRef = ref<HTMLElement | null>(null);
const formRef = ref<HTMLFormElement | null>(null);
const rules = ref({});
const targetData = ref<NewTodoData>({
  title: "",
  description: "",
  dueDate: "",
  project: "",
});
const projectOptions = ref<ProjectOption[]>([]);

async function fetchProjectOptions() {
  try {
    const formData = new FormData();
    formData.append("orgId", authStore.user.orgId);
    formData.append("account", authStore.user.account);
    formData.append("token", authStore.user.token);

    const response = await ApiService.post(
      "/projectBefore/getAllProjectList.php",
      formData
    );

    if (response.data.success) {
      projectOptions.value = response.data.success.All.map((project) => ({
        label: project.ProjectName,
        value: project.ProjectName,
      }));
    } else {
      console.error(
        "獲取客戶數據失敗，狀態： " +
          response.status +
          " " +
          response.statusText
      );
    }
  } catch (error) {
    console.error("API 請求錯誤：", error);
  }
}

onMounted(() => {
  fetchProjectOptions();
});
</script>
