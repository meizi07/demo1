<template>
  <div class="timeline-item d-flex p-9">
    <a href="javascript:;" class="d-flex text-gray-800 text-hover-primary">
      <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
          <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></i>
        </div>
      </div>
      <div class="timeline-content ms-5">
        <div class="overflow-auto pe-3">
          <div class="fs-5 fw-semibold mb-2">
            提醒內容提醒內容，提醒內容提醒內容，提醒內容提醒內容，提醒內醒內容提醒內容
          </div>
          <div class="d-flex align-items-center mt-1 fs-6">
            <div class="text-muted me-2 fs-7">2022-11-15 16:22</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-notifications",
  components: {},
});
</script>
