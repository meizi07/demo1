<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <table class="table mb-0 fw-bold text-gray-800">
          <tbody>
            <tr v-for="(item, index) in measuringData" :key="index">
              <td>
                <label class="form-label">檔案名稱</label>

                <el-form-item>
                  <el-input
                    v-model="item.FileName"
                    type="text"
                    name="FileName"
                    placeholder="檔案名稱"
                  />
                </el-form-item>
              </td>

              <td width="30%">
                <label class="form-label">附加檔案</label>

                <el-upload
                  :ref="(el) => (fileRef[index] = el)"
                  action="#"
                  :limit="1"
                  :on-exceed="(files) => handleFileExceed(files, index)"
                  :on-change="
                    (file, fileList) => handleFileChange(file, fileList, index)
                  "
                  :auto-upload="false"
                  name="FileImage"
                  accept="image/*,.pdf"
                >
                  <template #trigger>
                    <el-button type="primary">選擇檔案</el-button>
                  </template>
                </el-upload>
              </td>

              <td>
                <label class="form-label">說明</label>

                <el-form-item>
                  <el-input
                    v-model="item.Description"
                    type="text"
                    name="Description"
                    placeholder="說明"
                  />
                </el-form-item>
              </td>

              <td>
                <label class="form-label">刪除</label>

                <button
                  type="button"
                  @click="deleteMeasuringRow(index)"
                  class="d-block btn btn-sm btn-icon text-muted text-hover-danger"
                >
                  <i class="ki-duotone ki-cross fs-1">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr class="align-middle fs-6 fw-bold text-gray-800">
              <th colspan="5" class="text-primary">
                <button
                  type="button"
                  @click="addNewMeasuringRow"
                  class="btn btn-sm btn-light-primary"
                >
                  <i class="ki-duotone ki-plus fs-3"></i>新增檔案
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { genFileId } from "element-plus";
import type { UploadInstance, UploadRawFile, UploadFile } from "element-plus";
import { useHousingStore } from "@/stores/housing";
import type { MeasuringData } from "@/types/Housing";

const housingStore = useHousingStore();

const fileRef = ref<Array<UploadInstance | null>>([]);
const measuringData = ref<MeasuringData[]>([
  {
    FileName: "",
    FileImage: "",
    Description: "",
  },
]);

function addNewMeasuringRow() {
  measuringData.value.push({
    FileName: "",
    FileImage: "",
    Description: "",
  });
}

function deleteMeasuringRow(index: number) {
  measuringData.value.splice(index, 1);
}

function handleFileExceed(files: UploadRawFile[], index: number) {
  const currentFileRef = fileRef.value[index];

  if (currentFileRef) {
    const file = files[0] as UploadRawFile;

    currentFileRef.clearFiles();
    file.uid = genFileId();
    currentFileRef.handleStart(file);
  }
}

function handleFileChange(
  file: UploadFile,
  fileList: UploadRawFile[],
  index: number
) {
  const reader = new FileReader();

  reader.onload = (e) => {
    measuringData.value[index].FileImage = e.target!.result as string;
  };

  if (file && file.raw) {
    reader.readAsDataURL(file.raw);
  }
}

watch(measuringData.value, (newValue) => {
  housingStore.syncWithMeasuringData(newValue);
});
</script>
