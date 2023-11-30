<template>
  <div
    class="modal fade"
    id="modal_update_todo"
    ref="updateTodoModalRef"
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

        <div class="modal-body scroll-y p-9 pt-0">here is body</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

interface NewTodoData {
  title: string;
  description: string;
  dueDate: string;
  project: string;
}

const authStore = useAuthStore();

const updateTodoModalRef = ref<HTMLElement | null>(null);

onMounted(() => {});
</script>
