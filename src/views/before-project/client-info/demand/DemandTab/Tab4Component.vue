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
                v-model="area.roomName"
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
              <template v-if="area.roomName === '廚房'">
                <div class="mt-8">
                  <p class="fs-5 fw-bold">廚房形式</p>
                  <el-radio-group v-model="area.kitchenLayout">
                    <el-radio label="封閉式">封閉式</el-radio>
                    <el-radio label="開放式">開放式</el-radio>
                  </el-radio-group>
                  <el-input
                    v-model="area.kitchenLayoutRemark"
                    placeholder="補充說明"
                    size="large"
                  ></el-input>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">下廚頻率</p>
                  <el-input
                    v-model="area.FrequencyCooking"
                    placeholder="下廚頻率"
                    size="large"
                  ></el-input>
                </div>
                <!-- 廚房設備的多選框 -->
                <div class="mt-8">
                  <p class="fs-5 fw-bold">廚房設備</p>
                  <div
                    v-for="(item, itemIndex) in area.selectedFacilities"
                    :key="itemIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <!-- 如果是新項目，顯示可編輯的輸入框 -->
                        <template v-if="!item.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
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
                </div>
                <button
                  type="button"
                  @click="addItem(area)"
                  class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                >
                  <i class="ki-duotone ki-plus fs-2"></i>新增項目
                </button>
              </template>
              <template v-else-if="area.roomName === '客浴'">
                <div class="mt-8">
                  <p class="fs-5 fw-bold">馬桶</p>
                  <div
                    v-for="(toiletOption, toiletIndex) in area.toilet"
                    :key="toiletIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <!-- 如果是新項目，顯示可編輯的輸入框 -->
                        <template v-if="!toiletOption.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
                            <el-checkbox
                              v-model="toiletOption.checked"
                            ></el-checkbox>
                            <el-input
                              v-model="toiletOption.label"
                              placeholder="其他"
                              size="large"
                            ></el-input>
                          </el-space>
                        </template>
                        <!-- 如果是預設項目，顯示固定標籤 -->
                        <template v-else>
                          <div class="w-150px">
                            <el-checkbox
                              v-model="toiletOption.checked"
                              :label="toiletOption.label"
                              size="large"
                            />
                          </div>
                        </template>
                      </div>
                      <el-input
                        v-model="toiletOption.remark"
                        placeholder="補充說明"
                        size="large"
                      ></el-input>
                      <button
                        v-if="!toiletOption.isDefault"
                        type="button"
                        @click="removeItem(area, toiletIndex, 'toilet')"
                        class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
                      >
                        <i class="ki-duotone ki-cross fs-1">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="addItem(area, 'toilet')"
                    class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                  >
                    <i class="ki-duotone ki-plus fs-2"></i>新增項目
                  </button>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">洗槽型式</p>
                  <div
                    v-for="(toiletOption, toiletIndex) in area.washbasinStyle"
                    :key="toiletIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <div class="w-150px">
                          <el-checkbox
                            v-model="toiletOption.checked"
                            :label="toiletOption.label"
                            size="large"
                          />
                        </div>
                      </div>
                      <el-input
                        v-model="toiletOption.remark"
                        placeholder="補充說明"
                        size="large"
                      ></el-input>
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">淋浴型式</p>
                  <div
                    v-for="(toiletOption, toiletIndex) in area.showerStyle"
                    :key="toiletIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <div class="w-150px">
                          <el-checkbox
                            v-model="toiletOption.checked"
                            :label="toiletOption.label"
                            size="large"
                          />
                        </div>
                      </div>
                      <el-input
                        v-model="toiletOption.remark"
                        placeholder="補充說明"
                        size="large"
                      ></el-input>
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">浴缸型式</p>
                  <div
                    v-for="(toiletOption, toiletIndex) in area.bathtubStyle"
                    :key="toiletIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <template v-if="!toiletOption.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
                            <el-checkbox
                              v-model="toiletOption.checked"
                            ></el-checkbox>
                            <el-input
                              v-model="toiletOption.label"
                              placeholder="其他"
                              size="large"
                            ></el-input>
                          </el-space>
                        </template>
                        <!-- 如果是預設項目，顯示固定標籤 -->
                        <template v-else>
                          <div class="w-150px">
                            <el-checkbox
                              v-model="toiletOption.checked"
                              :label="toiletOption.label"
                              size="large"
                            />
                          </div>
                        </template>
                      </div>
                      <el-input
                        v-model="toiletOption.remark"
                        placeholder="補充說明"
                        size="large"
                      ></el-input>
                      <button
                        v-if="!toiletOption.isDefault"
                        type="button"
                        @click="removeItem(area, toiletIndex, 'bathtubStyle')"
                        class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
                      >
                        <i class="ki-duotone ki-cross fs-1">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="addItem(area, 'bathtubStyle')"
                    class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                  >
                    <i class="ki-duotone ki-plus fs-2"></i>新增項目
                  </button>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">換氣型式</p>
                  <div
                    v-for="(toiletOption, toiletIndex) in area.ventilationStyle"
                    :key="toiletIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <template v-if="!toiletOption.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
                            <el-checkbox
                              v-model="toiletOption.checked"
                            ></el-checkbox>
                            <el-input
                              v-model="toiletOption.label"
                              placeholder="其他"
                              size="large"
                            ></el-input>
                          </el-space>
                        </template>
                        <!-- 如果是預設項目，顯示固定標籤 -->
                        <template v-else>
                          <div class="w-150px">
                            <el-checkbox
                              v-model="toiletOption.checked"
                              :label="toiletOption.label"
                              size="large"
                            />
                          </div>
                        </template>
                      </div>
                      <el-input
                        v-model="toiletOption.remark"
                        placeholder="補充說明"
                        size="large"
                      ></el-input>
                      <button
                        v-if="!toiletOption.isDefault"
                        type="button"
                        @click="
                          removeItem(area, toiletIndex, 'ventilationStyle')
                        "
                        class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
                      >
                        <i class="ki-duotone ki-cross fs-1">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="addItem(area, 'ventilationStyle')"
                    class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                  >
                    <i class="ki-duotone ki-plus fs-2"></i>新增項目
                  </button>
                </div>

                <div class="mt-8">
                  <p class="fs-5 fw-bold">浴室配件</p>
                  <div
                    v-for="(item, itemIndex) in area.bathroomAccessories"
                    :key="itemIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <template v-if="!item.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
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
                        type="button"
                        @click="
                          removeItem(area, itemIndex, 'bathroomAccessories')
                        "
                        class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
                      >
                        <i class="ki-duotone ki-cross fs-1">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="addItem(area, 'bathroomAccessories')"
                    class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                  >
                    <i class="ki-duotone ki-plus fs-2"></i>新增項目
                  </button>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">通用配件</p>
                  <div
                    v-for="(item, itemIndex) in area.generalAccessories"
                    :key="itemIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <template v-if="!item.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
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
                        type="button"
                        @click="
                          removeItem(area, itemIndex, 'generalAccessories')
                        "
                        class="btn btn-sm btn-icon text-muted text-hover-danger mx-5"
                      >
                        <i class="ki-duotone ki-cross fs-1">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="addItem(area, 'generalAccessories')"
                    class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                  >
                    <i class="ki-duotone ki-plus fs-2"></i>新增項目
                  </button>
                </div>
              </template>
              <template v-else-if="area.roomName === '客房'">
                <div class="mt-8">
                  <p class="fs-5 fw-bold">房間用途</p>
                  <el-input
                    v-model="area.roomUsage"
                    placeholder="ex:書房"
                    size="large"
                  ></el-input>
                </div>
                <div class="mt-8">
                  <p class="fs-5 fw-bold">房間形式</p>
                  <el-radio-group v-model="area.guestRoomLayout">
                    <el-radio label="開放式">開放式</el-radio>
                    <el-radio label="半開放式">半開放式</el-radio>
                    <el-radio label="封閉式">封閉式</el-radio>
                  </el-radio-group>
                  <el-input
                    v-model="area.guestRoomLayoutRemark"
                    placeholder="備註說明"
                    size="large"
                  ></el-input>
                </div>

                <div class="mt-8">
                  <p class="fs-5 fw-bold">房間設備</p>
                  <div
                    v-for="(item, itemIndex) in area.selectedFacilities"
                    :key="itemIndex"
                  >
                    <div class="input-group-md d-flex mb-3">
                      <div class="mx-3 d-flex">
                        <template v-if="!item.isDefault">
                          <el-space
                            size="small"
                            class="w-150px d-flex cus_input"
                          >
                            <el-checkbox v-model="item.checked"></el-checkbox>
                            <el-input
                              v-model="item.label"
                              placeholder="其他"
                              size="large"
                            ></el-input>
                          </el-space>
                        </template>
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
                </div>
                <button
                  type="button"
                  @click="addItem(area)"
                  class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                >
                  <i class="ki-duotone ki-plus fs-2"></i>新增項目
                </button>
              </template>
              <template v-else>
                <div
                  v-for="(item, itemIndex) in area.selectedFacilities"
                  :key="itemIndex"
                >
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
                <button
                  type="button"
                  @click="addItem(area)"
                  class="btn btn-sm btn-secondary text-secondary-inverse my-5"
                >
                  <i class="ki-duotone ki-plus fs-2"></i>新增項目
                </button>
              </template>
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="addArea()"
          class="btn btn-sm btn-light-primary my-8"
        >
          <i class="ki-duotone ki-plus fs-2"></i>新增區域
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watchEffect, watch } from "vue";

