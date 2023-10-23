<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <button
      class="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
      data-kt-drawer-toggle="true"
      data-kt-drawer-target="#kt_drawer_chat"
      @click="openDrawer()"
    >
      異動紀錄
    </button>
  </div>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
          >
            <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image" />
          </div>
        </div>

        <div class="flex-grow-1">
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                  >{{ responseData.ProjectInfo?.ProjectName }}</a
                >
              </div>
            </div>
            <div
              class="d-flex align-items-center w-150px w-sm-200px flex-column mt-3"
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-semobold fs-6 text-gray-400">案件進度</span>
                <span class="fw-bold fs-6">
                  {{ responseData.ProjectInfo?.Progress }}</span
                >
              </div>

              <div class="h-5px mx-3 w-100 bg-light-primary mb-3">
                <div
                  class="bg-primary rounded h-5px"
                  role="progressbar"
                  :style="{
                    width: responseData.ProjectInfo?.Progress,
                  }"
                  :aria-valuenow="responseData.ProjectInfo?.Progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-wrap flex-stack">
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <div class="d-flex flex-wrap">
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="fs-4 fw-bold">
                    {{ responseData.ProjectInfo?.ProjectID }}
                  </div>
                  <div class="fw-semobold fs-6 text-gray-400">案件編號</div>
                </div>
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="fs-4 fw-bold">
                    {{ responseData.ProjectInfo?.Category }}
                  </div>
                  <div class="fw-semobold fs-6 text-gray-400">案件類型</div>
                </div>
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="fs-4 fw-bold">
                    <span class="badge badge-light-primary">{{
                      responseData.ProjectInfo?.Status
                    }}</span>
                  </div>
                  <div class="fw-semobold fs-6 text-gray-400">案件狀態</div>
                </div>
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="fs-4 fw-bold">
                    {{ responseData.ProjectInfo?.ObjectAddress }}
                  </div>
                  <div class="fw-semobold fs-6 text-gray-400">物件地址</div>
                </div>
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="fs-4 fw-bold">
                    {{ responseData.ProjectInfo?.PIC }}
                  </div>
                  <div class="fw-semobold fs-6 text-gray-400">案件負責人</div>
                </div>
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="fs-4 fw-bold">
                    {{ responseData.ProjectInfo?.PICTel }}
                  </div>
                  <div class="fw-semobold fs-6 text-gray-400">負責人電話</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
        >
          <li class="nav-item">
            <router-link
              :to="`/befort-project/case-management/case-details/${$route.params.projectId}/p-info`"
              class="nav-link text-active-primary me-6"
              active-class="active"
              @click="setStoreId(responseData.ProjectInfo?.ProjectID)"
            >
              案件資訊
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="`/befort-project/case-management/case-details/${$route.params.projectId}/c-info`"
              class="nav-link text-active-primary me-6"
              active-class="active"
              @click="setStoreId(responseData.ProjectInfo?.ProjectCustomerID)"
            >
              客戶資料
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ChangeRecords :data="caseRecords" />
  <router-view></router-view>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted, watch, reactive } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";
import ChangeRecords from "@/layouts/main-layout/extras/ChangeRecords.vue";

// interface ProjectInfo {
//   ProjectID: string;
//   Category: string;
//   Status: string;
//   ObjectAddress: string;
//   PIC: string;
//   PICTel: string;
//   // 其他字段...
// }

export default {
  components: { ChangeRecords },
  name: "bj-case-details",
  setup() {
    const authStore = useAuthStore();
    const responseData = reactive({
      ProjectInfo: {
        ProjectID: "",
        ProjectName: "",
        Category: "",
        Status: "",
        ObjectAddress: "",
        PIC: "",
        PICTel: "",
        ProjectCustomerID: "",
        Progress: "",
      },
    });

    // 使用对象引用包装 currentId
    const currentIdRef = ref<string | null>(null);
    const { currentId, setCurrentId } = useIdStore();

    // 初始化 currentIdRef 的值
    currentIdRef.value = currentId;

    // 初始化 異動紀錄
    const caseRecords = ref([]);

    const openDrawer = () => {
      DrawerComponent?.getInstance("drawer_changeRecords")?.toggle();
    };

    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (currentIdRef.value) {
          formData.append("projectID", currentIdRef.value);
        }
        const response = await ApiService.post(
          "/projectBefore/getProjectInfo",
          formData
        );
        const bacicInfo = response.data.success.ProjectInfo;
        // 使用 responseData.ProjectInfo 更新数据
        responseData.ProjectInfo = bacicInfo;
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    }

    async function fetchRecordsData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (currentIdRef.value) {
          formData.append("projectID", currentIdRef.value);
        }
        const response = await ApiService.post(
          "/projectBefore/getProjectRecordList",
          formData
        );
        caseRecords.value = response.data.success; // 將 API 數據賦值給 ref
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    }

    watch(currentIdRef, (newId, oldId) => {
      fetchData();
    });

    function setStoreId(currentId: string) {
      setCurrentId(currentId);
    }

    onMounted(() => {
      fetchData();
      fetchRecordsData();
    });

    return {
      openDrawer,
      getAssetPath,
      currentId,
      responseData,
      setStoreId,
      caseRecords,
    };
  },
};
</script>
