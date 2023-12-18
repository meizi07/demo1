<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <div class="dataTables_wrapper dt-bootstrap4 no-footer">
          <div class="table-responsive">
            <table
              class="table align-middle table-row-bordered fs-6 gy-5 housing_info_table dataTable no-footer"
            >
              <thead>
                <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
                  <th style="width: 15%">區域</th>
                  <th style="width: 35%">說明</th>
                  <th style="width: 40%">照片</th>
                  <th style="width: 10%"></th>
                </tr>
              </thead>

              <tbody class="fw-semibold text-gray-800">
                <tr v-for="(item, index) in areaData" :key="index">
                  <td class="pe-5 py-10">
                    <el-form-item>
                      <el-input
                        v-model="item.Area"
                        type="text"
                        name="Area"
                        placeholder="區域名稱"
                      />
                    </el-form-item>
                  </td>

                  <td class="px-5 py-10">
                    <el-form-item>
                      <el-input
                        v-model="item.Description"
                        type="text"
                        name="Description"
                        placeholder="區域說明"
                      />
                    </el-form-item>
                  </td>

                  <td class="px-5 py-10">
                    <div
                      v-for="(img, imgIndex) in item.DetailRecord"
                      :key="imgIndex"
                      class="d-flex mb-6 align-items-center gap-4"
                    >
                      <div class="position-relative">
                        <img
                          :src="img.FileImage"
                          class="w-125px h-125px object-fit-cover rounded"
                        />
                        <button
                          type="button"
                          class="btn btn-icon btn-light btn-active-color-primary position-absolute top-0 start-100 w-25px h-25px translate-middle rounded-circle"
                          @click="removeThumbnail(index, imgIndex)"
                        >
                          <i class="ki-duotone ki-minus fs-2"></i>
                        </button>
                      </div>

                      <el-form-item class="w-100 mb-0">
                        <el-input
                          v-model="img.Description"
                          type="text"
                          name="Description"
                          placeholder="圖片描述"
                        />
                      </el-form-item>
                    </div>

                    <label
                      :for="`fileInput${index}`"
                      class="btn bg-light-secondary d-flex flex-column flex-center w-125px h-125px"
                      style="border: 1px dashed rgb(220, 223, 230)"
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

                  <td class="ps-5 py-10">
                    <button
                      type="button"
                      class="d-block m-auto btn btn-sm btn-icon text-muted text-hover-danger"
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

      <div class="d-flex justify-content-start mt-12 mb-8">
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
import { ref, watch } from "vue";
import { useHousingStore } from "@/stores/housing";
import type { AreaData } from "@/types/Housing";

const housingStore = useHousingStore();

const areaData = ref<AreaData[]>([
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

watch(areaData.value, (newValue) => {
  housingStore.syncWithAreaData(newValue);
});
</script>
