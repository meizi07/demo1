<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <button
      type="button"
      class="btn btn-sm fw-bold btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modal_new_todo"
    >
      新增待辦事項
    </button>
  </div>

  <div class="row">
    <div
      class="col-lg-12 mb-15"
      v-for="(section, index) in todoSections"
      :key="index"
    >
      <div class="card">
        <div class="card-header">
          <div class="card-title m-0">
            <h3 class="fw-bold m-0">{{ section.title }}</h3>
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
                <tr v-for="(item, itemIndex) in section.items" :key="itemIndex">
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
                      >{{ item.name }}</a
                    >
                  </td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.deadline }}</td>
                  <td>{{ item.location }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <NewTodoModalVue />
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NewTodoModalVue from "@/components/modals/todos/NewTodoModal.vue";

// const todoSections = ref([]);
const todoSections = ref([
  {
    title: "待處理",
    items: [
      {
        name: "軟裝花瓶要帶，門鎖鑰匙跟TINA拿",
        description: "NOTE.*業主會到!!!",
        deadline: "2022-11-01",
        location: "台北內湖",
        checked: false,
      },
      // 添加更多待处理项...
    ],
  },
  {
    title: "已完成",
    items: [
      {
        name: "軟裝花瓶要帶，門鎖鑰匙跟TINA拿",
        description: "NOTE.*業主會到!!!",
        deadline: "2022-11-01",
        location: "台北內湖",
        checked: true, // 已完成的标记为 true
      },
      // 添加更多已完成项...
    ],
  },
]);

function toggleStatus(section, itemIndex) {
  const item = section.items[itemIndex];
  item.checked = !item.checked; // 切换状态
}
</script>
