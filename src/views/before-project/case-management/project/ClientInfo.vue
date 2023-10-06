<template>
  <div>
    <InfoCard :tableData="tableData1"></InfoCard>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ref, onMounted, watch } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";
import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";

import type { SuccessData } from "@/views/before-project/client-info/ClientDetails.vue";
import type { Housing } from "@/views/before-project/client-info/ClientDetails.vue";

export default defineComponent({
  name: "bj-case-c_info",
  components: {
    InfoCard,
  },
  setup() {
    const authStore = useAuthStore();
    const responseData = ref<null | Object>(null);
    const currentIdRef = ref<string | null>(null);
    const { currentId, setCurrentId } = useIdStore();

    // 初始化 currentIdRef 的值
    currentIdRef.value = currentId;

    const tableData1 = ref([
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
        const response = await ApiService.post(
          "/projectBefore/getCustInfoByID",
          formData
        );
        responseData.value = response.data;

        const clientInfo = response.data.success as SuccessData;

        console.log(clientInfo);

        tableData1.value[0].value = clientInfo.CustomerID;
        tableData1.value[1].value = clientInfo.CustomerSource;
        tableData1.value[2].value = clientInfo.Name;
        tableData1.value[3].value = clientInfo.ServiceItem;
        tableData1.value[4].value = clientInfo.Telephone;
        tableData1.value[5].value = clientInfo.Mobile;
        tableData1.value[6].value = clientInfo.ContactAddress;
        tableData1.value[7].value = clientInfo.Email;
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    }

    watch(currentIdRef, (newId, oldId) => {
      fetchData();
    });

    onMounted(() => {
      fetchData();
      // console.log(currentId);
    });

    return {
      tableData1,
      getAssetPath,
    };
  },
});
</script>
