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
              v-model="searchKeyword"
              type="text"
              name="keyword"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="關鍵字搜尋"
              @input="searchWithKeyword"
            />
          </div>

          <div class="position-relative d-flex align-items-center">
            <el-date-picker
              v-model="searchDate"
              type="daterange"
              name="searchDate"
              range-separator="-"
              start-placeholder="起始日"
              end-placeholder="結束日"
              size="large"
              @change="searchWithDate"
            />
          </div>
        </div>

        <div class="card-body pt-0">
          <Datatable
            :header="tableHeader"
            :data="allHousingData"
            :items-per-page="10"
            :items-per-page-dropdown-enabled="true"
            @on-sort="sort"
          >
            <template v-slot:ProjectID="{ row: housing }">
              <router-link
                :to="{
                  name: 'bj-housing-details',
                  params: { projectId: housing.ProjectID },
                }"
                class="text-gray-800 text-hover-primary"
              >
                {{ housing.ProjectID }}
              </router-link>
            </template>

            <template v-slot:ProjectName="{ row: housing }">
              <span>
                {{ housing.ProjectName }}
              </span>
            </template>

            <template v-slot:ProjectCategory="{ row: housing }">
              <span>
                {{ housing.ProjectCategory }}
              </span>
            </template>

            <template v-slot:RecorderDate="{ row: housing }">
              <span>
                {{
                  housing.RecorderDate
                    ? moment(housing.RecorderDate).format("YYYY-MM-DD")
                    : ""
                }}
              </span>
            </template>

            <template v-slot:Recorder="{ row: housing }">
              <span>{{ housing.Recorder }}</span>
            </template>

            <template v-slot:Action="{ row: housing }">
              <router-link
                :to="{
                  name: 'bj-housing-edit',
                  params: {
                    projectId: housing.ProjectID,
                  },
                }"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template>
          </Datatable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import moment from "moment";
import arraySort from "array-sort";
import { useHousingStore } from "@/stores/housing";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { debounce } from "@/utils/function";
import type { Sort } from "@/components/kt-datatable//table-partials/models";

const housingStore = useHousingStore();
const { allHousingData } = storeToRefs(housingStore);

housingStore.fetchAllHousingData();

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
    columnName: "",
    columnLabel: "Action",
    sortEnabled: false,
  },
]);
const searchKeyword = ref("");
const searchDate = ref([]);

const debouncedSearch = debounce(housingStore.searchHousingWithKeyword, 400);

function searchWithKeyword() {
  searchDate.value = [];
  debouncedSearch(searchKeyword.value);
}

function searchWithDate() {
  const startDate = moment(searchDate.value?.[0]).format("YYYY-MM-DD");
  const endDate = moment(searchDate.value?.[1]).format("YYYY-MM-DD");

  searchKeyword.value = "";
  housingStore.searchHousingWithDate(startDate, endDate);
}

// 解決使用 element plus 日期搜尋後，再點擊清除按鈕無法清除的問題
function resetDateSearch() {
  document
    .querySelector(".el-range__close-icon")
    ?.addEventListener("click", () => {
      searchDate.value = [];
      housingStore.fetchAllHousingData();
    });
}

function sort(sort: Sort) {
  const reverse: boolean = sort.order === "asc";

  if (sort.label) {
    arraySort(allHousingData.value, sort.label, { reverse });
  }
}

onMounted(() => {
  resetDateSearch();
});
</script>
