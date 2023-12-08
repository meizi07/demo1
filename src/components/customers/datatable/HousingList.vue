<template>
  <div class="card pt-2">
    <div class="card-header border-0 flex-column p-10 pb-0">
      <div class="card-title w-100">
        <ul
          class="nav nav-stretch fs-5 fw-semobold nav-line-tabs nav-line-tabs-4x border-gray flex-fill"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              class="nav-link text-active-primary active px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#tab1"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1"
                >所有屋況紀錄</span
              >
            </a>
          </li>
          <span
            class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
          ></span>
        </ul>
      </div>
    </div>

    <div id="housing_index_tab_content" class="tab-content">
      <div id="tab1" class="py-0 tab-pane fade active show" role="tabpanel">
        <div
          class="card-toolbar m-0 p-7 d-flex justify-content-between border-gray-200 border-bottom"
        >
          <div class="d-flex align-items-center my-1">
            <KTIcon
              icon-name="magnifier"
              icon-class="fs-1 position-absolute ms-6"
            />
            <input
              type="text"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="關鍵字搜尋"
            />
          </div>
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
        <div class="card-body pt-0">
          <!-- <Datatable
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
            <template v-slot:ProjectCategory="{ row: All }">
              <span>
                {{ All.ProjectCategory }}
              </span>
            </template>
            <template v-slot:RecorderDate="{ row: All }">
              <span>
                {{ All.RecorderDate }}
              </span>
            </template>
            <template v-slot:Recorder="{ row: All }">
              <span>{{ All.Recorder }}</span>
            </template>
            <template v-slot:SigningDate="{ row: All }">
              {{ All.SigningDate }}
            </template>
            <template v-slot:Recipient="{ row: All }">
              {{ All.Recipient }}
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
          </Datatable> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";

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
    columnLabel: "ProjectCategory",
    sortEnabled: true,
  },
  {
    columnName: "紀錄日期",
    columnLabel: "RecorderDate",
    sortEnabled: true,
  },
  {
    columnName: "紀錄者",
    columnLabel: "Recorder",
    sortEnabled: true,
  },
  {
    columnName: "簽收日期",
    columnLabel: "SigningDate",
    sortEnabled: true,
  },
  {
    columnName: "簽收人",
    columnLabel: "Recipient",
    sortEnabled: true,
  },
  {
    columnName: "",
    columnLabel: "action",
    sortEnabled: false,
  },
]);
</script>
