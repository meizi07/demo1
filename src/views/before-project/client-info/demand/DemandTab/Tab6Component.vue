<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="mb-0 fs-6 gy-5">
        <div id="kt_ecommerce_add_product_options">
          <div class="form-group">
            <div class="d-flex flex-column gap-8">
              <div
                class="form-group d-flex align-items-center gap-5 client_add_repeater_item"
                v-for="(item, index) in tab6formItems"
                :key="index"
              >
                <div
                  class="position-relative"
                  :class="field.class"
                  v-for="field in securityFields"
                  :key="field.name"
                >
                  <label class="form-label">{{ field.label }}</label>
                  <div>
                    <template v-if="field.type === 'select'">
                      <el-form-item>
                        <el-select
                          v-model="item[field.name]"
                          :placeholder="'請選擇' + field.label"
                          :name="field.name"
                          as="select"
                          size="large"
                        >
                          <el-option
                            v-for="option in field.options"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </template>
                    <template v-else-if="field.type === 'input'">
                      <el-form-item>
                        <el-input
                          v-model="item[field.name]"
                          :placeholder="field.label"
                          :name="field.name"
                          size="large"
                        ></el-input>
                      </el-form-item>
                    </template>
                    <template v-else-if="field.type === 'item-number'">
                      <el-form-item>
                        <span>{{ index + 1 }}</span>
                      </el-form-item>
                    </template>
                  </div>
                </div>
                <div>
                  <label class="d-block form-label">刪除</label>
                  <el-form-item>
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
                  </el-form-item>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group mt-8">
            <button
              type="button"
              @click="securityAddItem()"
              class="btn btn-sm btn-light-primary"
            >
              <i class="ki-duotone ki-plus fs-2"></i>新增項目
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, watchEffect } from "vue";

export default {
  name: "Tab6Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const tab6formItems = ref<any[]>([]);

    // 安全形式欄位
    const securityFields = [
      { name: "編號", label: "編號", type: "item-number", class: "w-25" },
      {
        name: "material",
        label: "項目",
        type: "select",
        class: "w-100",
        options: [
          { value: "防墜鋁窗", label: "防墜鋁窗" },
          { value: "隱形安全鋼索", label: "隱形安全鋼索" },
          { value: "止滑", label: "止滑" },
          { value: "其他", label: "其他" },
        ],
      },
      {
        name: "usage",
        label: "用途",
        type: "input",
        class: "w-100",
      },
      {
        name: "remark",
        label: "補充說明",
        type: "input",
        class: "w-100",
      },
    ];

    watchEffect(() => {
      if (props.formData && Array.isArray(props.formData)) {
        tab6formItems.value = props.formData.map((item) => ({ ...item }));
      }
    });

    watch(
      tab6formItems,
      (newVal) => {
        emit("update:formData", newVal);
      },
      { deep: true }
    );

    const securityAddItem = () => {
      tab6formItems.value.push({
        material: "",
        usage: "",
        remark: "",
      });
    };
    const removeItem = (index: number) => {
      tab6formItems.value.splice(index, 1);
    };

    return {
      securityFields,
      tab6formItems,
      securityAddItem,
      removeItem,
    };
  },
};
</script>
