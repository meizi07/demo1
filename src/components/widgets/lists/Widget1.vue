<template>
  <!--begin::List Widget 1-->
  <div class="card" :class="widgetClasses">
    <div class="card-body py-9">
      <template v-for="(item, index) in items" :key="index">
        <div
          :class="{ 'mb-7': items.length - 1 !== index }"
          class="d-flex align-items-center text-hover-primary py-5"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-50px symbol-circle me-5">
            <span :class="`bg-light`" class="symbol-label">
              <KTIcon
                :icon-name="`message-text-2`"
                :icon-class="`text-gray-500 fs-2x`"
              />
            </span>
          </div>
          <!--end::Symbol-->

          <!--begin::Text-->
          <div class="d-flex flex-column">
            <a
              href="#"
              class="text-dark text-hover-primary fs-5 fw-semibol mb-2"
              >{{ item.message }}</a
            >

            <span class="text-muted me-2 fs-7">{{ item.time }}</span>
          </div>
          <!--end::Text-->
        </div>
      </template>
    </div>
  </div>
  <!--end::List Widget 1-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-1",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const items = [
      {
        message:
          "提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "2022-11-15 16:22",
      },
    ];

    return {
      items,
      getAssetPath,
    };
  },
});
</script>
