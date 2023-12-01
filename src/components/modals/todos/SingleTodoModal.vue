<template>
  <div
    class="modal fade"
    id="modal_single_todo"
    ref="singleTodoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-500px">
      <div class="modal-content rounded">
        <div class="modal-header pb-0 border-0">
          <h3 class="modal-title">修改待辦事項</h3>
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
          <pre>{{ currentTodo }}</pre>
          <h2 class="mb-6">{{ currentTodo?.Item }}</h2>
          <p class="mb-10">{{ currentTodo?.Description }}</p>
          <div class="d-flex mb-6">
            <i class="ki-duotone ki-calendar-8 fs-1 text-muted me-5">
              <span class="path1"></span>
              <span class="path2"></span>
              <span class="path3"></span>
              <span class="path4"></span>
              <span class="path5"></span>
              <span class="path6"></span>
            </i>

            <div>{{ moment(currentTodo?.DeadLine).format("YYYY-MM-DD") }}</div>
          </div>
          <div class="d-flex">
            <i class="ki-duotone ki-geolocation fs-1 text-muted me-5">
              <i class="path1"></i>
              <i class="path2"></i>
            </i>
            <div>{{ currentTodo?.ProjectName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import moment from "moment";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
const { currentTodo } = storeToRefs(todoStore);

const singleTodoModalRef = ref<HTMLElement | null>(null);

onMounted(() => {
  console.log("SingleTodoModal mounted");
});
</script>
