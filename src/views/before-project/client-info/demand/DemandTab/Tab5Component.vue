<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="mb-0 fs-6 gy-5">
        <div id="kt_ecommerce_add_product_options">
          <div class="form-group">
            <div class="d-flex flex-column gap-8">
              <div
                class="form-group d-flex align-items-center gap-5 client_add_repeater_item"
                v-for="(item, index) in tab5formItems"
                :key="index"
              >
                <div
                  class="position-relative"
                  :class="field.class"
                  v-for="field in styleFields"
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
              @click="styleAddItem()"
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
  name: "Tab5Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const tab5formItems = ref<any[]>([]);

    // 風格材質欄位
    const styleFields = [
      { name: "編號", label: "編號", type: "item-number", class: "w-25" },
      {
        name: "material",
        label: "材質",
        type: "select",
        class: "w-100",
        options: [
          { value: "天然石材", label: "天然石材" },
          { value: "磁磚", label: "磁磚" },
          { value: "木地板", label: "木地板" },
          { value: "硅藻土", label: "硅藻土" },
          { value: "金屬", label: "金屬" },
          { value: "玻璃", label: "玻璃" },
          { value: "木製&實木", label: "木製&實木" },
          { value: "皮革", label: "皮革" },
          { value: "特殊漆", label: "特殊漆" },
          { value: "清水模、洗磨石子等", label: "清水模、洗磨石子等" },
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
        tab5formItems.value = props.formData.map((item) => ({ ...item }));
      }
    });

    watch(
      tab5formItems,
      (newVal) => {
        emit("update:formData", newVal);
      },
      { deep: true }
    );

    const styleAddItem = () => {
      tab5formItems.value.push({
        material: "",
        usage: "",
        remark: "",
      });
    };
    const removeItem = (index: number) => {
      tab5formItems.value.splice(index, 1);
    };

    return {
      styleFields,
      tab5formItems,
      styleAddItem,
      removeItem,
    };
  },
};
</script>
