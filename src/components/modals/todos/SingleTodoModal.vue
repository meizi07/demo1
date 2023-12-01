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
        <EditBody v-if="inEditMode" />
        <PreviewBody v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";
import PreviewBody from "@/components/todos/PreviewBody.vue";
import EditBody from "@/components/todos/EditBody.vue";

const singleTodoModalRef = ref<HTMLElement | null>(null);

const todoStore = useTodoStore();
const { inEditMode } = storeToRefs(todoStore);

onMounted(() => {
  console.log("SingleTodoModal mounted");
});
</script>
