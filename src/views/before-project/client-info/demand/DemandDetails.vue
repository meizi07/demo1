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
              :href="'#demand_tab_pane_' + (tabIndex + 1)"
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
          <span
            class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
          ></span>
        </ul>
      </div>
    </div>
    <div class="tab-content" id="clientDetails">
      <div
        class="tab-pane fade show active"
        id="demand_tab_pane_1"
        role="tabpanel"
      >
        <InfoCard :tableData="tab1tableData1"></InfoCard>
        <InfoCard :tableData="tab1tableData2"></InfoCard>
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_2" role="tabpanel">
        <TableCard :tableHeaders="tab2HeaderData" :tableData="apiData2" />
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_3" role="tabpanel">
        <InfoCard :tableData="tab3tableData"></InfoCard>
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_4" role="tabpanel">
        <TableCard :tableHeaders="tab4HeaderData" :tableData="apiData4" />
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_5" role="tabpanel">
        <TableCard :tableHeaders="tab5HeaderData" :tableData="apiData5" />
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_6" role="tabpanel">
        <TableCard :tableHeaders="tab6HeaderData" :tableData="apiData6" />
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_7" role="tabpanel">
        <TableCard :tableHeaders="tab7HeaderData" :tableData="apiData7" />
      </div>
      <div class="tab-pane fade show" id="demand_tab_pane_8" role="tabpanel">
        <TableCard :tableHeaders="tab8HeaderData" :tableData="apiData8" />
      </div>
    </div>
  </div>
  <ChangeRecords :data="clientRecords" />
</template>

<script lang="ts">
import { ref, onMounted, watch } from "vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";
import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import TableCard from "@/components/customers/cards/overview/TableCard.vue";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";
import ChangeRecords from "@/layouts/main-layout/extras/ChangeRecords.vue";

export interface SuccessData {
  Customer: {
    RequirementID: string;
    ProjectID: string;
    ContactDate: string;
    CustomerID: string;
    CustomerSource: string;
    CustomerName: string;
    ServiceItem: string;
    Tel: string;
    Mobile: string;
    ContactAddress: string;
    Email: string;
  };
  HousingMember: any[]; // 此处类型未提供
  HousingData: {
    HousingData: string;
    HousingAge: string;
    BuildingCategory: string;
    IsElevator: string;
    Elevator: string;
    TotalPin: string;
    Format: string;
    ObjectAddress: string;
  };
  HousingRequirement: any[]; // 此处类型未提供
  Style: any[];
  Security: {
    UUID: string;
    Sequence: string;
    Material: string;
    Purpose: string;
    Remark: string;
  }[];
  Budget: number;
  BudgetDetail: {
    UUID: string;
    Sequence: string;
    Category: string;
    SquareMeters: string;
    SquareMetersPrice: number;
    EstimatedValue: number;
    Remark: string;
  }[];
  Ref: {
    UUID: string;
    Sequence: string;
    Category: string;
    FileName: string;
    Attachment: string;
    Description: string;
    UploadDate: string;
    Uploader: string;
  }[];
}

export interface Style {
  Material: string;
  Purpose: string;
  Remark: string;
  Sequence: string;
  UUID: string;
}

