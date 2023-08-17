<template>
  <div class="card-body p-0" :class="widgetClasses">
    <div class="card card-dashed flex-center p-6">
      <span class="fs-4 fw-semibold text-dark pb-1 px-2">{{ title }}</span>
      <span class="fs-lg-2tx fw-bold d-flex justify-content-center"
        ><span
          data-kt-countup="true"
          :data-kt-countup-value="`${description}`"
          >{{ description }}</span
        ></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-7",
  props: {
    title: String,
    description: String,
    widgetClasses: String,
  },
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
