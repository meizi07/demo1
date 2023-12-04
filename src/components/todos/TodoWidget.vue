<template>
  <div class="card card-flush h-lg-100">
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

    <div class="card-body pt-2 scroll-y mh-400px h-lg-100">
      <template v-for="(item, index) in list" :key="index">
        <div
          :class="{ 'mb-7': list.length - 1 !== index }"
          class="d-flex align-items-center"
        >
          <span class="bullet bullet-vertical h-40px bg-secondary"></span>

          <div class="form-check form-check-custom form-check-solid ms-6 me-4">
            <input class="form-check-input" type="checkbox" value="" />
          </div>

          <div class="flex-grow-1">
            <p class="fs-6 fw-bold text-gray-900 text-hover-primary mb-0">
              {{ item.title }}
            </p>
            <span class="text-gray-400 d-block">{{ item.text }}</span>
          </div>

          <div class="ms-auto text-end">
            北投案場
            <span class="text-muted d-block">2022-12-22</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
