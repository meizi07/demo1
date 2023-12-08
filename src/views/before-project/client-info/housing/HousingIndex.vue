<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <button
      type="button"
      class="btn btn-sm fw-bold btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#"
    >
      新增屋況紀錄
    </button>
  </div>

  <HousingList />
</template>

<script setup lang="ts">
import HousingList from "@/components/customers/datatable/HousingList.vue";
</script>
