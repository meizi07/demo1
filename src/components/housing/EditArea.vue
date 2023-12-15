<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <div
          id="DataTables_Table_0_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="table-responsive">
            <table
              class="table align-middle table-row-bordered fs-6 gy-5 housing_info_table dataTable no-footer"
              id="DataTables_Table_0"
              style="width: 939px"
            >
              <thead>
                <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
                  <th style="width: 15%">區域</th>
                  <th style="width: 35%">說明</th>
                  <th style="width: 45%">照片</th>
                  <th style="width: 5%"></th>
                </tr>
              </thead>

              <tbody class="fw-semibold text-gray-800">
                <tr v-for="(item, index) in areaData" :key="index">
                  <td>
                    <el-form-item>
                      <el-input
                        v-model="item.Area"
                        type="text"
                        name="Area"
                        placeholder="區域名稱"
                      />
                    </el-form-item>
                  </td>

                  <td>
                    <el-form-item>
                      <el-input
                        v-model="item.Description"
                        type="text"
                        name="Description"
                        placeholder="區域說明"
                      />
                    </el-form-item>
                  </td>

                  <td>
                    <div class="card-title">
                      <div class="symbol-group">
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg7.jpg" />
                        </div>
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg6.jpg" />
                        </div>
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg8.jpg" />
                        </div>
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg9.jpg" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <button
                      type="button"
                      class="d-block btn btn-sm btn-icon text-muted text-hover-danger"
                      @click="deleteAreaRow(index)"
                    >
                      <i class="ki-duotone ki-cross fs-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-start mb-8">
        <button
          type="button"
          class="btn btn-sm btn-light-primary"
          @click="addNewAreaRow"
        >
          <i class="ki-duotone ki-plus fs-2"></i>
          新增區域
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { HousingDetail } from "@/types/Housing";

const areaData = ref<HousingDetail[]>([
  {
    Area: "",
    Description: "",
    DetailRecord: {
      FileImage: "",
      Description: "",
    },
  },
]);

function addNewAreaRow() {
  areaData.value.push({
    Area: "",
    Description: "",
    DetailRecord: {
      FileImage: "",
      Description: "",
    },
  });
}

function deleteAreaRow(index: number) {
  areaData.value.splice(index, 1);
}
</script>
