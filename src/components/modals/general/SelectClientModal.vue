<template>
  <div
    class="modal fade"
    id="modal_select_users"
    tabindex="-1"
    aria-hidden="true"
    ref="showModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header flex-wrap">
          <h3 class="modal-title">選擇客戶</h3>
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ki-duotone ki-cross fs-1"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </div>
          <div
            class="d-flex align-items-center position-relative my-1 w-100 mt-5"
          >
            <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
            <input
              type="text"
              data-kt-ecommerce-order-filter="search"
              class="form-control form-control-solid ps-12"
              placeholder="客戶編號、客戶名稱"
            />
          </div>
        </div>
        <div class="modal-body mh-400px">
          <div
            v-for="client in clients"
            :key="client.id"
            class="d-flex align-items-sm-center mb-7"
          >
            <div
              class="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2"
            >
              <div class="flex-grow-1 my-lg-0 my-2 me-2">
                <p class="text-gray-800 fw-bold fs-6 mb-0">
                  {{ client.Name }}, {{ client.ContactAddress }}
                </p>
                <span class="text-muted fw-semibold d-block pt-1">{{
                  client.CustomerID
                }}</span>
              </div>
              <div class="d-flex align-items-center">
                <!-- 點選"選擇"按鈕時調用selectClient方法 -->
                <button
                  @click="selectClient(client)"
                  type="button"
                  class="btn btn-primary"
                >
                  選擇
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted } from "vue";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { hideModal } from "@/core/helpers/dom";

export interface Customer {
  id: string;
  Name: string;
  ContactAddress: string;
  CustomerID: string;
  CustomerSource: string;
  ServiceItem: string;
  Telephone: string;
  Mobile: string;
  Email: string;

  // 添加其他属性的类型声明
}

export default defineComponent({
  name: "select-client-modal",
  components: {},
  setup(props, { emit }) {
    const clients = ref<Customer[]>([]);
    const selectedClient = ref(null);
    const showModal = ref<null | HTMLElement>(null);

    const authStore = useAuthStore();

    const selectClient = (client) => {
      selectedClient.value = client;
      // console.log(selectedClient);
      hideModal(showModal.value);
      emit("client-selected", client);
    };

    const fetchClients = async () => {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);

        const response = await ApiService.post(
          "/projectBefore/getCustomerList.php",
          formData
        );

        if (response.data.success) {
          console.log(response.data.success);
          clients.value = response.data.success.AllCustomer as Array<{
            id: string;
            Name: string;
            ContactAddress: string;
            CustomerID: string;
            CustomerSource: string;
            ServiceItem: string;
            Telephone: string;
            Mobile: string;
            Email: string;
          }>;
        } else {
          console.error("獲取客戶數據失敗，狀態碼：", response.status);
        }
      } catch (error) {
        console.error("API 請求錯誤：", error);
      }
    };

    onMounted(() => {
      fetchClients();
    });

    return {
      getAssetPath,
      clients,
      selectClient,
      selectedClient,
      showModal,
    };
  },
});
</script>
