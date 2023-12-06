<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body d-flex flex-column p-9">
      <div class="d-flex justify-content-start mb-10">
        <div class="mw-500px">
          <div class="d-flex flex-stack">
            <div class="fw-semibold pe-10 text-gray-800 fs-6 mb-4">
              屋主裝修工程預算
            </div>
            <div class="text-end fw-bold fs-6 text-gray-800">
              <el-form-item>
                <el-input
                  type="number"
                  v-model="budget"
                  name="budget"
                  placeholder=""
                  size="large"
                ></el-input>
              </el-form-item>
            </div>
            <div class="ms-3 fw-semibold text-gray-800 fs-6 mb-4">元</div>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table g-5 gs-0 mb-0 fw-bold text-gray-800">
          <thead>
            <tr class="border-bottom fs-7 fw-bold text-gray-800">
              <th>類別</th>
              <th>室內坪數</th>
              <th>每坪單價</th>
              <th>預估參考值</th>
              <th>補充說明</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-bottom border-bottom-bordered"
              v-for="(item, index) in tab7formItems"
              :key="index"
            >
              <td class="pe-7">
                <el-select
                  v-model="item.category"
                  class="mb-2"
                  placeholder="請選擇費用分析類別"
                  size="large"
                >
                  <el-option
                    label="預算建議值分析"
                    value="預算建議值分析"
                  ></el-option>
                  <el-option
                    label="設計費用分析"
                    value="設計費用分析"
                  ></el-option>
                  <el-option
                    label="監工費用分析"
                    value="監工費用分析"
                  ></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </td>
              <td class="ps-0">
                <el-input
                  type="number"
                  v-model="item.squareMeters"
                  size="large"
                  placeholder=""
                ></el-input>
              </td>
              <td>
                <el-input
                  type="number"
                  v-model="item.squareMetersPrice"
                  size="large"
                  placeholder=""
                ></el-input>
              </td>
              <td class="pt-8 text-nowrap">
                {{ item.squareMeters * item.squareMetersPrice || 0 }}元
              </td>
              <td class="pt-5">
                <el-input
                  v-model="item.remark"
                  size="large"
                  placeholder="補充說明"
                ></el-input>
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
              <th colspan="6" class="text-primary">
                <button
                  type="button"
                  @click="totalBudgetAddItem()"
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

export default {
  name: "Tab7Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const tab7formItems = ref<any[]>([]);
    const budget = ref("");

    const calculateEstimatedValue = (item) => {
      return (item.squareMeters * item.squareMetersPrice || 0).toString();
    };

    watchEffect(() => {
      if (props.formData && Array.isArray(props.formData)) {
        tab7formItems.value = props.formData.map((item) => ({
          ...item,
          budget: calculateEstimatedValue(item),
        }));
      }
    });

    watch(
      [tab7formItems, budget],
      () => {
        emit("update:formData", {
          items: tab7formItems.value,
          budget: budget.value,
        });
      },
      { deep: true }
    );

    const totalBudgetAddItem = () => {
      tab7formItems.value.push({
        category: "",
        squareMeters: "",
        squareMetersPrice: "",
        estimatedValue: 0,
        remark: "",
      });
    };

    const removeItem = (index: number) => {
      tab7formItems.value.splice(index, 1);
    };

    return {
      tab7formItems,
      budget,
      totalBudgetAddItem,
      removeItem,
    };
  },
};
</script>