export default {
  components: { InfoCard, TableCard, ChangeRecords },
  name: "bj-demand-details",
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);
    const currentIdRef = ref<string | null>(null);
    const route = useRoute();
    const id: string | string[] = route.params.requirementId;

    const { currentId } = useIdStore();

    currentIdRef.value = currentId;

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

    // 初始化 異動紀錄
    const clientRecords = ref([]);
    const openDrawer = () => {
      DrawerComponent?.getInstance("drawer_changeRecords")?.toggle();
    };

    const tab1tableData1 = ref([
      { label: "需求單單號", value: "" },
      { label: "案件編號", value: "" },
      { label: "訪談日期", value: "" },
    ]);
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
    const tab3tableData = ref([
      { label: "房屋資料", value: "" },
      { label: "屋齡(年)", value: "" },
      { label: "大樓/透天", value: "" },
      { label: "是否有電梯", value: "" },
      { label: "電梯大小", value: "" },
      { label: "室內總坪數", value: "" },
      { label: "格局", value: "" },
      { label: "物件地址", value: "" },
    ]);

    const tab4HeaderData = ref([
      { label: "編號", field: "Sequence" },
      { label: "區域", field: "Material" },
    ]);
    const apiData4 = ref([]);

    const tab5HeaderData = ref([
      { label: "編號", field: "Sequence" },
      { label: "材質", field: "Material" },
      { label: "用途", field: "Purpose" },
      { label: "補充說明", field: "Remark" },
    ]);
    const apiData5 = ref([]);

    const tab6HeaderData = ref([
      { label: "編號", field: "Sequence" },
      { label: "材質", field: "Material" },
      { label: "用途", field: "Purpose" },
      { label: "補充說明", field: "Remark" },
    ]);
    const apiData6 = ref([]);

    const tab7HeaderData = ref([
      { label: "類別", field: "Category" },
      { label: "室內坪數", field: "SquareMeters" },
      { label: "每坪單價", field: "SquareMetersPrice" },
      { label: "預估參考值", field: "EstimatedValue" },
      { label: "補充說明", field: "Remark" },
    ]);
    const apiData7 = ref([]);

    const tab8HeaderData = ref([
      { label: "檔案類型", field: "Category" },
      { label: "檔案名稱", field: "FileName" },
      { label: "附件", field: "Attachment" },
      { label: "說明", field: "Description" },
      { label: "檔案上傳日期", field: "UploadDate" },
      { label: "檔案上傳者", field: "Uploader" },
    ]);
    const apiData8 = ref([]);

    const tableData = ref([]);

    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (typeof id === "string") {
          formData.append("requirementID", id);
        }

        const response = await ApiService.post(
          "/projectBefore/getRequirementData",
          formData
        );

        responseData.value = response.data;

        const successData = response.data.success as SuccessData; // 获取成功数据中的第一个对象
        console.log(successData);

        // 更新 tab1tableData1
        tab1tableData1.value[0].value = successData.Customer.RequirementID;
        tab1tableData1.value[1].value = successData.Customer.ProjectID;
        tab1tableData1.value[2].value = successData.Customer.ContactDate;

        // 更新 tab1tableData2
        tab1tableData2.value[0].value = successData.Customer.CustomerID;
        tab1tableData2.value[1].value = successData.Customer.CustomerSource;
        tab1tableData2.value[2].value = successData.Customer.CustomerName;
        tab1tableData2.value[3].value = successData.Customer.ServiceItem;
        tab1tableData2.value[4].value = successData.Customer.Tel;
        tab1tableData2.value[5].value = successData.Customer.Mobile;
        tab1tableData2.value[6].value = successData.Customer.ContactAddress;
        tab1tableData2.value[7].value = successData.Customer.Email;

        apiData2.value = response.data.success.HousingMember;

        // 更新 tab3tableData
        tab3tableData.value[0].value = successData.HousingData.HousingData;
        tab3tableData.value[1].value = successData.HousingData.HousingAge;
        tab3tableData.value[2].value = successData.HousingData.BuildingCategory;
        tab3tableData.value[3].value = successData.HousingData.IsElevator;
        tab3tableData.value[4].value = successData.HousingData.Elevator;
        tab3tableData.value[5].value = successData.HousingData.TotalPin;
        tab3tableData.value[6].value = successData.HousingData.Format;
        tab3tableData.value[7].value = successData.HousingData.ObjectAddress;

        apiData4.value = response.data.success.HousingRequirement;
        apiData5.value = response.data.success.Style;
        apiData6.value = response.data.success.Security;
        apiData7.value = response.data.success.BudgetDetail;
        apiData8.value = response.data.success.Ref;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchRecordsData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (currentIdRef.value) {
          formData.append("customerID", currentIdRef.value);
        }
        const response = await ApiService.post(
          "/projectBefore/getCustomerRecordList",
          formData
        );
        clientRecords.value = response.data.success; // 將 API 數據賦值給 ref
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    }

    watch(currentIdRef, () => {
      fetchData();
    });
    onMounted(() => {
      fetchData();
      fetchRecordsData();
    });
    return {
      openDrawer,
      setActiveTab,
      tabs,
      activeTab,
      currentId,
      tab1tableData1,
      tab1tableData2,
      tab2HeaderData,
      apiData2,
      tab3tableData,
      tab4HeaderData,
      apiData4,
      tab5HeaderData,
      apiData5,
      tab6HeaderData,
      apiData6,
      tab7HeaderData,
      apiData7,
      tab8HeaderData,
      apiData8,
      tableData,
      clientRecords,
    };
  },
};
</script>
