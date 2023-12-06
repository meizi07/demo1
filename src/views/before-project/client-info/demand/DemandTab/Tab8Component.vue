<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <table class="table g-5 gs-0 mb-0 fw-bold text-gray-800">
          <thead>
            <tr class="border-bottom fs-7 fw-bold text-gray-800">
              <th>檔案類型</th>
              <th>檔案名稱</th>
              <th>附件</th>
              <th>說明</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in tab8formItems"
              :key="index"
              class="border-bottom border-bottom-bordered"
            >
              <td class="pe-7">
                <el-select
                  class="mb-2"
                  placeholder="請選擇檔案類型"
                  size="large"
                  v-model="item.category"
                  name="name"
                  @change="updateInputType(index, $event)"
                >
                  <el-option label="參考資料" value="參考資料"></el-option>
                  <el-option label="參考網址" value="參考網址"></el-option>
                </el-select>
              </td>
              <td class="ps-0">
                <el-input
                  type="text"
                  v-model="item.fileName"
                  placeholder="檔案名稱"
                  size="large"
                />
              </td>
              <td>
                <template v-if="item.category === '參考資料'">
                  <el-upload
                    :on-change="
                      (file, fileList) => getFile(file, fileList, index)
                    "
                    action=""
                    ref="upload"
                    class="upload-demo"
                    accept=".jpg, .jpeg, .png, .pdf"
                    :limit="1"
                    :file-list="fileList"
                    :on-exceed="handleExceed"
                    :auto-upload="false"
                  >
                    <el-button type="primary">選擇檔案</el-button>
                    <template #tip>
                      <div class="el-upload__tip">
                        jpg/png files with a size less than 500KB.
                      </div>
                    </template>
                  </el-upload>
                </template>
                <template v-else>
                  <el-input
                    type="text"
                    v-model="item.fileUrl"
                    placeholder="參考網址"
                    size="large"
                  />
                </template>
              </td>
              <td class="ps-0">
                <el-input
                  type="text"
                  v-model="item.remark"
                  placeholder="說明"
                  size="large"
                />
              </td>
              <td class="pt-5">
                <button
                  type="button"
                  @click="removeItem(index)"
                  class="btn btn-sm btn-icon text-muted text-hover-danger"
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
            <tr
              class="border-top border-top-dashed align-middle fs-6 fw-bold text-gray-800"
            >
              <th colspan="5" class="text-primary">
                <button
                  type="button"
                  @click="refAddItem()"
                  class="btn btn-sm btn-light-primary"
                >
                  <i class="ki-duotone ki-plus fs-3"></i>新增項目
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, watchEffect } from "vue";
import { genFileId } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";

interface FileWithRaw extends File {
  raw: File;
}

export default {
  name: "Tab8Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const tab8formItems = ref<any[]>([]);
    const upload = ref<UploadInstance>();
    const fileList = ref();

    watchEffect(() => {
      if (props.formData && Array.isArray(props.formData)) {
        tab8formItems.value = props.formData.map((item) => ({ ...item }));
      }
    });

    watch(
      tab8formItems,
      (newVal) => {
        const formattedData = newVal.map((item) => {
          if (item.category === "參考資料") {
            return {
              category: item.category,
              fileName: item.fileName,
              fileImage: item.fileImage, // 當選擇參考資料時，發送 fileImage
              remark: item.remark,
            };
          } else if (item.category === "參考網址") {
            return {
              category: item.category,
              fileName: item.fileName,
              fileUrl: item.fileUrl, // 當選擇參考網址時，發送 fileUrl
              remark: item.remark,
            };
          }
          return item; // 如果沒有匹配的類別，則返回原始項目
        });

        // console.log("tab8formItems 更新了:", formattedData);
        emit("update:formData", formattedData);
      },
      { deep: true }
    );

    const refAddItem = () => {
      tab8formItems.value.push({
        category: "",
        fileName: "",
        fileImage: "",
        fileUrl: "",
        remark: "",
      });
    };

    const removeItem = (index: number) => {
      tab8formItems.value.splice(index, 1);
    };

    const updateInputType = (index: number, event: Event) => {
      const select = event.target as HTMLSelectElement | null;
      if (select) {
        const type = select.value;
        const item = tab8formItems.value[index];
        item.category = type;
        if (type === "參考資料") {
          item.referenceUrl = "";
        } else {
          item.fileImage = "";
        }
      }
    };

    // function getFile(
    //   file: FileWithRaw,
    //   fileList: File[],
    //   index: number
    // ): Promise<string> {
    //   return getBase64(file.raw).then((res: string) => {
    //     const params = res.split(",");
    //     console.log(params, "params");
    //     if (params.length > 0) {
    //       return params[1]; // 返回 base64 字符串
    //     }
    //     return ""; // 或返回一個空字符串，如果沒有找到 base64
    //   });
    // }

    function getFile(file: FileWithRaw, fileList: File[], index: number): void {
      getBase64(file.raw).then((base64: string) => {
        // 直接將 base64 字符串賦值給 tab8formItems 中對應項目的 fileImage 屬性
        tab8formItems.value[index].fileImage = base64;
      });
    }

    function getBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = () => {
          imgResult = reader.result as string;
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.onloadend = () => {
          resolve(imgResult);
        };
      });
    }

    const handleExceed: UploadProps["onExceed"] = (files) => {
      upload.value!.clearFiles();
      const file = files[0] as UploadRawFile;
      file.uid = genFileId();
      upload.value!.handleStart(file);
    };

    return {
      tab8formItems,
      fileList,
      updateInputType,
      getFile,
      getBase64,
      handleExceed,
      refAddItem,
      removeItem,
    };
  },
};
</script>
