<template>
  <el-form
    id="add_housing_form"
    @submit.prevent=""
    :model="targetData"
    ref="addHousingFormRef"
    class="form"
  >
    <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
      <!-- <button
        :data-kt-indicator="loading ? 'on' : null"
        type="submit"
        class="btn btn-sm fw-bold btn-primary"
      >
        <span v-if="!loading" class="indicator-label"> 儲存 </span>
        <span v-if="loading" class="indicator-progress">
          請稍等...
          <span
            class="spinner-border spinner-border-sm align-middle ms-2"
          ></span>
        </span>
      </button> -->

      <button type="submit" class="btn btn-sm fw-bold btn-primary">
        <span class="indicator-label">儲存</span>
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
        </div>

        <div
          class="tab-pane fade show"
          id="housing_measuring_record"
          role="tabpanel"
        >
          <div class="card mb-5 mb-xl-10">
            <div class="card-body d-flex flex-column p-9">
              <div class="table-responsive">
                <table
                  class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
                >
                  <tbody class="fw-semibold text-gray-800">
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          丈量紀錄區塊
                        </label>
                      </td>
                      <td class="fw-bold"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditProjectInfo from "@/components/housing/EditProjectInfo.vue";

const addHousingFormRef = ref<null | HTMLFormElement>(null);

const targetData = ref({});
</script>
