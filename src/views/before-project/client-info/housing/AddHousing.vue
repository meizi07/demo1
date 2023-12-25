<template>
  <el-form
    ref="housingFormRef"
    :model="{ ...projectInfoData, measuringData, areaData }"
    class="form"
    size="large"
    @submit.prevent="housingStore.handleHousingSubmit(housingFormRef!)"
  >
    <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
      <button
        type="submit"
        class="btn btn-sm fw-bold btn-primary"
        :data-kt-indicator="isLoading ? 'on' : null"
      >
        <span v-if="isLoading" class="indicator-progress">
          送出中...
          <span
            class="spinner-border spinner-border-sm align-middle ms-2"
          ></span>
        </span>
        <span v-else class="indicator-label">儲存</span>
      </button>

      <router-link
        :to="`/befort-project/client-info/housing-list`"
        class="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
      >
        取消
      </router-link>
    </div>

    <div class="d-flex flex-column gap-7 gap-lg-10">
      <div class="d-flex flex-wrap flex-stack gap-5 gap-lg-10">
        <div class="common_tab w-100 pt-3">
          <ul
            class="nav nav-pills nav-pills-custom row position-relative mx-0 mb-3"
          >
            <li
              v-for="(tab, index) in HOUSING_TABS"
              :key="tab.id"
              class="nav-item p-0"
            >
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                :class="{ active: index === 0 }"
                data-bs-toggle="tab"
                role="tab"
                :href="`#${tab.id}`"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3">
                  {{ tab.title }}
                </span>
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px"
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content">
        <div
          v-for="(tab, index) in HOUSING_TABS"
          :key="tab.id"
          class="tab-pane fade show"
          :class="{ active: index === 0 }"
          :id="tab.id"
          role="tabpanel"
        >
          <template v-if="index === 0">
            <EditProjectInfo />
            <EditArea />
          </template>

          <template v-if="index === 1">
            <EditMeasuringRecord />
          </template>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useHousingStore } from "@/stores/housing";
import EditProjectInfo from "@/components/housing/EditProjectInfo.vue";
import EditMeasuringRecord from "@/components/housing/EditMeasuringRecord.vue";
import EditArea from "@/components/housing/EditArea.vue";
import { HOUSING_TABS } from "@/constants/housing";

const housingStore = useHousingStore();
const { projectInfoData, measuringData, areaData, isLoading } =
  storeToRefs(housingStore);

const housingFormRef = ref<HTMLFormElement | null>(null);

onUnmounted(() => {
  housingStore.resetHousingData();
});
</script>
