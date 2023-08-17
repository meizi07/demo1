<template>
  <!--begin::List Widget 2-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 d-flex flex-column pt-5 min-h-50px">
      <h2 class="card-title align-items-start flex-column">
        <span class="fw-bold text-dark">留言板</span>
      </h2>

      <!--begin::Menu-->
      <div class="card-title w-100 pt-2">
        <ul
          class="nav nav-stretch fs-5 fw-semobold nav-line-tabs nav-line-tabs-4x border-gray flex-fill"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              class="nav-link text-active-primary active px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_tab_pane_1"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-1">
                最新留言</span
              ></a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link text-active-primary px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_tab_pane_2"
              ><span class="nav-text text-gray-800 fw-bold fs-6 mb-1">
                最新回覆</span
              ></a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link text-active-primary px-5 m-0"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_tab_pane_3"
              ><span class="nav-text text-gray-800 fw-bold fs-6 mb-1">
                客訴消息</span
              ></a
            >
          </li>
          <span
            class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
          ></span>
        </ul>
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="tab-content" id="myTabContent">
      <div
        class="py-2 tab-pane fade active show"
        id="kt_tab_pane_1"
        role="tabpanel"
      >
        <div class="card-body pt-2 scroll-y mh-600px">
          <template v-for="(item, index) in list" :key="index">
            <!--begin::Item-->
            <div
              :class="{ 'mb-7': list.length - 1 !== index }"
              class="d-flex align-items-center"
            >
              <!--begin::Avatar-->
              <div class="symbol symbol-50px me-5">
                <img :src="item.avatar" class="" alt="" />
              </div>
              <!--end::Avatar-->

              <!--begin::Text-->
              <div class="d-flex flex-column flex-row-fluid">
                <div class="d-flex align-items-center flex-wrap mb-0">
                  <p class="text-gray-800 text-hover-primary fw-bold mb-0">
                    {{ item.name }}
                  </p>
                  <span class="ms-auto text-gray-400 fw-semibold fs-7">{{
                    item.date
                  }}</span>
                </div>
                <span class="text-gray-800 fs-7 fw-normal pt-1">{{
                  item.description
                }}</span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </div>
      </div>
      <div class="py-0 tab-pane fade show" id="kt_tab_pane_2" role="tabpanel">
        <div class="card-body pt-2 scroll-y mh-600px">
          <template v-for="(item, index) in list" :key="index">
            <!--begin::Item-->
            <div
              :class="{ 'mb-7': list.length - 1 !== index }"
              class="d-flex align-items-center"
            >
              <!--begin::Avatar-->
              <div class="symbol symbol-50px me-5">
                <img :src="item.avatar" class="" alt="" />
              </div>
              <!--end::Avatar-->

              <!--begin::Text-->
              <div class="d-flex flex-column flex-row-fluid">
                <div class="d-flex align-items-center flex-wrap mb-0">
                  <p class="text-gray-800 text-hover-primary fw-bold mb-0">
                    {{ item.name }}
                  </p>
                  <span class="ms-auto text-gray-400 fw-semibold fs-7">{{
                    item.date
                  }}</span>
                </div>
                <span class="text-gray-800 fs-7 fw-normal pt-1">{{
                  item.description
                }}</span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </div>
      </div>
      <div class="py-0 tab-pane fade show" id="kt_tab_pane_3" role="tabpanel">
        <div class="card-body pt-2 scroll-y mh-600px">
          <template v-for="(item, index) in list" :key="index">
            <!--begin::Item-->
            <div
              :class="{ 'mb-7': list.length - 1 !== index }"
              class="d-flex align-items-center"
            >
              <!--begin::Avatar-->
              <div class="symbol symbol-50px me-5">
                <img :src="item.avatar" class="" alt="" />
              </div>
              <!--end::Avatar-->

              <!--begin::Text-->
              <div class="d-flex flex-column flex-row-fluid">
                <div class="d-flex align-items-center flex-wrap mb-0">
                  <p class="text-gray-800 text-hover-primary fw-bold mb-0">
                    {{ item.name }}
                  </p>
                  <span class="ms-auto text-gray-400 fw-semibold fs-7">{{
                    item.date
                  }}</span>
                </div>
                <span class="text-gray-800 fs-7 fw-normal pt-1">{{
                  item.description
                }}</span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </div>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 2-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-2",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        avatar: getAssetPath("media/avatars/300-6.jpg"),
        name: "Emma Smith",
        description: "Project Manager",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-5.jpg"),
        name: "Sean Bean",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-11.jpg"),
        name: "Brian Cox",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-9.jpg"),
        name: "Francis Mitcham",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-23.jpg"),
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-23.jpg"),
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-23.jpg"),
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-23.jpg"),
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-23.jpg"),
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
      {
        avatar: getAssetPath("media/avatars/300-23.jpg"),
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
        date: "2022-10-25 11:05",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
