<template>
  <el-form
    id="new_case_form"
    @submit.prevent="submit()"
    :model="targetData"
    :rules="rules"
    ref="formRef"
    class="form"
  >
    <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
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
        :to="`/befort-project/client-info/client-list`"
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
                class="nav-link active d-flex justify-content-center w-100 border-0 h-100"
                data-bs-toggle="pill"
                href="#add_client_pane_1"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3"
                  >基本資料</span
                >
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"
                ></span>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                data-bs-toggle="pill"
                href="#add_client_pane_2"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3"
                  >居住成員</span
                >
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="addClient_tab">
        <div
          class="tab-pane fade show active"
          id="add_client_pane_1"
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
                          接洽窗口</label
                        >
                      </td>
                      <td class="fw-bold">
                        <el-form-item class="w-100" prop="pic">
                          <el-select
                            v-model="targetData.pic"
                            placeholder="請選擇接洽窗口"
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
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                          >首次接洽日期</label
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
                              placeholder="請選擇日期"
                              size="large"
                              :display-format="'yyyy-MM-dd'"
                              :value-format="'YYYY-MM-DD'"
                            />
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
                          客戶編號</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="projectName">
                            <el-input
                              v-model="targetData.projectName"
                              placeholder="20231023"
                              name="projectName"
                              size="large"
                              disabled
                            ></el-input>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          客戶來源</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="projectName">
                            <el-input
                              v-model="targetData.projectName"
                              placeholder=""
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
                          >業主姓名</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="projectName">
                            <el-input
                              v-model="targetData.projectName"
                              placeholder=""
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
                        >
                          服務項目</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="objectAddress">
                            <el-input
                              v-model="targetData.objectAddress"
                              placeholder=""
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
                        >
                          連絡電話</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="objectAddress">
                            <el-input
                              v-model="targetData.objectAddress"
                              placeholder=""
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
                        >
                          連絡手機</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="objectAddress">
                            <el-input
                              v-model="targetData.objectAddress"
                              placeholder=""
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
                        >
                          聯絡地址</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="objectAddress">
                            <el-input
                              v-model="targetData.objectAddress"
                              placeholder=""
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
                        >
                          聯絡信箱</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="objectAddress">
                            <el-input
                              v-model="targetData.objectAddress"
                              placeholder=""
                              name="objectAddress"
                              size="large"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="add_client_pane_2" role="tabpanel">
          <div class="card mb-5 mb-xl-10">
            <div class="card-body d-flex flex-column p-9">
              <div class="mb-0 fs-6 gy-5">
                <div id="kt_ecommerce_add_product_options">
                  <div class="form-group">
                    <div class="d-flex flex-column gap-8">
                      <div
                        class="form-group d-flex align-items-center gap-5 client_add_repeater_item"
                        v-for="(item, index) in formItems"
                        :key="index"
                      >
                        <div
                          class="w-100 position-relative"
                          v-for="field in fields"
                          :key="field.name"
                        >
                          <label class="form-label">{{ field.label }}</label>
                          <div class="w-100">
                            <template v-if="field.type === 'select'">
                              <select
                                class="form-select"
                                v-model="item[field.name]"
                                :data-placeholder="'請選擇' + field.label"
                              >
                                <option></option>
                                <option
                                  v-for="option in field.options"
                                  :key="option.value"
                                  :value="option.value"
                                >
                                  {{ option.label }}
                                </option>
                              </select>
                            </template>
                            <template v-else-if="field.type === 'input'">
                              <input
                                :type="'text'"
                                class="form-control mw-100"
                                v-model="item[field.name]"
                                :placeholder="field.label"
                              />
                            </template>
                          </div>
                        </div>
                        <div>
                          <label class="d-block form-label">刪除</label>
                          <button
                            type="button"
                            @click="removeItem(index)"
                            class="btn btn-sm btn-icon text-muted text-hover-danger"
                          >
                            <i class="ki-duotone ki-cross fs-1">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-8">
                    <button
                      type="button"
                      @click="addItem"
                      class="btn btn-sm btn-light-primary"
                    >
                      <i class="ki-duotone ki-plus fs-2"></i>新增項目
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted, computed, watch } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";

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
  components: {},
  setup() {
    const authStore = useAuthStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const formItems = ref<any[]>([]);
    const loading = ref<boolean>(false);
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

    const fields = [
      {
        name: "性別",
        label: "性別",
        type: "select",
        options: [
          { value: "0", label: "男" },
          { value: "1", label: "女" },
          { value: "2", label: "多元性別" },
        ],
      },
      {
        name: "年齡",
        label: "年齡",
        type: "select",
        options: [
          { value: "0", label: "0-10" },
          { value: "1", label: "11-20" },
          { value: "2", label: "21-30" },
          { value: "3", label: "31-40" },
          { value: "4", label: "41-50" },
          { value: "5", label: "51-60" },
          { value: "6", label: "61-70" },
          { value: "7", label: "71-80" },
          { value: "8", label: "81-90" },
          { value: "9", label: "91-100" },
          { value: "10", label: "100以上" },
        ],
      },
      {
        name: "特殊需求",
        label: "特殊需求",
        type: "select",
        options: [
          { value: "0", label: "行動不便" },
          { value: "1", label: "寵物" },
          { value: "2", label: "無障礙" },
          { value: "3", label: "其他" },
        ],
      },
      { name: "備註", label: "備註", type: "input" },
    ];

    const addItem = () => {
      // 添加新的表单项
      formItems.value.push({
        product_option: "",
        年齡: "",
        人數: "",
        備註: "",
      });
    };

    const removeItem = (index: number) => {
      // 根据索引删除表单项
      formItems.value.splice(index, 1);
    };

    const rules = ref({
      projectName: [
        {
          required: true,
          message: "請輸入業主姓名",
          trigger: "blur",
        },
      ],
      objectAddress: [
        {
          required: true,
          message: "請輸入服務項目",
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

    const fetchPIC = async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        formData.append("category", "0");
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

    onMounted(() => {});

    return {
      getAssetPath,
      fields,
      formItems,
      submit,
      fetchPIC,
      targetData,
      loading,
      formRef,
      rules,
      PICOptions,
      customerData,
      addItem,
      removeItem,
    };
  },
};
</script>
