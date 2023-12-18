<template>
  <el-form
    ref="housingFormRef"
    :model="{ ...projectInfoData, measuringData, areaData }"
    class="form"
    size="large"
    id="add_housing_form"
    @submit.prevent="handleHousingSubmit(housingFormRef!)"
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
            <li class="nav-item p-0">
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100 active"
                data-bs-toggle="tab"
                role="tab"
                href="#housing_init_record"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3">
                  屋況初始紀錄
                </span>
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px"
                ></span>
              </a>
            </li>

            <li class="nav-item p-0">
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                data-bs-toggle="tab"
                role="tab"
                href="#housing_measuring_record"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3">
                  丈量紀錄
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
          class="tab-pane fade show active"
          id="housing_init_record"
          role="tabpanel"
        >
          <EditProjectInfo />
          <EditArea />
        </div>

        <div
          class="tab-pane fade show"
          id="housing_measuring_record"
          role="tabpanel"
        >
          <EditMeasuringRecord />
        </div>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useHousingStore } from "@/stores/housing";
import EditProjectInfo from "@/components/housing/EditProjectInfo.vue";
import EditMeasuringRecord from "@/components/housing/EditMeasuringRecord.vue";
import EditArea from "@/components/housing/EditArea.vue";

const housingStore = useHousingStore();
const { projectInfoData, measuringData, areaData, isLoading } =
  storeToRefs(housingStore);

const housingFormRef = ref<HTMLFormElement | null>(null);

function handleHousingSubmit(formEl: HTMLFormElement) {
  if (!formEl) {
    return;
  }

  formEl.validate((valid, fields) => {
    if (valid) {
      housingStore.submitHousingData();
    } else {
      Swal.fire({
        text: "請檢查是否有未填欄位",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "繼續",
        heightAuto: false,
        customClass: {
          confirmButton: "btn btn-primary",
        },
      });

      return false;
    }
  });
}
</script>
