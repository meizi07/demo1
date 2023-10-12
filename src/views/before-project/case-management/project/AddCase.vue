<template>
  <el-form
    id="new_case_form"
    @submit.prevent="submit()"
    :model="targetData"
    :rules="rules"
    ref="formRef"
    class="form"
  >
    <div class="toolbtn d-flex align-items-center gap-2 gap-lg-3">
      <button
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
      </button>
      <router-link
        :to="`/befort-project/case-management/management`"
        class="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
      >
        取消
      </router-link>
    </div>
    <div class="card mb-5 mb-xl-10">
      <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
          <div class="me-7 mb-4">
            <div
              class="image-input image-input-outline"
              data-kt-image-input="true"
              :style="{
                backgroundImage: `url(${getAssetPath(
                  '/public/media/avatars/blank.png'
                )})`,
              }"
            >
              <!--begin::Preview existing avatar-->
              <div
                class="image-input-wrapper w-125px h-125px"
                :style="`background-image: url(${getAssetPath(
                  '/public/media/avatars/blank.png'
                )})`"
              ></div>
              <!--end::Preview existing avatar-->

              <!--begin::Label-->
              <label
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="change"
                data-bs-toggle="tooltip"
                title="Change avatar"
              >
                <i class="bi bi-pencil-fill fs-7"></i>

                <!--begin::Inputs-->
                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                <input type="hidden" name="avatar_remove" />
                <!--end::Inputs-->
              </label>
              <!--end::Label-->

              <!--begin::Remove-->
              <span
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="remove"
                data-bs-toggle="tooltip"
                title="Remove avatar"
              >
                <!-- @click="removeImage()" -->

                <i class="bi bi-x fs-2"></i>
              </span>
              <!--end::Remove-->
            </div>
          </div>
        </div>

        <div class="d-flex overflow-auto h-55px">
          <ul
            class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
          >
            <li class="nav-item">
              <a
                class="nav-link text-active-primary active me-6"
                data-bs-toggle="tab"
                role="tab"
                href="#addCase_tab_pane_1"
              >
                案件資訊
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-active-primary me-6"
                data-bs-toggle="tab"
                role="tab"
                href="#addCase_tab_pane_2"
              >
                客戶資料
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab-content" id="addCase_tab">
      <div
        class="tab-pane fade show active"
        id="addCase_tab_pane_1"
        role="tabpanel"
      >
        <div class="card mb-5 mb-xl-10">
          <div class="card-header">
            <div class="card-title m-0">
              <h3 class="fw-bold m-0">案件類型</h3>
            </div>
          </div>
          <div class="card-body d-flex flex-column p-9">
            <div class="table-responsive">
              <table
                class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
              >
                <tbody class="fw-semibold text-gray-800">
                  <tr>
                    <td class="text-muted">
                      <label
                        class="required d-flex align-items-center fs-6 fw-semobold mb-4"
                        >案件類型</label
                      >
                    </td>
                    <td class="fw-bold">
                      <el-form-item class="w-100" prop="category">
                        <el-select
                          v-model="targetData.category"
                          placeholder="請選擇案件類型"
                          name="category"
                          as="select"
                          size="large"
                        >
                          <el-option label="設計" value="0">設計</el-option>
                          <el-option label="工程" value="1">工程</el-option>
                        </el-select>
                      </el-form-item>
                    </td>
                  </tr>
                  <tr
                    class="pj_link_engineering"
                    v-if="targetData.category === '1'"
                  >
                    <td class="text-muted">
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >設計案件編號</label
                      >
                    </td>
                    <td class="fw-bold">
                      <div class="d-flex align-items-center w-100">
                        <el-form-item class="w-100" prop="connectProjectID">
                          <el-select
                            v-model="targetData.connectProjectID"
                            placeholder="請選擇設計案件編號"
                            name="connectProjectID"
                            as="select"
                            size="large"
                            @click="fetchDesignCaseOptions"
                          >
                            <el-option
                              v-for="option in formattedDesignCaseOptions"
                              :key="option.value"
                              :label="option.label"
                              :value="option.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-title m-0">
              <h3 class="fw-bold m-0">案件狀態</h3>
            </div>
          </div>
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
                        >案件名稱</label
                      >
                    </td>
                    <td class="fw-bold">
                      <div class="d-flex align-items-center w-100">
                        <el-form-item class="w-100" prop="projectName">
                          <el-input
                            v-model="targetData.projectName"
                            placeholder="案件名稱"
                            name="projectName"
                            size="large"
                          ></el-input>
                        </el-form-item>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >物件地址</label
                      >
                    </td>
                    <td class="fw-bold">
                      <div class="d-flex align-items-center w-100">
                        <el-form-item class="w-100" prop="objectAddress">
                          <el-input
                            v-model="targetData.objectAddress"
                            placeholder="物件地址"
                            name="objectAddress"
                            size="large"
                          ></el-input>
                        </el-form-item>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >預計開始日</label
                      >
                    </td>
                    <td class="fw-bold">
                      <div
                        class="position-relative d-flex align-items-center date_right_icon w-100"
                      >
                        <el-form-item class="w-100" prop="dueDate">
                          <el-date-picker
                            v-model="targetData.estStartDate"
                            type="date"
                            placeholder="預計開始日"
                            size="large"
                            :display-format="'yyyy-MM-dd'"
                            :value-format="'YYYY-MM-DD'"
                          />
                        </el-form-item>
                        <!-- :value-format="'yyyy-MM-dd'" -->
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >預計結束日</label
                      >
                    </td>
                    <td class="fw-bold">
                      <div
                        class="position-relative d-flex align-items-center date_right_icon w-100"
                      >
                        <el-form-item class="w-100" prop="dueDate">
                          <el-date-picker
                            v-model="targetData.estEndDate"
                            type="date"
                            placeholder="預計結束日"
                            size="large"
                            :display-format="'yyyy-MM-dd'"
                            :value-format="'YYYY-MM-DD'"
                          />
                        </el-form-item>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >案件負責人</label
                      >
                    </td>
                    <td class="fw-bold">
                      <el-form-item class="w-100" prop="pic">
                        <el-select
                          v-model="targetData.pic"
                          placeholder="請選擇案件負責人"
                          name="pic"
                          as="select"
                          size="large"
                          @click="fetchPIC"
                        >
                          <el-option
                            v-for="option in PICOptions"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade show" id="addCase_tab_pane_2" role="tabpanel">
        <div class="card mb-5 mb-xl-10">
          <div class="card-header align-items-center border-0">
            <div class="card-title m-0">
              <h3 class="fw-bold m-0"></h3>
            </div>
            <button
              type="button"
              class="btn btn-sm fw-bold bg-light btn-color-gray-700 btn-active-color-primary"
              data-bs-toggle="modal"
              data-bs-target="#modal_select_users"
            >
              選擇客戶
            </button>
          </div>
          <div class="card-body d-flex flex-column p-9 pt-0">
            <div class="table-responsive">
              <table
                class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
              >
                <tbody class="fw-semibold text-gray-800">
                  <tr>
                    <td class="text-muted">客戶編號</td>
                    <td class="fw-bold">
                      {{ customerData.CustomerID || "-" }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">客戶來源</td>
                    <td class="fw-bold">
                      {{ customerData.CustomerSource || "-" }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">業主姓名</td>
                    <td class="fw-bold">{{ customerData.Name || "-" }}</td>
                  </tr>
                  <tr>
                    <td class="text-muted">服務項目</td>
                    <td class="fw-bold">
                      {{ customerData.ServiceItem || "-" }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">連絡電話</td>
                    <td class="fw-bold">{{ customerData.Telephone || "-" }}</td>
                  </tr>
                  <tr>
                    <td class="text-muted">連絡手機</td>
                    <td class="fw-bold">{{ customerData.Mobile || "-" }}</td>
                  </tr>
                  <tr>
                    <td class="text-muted">聯絡地址</td>
                    <td class="fw-bold">
                      {{ customerData.ContactAddress || "-" }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">聯絡信箱</td>
                    <td class="fw-bold">{{ customerData.Email || "-" }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-form>
  <SelectClientModalVue
    @client-selected="handleClientSelected"
  ></SelectClientModalVue>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted, computed, watch } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";

import SelectClientModalVue from "@/components/modals/general/SelectClientModal.vue";
import type { Customer } from "@/components/modals/general/SelectClientModal.vue";

interface NewAddressData {
  projectName: string;
  category: string;
  connectProjectID: string;
  objectAddress: string;
  estStartDate: string;
  estEndDate: string;
  pic: string;
  customerID: string;
}

export default {
  name: "bj-case-add",
  components: { SelectClientModalVue },
  setup() {
    const authStore = useAuthStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref<boolean>(false);
    const selectedClient = ref<Customer | null>(null);
    const customerData = ref({
      CustomerID: "",
      Name: "",
      ServiceItem: "",
      Telephone: "",
      Mobile: "",
      Email: "",
      ContactAddress: "",
      CustomerSource: "",
    });

    // 實現方法來處理從子組件傳遞的客戶數據
    const handleClientSelected = (client: Customer) => {
      selectedClient.value = client;

      customerData.value.CustomerID = client.CustomerID;
      customerData.value.CustomerSource = client.CustomerSource;
      customerData.value.Name = client.Name;
      customerData.value.ServiceItem = client.ServiceItem;
      customerData.value.Telephone = client.Telephone;
      customerData.value.Mobile = client.Mobile;
      customerData.value.ContactAddress = client.ContactAddress;
      customerData.value.Email = client.Email;

      targetData.value.customerID = customerData.value.CustomerID;
      //customerData.value.CustomerID = targetData.value.customerID;
    };

    const targetData = ref<NewAddressData>({
      projectName: "",
      category: "",
      connectProjectID: "",
      objectAddress: "",
      estStartDate: "",
      estEndDate: "",
      pic: "",
      customerID: "",
    });

    const rules = ref({
      projectName: [
        {
          required: true,
          message: "請輸入案件名稱",
          trigger: "blur",
        },
      ],
      category: [
        {
          required: true,
          message: "請選擇案件類型",
          trigger: "change",
        },
      ],
      connectProjectID: [
        {
          required: true,
          message: "請選擇連結設計編號",
          trigger: "change",
        },
      ],
      objectAddress: [
        {
          required: true,
          message: "請輸入物件地址",
          trigger: "blur",
        },
      ],
      estStartDate: [
        {
          required: false,
        },
      ],
      estEndDate: [
        {
          required: false,
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;

          const formData = new FormData();
          formData.append("orgId", authStore.user.orgId);
          formData.append("account", authStore.user.account);
          formData.append("token", authStore.user.token);

          for (const key in targetData.value) {
            if (Object.prototype.hasOwnProperty.call(targetData.value, key)) {
              formData.append(key, targetData.value[key]);
            }
          }

          ApiService.post("/projectBefore/addProject", formData)
            .then((response) => {
              loading.value = false;
              if (response.data.success) {
                console.log(response);
                console.log(targetData.value);
                Swal.fire({
                  text: "送出成功",
                  icon: "success",
                  buttonsStyling: false,
                  confirmButtonText: "繼續",
                  heightAuto: false,
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then(() => {});
              } else {
                console.log(response.data);
                Swal.fire({
                  text: "送出失败，请检查数据是否正确",
                  icon: "error",
                  buttonsStyling: false,
                  confirmButtonText: "繼續",
                  heightAuto: false,
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                });
              }
            })
            .catch((error) => {
              loading.value = false;
              console.error("API 请求错误：", error);
            });
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
    };

    const designCaseOptions = ref<
      Array<{
        ProjectName: string;
        ProjectID: string;
        ObjectAddress: string;
        EstStartDate: string;
        EstEndDate: string;
      }>
    >([]);

    const picOptions = ref<
      Array<{
        CustomerId: string;
        Name: string;
      }>
    >([]);

    // 定義方法以從 API 獲取設計案件編號的選項
    const fetchDesignCaseOptions = async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        formData.append("category", "0");
        const response = await ApiService.post(
          "/projectBefore/getProjectListByCategory",
          formData
        );
        designCaseOptions.value = response.data.success;
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    };

    const formattedDesignCaseOptions = computed(() => {
      return designCaseOptions.value.map((option) => ({
        label: `${option.ProjectName} (${option.ProjectID})`,
        value: option.ProjectID,
      }));
    });

    // 監聽選擇設計案件編號的方法
    const handleDesignCaseSelect = () => {
      const selectedCaseID = targetData.value.connectProjectID;
      const selectedCase = designCaseOptions.value.find(
        (option) => option.ProjectID === selectedCaseID
      );

      if (selectedCase) {
        // 填入案件相關資訊到 targetData.value
        targetData.value.projectName = selectedCase.ProjectName;
        targetData.value.objectAddress = selectedCase.ObjectAddress;
        const estStartDateParts = selectedCase.EstStartDate.split(" ");
        const estEndDateParts = selectedCase.EstEndDate.split(" ");
        targetData.value.estStartDate = estStartDateParts[0];
        targetData.value.estEndDate = estEndDateParts[0];
      }
    };

    const fetchPIC = async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        formData.append("category", "1");
        const response = await ApiService.post(
          "/account/getDropdownList",
          formData
        );
        picOptions.value = response.data.success;
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    };

    const PICOptions = computed(() => {
      return picOptions.value.map((option) => ({
        label: `${option.Name}`,
        value: option.CustomerId,
      }));
    });

    // const removeImage = () => {
    //   profileDetails.value.avatar = "/media/avatars/blank.png";
    // };

    onMounted(() => {
      watch(
        () => targetData.value.connectProjectID,
        () => {
          handleDesignCaseSelect();
        }
      );
    });

    return {
      getAssetPath,
      submit,
      fetchDesignCaseOptions,
      fetchPIC,
      targetData,
      loading,
      formRef,
      rules,
      formattedDesignCaseOptions,
      PICOptions,
      selectedClient,
      handleClientSelected,
      customerData,
    };
  },
};
</script>
