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
            <tr v-if="data.length === 0">
              <td colspan="5" class="text-center">無資料</td>
            </tr>

            <tr v-for="item in data" :key="item.UUID">
              <td>
                <div class="form-check">
                  <input
                    class="form-check-input tdl_checkbox"
                    type="checkbox"
                    @change="
                      todoStore.toggleTodoStatus(
                        item.UUID,
                        item.Status === TodoStatus.Finished
                          ? TodoStatus.Unfinished
                          : TodoStatus.Finished
                      )
                    "
                    :checked="item.Status === TodoStatus.Finished"
                  />
                </div>
              </td>
              <td width="40%">
                <a
                  href="javascript:;"
                  type="button"
                  class="text-gray-800 text-hover-primary"
                  @click="
                    todoStore.getCurrentTodo(
                      item.UUID,
                      item.Status === TodoStatus.Finished
                        ? TodoStatus.Finished
                        : TodoStatus.Unfinished
                    )
                  "
                >
                  {{ item.Item }}
                </a>
              </td>
              <td width="30%">{{ item.Description }}</td>
              <td width="14%">
                {{ moment(item.DeadLine).format("YYYY-MM-DD") }}
              </td>
              <td width="14%">{{ item.ProjectName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import moment from "moment";
import { useTodoStore } from "@/stores/todo";
import type { Todo } from "@/types/Todo";
import { TodoStatus } from "@/types/Todo";

defineProps<{
  title: string;
  data: Todo[];
}>();

const todoStore = useTodoStore();
</script>
