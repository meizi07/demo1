<template>
  <div>
    <!-- 在此处加载客户的详细信息 -->
    <InfoCard :tableData="tableData1"></InfoCard>
    <InfoCard :tableData="tableData2"></InfoCard>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useUUIDStore } from "@/stores/useUUID";
import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import type { Ref } from "vue";

export default {
  components: { InfoCard },
  name: "bj-client-details",
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);
    const { currentUUID } = useUUIDStore();

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
        formData.append("UUID", currentUUID);

        const response = await ApiService.post(
          "/projectBefore/getCustInfoByUUID",
          formData
        );

        responseData.value = response.data;

        const successData = response.data.success[0]; // 获取成功数据中的第一个对象

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    onMounted(() => {
      fetchData();
      console.log(responseData);
    });
    return {
      currentUUID,
      tableData1,
      tableData2,
    };
  },
};
</script>
