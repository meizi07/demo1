<template>
  <div :class="`card pt-2 ${cardClasses}`">
    <div class="card-header border-0 flex-column p-10 pb-0">
      <div class="card-title w-100">
        <!--begin::Tab nav-->
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
              href="#tab1"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1"
                >所有案件</span
              >
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_2019_tab"
              class="nav-link text-active-primary px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#tab2"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1"
                >待收款</span
              >
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="kt_referrals_2019_tab"
              class="nav-link text-active-primary px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#tab3"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1"
                >待驗收</span
              >
            </a>
          </li>
          <span
            class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
          ></span>
        </ul>
        <!--end::Tab nav-->
      </div>
    </div>
    <!--begin::Tab Content-->
    <div id="kt_referred_users_tab_content" class="tab-content">
      <div id="tab1" class="py-0 tab-pane fade active show" role="tabpanel">
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
            <template v-slot:ProjectID="{ row: All }">
              <router-link
                :to="`/befort-project/case-management/case-details/${All.ProjectID}/p-info`"
                @click="storeCustomerId(All.ProjectID)"
                class="text-gray-800 text-hover-primary"
              >
                {{ All.ProjectID }}
              </router-link>
            </template>
            <template v-slot:ProjectName="{ row: All }">
              <span>
                {{ All.ProjectName }}
              </span>
            </template>
            <template v-slot:Category="{ row: All }">
              <span>
                {{ All.Category }}
              </span>
            </template>
            <template v-slot:Status="{ row: All }">
              <span>
                {{ All.Status }}
              </span>
            </template>
            <template v-slot:Stage="{ row: All }">
              <span>{{ All.Stage }}</span>
            </template>
            <template v-slot:PIC="{ row: All }">
              {{ All.PIC }}
            </template>
            <template v-slot:Progress="{ row: All }">
              <!-- {{ All.ProjectPercent }} -->
              <div
                class="d-flex align-items-center flex-wrap justify-content-center"
              >
                <div class="progress h-6px w-100">
                  <div
                    :class="`
                          progress-bar
                          bg-light-primary
                        `"
                    role="progressbar"
                    :style="`width: ${All.Progress}%`"
                    :aria-valuenow="All.Progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="">
                  <span class=""> {{ All.Progress }}% </span>
                </div>
              </div>
            </template>
            <template v-slot:EstStartDate="{ row: All }">
              {{ All.EstStartDate }}
            </template>
            <template v-slot:EstEndDate="{ row: All }">
              {{ All.EstEndDate }}
            </template>
            <template v-slot:RemainDays="{ row: All }">
              {{ All.RemainDays }}
            </template>
            <template v-slot:action="{ row: All }">
              <router-link
                :to="{
                  name: 'bj-case-edit',
                  params: {
                    projectId: All.ProjectID,
                  },
                }"
                @click="storeCustomerId(All.ProjectID)"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template>
          </Datatable>
        </div>
      </div>
      <div id="tab2" class="py-0 tab-pane fade" role="tabpanel">
        <!--begin::Toolbar-->
        <div
          class="card-toolbar m-0 p-7 d-flex justify-content-between d-flex justify-content-between border-gray-200 border-bottom"
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
          <!-- <Datatable
            :header="tableHeader"
            :data="tableData2"
            :items-per-page-dropdown-enabled="true"
          >
            <template v-slot:CustomerID="{ row: FollowUp }">
              <router-link
                :to="{
                  name: 'bj-client-details',
                  params: { customerId: FollowUp.CustomerID },
                }"
                class="text-gray-800 text-hover-primary"
              >
                {{ FollowUp.CustomerID }}
              </router-link>
            </template>
            <template v-slot:Name="{ row: FollowUp }">
              <span>
                {{ FollowUp.Name }}
              </span>
            </template>
            <template v-slot:Telephone="{ row: FollowUp }">
              <span>
                {{ FollowUp.Telephone }}
              </span>
            </template>
            <template v-slot:Mobile="{ row: FollowUp }">
              <span>
                {{ FollowUp.Mobile }}
              </span>
            </template>
            <template v-slot:ContactAddress="{ row: FollowUp }">
              <span>{{ FollowUp.ContactAddress }}</span>
            </template>
            <template v-slot:CustomerSource="{ row: FollowUp }">
              {{ FollowUp.CustomerSource }}
            </template>
            <template v-slot:Contactor="{ row: FollowUp }">
              {{ FollowUp.Contactor }}
            </template>
            <template v-slot:FirstContactDate="{ row: FollowUp }">
              {{ FollowUp.FirstContactDate }}
            </template>
            <template v-slot:UpdateDate="{ row: FollowUp }">
              {{ FollowUp.UpdateDate }}
            </template>
            <template v-slot:ServiceItem="{ row: FollowUp }">
              {{ FollowUp.ServiceItem }}
            </template>
            <template v-slot:action>
              <router-link
                to="/"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template>
          </Datatable> -->
        </div>
      </div>
      <div id="tab3" class="py-0 tab-pane fade" role="tabpanel">
        <!--begin::Toolbar-->
        <div
          class="card-toolbar m-0 p-7 d-flex justify-content-between d-flex justify-content-between border-gray-200 border-bottom"
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
          <!-- <Datatable
            :header="tableHeader"
            :data="tableData3"
            :items-per-page-dropdown-enabled="true"
          >
            <template v-slot:CustomerID="{ row: CloseCase }">
              <router-link
                :to="{
                  name: 'bj-client-details',
                  params: { customerId: CloseCase.CustomerID },
                }"
                class="text-gray-800 text-hover-primary"
              >
                {{ CloseCase.CustomerID }}
              </router-link>
            </template>
            <template v-slot:Name="{ row: CloseCase }">
              <span>
                {{ CloseCase.Name }}
              </span>
            </template>
            <template v-slot:Telephone="{ row: CloseCase }">
              <span>
                {{ CloseCase.Telephone }}
              </span>
            </template>
            <template v-slot:Mobile="{ row: CloseCase }">
              <span>
                {{ CloseCase.Mobile }}
              </span>
            </template>
            <template v-slot:ContactAddress="{ row: CloseCase }">
              <span>{{ CloseCase.ContactAddress }}</span>
            </template>
            <template v-slot:CustomerSource="{ row: CloseCase }">
              {{ CloseCase.CustomerSource }}
            </template>
            <template v-slot:Contactor="{ row: CloseCase }">
              {{ CloseCase.Contactor }}
            </template>
            <template v-slot:FirstContactDate="{ row: CloseCase }">
              {{ CloseCase.FirstContactDate }}
            </template>
            <template v-slot:UpdateDate="{ row: CloseCase }">
              {{ CloseCase.UpdateDate }}
            </template>
            <template v-slot:ServiceItem="{ row: CloseCase }">
              {{ CloseCase.ServiceItem }}
            </template>
            <template v-slot:action>
              <router-link
                to="/"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template>
          </Datatable> -->
        </div>
      </div>
    </div>
    <!--end::Tab Content-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useIdStore } from "@/stores/useId";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "ProjectList",
  props: {
    cardClasses: String,
    clientData: {
      type: Object as PropType<{
        success: {
          Statistics: any[];
          All: any[];
          FollowUp: any[];
          CloseCase: any[];
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
        columnName: "案件編號",
        columnLabel: "ProjectID",
        sortEnabled: true,
      },
      {
        columnName: "案件名稱",
        columnLabel: "ProjectName",
        sortEnabled: true,
      },
      {
        columnName: "案件類型",
        columnLabel: "Category",
        sortEnabled: true,
      },
      {
        columnName: "案件狀態",
        columnLabel: "Status",
        sortEnabled: true,
      },
      {
        columnName: "執行階段",
        columnLabel: "Stage",
        sortEnabled: true,
      },
      {
        columnName: "階段負責人",
        columnLabel: "PIC",
        sortEnabled: true,
      },
      {
        columnName: "案件進度",
        columnLabel: "Progress",
        sortEnabled: true,
      },
      {
        columnName: "開始日期",
        columnLabel: "EstStartDate",
        sortEnabled: true,
      },
      {
        columnName: "結束日期",
        columnLabel: "EstEndDate",
        sortEnabled: true,
      },
      {
        columnName: "剩餘天數",
        columnLabel: "RemainDays",
        sortEnabled: true,
      },
      {
        columnName: "",
        columnLabel: "action",
        sortEnabled: false,
      },
    ]);
    const tableData1 = ref([{}]);
    const tableData2 = ref([{}]);
    const tableData3 = ref([{}]);

    // 使用 watch 监听 clientData 的变化
    watchEffect(() => {
      if (props.clientData && props.clientData.success) {
        if (props.clientData.success.All) {
          tableData1.value = props.clientData.success.All;
        }
        if (props.clientData.success.FollowUp) {
          tableData2.value = props.clientData.success.FollowUp;
        }
        if (props.clientData.success.CloseCase) {
          tableData3.value = props.clientData.success.CloseCase;
        }
      }
    });
    function storeCustomerId(customerId: string) {
      setCurrentId(customerId);
    }
    return { tableHeader, tableData1, tableData2, tableData3, storeCustomerId };
  },
});
</script>
