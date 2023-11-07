<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <table class="table align-middle table-row-bordered fs-6 gy-5">
        <thead>
          <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
            <th
              v-for="(header, index) in tableHeaders"
              :key="index"
              @click="sortTable(header.field)"
            >
              {{ header.label }}
              <i
                class="fas"
                :class="{
                  'fa-sort': currentSort.field !== header.field,
                  'fa-sort-up':
                    currentSort.field === header.field &&
                    currentSort.order === 'asc',
                  'fa-sort-down':
                    currentSort.field === header.field &&
                    currentSort.order === 'desc',
                }"
              ></i>
            </th>
          </tr>
        </thead>
        <tbody class="fw-semibold text-gray-800">
          <tr v-for="(item, index) in sortedData" :key="index">
            <td v-for="(field, key) in tableHeaders" :key="key">
              {{ item[field.field] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    tableHeaders: {
      type: Array as () => Array<{ label: string; field: string }>,
      required: true,
    },
    tableData: {
      type: Array as () => Array<Record<string, any>>,
      required: true,
    },
  },
  data() {
    return {
      currentSort: {
        field: "",
        order: "asc" as "asc" | "desc",
      },
    };
  },
  computed: {
    sortedData(): Record<string, any>[] {
      if (!this.currentSort.field) {
        return this.tableData;
      }

      const sorted = [...this.tableData];
      sorted.sort((a, b) => {
        const modifier = this.currentSort.order === "desc" ? -1 : 1;
        return (
          modifier *
          (a[this.currentSort.field] > b[this.currentSort.field] ? 1 : -1)
        );
      });

      return sorted;
    },
  },
  methods: {
    sortTable(field: string) {
      if (this.currentSort.field === field) {
        this.currentSort.order =
          this.currentSort.order === "asc" ? "desc" : "asc";
      } else {
        this.currentSort.field = field;
        this.currentSort.order = "asc";
      }
    },
  },
};
</script>
