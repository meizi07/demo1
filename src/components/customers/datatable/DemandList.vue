<template>
  <div :class="`card pt-2 ${cardClasses}`">
    <div class="card-header border-0 flex-column p-10 pb-0">
      <div class="card-title w-100">
        <ul
          class="nav nav-stretch fs-5 fw-semobold nav-line-tabs nav-line-tabs-4x border-gray flex-fill"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_year_tab"
              class="nav-link text-active-primary active px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#client_tab1"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1"
                >所有需求單</span
              >
            </a>
          </li>
          <span
            class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
          ></span>
        </ul>
      </div>
    </div>
    <div id="kt_referred_users_tab_content" class="tab-content">
      <div
        id="client_tab1"
        class="py-0 tab-pane fade active show"
        role="tabpanel"
      >
        <!--begin::Toolbar-->
        <div
          class="card-toolbar m-0 p-7 d-flex justify-content-between border-gray-200 border-bottom"
        >
          <!--begin::Search-->
          <div class="d-flex align-items-center my-1">
            <KTIcon
              icon-name="magnifier"
              icon-class="fs-1 position-absolute ms-6"
            />
            <!-- v-model="search"
              @input="searchItems()" -->
            <input
              type="text"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="關鍵字搜尋"
            />
          </div>
          <!--end::Search-->
          <div class="position-relative d-flex align-items-center">
            <i class="ki-duotone ki-calendar-8 position-absolute ms-4 mb-1 fs-2"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span
              ><span class="path5"></span><span class="path6"></span
            ></i>
            <input
              class="form-control form-control-solid rounded rounded-end-0 ps-12 w-250px client_date"
              placeholder="日期搜尋"
            />
            <button
              class="btn btn-icon btn-light"
              id="kt_ecommerce_sales_flatpickr_clear"
            >
              <i class="ki-duotone ki-cross fs-2">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </button>
          </div>
        </div>
        <!--end::Toolbar-->
        <div class="card-body pt-0">
          <!-- @on-sort="sort" -->
          <Datatable
            :header="tableHeader"
            :data="tableData1"
            :items-per-page-dropdown-enabled="true"
          >
            <template v-slot:RequirementID="{ row: AllRequirement }">
              <router-link
                :to="{
                  name: 'bj-demand-details',
                  params: {
                    requirementId: AllRequirement.RequirementID,
                  },
                }"
                class="text-gray-800 text-hover-primary"
                @click="storeRequirementId(AllRequirement.RequirementID)"
              >
                {{ AllRequirement.RequirementID }}
              </router-link>
              <!-- {{ AllRequirement.RequirementID }} -->
            </template>
            <template v-slot:ProjectID="{ row: AllRequirement }">
              <span>
                {{ AllRequirement.ProjectID }}
              </span>
            </template>
            <template v-slot:ContactDate="{ row: AllRequirement }">
              <span>
                {{ AllRequirement.ContactDate }}
              </span>
            </template>
            <template v-slot:Contactor="{ row: AllRequirement }">
              <span>
                {{ AllRequirement.Contactor }}
              </span>
            </template>
            <template v-slot:Status="{ row: AllRequirement }">
              <span>{{ AllRequirement.Status }}</span>
            </template>
            <template v-slot:Category="{ row: AllRequirement }">
              {{ AllRequirement.Category }}
            </template>
            <template v-slot:Name="{ row: AllRequirement }">
              {{ AllRequirement.Name }}
            </template>
            <template v-slot:Tel="{ row: AllRequirement }">
              {{ AllRequirement.Tel }}
            </template>
            <template v-slot:Address="{ row: AllRequirement }">
              {{ AllRequirement.Address }}
            </template>
            <template v-slot:RefCount="{ row: AllRequirement }">
              <i class="ki-duotone ki-paper-clip"></i>
              共{{ AllRequirement.RefCount }}個附件檔案
            </template>
            <!-- <template v-slot:action="{ row: AllRequirement }">
              <router-link
                :to="{
                  name: 'bj-client-edit',
                  params: {
                    customerId: AllRequirement.CustomerID,
                  },
                }"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template> -->
          </Datatable>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useIdStore } from "@/stores/useId";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "DemandList",
  props: {
    cardClasses: String,
    requirementData: {
      type: Object as PropType<{
        success: {
          Statistics: any[];
          AllRequirement: any[];
        };
      }>,
      required: true,
    },
  },
  components: {
    Datatable,
  },
  setup(props) {
    const { currentId, setCurrentId } = useIdStore();
    const tableHeader = ref([
      {
        columnName: "需求單號",
        columnLabel: "RequirementID",
        sortEnabled: true,
      },
      {
        columnName: "案件編號",
        columnLabel: "ProjectID",
        sortEnabled: true,
      },
      {
        columnName: "訪談日期",
        columnLabel: "ContactDate",
        sortEnabled: true,
      },
      {
        columnName: "接洽窗口",
        columnLabel: "Contactor",
        sortEnabled: true,
      },
      {
        columnName: "執行階段",
        columnLabel: "Status",
        sortEnabled: true,
      },
      {
        columnName: "案件分類",
        columnLabel: "Category",
        sortEnabled: true,
      },
      {
        columnName: "業主姓名",
        columnLabel: "Name",
        sortEnabled: true,
      },
      {
        columnName: "聯絡電話",
        columnLabel: "Tel",
        sortEnabled: true,
      },
      {
        columnName: "物件地址",
        columnLabel: "Address",
        sortEnabled: true,
      },
      {
        columnName: "附件",
        columnLabel: "RefCount",
        sortEnabled: true,
      },
      // {
      //   columnName: "",
      //   columnLabel: "action",
      //   sortEnabled: false,
      // },
    ]);
    const tableData1 = ref([{}]);

    // 使用 watch 监听 clientData 的变化
    watchEffect(() => {
      if (props.requirementData && props.requirementData.success) {
        if (props.requirementData.success.AllRequirement) {
          tableData1.value = props.requirementData.success.AllRequirement;
        }
      }
    });

    function storeRequirementId(requirementId: string) {
      setCurrentId(requirementId);
    }
    return { tableHeader, tableData1, storeRequirementId };
  },
});
</script>
