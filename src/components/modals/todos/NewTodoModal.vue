<template>
  <div
    class="modal fade"
    id="modal_new_todo"
    ref="newTodoModalRef"
    tabindex="-1"
    aria-hidden="true"
    @submit.prevent="submitNewTodo(formRef)"
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
            id="modal_new_todo_form"
            class="form"
            ref="formRef"
            :model="targetData"
            :rules="rules"
            label-position="top"
            size="large"
          >
            <el-form-item label="事項" prop="item" required>
              <el-input
                v-model="targetData.item"
                name="item"
                placeholder="事項"
              />
            </el-form-item>

            <el-form-item label="說明" prop="description">
              <el-input
                v-model="targetData.description"
                type="textarea"
                name="description"
                placeholder="說明"
              />
            </el-form-item>

            <el-form-item label="完成期限" prop="deadLine" required>
              <el-date-picker
                v-model="targetData.deadLine"
                type="date"
                name="deadLine"
                value-format="YYYY-MM-DD"
                placeholder="請選擇完成期限"
                style="width: 100%"
              />
            </el-form-item>

            <el-form-item label="指定案件" prop="projectId">
              <el-select
                v-model="targetData.projectId"
                filterable
                name="projectId"
                placeholder="請指定案件"
              >
                <el-option
                  v-for="item in todoStore.projectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <div class="separator mt-9 mb-6"></div>

            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
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
import { useTodoStore } from "@/stores/todo";
import type { NewTodo } from "@/types/todo";

const todoStore = useTodoStore();

const newTodoModalRef = ref<HTMLElement | null>(null);
const formRef = ref<HTMLFormElement | null>(null);
const rules = ref({
  item: [
    {
      required: true,
      message: "請輸入事項",
    },
  ],
  deadLine: [
    {
      required: true,
      message: "請選擇完成期限",
    },
  ],
});
const targetData = ref<NewTodo>({
  item: "",
  description: "",
  deadLine: "",
  projectId: "",
});

async function submitNewTodo(formEl) {
  if (!formEl) {
    return;
  }

  await formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      todoStore.addNewTodo(targetData.value);
    } else {
      return false;
    }
  });
}

onMounted(() => {
  todoStore.fetchProjectOptions();

  console.log("NewTodoModal mounted");
});
</script>
