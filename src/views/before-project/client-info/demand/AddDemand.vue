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
            <li
              class="nav-item p-0"
              v-for="(tab, tabIndex) in tabs"
              :key="tabIndex"
            >
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                :class="{ active: tabIndex === activeTab }"
                data-bs-toggle="pill"
                :href="'#demand_add_pane_' + (tabIndex + 1)"
                @click="setActiveTab(tabIndex)"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3">{{
                  tab.label
                }}</span>
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px"
                  :class="{
                    'bg-primary': tabIndex === activeTab,
                    'bg-light': tabIndex !== activeTab,
                  }"
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="demandAdd">
        <div
          class="tab-pane fade show active"
          id="demand_add_pane_1"
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
                          案件編號</label
                        >
                      </td>
                      <td class="fw-bold"><!-- {{ - }} -->-</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                          >訪談日期</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div
                          class="position-relative d-flex align-items-center date_right_icon w-100"
                        >
                          <el-form-item class="w-100" prop="contactDate">
                            <el-date-picker
                              v-model="targetData.contactDate"
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
          <InfoCard :tableData="tab1tableData2"></InfoCard>
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_2" role="tabpanel">
          <TableCard :tableHeaders="tab2HeaderData" :tableData="apiData2" />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_4" role="tabpanel">
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
                              <el-form-item class="w-100">
                                <el-select
                                  v-model="item[field.name]"
                                  :placeholder="'請選擇' + field.label"
                                  :name="field.name"
                                  as="select"
                                  size="large"
                                >
                                  <el-option
                                    v-for="option in field.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value"
                                  ></el-option>
                                </el-select>
                              </el-form-item>
                            </template>
                            <template v-else-if="field.type === 'input'">
                              <el-form-item class="w-100">
                                <el-input
                                  v-model="item[field.name]"
                                  :placeholder="field.label"
                                  :name="field.name"
                                  size="large"
                                ></el-input>
                              </el-form-item>
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

import { useRoute } from "vue-router";

import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";

import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import TableCard from "@/components/customers/cards/overview/TableCard.vue";
import type { Customer } from "@/type/share";

interface AddClientData {
  projectID: string;
  contactDate: string;
  CustomerSource: string;
  CustomerName: string;
  ServiceItem: string;
  ContactTel: string;
  ContactMobile: string;
  ContactAddress: string;
  ContactEmail: string;
}

export default {
  name: "bj-demand-add",
  components: { InfoCard, TableCard },
  setup() {
    const authStore = useAuthStore();
    const useId = useIdStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const formItems = ref<any[]>([]);
    const loading = ref<boolean>(false);

    const clientData = ref<Customer | null>(null);
    clientData.value = useId.selectedClient;

    const targetData = ref<AddClientData>({
      projectID: "",
      contactDate: "",
      CustomerSource: "",
      CustomerName: "",
      ServiceItem: "",
      ContactTel: "",
      ContactMobile: "",
      ContactAddress: "",
      ContactEmail: "",
    });

    const tabs = ref([
      { label: "客戶資料" },
      { label: "居住成員" },
      { label: "房屋資料" },
      { label: "居住需求" },
      { label: "風格材質" },
      { label: "安全形式" },
      { label: "預算分析" },
      { label: "參考資料" },
    ]);
    const activeTab = ref(0);

    function setActiveTab(tabIndex: number) {
      activeTab.value = tabIndex;
    }

    const tab1tableData2 = ref([
      { label: "客戶編號", value: "" },
      { label: "客戶來源", value: "" },
      { label: "業主姓名", value: "" },
      { label: "服務項目", value: "" },
      { label: "連絡電話", value: "" },
      { label: "連絡手機", value: "" },
      { label: "聯絡地址", value: "" },
      { label: "聯絡信箱", value: "" },
    ]);

    const tab2HeaderData = ref([
      { label: "編號", field: "Sequence" },
      { label: "性別", field: "Material" },
      { label: "年齡", field: "Purpose" },
      { label: "特殊需求", field: "Remark" },
      { label: "備註", field: "Remark" },
    ]);
    const apiData2 = ref([]);

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
        性別: "",
        年齡: "",
        特殊需求: "",
        備註: "",
      });
    };

    const removeItem = (index: number) => {
      // 根据索引删除表单项
      formItems.value.splice(index, 1);
    };

    const rules = ref({
      projectID: [
        {
          required: true,
        },
      ],
      contactDate: [
        {
          required: true,
          message: "請選擇訪談日期",
          trigger: "blur",
        },
      ],
      CustomerSource: [
        {
          required: true,
        },
      ],
      CustomerName: [
        {
          required: true,
          message: "請輸入客戶名稱",
          trigger: "blur",
        },
      ],
      ServiceItem: [
        {
          required: true,
        },
      ],
      ContactTel: [
        {
          required: true,
        },
      ],
      ContactMobile: [
        {
          required: true,
        },
      ],
      ContactAddress: [
        {
          required: true,
        },
      ],
      ContactEmail: [
        {
          required: true,
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

          const members = formItems.value.map((item: any) => ({
            Sex: item.性別,
            Age: item.年齡,
            SpecialDemand: item.特殊需求,
            Remark: item.備註,
          }));

          formData.append("Member", JSON.stringify(members));

          for (const [key, value] of formData.entries()) {
            console.log(`Key: ${key}, Value: ${value}`);
          }

          ApiService.post("/projectBefore/addCustomerInfo", formData)
            .then((response) => {
              loading.value = false;
              if (response.data.success) {
                console.log(response);
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
                  text: "送出失敗，請檢查資料是否正確",
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

    onMounted(() => {
      // 更新 tab1tableData2
      if (clientData.value) {
        tab1tableData2.value[0].value = clientData.value?.CustomerID;
        tab1tableData2.value[1].value = clientData.value?.CustomerSource;
        tab1tableData2.value[2].value = clientData.value?.Name;
        tab1tableData2.value[3].value = clientData.value?.ServiceItem;
        tab1tableData2.value[4].value = clientData.value?.Telephone;
        tab1tableData2.value[5].value = clientData.value?.Mobile;
        tab1tableData2.value[6].value = clientData.value?.ContactAddress;
        tab1tableData2.value[7].value = clientData.value?.Email;
      }
    });

    return {
      getAssetPath,
      setActiveTab,
      tabs,
      activeTab,
      fields,
      formItems,
      submit,
      targetData,
      loading,
      formRef,
      rules,
      addItem,
      removeItem,
      tab1tableData2,
      tab2HeaderData,
      apiData2,
    };
  },
};
</script>
