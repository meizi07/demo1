<template>
  <div
    id="drawer_changeRecords"
    class="bg-white edit_records kt_drawer_example_basic"
    data-kt-drawer="true"
    data-kt-drawer-name="records"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle=".kt_drawer_example_basic_button"
    data-kt-drawer-close=".kt_drawer_example_basic_close"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
  >
    <div class="card w-100 rounded-0">
      <div class="card-header pe-5">
        <div class="card-title">
          <div class="d-flex justify-content-center flex-column me-3">
            <h3 class="fs-3 fw-bold text-gray-900 me-1 lh-1">異動紀錄</h3>
          </div>
        </div>
        <div class="card-toolbar">
          <div
            class="btn btn-sm btn-icon btn-active-light-primary kt_drawer_example_basic_close"
            id="kt_drawer_example_basic_close"
          >
            <i class="ki-duotone ki-cross fs-2"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </div>
        </div>
      </div>
      <div class="card-body hover-scroll-overlay-y">
        <div
          v-for="group in groupedRecords"
          :key="group.date"
          class="edit_records_area"
          data-kt-customer-payment-method="row"
        >
          <div class="d-flex flex-stack flex-wrap">
            <div
              class="d-flex flex-stack align-items-center collapsible rotate w-100 active"
              data-bs-toggle="collapse"
              :href="'#kt_customer_edit_records_' + (group.groupIndex + 1)"
              role="button"
              :aria-expanded="group.date === today"
              :aria-controls="
                'kt_customer_edit_records_' + (group.groupIndex + 1)
              "
            >
              <div class="me-3">
                <div class="d-flex align-items-center">
                  <div class="fs-4 text-gray-800 fw-bold">{{ group.date }}</div>
                </div>
              </div>
              <div class="me-3 rotate-90">
                <i class="ki-duotone ki-right fs-3"></i>
              </div>
            </div>
            <div
              :id="'kt_customer_edit_records_' + (group.groupIndex + 1)"
              class="collapse fs-6 pt-5 w-100"
              :class="{ show: group.date === today }"
              :data-bs-parent="
                '#kt_customer_edit_records_' + (group.groupIndex + 1)
              "
            >
              <div class="edit_records_wrap">
                <div
                  v-for="record in group.records"
                  :key="record.UUID"
                  class="edit_records_item"
                >
                  <a :href="'acceptance-edit-record.html'">
                    <div>{{ record.UpdateDate }}</div>
                    <div class="edit_record_type">{{ record.Stage }}</div>
                    <span>{{ record.PIC }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "drawer_change_records",
  props: {
    data: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
  },
  setup(props) {
    const today = ref(
      new Date().toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    const groupedRecords = computed(() => {
      const grouped = {};
      let groupIndex = 0; // 初始化流水号

      props.data.forEach((record) => {
        const date = record.UpdateDate.split(" ")[0];
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(record);
      });

      // 将 grouped 对象转换为数组，同时记录 groupIndex
      const result = Object.keys(grouped).map((date) => ({
        date,
        records: grouped[date],
        groupIndex: groupIndex++, // 递增流水号
      }));

      return result;
    });

    return {
      groupedRecords,
      today,
    };
  },
});
</script>
