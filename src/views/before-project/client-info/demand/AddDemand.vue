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
        :to="`/befort-project/client-info/demand-list`"
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
                      <td class="fw-bold">{{ projectID }}</td>
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
        <div class="tab-pane fade show" id="demand_add_pane_3" role="tabpanel">
          <Tab3Component
            :form-data="tab3Data"
            @update:formData="updateTab3Data"
          />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_4" role="tabpanel">
          <Tab4Component
            :form-data="tab4Data"
            @update:formData="updateTab4Data"
          />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_5" role="tabpanel">
          <Tab5Component
            :form-data="tab5Data"
            @update:formData="updateTab5Data"
          />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_6" role="tabpanel">
          <Tab6Component
            :form-data="tab6Data"
            @update:formData="updateTab6Data"
          />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_7" role="tabpanel">
          <Tab7Component
            :form-data="tab7Data"
            @update:formData="updateTab7Data"
          />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_8" role="tabpanel">
          <Tab8Component
            :form-data="tab8Data"
            @update:formData="updateTab8Data"
          />
        </div>
      </div>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted, computed, watch } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import { useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";

import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import TableCard from "@/components/customers/cards/overview/TableCard.vue";
import Tab3Component from "@/views/before-project/client-info/demand/DemandTab/Tab3Component.vue";
import Tab4Component from "@/views/before-project/client-info/demand/DemandTab/Tab4Component.vue";
import Tab5Component from "@/views/before-project/client-info/demand/DemandTab/Tab5Component.vue";
import Tab6Component from "@/views/before-project/client-info/demand/DemandTab/Tab6Component.vue";
import Tab7Component from "@/views/before-project/client-info/demand/DemandTab/Tab7Component.vue";
import Tab8Component from "@/views/before-project/client-info/demand/DemandTab/Tab8Component.vue";

import type { ClientDetailsSuccessData, Housing } from "@/utils/share";
import type { Case } from "@/components/modals/general/SelectCaseModal.vue";
import {
  getSequence,
  getGenderLabel,
  getAgeLabel,
  getSpecialDemandLabel,
} from "@/utils/function";

interface DemandForm {
  contactDate: string;
}

export default {
  name: "bj-demand-add",
  components: {
    InfoCard,
    TableCard,
    Tab3Component,
    Tab4Component,
    Tab5Component,
    Tab6Component,
    Tab7Component,
    Tab8Component,
  },
  setup() {
    const authStore = useAuthStore();
    const useId = useIdStore();
    const router = useRouter();

    const housingData = ref<Housing[] | null>(null);
    const formRef = ref<null | HTMLFormElement>(null);
    const formItems = ref<any[]>([]);
    const projectID = ref(null);
    const loading = ref<boolean>(false);

    const caseData = ref<Case | null>(null);
    caseData.value = useId.selectedCase;

    const targetData = ref<DemandForm>({
      contactDate: "",
    });

    // 建立頁籤
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

    // 頁籤1 客戶資訊欄位
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

    // 頁籤2 居住成員欄位
    const tab2HeaderData = ref([
      { label: "編號", field: "Sequence" },
      { label: "性別", field: "Sex" },
      { label: "年齡", field: "Age" },
      { label: "特殊需求", field: "SpecialDemand" },
      { label: "備註", field: "Remark" },
    ]);
    const apiData2 = ref<Housing[]>([]);

    // 頁籤3 初始化
    const tab3Data = ref({});
    const updateTab3Data = (newData) => {
      tab3Data.value = newData;
    };

    // 頁籤4 初始化
    const tab4Data = ref({});
    const updateTab4Data = (newData) => {
      tab4Data.value = newData;
    };

    // 頁籤5 初始化
    const tab5Data = ref([]);
    const updateTab5Data = (newData) => {
      tab5Data.value = newData;
      // 這裡可以進行進一步的處理，例如表單驗證
    };

    // 頁籤6 初始化
    const tab6Data = ref({});
    const updateTab6Data = (newData) => {
      tab6Data.value = newData;
    };

    // 頁籤7 初始化
    const tab7Data = ref({});
    const updateTab7Data = (newData) => {
      tab7Data.value = newData;
    };

    // 頁籤8 初始化
    const tab8Data = ref({});
    const updateTab8Data = (newData) => {
      tab8Data.value = newData;
    };

    // 取得案件資料
    async function fetchData() {
      try {
        // 先依據取得的案件編號撈取案件細節的客戶編號
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (caseData.value?.ProjectID) {
          formData.append("projectID", caseData.value?.ProjectID);
        }

        const response = await ApiService.post(
          "/projectBefore/getProjectInfo",
          formData
        );
        // 綁定案件編號
        projectID.value = response.data.success.ProjectInfo.ProjectID;
        // 從案件資料中提取客戶編號
        const customerID = response.data.success.ProjectInfo.ProjectCustomerID;
        console.log(customerID);

        // 呼叫取得客戶資料函數
        fetchCustomerData(customerID);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // 取得客戶資料
    async function fetchCustomerData(customerID) {
      try {
        // 從案件資料中提取客戶編號
        if (!customerID) {
          console.error("客戶編號未找到");
          return;
        }

        // 構建請求參數
        const customerFormData = new FormData();
        customerFormData.append("orgId", authStore.user.orgId);
        customerFormData.append("account", authStore.user.account);
        customerFormData.append("token", authStore.user.token);
        customerFormData.append("customerID", customerID);

        // 發送請求以獲取客戶資料
        const customerResponse = await ApiService.post(
          "/projectBefore/getCustInfoByID",
          customerFormData
        );

        // 處理客戶資料
        const customerData = customerResponse.data
          .success as ClientDetailsSuccessData;
        console.log(customerData);

        // 將客戶資料保存到適當的變量中
        tab1tableData2.value[0].value = customerData.CustomerID;
        tab1tableData2.value[1].value = customerData.CustomerSource;
        tab1tableData2.value[2].value = customerData.Name;
        tab1tableData2.value[3].value = customerData.ServiceItem;
        tab1tableData2.value[4].value = customerData.Telephone;
        tab1tableData2.value[5].value = customerData.Mobile;
        tab1tableData2.value[6].value = customerData.ContactAddress;
        tab1tableData2.value[7].value = customerData.Email;

        // 獲取 Housing 數據
        const housingDataArray = customerData.Housing as Housing[];
        const processedHousingData = housingDataArray.map((housing) => ({
          ...housing,
          Sequence: getSequence(housing.Sequence),
          Sex: getGenderLabel(housing.Sex),
          Age: getAgeLabel(housing.Age),
          SpecialDemand: getSpecialDemandLabel(housing.SpecialDemand),
        }));

        housingData.value = processedHousingData;
        apiData2.value = housingData.value;
      } catch (error) {
        console.error("獲取客戶資料時出錯: ", error);
      }
    }

    // 表單驗證
    const rules = ref({
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
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;

          const requestData = {
            orgId: authStore.user.orgId,
            account: authStore.user.account,
            token: authStore.user.token,
            projectID: projectID.value,
            contactDate: targetData.value.contactDate,
            housingData: tab3Data.value.housingData,
            housingAge: tab3Data.value.housingAge,
            buildingCategory: tab3Data.value.buildingCategory,
            isElevator: tab3Data.value.isElevator,
            elevator: tab3Data.value.elevator,
            totalPin: tab3Data.value.totalPin,
            format: tab3Data.value.format,

            renovationRequest: tab4Data.value.areas,
            style: tab5Data.value,
            security: tab6Data.value,
            totalBudget: tab7Data.value.budget,
            budget: tab7Data.value,
            ref: tab8Data.value,
            // ... 其他字段和標籤
          };
          console.log(requestData);

          console.log(tab4Data.value.areas);
          ApiService.post("/projectBefore/addRequirement", requestData)
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
                }).then(() => {
                  router.push({
                    name: "bj-demand-list",
                  });
                });
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
              console.error("API 請求錯誤：", error);
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
      fetchData();
    });

    return {
      getAssetPath,
      setActiveTab,
      tabs,
      activeTab,
      formItems,

      tab1tableData2,
      tab2HeaderData,
      apiData2,
      projectID,
      tab3Data,
      updateTab3Data,
      tab4Data,
      updateTab4Data,
      tab5Data,
      updateTab5Data,
      tab6Data,
      updateTab6Data,
      tab7Data,
      updateTab7Data,
      tab8Data,
      updateTab8Data,

      submit,
      targetData,
      loading,
      formRef,
      rules,
    };
  },
};
</script>