interface Facility {
  facilityName: string;
  notes: string;
  checked: boolean;
  remark: string;
  label: string;
  isDefault?: boolean;
}

interface Area {
  roomName: string;
  selectedFacilities: Facility[];
  // ...其他可能的屬性...
}

export default defineComponent({
  name: "Tab4Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const localFormData = ref({ areas: [] as any[] });
    const processedData = ref({ areas: [] as any[] });

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
    ];

    // 各區域預設選項
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
        { label: "洗碗機", checked: false, isDefault: true },
        { label: "蒸爐", checked: false, isDefault: true },
        { label: "微波爐", checked: false, isDefault: true },
        { label: "電子鍋", checked: false, isDefault: true },
        { label: "電鍋", checked: false, isDefault: true },
        { label: "烤箱", checked: false, isDefault: true },
      ],
      客房: [
        { label: "架高地板", checked: false, isDefault: true },
        { label: "機能式床", checked: false, isDefault: true },
        { label: "書櫃", checked: false, isDefault: true },
        { label: "衣櫃", checked: false, isDefault: true },
        { label: "雙人床", checked: false, isDefault: true },
        { label: "單人床", checked: false, isDefault: true },
        { label: "書桌", checked: false, isDefault: true },
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

    // 客浴預設選項
    const guestBathroomDefaults = ref({
      toilet: [
        { label: "地排式馬桶", checked: false, isDefault: true },
        { label: "壁排式馬桶", checked: false, isDefault: true },
        { label: "隱藏水箱式馬桶", checked: false, isDefault: true },
      ],
      washbasinStyle: [{ label: "洗槽", checked: false, isDefault: true }],
      showerStyle: [{ label: "淋浴", checked: false, isDefault: true }],
      bathtubStyle: [
        { label: "成型缸", checked: false, isDefault: true },
        { label: "磚砌缸", checked: false, isDefault: true },
        { label: "按摩功能", checked: false, isDefault: true },
      ],
      ventilationStyle: [
        { label: "浴室抽風機", checked: false, isDefault: true },
        { label: "多功能浴室乾燥機", checked: false, isDefault: true },
        { label: "電動逆止閥抽風機", checked: false, isDefault: true },
      ],
    });

    // 重置選項
    const resetAreaData = (area) => {
      switch (area.roomName) {
        case "廚房":
          area.kitchenLayout = "";
          area.kitchenLayoutRemark = "";
          area.FrequencyCooking = "";
          break;
        case "客浴":
          area.toilet = [];
          area.washbasinStyle = [];
          area.showerStyle = [];
          area.bathtubStyle = [];
          area.ventilationStyle = [];
          area.bathroomAccessories = [];
          area.generalAccessories = [];
          break;
        case "客房":
          area.roomUsage = "";
          area.guestRoomLayout = "";
          area.guestRoomLayoutRemark = "";
          break;
        default:
          area.selectedFacilities = [];
          break;
      }
    };

    // 新增區域
    const addArea = () => {
      const newArea: {
        roomName: string;
        selectedFacilities: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        kitchenLayout?: string;
        kitchenLayoutRemark?: string;
        FrequencyCooking?: string;
        toilet?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        washbasinStyle?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        showerStyle?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        bathtubStyle?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        ventilationStyle?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        bathroomAccessories?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        generalAccessories?: {
          facilityName: string;
          notes: string;
          checked: boolean;
          remark: string;
          label: string;
        }[];
        roomUsage?: string;
        guestRoomLayout?: string;
        guestRoomLayoutRemark?: string;
      } = {
        roomName: "玄關",
        selectedFacilities: [],
      };

      if (newArea.roomName === "廚房") {
        newArea.kitchenLayout = "";
        newArea.kitchenLayoutRemark = "";
        newArea.FrequencyCooking = "";
      } else if (newArea.roomName === "客浴") {
        newArea.toilet = [];
        newArea.washbasinStyle = [];
        newArea.showerStyle = [];
        newArea.bathtubStyle = [];
        newArea.ventilationStyle = [];
        newArea.bathroomAccessories = [];
        newArea.generalAccessories = [];
      } else if (newArea.roomName === "客房") {
        newArea.roomUsage = "";
        newArea.guestRoomLayout = "";
        newArea.guestRoomLayoutRemark = "";
      }

      localFormData.value.areas.push(newArea);
    };

    // 新增項目
    const addItem = (area: any, newItemCategory: string | null = null) => {
      if (area.roomName === "客浴" && newItemCategory) {
        // 根據 newItemCategory 添加新項目到特定子區域
        const newItem = {
          label: "",
          checked: true,
          remark: "",
          isDefault: false,
        };
        area[newItemCategory].push(newItem);
      } else {
        // 對於非客浴區域的通常處理方式
        const newItem = {
          label: "",
          checked: true,
          remark: "",
          isDefault: false,
        };
        if (!area.selectedFacilities) {
          area.selectedFacilities = [];
        }
        area.selectedFacilities.push(newItem);
      }
    };

    // 移除區域
    const removeArea = (index: number) => {
      localFormData.value.areas.splice(index, 1);
    };

    // 移除項目
    const removeItem = (
      area: any,
      index: number,
      itemCategory: string | null = null
    ) => {
      if (itemCategory) {
        // 如果是客浴區域的特定子項目
        if (area[itemCategory] && Array.isArray(area[itemCategory])) {
          area[itemCategory].splice(index, 1);
        }
      } else {
        // 對於其他區域的通用項目
        area.selectedFacilities.splice(index, 1);
      }
    };

    // watchEffect 用於初始化預設選項
    watchEffect(() => {
      localFormData.value.areas.forEach((area) => {
        if (area.roomName && defaultItemsForArea[area.roomName]) {
          const defaultItems = defaultItemsForArea[area.roomName];
          area.selectedFacilities = defaultItems.concat(
            area.selectedFacilities.filter((item) => !item.isDefault)
          );
        }

        if (area.roomName === "客浴") {
          area.toilet = guestBathroomDefaults.value.toilet;
          area.washbasinStyle = guestBathroomDefaults.value.washbasinStyle;
          area.showerStyle = guestBathroomDefaults.value.showerStyle;
          area.bathtubStyle = guestBathroomDefaults.value.bathtubStyle;
          area.ventilationStyle = guestBathroomDefaults.value.ventilationStyle;
          area.bathroomAccessories = [];
          area.generalAccessories = [];
        }
      });
    });

    // watch 用於處理和發送數據
    watch(
      localFormData,
      (newVal) => {
        const transformedAreas = newVal.areas.map((area) => {
          const newArea = { ...area }; // 創建一個新的區域對象

          // 處理廚房和客房等區域的選擇設施
          if (newArea.selectedFacilities) {
            newArea.selectedFacilities = newArea.selectedFacilities
              .filter((item) => item.checked)
              .map((item) => ({
                facilityName: item.label,
                notes: item.remark,
              }));
          }

          // 特別處理客浴區域
          if (newArea.roomName === "客浴") {
            [
              "toilet",
              "washbasinStyle",
              "showerStyle",
              "bathtubStyle",
              "ventilationStyle",
              "bathroomAccessories",
              "generalAccessories",
            ].forEach((category) => {
              if (newArea[category]) {
                newArea[category] = newArea[category]
                  .filter((item) => item.checked)
                  .map((item) => ({
                    facilityName: item.label,
                    notes: item.remark,
                  }));
              }
            });
          }

          return newArea;
        });

        processedData.value = { areas: transformedAreas };
        console.log(processedData.value);
      },
      { deep: true }
    );

    // 監聽區域選擇的變化
    watch(
      localFormData.value.areas,
      (newAreas, oldAreas) => {
        newAreas.forEach((area, index) => {
          if (area.roomName !== oldAreas[index]?.roomName) {
            resetAreaData(area);
          }
        });
      },
      { deep: true }
    );

    watch(
      processedData,
      (newVal) => {
        emit("update:formData", newVal);
      },
      { deep: true }
    );

    return {
      localFormData,
      guestBathroomDefaults,
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
