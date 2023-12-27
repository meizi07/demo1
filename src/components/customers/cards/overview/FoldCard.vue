<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <table
        class="table align-middle table-row-bordered fs-6 gy-5"
        id="kt_table_widget_4_table"
      >
        <thead>
          <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
            <th v-for="(header, index) in tableHeaders" :key="index">
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody class="fw-bold text-gray-800">
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ index + 1 }}.</td>
            <td>
              <div class="py-0" :data-kt-customer-payment-method="'row'">
                <div class="d-flex flex-stack flex-wrap">
                  <div
                    class="d-flex flex-stack align-items-center collapsible rotate w-100"
                    @click="toggleArea(index)"
                    :aria-expanded="areas[index].expanded"
                    :href="'#kt_customer_view_payment_method_' + (index + 1)"
                  >
                    <div class="me-3">
                      <div class="d-flex align-items-center">
                        <div class="text-gray-800 fw-bold">
                          {{ item.roomName }}
                        </div>
                      </div>
                    </div>
                    <div class="me-3 rotate-90">
                      <i class="ki-duotone ki-right fs-3"></i>
                    </div>
                  </div>
                  <div
                    :id="'kt_customer_view_payment_method_' + (index + 1)"
                    class="collapse fs-6 pt-5 w-100 collapse_table"
                    :class="{ show: areas[index].expanded }"
                  >
                    <table class="table table-flush fs-6 gy-5">
                      <tbody>
                        <tr
                          v-for="(facility, fIndex) in getFacilities(item)"
                          :key="fIndex"
                        >
                          <td class="text-muted">
                            {{ facility.facilityName }}
                          </td>
                          <td class="text-gray-800">
                            {{ facility.notes }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import type { PropType } from "vue";
interface TableHeader {
  key: string;
  label: string;
}

interface HousingRequirement {
  roomName: string;
  kitchenLayout?: string;
  kitchenLayoutRemark?: string;
  FrequencyCooking?: string;
  selectedFacilities?: Facility[];
  toilet?: Facility[];
  shower?: Facility[];
  tub?: Facility[];
  exhaustFan?: Facility[];
  bathroomAccessories?: Facility[];
  universalAccessories?: Facility[];
  roomUsage?: string;
  guestRoomLayout?: string;
  guestRoomLayoutRemark?: string;
}

interface Facility {
  facilityName: string;
  notes: string;
}

export default defineComponent({
  name: "FoldCard",
  props: {
    tableHeaders: {
      type: Array as PropType<TableHeader[]>,
      required: true,
    },
    tableData: {
      type: Array as PropType<HousingRequirement[]>,
      required: true,
    },
  },
  setup(props) {
    const areas = ref(props.tableData.map(() => ({ expanded: false })));

    const toggleArea = (index: number) => {
      areas.value[index].expanded = !areas.value[index].expanded;
    };
    watch(
      () => props.tableData,
      (newData) => {
        areas.value = newData.map(() => ({ expanded: false }));
      }
    );

    const getFacilities = (item: HousingRequirement) => {
      let facilities: Facility[] = [];

      // 處理廚房特有屬性
      if (item.roomName === "廚房") {
        if (item.kitchenLayout) {
          facilities.push({
            facilityName: "廚房形式",
            notes: item.kitchenLayout,
          });
        }
        if (item.kitchenLayoutRemark) {
          facilities.push({
            facilityName: "廚房形式備註",
            notes: item.kitchenLayoutRemark,
          });
        }
        if (item.FrequencyCooking) {
          facilities.push({
            facilityName: "下廚頻率",
            notes: item.FrequencyCooking,
          });
        }
      }

      // 處理客浴特有屬性
      if (item.roomName === "客浴") {
        if (item.toilet) {
          facilities.push(
            ...item.toilet.map((f) => ({
              facilityName: f.facilityName,
              notes: f.notes || "",
            }))
          );
        }
        if (item.shower) {
          facilities.push(
            ...item.shower.map((f) => ({
              facilityName: f.facilityName,
              notes: f.notes || "",
            }))
          );
        }
        if (item.tub) {
          facilities.push(
            ...item.tub.map((f) => ({
              facilityName: f.facilityName,
              notes: f.notes || "",
            }))
          );
        }
        if (item.exhaustFan) {
          facilities.push(
            ...item.exhaustFan.map((f) => ({
              facilityName: f.facilityName,
              notes: f.notes || "",
            }))
          );
        }
        if (item.bathroomAccessories) {
          facilities.push(
            ...item.bathroomAccessories.map((f) => ({
              facilityName: f.facilityName,
              notes: f.notes || "",
            }))
          );
        }
        if (item.universalAccessories) {
          facilities.push(
            ...item.universalAccessories.map((f) => ({
              facilityName: f.facilityName,
              notes: f.notes || "",
            }))
          );
        }
        // 添加其他客浴特有屬性...
      }

      // 處理客房特有屬性
      if (item.roomName === "客房") {
        if (item.guestRoomLayout) {
          facilities.push({
            facilityName: "客房形式",
            notes: item.guestRoomLayout,
          });
        }
        if (item.guestRoomLayoutRemark) {
          facilities.push({
            facilityName: "客房形式備註",
            notes: item.guestRoomLayoutRemark,
          });
        }
        if (item.roomUsage) {
          facilities.push({
            facilityName: "房間用途",
            notes: item.roomUsage,
          });
        }
      }

      // 處理通用設施
      if (item.selectedFacilities) {
        facilities.push(
          ...item.selectedFacilities.map((f) => ({
            facilityName: f.facilityName,
            notes: f.notes || "無",
          }))
        );
      }

      return facilities;
    };

    return { areas, toggleArea, getFacilities };
  },
});
</script>
