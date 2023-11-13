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
          <li class="nav-item p-0">
            <a
              class="nav-link active d-flex justify-content-center w-100 border-0 h-100"
              data-bs-toggle="pill"
              href="#client_tab_pane_1"
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
              href="#client_tab_pane_2"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-3"
                >居住成員</span
              >
              <span
                class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"
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
        id="client_tab_pane_1"
        role="tabpanel"
      >
        <InfoCard :tableData="tableData1"></InfoCard>
        <InfoCard :tableData="tableData2"></InfoCard>
      </div>
      <div class="tab-pane fade show" id="client_tab_pane_2" role="tabpanel">
        <div class="card">
          <div class="card-body d-flex flex-column p-9">
            <table
              class="table align-middle table-row-bordered fs-6 gy-5"
              id="living_member_table"
            >
              <thead>
                <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
                  <th>編號</th>
                  <th>性別</th>
                  <th>年齡</th>
                  <th>特殊需求</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody class="fw-semibold text-gray-800">
                <tr
                  v-for="(housing, housingIndex) in housingData"
                  :key="housingIndex"
                >
                  <td>{{ housingIndex + 1 }}.</td>
                  <td>{{ housing.Sex }}</td>
                  <td>{{ housing.Age }}</td>
                  <td>{{ housing.SpecialDemand }}</td>
                  <td>{{ housing.Remark }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ChangeRecords :data="clientRecords" />
</template>

<script lang="ts">
import { ref, onMounted, watch } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";
import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";
import ChangeRecords from "@/layouts/main-layout/extras/ChangeRecords.vue";
import { formatDate } from "@/utils/function";

export interface ClientDetailsSuccessData {
  UUID: string;
  CustomerID: string;
  Name: string;
  ServiceItem: string;
  Telephone: string;
  Mobile: string;
  Email: string;
  ContactAddress: string;
  CustomerSource: string;
  FirstContactDate: string;
  Contactor: string;
  UpdateDate: string;
  Updater: string;
  Housing: Housing[]; // 如果有 Housing 数组，请确保定义它的类型
}

export interface Housing {
  Sex: string;
  Age: string;
  SpecialDemand: string;
  Remark: string;
}

export default {
  components: { InfoCard, ChangeRecords },
  name: "bj-client-details",
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);
    const currentIdRef = ref<string | null>(null);
    const housingData = ref<Housing[] | null>(null);
    const { currentId } = useIdStore();

    currentIdRef.value = currentId;

    // 初始化 異動紀錄
    const clientRecords = ref([]);
    const openDrawer = () => {
      DrawerComponent?.getInstance("drawer_changeRecords")?.toggle();
    };

    const tableData1 = ref([
      { label: "接洽窗口", value: "" },
      { label: "首次接洽日期", value: "" },
      { label: "資料更新日期", value: "" },
      { label: "更新人員", value: "" },
    ]);
    const tableData2 = ref([
      { label: "客戶編號", value: "" },
      { label: "客戶來源", value: "" },
      { label: "業主姓名", value: "" },
      { label: "服務項目", value: "" },
      { label: "連絡電話", value: "" },
      { label: "連絡手機", value: "" },
      { label: "聯絡地址", value: "" },
      { label: "聯絡信箱", value: "" },
    ]);

    // 處理性別值的函數
    function getGenderLabel(value: string) {
      const genderOptions = [
        { value: "0", label: "男" },
        { value: "1", label: "女" },
        { value: "2", label: "多元性别" },
      ];
      const selectedOption = genderOptions.find(
        (option) => option.value === value
      );
      return selectedOption ? selectedOption.label : value;
    }

    // 處理年齡值的函數
    function getAgeLabel(value: string) {
      const ageOptions = [
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
      ];
      const selectedOption = ageOptions.find(
        (option) => option.value === value
      );
      return selectedOption ? selectedOption.label : value;
    }

    // 處理特殊需求值的函數
    function getSpecialDemandLabel(value: string) {
      const specialDemandOptions = [
        { value: "0", label: "行動不便" },
        { value: "1", label: "寵物" },
        { value: "2", label: "無障礙" },
        { value: "3", label: "其他" },
      ];
      const selectedOption = specialDemandOptions.find(
        (option) => option.value === value
      );
      return selectedOption ? selectedOption.label : value;
    }

    // 格式化日期
    function formatDates(customer) {
      return {
        ...customer,
        FirstContactDate: formatDate(customer.FirstContactDate),
        UpdateDate: formatDate(customer.UpdateDate),
      };
    }

    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (currentIdRef.value) {
          formData.append("customerID", currentIdRef.value);
        }

        const response = await ApiService.post(
          "/projectBefore/getCustInfoByID",
          formData
        );

        responseData.value = response.data;

        const successData = response.data.success as ClientDetailsSuccessData; // 获取成功数据中的第一个对象

        console.log(successData);
        // const formattedAllCustomer = response.data.success.map(formatDates);
        

        // 更新 tableData1
        tableData1.value[0].value = successData.Contactor;
        tableData1.value[1].value = successData.FirstContactDate;
        tableData1.value[2].value = successData.UpdateDate;
        tableData1.value[3].value = successData.ServiceItem;

        // 更新 tableData2
        tableData2.value[0].value = successData.CustomerID;
        tableData2.value[1].value = successData.CustomerSource;
        tableData2.value[2].value = successData.Name;
        tableData2.value[3].value = successData.ServiceItem;
        tableData2.value[4].value = successData.Telephone;
        tableData2.value[5].value = successData.Mobile;
        tableData2.value[6].value = successData.ContactAddress;
        tableData2.value[7].value = successData.Email;

        // 獲取 Housing 數據
        const housingDataArray = successData.Housing as Housing[];
        const processedHousingData = housingDataArray.map((housing) => ({
          ...housing,
          Sex: getGenderLabel(housing.Sex),
          Age: getAgeLabel(housing.Age),
          SpecialDemand: getSpecialDemandLabel(housing.SpecialDemand),
        }));

        housingData.value = processedHousingData;
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
      currentId,
      tableData1,
      tableData2,
      housingData,
      clientRecords,
    };
  },
};
</script>
