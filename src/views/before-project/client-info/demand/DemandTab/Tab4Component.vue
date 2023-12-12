<template>
  <div class="card card-flush mb-10">
    <div class="card-body">
      <div class="repeater">
        <div
          class="need_repeater"
          v-for="(area, index) in localFormData.areas"
          :key="index"
        >
          <div class="form-group">
            <div class="d-flex align-items-center mw-500px">
              <!-- 使用 Element UI 的 Select -->
              <el-select
                v-model="area.selectedArea"
                placeholder="請選擇居住區域"
                as="select"
                size="large"
              >
                <el-option
                  v-for="option in areaOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
              <button
                type="button"
                @click="removeArea(index)"
                class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
              >
                <i class="ki-duotone ki-cross fs-1">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <div class="align-items-center mw-500px mt-8">
              <div v-for="(item, itemIndex) in area.items" :key="itemIndex">
                <div class="input-group-md d-flex mb-3">
                  <div class="mx-3 d-flex">
                    <!-- 如果是新項目，顯示可編輯的輸入框 -->
                    <template v-if="!item.isDefault">
                      <el-space size="small" class="w-150px d-flex cus_input">
                        <el-checkbox v-model="item.checked"></el-checkbox>
                        <el-input
                          v-model="item.label"
                          placeholder="其他"
                          size="large"
                        ></el-input>
                      </el-space>
                    </template>
                    <!-- 如果是預設項目，顯示固定標籤 -->
                    <template v-else>
                      <div class="w-150px">
                        <el-checkbox
                          v-model="item.checked"
                          :label="item.label"
                          size="large"
                        />
                      </div>
                    </template>
                  </div>
                  <el-input
                    v-model="item.remark"
                    placeholder="補充說明"
                    size="large"
                  ></el-input>
                  <button
                    v-if="!item.isDefault"
                    type="button"
                    @click="removeItem(area, itemIndex)"
                    class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
                  >
                    <i class="ki-duotone ki-cross fs-1">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </button>
                </div>
              </div>
              <div v-if="area.selectedArea === '廚房'">
                <!-- 廚房形式的選項 -->
                <el-radio-group v-model="area.kitchenStyle">
                  <el-radio label="封閉式">封閉式</el-radio>
                  <el-radio label="開放式">開放式</el-radio>
                </el-radio-group>

                <!-- 下廚頻率的輸入框 -->
                <el-input
                  v-model="area.cookingFrequency"
                  placeholder="下廚頻率"
                ></el-input>

                <!-- 廚房設備的多選框 -->
                <div
                  v-for="(equipment, eqIndex) in area.kitchenEquipments"
                  :key="eqIndex"
                >
                  <el-checkbox v-model="equipment.checked">{{
                    equipment.label
                  }}</el-checkbox>
                </div>
              </div>
              <button
                type="button"
                @click="addItem(area)"
                class="btn btn-sm btn-secondary text-secondary-inverse my-5"
              >
                <i class="ki-duotone ki-plus fs-2"></i>新增項目
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="addArea()"
          class="btn btn-sm btn-light-primary my-8"
        >
          <i class="ki-duotone ki-plus fs-2"></i>新增項目
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watchEffect } from "vue";

export default defineComponent({
  name: "Tab4Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const localFormData = ref({ areas: [] as any[] });
    const areaOptions = [
      { value: "玄關", label: "玄關" },
      { value: "客廳", label: "客廳" },
      { value: "餐廳", label: "餐廳" },
      { value: "廚房", label: "廚房" },
      { value: "客浴", label: "客浴" },
      { value: "客房", label: "客房" },
      { value: "更衣室", label: "更衣室" },
      { value: "後陽台", label: "後陽台" },
      { value: "陽台", label: "陽台" },
      // 其他選項...
    ];

    const defaultItemsForArea = {
      玄關: [
        { label: "鞋量", checked: false, isDefault: true },
        { label: "鑰匙", checked: false, isDefault: true },
        { label: "雨傘", checked: false, isDefault: true },
        { label: "展示品", checked: false, isDefault: true },
      ],
      客廳: [
        { label: "沙發", checked: false, isDefault: true },
        { label: "TV", checked: false, isDefault: true },
        { label: "影音", checked: false, isDefault: true },
        { label: "展示品", checked: false, isDefault: true },
      ],
      餐廳: [
        { label: "餐桌", checked: false, isDefault: true },
        { label: "TV", checked: false, isDefault: true },
      ],
      廚房: [
        { label: "基本三機", checked: false, isDefault: true },
        { label: "TV", checked: false, isDefault: true },
      ],
      客浴: [
        { label: "餐桌", checked: false, isDefault: true },
        { label: "TV", checked: false, isDefault: true },
      ],
      客房: [
        { label: "餐桌", checked: false, isDefault: true },
        { label: "TV", checked: false, isDefault: true },
      ],
      更衣室: [
        { label: "長大衣", checked: false, isDefault: true },
        { label: "短大衣", checked: false, isDefault: true },
        { label: "西裝", checked: false, isDefault: true },
        { label: "襯衫", checked: false, isDefault: true },
        { label: "休閒衫", checked: false, isDefault: true },
        { label: "折疊衣物", checked: false, isDefault: true },
        { label: "私密衣物", checked: false, isDefault: true },
      ],
      後陽台: [
        { label: "洗衣機", checked: false, isDefault: true },
        { label: "洗衣槽", checked: false, isDefault: true },
        { label: "曬衣架", checked: false, isDefault: true },
        { label: "收納", checked: false, isDefault: true },
      ],
      陽台: [
        { label: "園藝規劃", checked: false, isDefault: true },
        { label: "可食植栽型式", checked: false, isDefault: true },
        { label: "戶外木地板", checked: false, isDefault: true },
        { label: "自動灑水設備", checked: false, isDefault: true },
      ],
    };

    const addArea = () => {
      const newArea = {
        selectedArea: "", // 預設選項可以是 "玄關" 或其他
        items: [],
        // 廚房特有的屬性，預設為空或預設值
        kitchenStyle: "",
        cookingFrequency: "",
        kitchenEquipments: [],
      };

      // 如果選擇的是廚房，則添加廚房相關的屬性
      if (newArea.selectedArea === "廚房") {
        newArea.kitchenStyle = ""; // 預設廚房形式
        newArea.cookingFrequency = ""; // 預設下廚頻率
        newArea.kitchenEquipments = defaultItemsForArea.廚房; // 廚房設備
      }

      localFormData.value.areas.push(newArea);
    };

    const addItem = (area: any) => {
      const newItem = {
        label: "",
        checked: true,
        remark: "",
        isDefault: false,
      };
      if (!area.items) {
        area.items = [];
      }

      area.items.push(newItem);
    };

    const removeArea = (index: number) => {
      localFormData.value.areas.splice(index, 1);
    };

    const removeItem = (area: any, index: number) => {
      area.items.splice(index, 1);
    };

    watchEffect(() => {
      localFormData.value.areas.forEach((area) => {
        if (area.selectedArea && defaultItemsForArea[area.selectedArea]) {
          const defaultItems = defaultItemsForArea[area.selectedArea];
          area.items = defaultItems.concat(
            area.items.filter((item) => !item.isDefault)
          );
        }
      });
    });

    return {
      localFormData,
      addArea,
      addItem,
      removeArea,
      removeItem,
      areaOptions,
    };
  },
});
</script>
<style lang="scss" scoped>
.cus_input::v-deep .el-input__wrapper {
  border: 1px solid var(--el-border-color);
  border-radius: 0px;
  box-shadow: none;
  border-width: 0 0 1px 0;
}
</style>
