<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <button
      type="button"
      class="btn btn-sm fw-bold btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modal_todo"
      @click="todoStore.editCurrentTodo"
    >
      新增待辦事項
    </button>
  </div>

  <div class="row">
    <div class="col-lg-12 mb-15">
      <TodoSection title="待處理" :data="unfinishedData" />
    </div>

    <div class="col-lg-12">
      <TodoSection title="已完成" :data="finishedData" />
    </div>
  </div>

  <Teleport to="body">
    <TodoModal />
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";
import TodoSection from "@/components/todos/TodoSection.vue";
import TodoModal from "@/components/modals/todos/TodoModal.vue";

const todoStore = useTodoStore();
const { unfinishedData, finishedData } = storeToRefs(todoStore);

todoStore.fetchTodoData();

onMounted(() => {
  window.addEventListener("click", todoStore.clickOutsideTodoModal);
});

onUnmounted(() => {
  window.removeEventListener("click", todoStore.clickOutsideTodoModal);
});
</script>
