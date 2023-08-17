<template>
  <!--begin::List Widget 3-->
  <div class="card h-lg-100" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title fw-bold text-dark">待辦事項</h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <!-- <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown2></Dropdown2> -->
        <router-link to="/todo-list" class="btn btn-sm btn-light"
          >查看全部</router-link
        >
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-2 scroll-y mh-400px h-lg-100">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-8': list.length - 1 !== index }"
          class="d-flex align-items-center"
        >
          <!--begin::Bullet-->
          <span
            class="bullet bullet-vertical h-40px"
            :class="`bg-${item.color}`"
          ></span>
          <!--end::Bullet-->

          <!--begin::Checkbox-->
          <div class="form-check form-check-custom form-check-solid mx-5">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
          <!--end::Checkbox-->

          <!--begin::Description-->
          <div class="flex-grow-1">
            <a href="#" class="text-gray-800 text-hover-primary fw-bold fs-6">{{
              item.title
            }}</a>

            <span class="text-muted fw-semobold d-block">{{ item.text }}</span>
          </div>
          <!--end::Description-->

          <span class="badge fs-8 fw-bold" :class="`badge-light-${item.color}`"
            >New</span
          >
        </div>
        <!--end:Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end:List Widget 3-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-3",
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        color: "primary",
        title: "Create FireStone Logo",
        text: "Due in 2 Days",
      },
      {
        color: "primary",
        title: "Stakeholder Meeting",
        text: "Due in 3 Days",
      },
      {
        color: "primary",
        title: "Scoping & Estimations",
        text: "Due in 5 Days",
      },
      {
        color: "primary",
        title: "KPI App Showcase",
        text: "Due in 2 Days",
      },
      {
        color: "primary",
        title: "Project Meeting",
        text: "Due in 12 Days",
      },
      {
        color: "primary",
        title: "Customers Update",
        text: "Due in 1 week",
      },
      {
        color: "primary",
        title: "Customers Update",
        text: "Due in 1 week",
      },
      {
        color: "primary",
        title: "Customers Update",
        text: "Due in 1 week",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
