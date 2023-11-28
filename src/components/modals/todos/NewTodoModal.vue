<template>
  <div
    class="modal fade"
    id="modal_new_todo"
    ref="newTodoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newTodoModalRef = ref<HTMLElement | null>(null);
</script>
