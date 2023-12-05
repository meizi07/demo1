<template>
  <div class="card card-flush card-xl-stretch h-lg-100 mb-5 mb-xl-8">
    <div class="card-header border-0 pt-5">
      <h2 class="card-title align-items-start flex-column">
        <span class="fw-bold text-dark">待辦事項</span>
      </h2>
      <div class="card-toolbar">
        <router-link to="/todo-list" class="btn btn-sm btn-light">
          查看全部
        </router-link>
      </div>
    </div>

    <div
      class="card-body d-flex flex-column px-7 mb-9 scroll-y mh-400px h-lg-100"
    >
      <div
        v-if="unfinishedData.length === 0"
        class="d-flex justify-content-center align-items-center w-100 h-100"
      >
        恭喜！您已完成所有待辦事項
      </div>

      <template v-for="(item, index) in unfinishedData" :key="item.UUID">
        <div
          :class="{ 'mb-7': unfinishedData.length - 1 !== index }"
          class="d-flex align-items-center"
        >
          <span class="bullet bullet-vertical h-40px bg-secondary"></span>

          <div class="form-check form-check-custom form-check-solid ms-6 me-4">
            <input
              class="form-check-input"
              type="checkbox"
              @change="
                todoStore.toggleTodoStatus(item.UUID, TodoStatus.Finished)
              "
            />
          </div>

          <div class="flex-grow-1">
            <p class="fs-6 fw-bold text-gray-900 text-hover-primary mb-0">
              {{ item.Item }}
            </p>
            <span class="text-gray-400 d-block">{{ item.Description }}</span>
          </div>

          <div class="ms-auto text-end min-w-100px">
            {{ item.ProjectName }}
            <span class="text-muted d-block">{{
              moment(item.DeadLine).format("YYYY-MM-DD")
            }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";
import { TodoStatus } from "@/types/Todo";

const todoStore = useTodoStore();
const { unfinishedData } = storeToRefs(todoStore);

todoStore.fetchUnfinishedTodoData();
</script>
