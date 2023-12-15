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
                    <div
                      v-for="(img, imgIndex) in item.DetailRecord"
                      :key="imgIndex"
                      class="d-flex mb-3 align-items-center gap-3"
                    >
                      <img
                        :src="img.FileImage"
                        class="w-125px h-125px object-fit-cover rounded"
                      />

                      <el-form-item class="mb-0">
                        <el-input
                          v-model="img.Description"
                          type="text"
                          name="Description"
                          placeholder="圖片描述"
                        />
                      </el-form-item>

                      <button
                        type="button"
                        class="btn btn-sm"
                        @click="removeThumbnail(index, imgIndex)"
                      >
                        刪除
                      </button>
                    </div>

                    <label
                      :for="`fileInput${index}`"
                      class="btn bg-light-secondary d-flex flex-column flex-center w-125px h-125px"
                    >
                      <i class="ki-duotone ki-plus text-gray-300 fs-4x"></i>
                      <input
                        type="file"
                        :id="`fileInput${index}`"
                        class="d-none"
                        multiple
                        accept="image/*"
                        @change="handleFileChange(index, $event)"
                      />
                    </label>
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
    DetailRecord: [],
  },
]);

function addNewAreaRow() {
  areaData.value.push({
    Area: "",
    Description: "",
    DetailRecord: [],
  });
}

function deleteAreaRow(index: number) {
  areaData.value.splice(index, 1);
}

function handleFileChange(index: number, event: Event) {
  const files = (event?.target as HTMLInputElement)?.files;

  if (files && files.length > 0) {
    const images = areaData.value[index].DetailRecord;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        images?.push({
          FileImage: e.target?.result as string,
          Description: "",
        });
      };

      reader.readAsDataURL(file);
    }
  }
}

function removeThumbnail(index: number, imgIndex: number) {
  areaData.value[index].DetailRecord?.splice(imgIndex, 1);
}
</script>
