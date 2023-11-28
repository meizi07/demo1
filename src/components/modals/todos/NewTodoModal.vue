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
        <div class="modal-header pb-0 border-0 justify-content-end">
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          modal content
          <el-form
            id="kt_modal_new_target_form"
            @submit.prevent="submit()"
            :model="targetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <el-form-item label="事項">
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

            <el-form-item label="完成期限">
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
                placeholder="請指定案件"
                name="project"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface NewTodoData {
  title: string;
  description: string;
  dueDate: string;
  project: string;
}

const newTodoModalRef = ref<HTMLElement | null>(null);
const formRef = ref<HTMLFormElement | null>(null);
const targetData = ref<NewTodoData>({
  title: "",
  description: "",
  dueDate: "",
  project: "",
});
const rules = ref({});

// TODO:取得所有案件名稱
</script>
