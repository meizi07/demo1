<template>
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
                  >Max Smith</a
                >
              </div>
            </div>
            <div
              class="d-flex align-items-center w-150px w-sm-200px flex-column mt-3"
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-semobold fs-6 text-gray-400">案件進度</span>
                <span class="fw-bold fs-6">50%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light-primary mb-3">
                <div
                  class="bg-primary rounded h-5px"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
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
                  <div class="d-flex align-items-center">
                    <div class="fs-2 fw-bold">
                      {{ $route.params.projectId }}
                    </div>
                  </div>

                  <div class="fw-semobold fs-6 text-gray-400">案件編號</div>
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
              :to="
                '/befort-project/case-management/case-details/' +
                $route.params.projectId +
                '/overview'
              "
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              案件資訊
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="'/crafted/account/settings'"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              客戶資料
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";

export default {
  components: {},
  name: "bj-case-details",
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);

    const tableData1 = ref([]);
    const tableData2 = ref([]);

    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        formData.append("projectID", $route.params.projectId);

        const response = await ApiService.post(
          "/projectBefore/getCustInfoByID",
          formData
        );

        responseData.value = response.data;

        const successData = response.data.success[0]; // 获取成功数据中的第一个对象
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    onMounted(() => {
      fetchData();
      console.log(responseData);
    });
    return {
      getAssetPath,
      currentUUID,
      tableData1,
      tableData2,
    };
  },
};
</script>
