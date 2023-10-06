<template>
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
                  <th>分類</th>
                  <th>年齡</th>
                  <th>人數</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody class="fw-semibold text-gray-800">
                <tr
                  v-for="(housing, housingIndex) in housingData"
                  :key="housingIndex"
                >
                  <td>{{ housingIndex + 1 }}.</td>
                  <td>{{ housing.Category }}</td>
                  <td>{{ housing.Age }}</td>
                  <td>{{ housing.NumberOfPeople }}</td>
                  <td>{{ housing.Remark }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";
import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";

export interface SuccessData {
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
  Category: string;
  Age: number;
  NumberOfPeople: number;
  Remark: string;
}

export default {
  components: { InfoCard },
  name: "bj-client-details",
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);
    const currentIdRef = ref<string | null>(null);
    const housingData = ref<Housing[] | null>(null);
    const { currentId } = useIdStore();

    currentIdRef.value = currentId;

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

    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (currentIdRef.value) {
          formData.append("customerID", currentIdRef.value);
        }

        console.log(currentIdRef.value);

        const response = await ApiService.post(
          "/projectBefore/getCustInfoByID",
          formData
        );

        responseData.value = response.data;

        const successData = response.data.success as SuccessData; // 获取成功数据中的第一个对象
        console.log(successData);

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
        housingData.value = housingDataArray;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    watch(currentIdRef, () => {
      fetchData();
    });
    onMounted(() => {
      fetchData();
    });
    return {
      currentId,
      tableData1,
      tableData2,
      housingData,
    };
  },
};
</script>
