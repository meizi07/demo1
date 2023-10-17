<template>
  <div class="drawer-change-records">
    <div class="record-list">
      <div v-for="group in dataGroups" :key="group.date">
        <div
          class="d-flex flex-stack align-items-center collapsible w-100"
          @click="toggleGroup(group.date)"
          :class="{ active: group.date === activeGroup }"
        >
          <div class="me-3">
            <div class="fs-4 text-gray-800 fw-bold">{{ group.date }}</div>
          </div>
          <div
            class="me-3"
            :class="{ 'rotate-90': group.date === activeGroup }"
          >
            <i class="ki-duotone ki-right fs-3"></i>
          </div>
        </div>
        <div
          v-if="group.date === activeGroup"
          class="collapse fs-6 pt-5 w-100"
          :id="'group-' + group.date"
        >
          <div class="edit_records_wrap">
            <div
              class="edit_records_item"
              v-for="record in group.records"
              :key="record.UUID"
            >
              <a :href="record.link">
                <time>{{ record.UpdateDate }}</time>
                <div class="edit_record_type">{{ record.Stage }}</div>
                <span>{{ record.PIC }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: Array, // 传入的数据数组，每个对象包含日期和记录
  },
  data() {
    return {
      activeGroup: null,
    };
  },
  computed: {
    dataGroups() {
      // 将数据按日期分组
      const groups = {};
      this.data.forEach((record) => {
        const date = record.UpdateDate.split(" ")[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(record);
      });
      return Object.keys(groups).map((date) => ({
        date,
        records: groups[date],
      }));
    },
  },
  methods: {
    toggleGroup(date) {
      // 切换展开/折叠
      this.activeGroup = this.activeGroup === date ? null : date;
    },
  },
});
</script>
