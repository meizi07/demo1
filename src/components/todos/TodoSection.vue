<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">{{ title }}</h3>
      </div>
    </div>
    <div class="card-body p-9 pt-4">
      <div class="table-responsive">
        <table
          class="table align-middle table-row-dashed fs-6 gy-5 demand_list_table"
        >
          <thead>
            <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
              <th></th>
              <th>事項</th>
              <th>說明</th>
              <th>完成期限</th>
              <th>指定案件</th>
            </tr>
          </thead>

          <tbody class="fw-semibold text-gray-800">
            <tr v-for="(item, itemIndex) in data" :key="item.UUID">
              <td>
                <div class="form-check">
                  <input
                    class="form-check-input tdl_checkbox"
                    type="checkbox"
                    :checked="item.checked"
                    @change="toggleStatus(section, itemIndex)"
                  />
                </div>
              </td>
              <td>
                <a
                  href="javascript:;"
                  type="button"
                  class="text-gray-800 text-hover-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                  >{{ item.Item }}</a
                >
              </td>
              <td>{{ item.Description }}</td>
              <td>{{ item.DeadLine }}</td>
              <td>{{ item.ProjectName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Todo } from "@/types/todo";

defineProps<{
  title: string;
  data: Todo[];
}>();

function toggleStatus(section, itemIndex) {
  const item = section.items[itemIndex];
  item.checked = !item.checked; // 切换状态
}
</script>
