<template>
  <!--begin::Card-->
  <div :class="`card pt-2 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0 flex-column p-10 pb-0">
      <!--begin::Card title-->
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
              href="#kt_customer_details_invoices_1"
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
              href="#kt_customer_details_invoices_2"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1"
                >待簽收</span
              >
            </a>
          </li>
          <span
            class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
          ></span>
        </ul>
        <!--end::Tab nav-->
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->
    <!--begin::Tab Content-->
    <div id="kt_referred_users_tab_content" class="tab-content">
      <div
        id="kt_customer_details_invoices_1"
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
            <template v-slot:order="{ row: invoice }">
              <router-link to="/" class="text-gray-800 text-hover-primary">
                {{ invoice.order }}
              </router-link>
            </template>
            <template v-slot:ordertype="{ row: invoice }">
              <span>
                {{ invoice.ordertype }}
              </span>
            </template>
            <template v-slot:caseorder="{ row: invoice }">
              <span>
                {{ invoice.caseorder }}
              </span>
            </template>
            <template v-slot:casetype="{ row: invoice }">
              <span>
                {{ invoice.casetype }}
              </span>
            </template>
            <template v-slot:status="{ row: invoice }">
              <span :class="`badge badge-light-${invoice.status.state}`">{{
                invoice.status.label
              }}</span>
            </template>
            <template v-slot:countdown="{ row: invoice }">
              {{ invoice.countdown }}
            </template>
            <template v-slot:mailing_date="{ row: invoice }">
              {{ invoice.mailing_date }}
            </template>
            <template v-slot:sender="{ row: invoice }">
              {{ invoice.sender }}
            </template>
            <template v-slot:received_date="{ row: invoice }">
              {{ invoice.received_date }}
            </template>
            <template v-slot:recipient="{ row: invoice }">
              {{ invoice.recipient }}
            </template>
            <template v-slot:action>
              <router-link
                to="/"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template>
          </Datatable>
        </div>
      </div>
      <div
        id="kt_customer_details_invoices_2"
        class="py-0 tab-pane fade"
        role="tabpanel"
      >
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
          <Datatable
            :header="tableHeader"
            :data="tableData2"
            :items-per-page-dropdown-enabled="true"
          >
            <template v-slot:order="{ row: invoice }">
              <router-link to="/" class="text-gray-800 text-hover-primary">
                {{ invoice.order }}
              </router-link>
            </template>
            <template v-slot:ordertype="{ row: invoice }">
              <span>
                {{ invoice.ordertype }}
              </span>
            </template>
            <template v-slot:caseorder="{ row: invoice }">
              <span>
                {{ invoice.caseorder }}
              </span>
            </template>
            <template v-slot:casetype="{ row: invoice }">
              <span>
                {{ invoice.casetype }}
              </span>
            </template>
            <template v-slot:status="{ row: invoice }">
              <span :class="`badge badge-light-${invoice.status.state}`">{{
                invoice.status.label
              }}</span>
            </template>
            <template v-slot:countdown="{ row: invoice }">
              {{ invoice.countdown }}
            </template>
            <template v-slot:mailing_date="{ row: invoice }">
              {{ invoice.mailing_date }}
            </template>
            <template v-slot:sender="{ row: invoice }">
              {{ invoice.sender }}
            </template>
            <template v-slot:received_date="{ row: invoice }">
              {{ invoice.received_date }}
            </template>
            <template v-slot:recipient="{ row: invoice }">
              {{ invoice.recipient }}
            </template>
            <template v-slot:action>
              <router-link
                to="/"
                class="btn btn-icon btn-active-color-primary btn-sm me-1"
              >
                <KTIcon icon-name="pencil" icon-class="fs-3" />
              </router-link>
            </template>
          </Datatable>
        </div>
      </div>
    </div>
    <!--end::Tab Content-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";

export default defineComponent({
  name: "invoices-card",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "單據編號",
        columnLabel: "order",
        sortEnabled: true,
      },
      {
        columnName: "單據類型",
        columnLabel: "ordertype",
        sortEnabled: true,
      },
      {
        columnName: "案件編號",
        columnLabel: "caseorder",
        sortEnabled: true,
      },
      {
        columnName: "案件類型",
        columnLabel: "casetype",
        sortEnabled: true,
      },
      {
        columnName: "案件狀態",
        columnLabel: "status",
        sortingField: "status.label",
        sortEnabled: true,
      },
      {
        columnName: "簽收期限",
        columnLabel: "countdown",
        sortEnabled: true,
      },
      {
        columnName: "送簽日期",
        columnLabel: "mailing_date",
        sortEnabled: true,
      },
      {
        columnName: "送籤者",
        columnLabel: "sender",
        sortEnabled: true,
      },
      {
        columnName: "簽收日期",
        columnLabel: "received_date",
        sortEnabled: true,
      },
      {
        columnName: "簽收人",
        columnLabel: "recipient",
        sortEnabled: true,
      },
      {
        columnName: "",
        columnLabel: "action",
        sortEnabled: false,
      },
    ]);
    const tableData1 = ref([
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230301",
        caseorder: "D20230301",
        details: "Darknight transparency  36 Icons Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230301",
        caseorder: "D20230301",
        details: "Darknight transparency  36 Icons Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230301",
        caseorder: "D20230301",
        details: "Darknight transparency  36 Icons Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230302",
        caseorder: "D20230301",
        details: "Seller Fee",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230303",
        caseorder: "D20230301",
        details: "Cartoon Mobile Emoji Phone Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230304",
        caseorder: "D20230301",
        details: "Iphone 12 Pro Mockup  Mega Bundle",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230305",
        caseorder: "D20230301",
        details: "Seller Fee",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230306",
        caseorder: "D20230301",
        details: "Parcel Shipping / Delivery Service App",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230307",
        caseorder: "D20230301",
        details: "Visual Design Illustration",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230308",
        caseorder: "D20230301",
        details: "Abstract Vusial Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "A20230309",
        caseorder: "D20230301",
        details: "Seller Fee",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "待簽收",
          state: "primary",
        },
        countdown: "28天",
      },
    ]);
    const tableData2 = ref([
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "523445943",
        caseorder: "D20230301",
        details: "Seller Fee",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "231445943",
        caseorder: "D20230301",
        details: "Parcel Shipping / Delivery Service App",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "426445943",
        caseorder: "D20230301",
        details: "Visual Design Illustration",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "984445943",
        caseorder: "D20230301",
        details: "Abstract Vusial Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "324442313",
        caseorder: "D20230301",
        details: "Seller Fee",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "102445788",
        caseorder: "D20230301",
        details: "Darknight transparency  36 Icons Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "423445721",
        caseorder: "D20230301",
        details: "Seller Fee",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "312445984",
        caseorder: "D20230301",
        details: "Cartoon Mobile Emoji Phone Pack",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
      {
        mailing_date: "2021-12-13",
        received_date: "2022-12-13",
        sender: "王筱婷",
        recipient: "林佳儀",
        order: "312445984",
        caseorder: "D20230301",
        details: "Iphone 12 Pro Mockup  Mega Bundle",
        ordertype: "合約",
        casetype: "設計",
        status: {
          label: "已簽收",
          state: "success",
        },
        countdown: "28天",
      },
    ]);
    return { tableHeader, tableData1, tableData2 };
  },
});
</script>
