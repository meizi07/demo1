<template>
  <div class="modal-content rounded">
    <div class="modal-header justify-content-end pb-0 border-0">
      <div class="modal-tools">
        <button
          class="btn btn-icon btn-sm btn-active-light-primary ms-2"
          @click="todoStore.editCurrentTodo(false)"
        >
          <i class="ki-duotone ki-pencil fs-1">
            <i class="path1"></i>
            <i class="path2"></i>
          </i>
        </button>

        <button class="btn btn-icon btn-sm btn-active-light-primary ms-2">
          <i class="ki-duotone ki-trash fs-1">
            <i class="path1"></i>
            <i class="path2"></i>
            <i class="path3"></i>
            <i class="path4"></i>
            <i class="path5"></i>
          </i>
        </button>

        <button
          class="btn btn-icon btn-sm btn-active-light-primary ms-2"
          aria-label="Close"
          @click="todoStore.closeTodoModal"
        >
          <i class="ki-duotone ki-cross fs-1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </button>
      </div>
    </div>

    <div class="separator mt-7 mb-9"></div>

    <div class="modal-body scroll-y p-9 pt-0">
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
</template>

<script setup lang="ts">
import moment from "moment";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
const { currentTodo } = storeToRefs(todoStore);
</script>
