<template>
  <div
    class="modal fade"
    id="modal_create_housing"
    tabindex="-1"
    aria-hidden="true"
    ref="housingModalRef"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header flex-wrap">
          <h3 class="modal-title">選擇案件</h3>

          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ki-duotone ki-cross fs-1"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </div>

          <div
            class="d-flex align-items-center position-relative my-1 w-100 mt-5"
          >
            <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
            <input
              type="text"
              class="form-control form-control-solid ps-12"
              placeholder="案件編號、案件名稱"
            />
          </div>
        </div>

        <div class="modal-body mh-400px">
          <div
            v-for="item in projects"
            :key="item.ProjectID"
            class="d-flex align-items-sm-center mb-7"
          >
            <div
              class="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2"
            >
              <div class="flex-grow-1 my-lg-0 my-2 me-2">
                <p class="text-gray-800 fw-bold fs-6 mb-0">
                  {{ item.ProjectName }}, {{ item.ObjectAddress }}
                </p>
                <span class="text-muted fw-semibold d-block pt-1">
                  {{ item.ProjectID }}
                </span>
              </div>

              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline btn-outline-bordered btn-active-light-primary"
                  @click="projectId = item.ProjectID"
                >
                  選擇
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-primary"
            @click="redirectToAddHousingPage"
          >
            建立屋況紀錄
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import { useAuthStore } from "@/stores/auth";
import type { Project } from "@/types/Project";

const authStore = useAuthStore();
const router = useRouter();

const housingModalRef = ref(null);
const projects = ref<Project[]>([]);
const projectId = ref("");

async function fetchHousingProjects() {
  try {
    const response = await ApiService.post(
      "/projectBefore/getHousingInitProjectList",
      {
        orgId: authStore.user.orgId,
        account: authStore.user.account,
      }
    );

    if (response.data && response.data.success) {
      projects.value = response.data.success;
    } else {
      console.error(
        `獲取案件列表失敗，狀態： ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("API 請求錯誤：", error);
  }
}

function redirectToAddHousingPage() {
  if (projectId.value) {
    hideModal(housingModalRef.value);

    router.push({
      name: "bj-housing-add",
      query: {
        projectId: projectId.value,
      },
    });
  } else {
    alert("請選擇案件");
  }
}

onMounted(() => {
  fetchHousingProjects();
});
</script>
