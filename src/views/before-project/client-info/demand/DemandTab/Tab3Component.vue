<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <table
          class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
        >
          <tbody class="fw-semibold text-gray-800">
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  房屋資料</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="HousingData">
                    <el-select
                      v-model="localFormData.housingData"
                      placeholder="請選擇房屋資料"
                      name="housingData"
                      as="select"
                      size="large"
                    >
                      <!-- @click="fetchDropdown" -->
                      <el-option label="新購新成屋" value="新購新成屋"
                        >新購新成屋</el-option
                      >
                      <el-option label="新購預售屋" value="新購預售屋"
                        >新購預售屋</el-option
                      >
                      <el-option label="新購中古屋" value="新購中古屋"
                        >新購中古屋</el-option
                      >
                    </el-select>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4"
                  >屋齡(年)</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="HousingAge">
                    <el-input
                      v-model="localFormData.housingAge"
                      placeholder=""
                      name="housingAge"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  大樓/透天</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="BuildingCategory">
                    <el-select
                      v-model="localFormData.buildingCategory"
                      placeholder="大樓/透天"
                      name="buildingCategory"
                      as="select"
                      size="large"
                    >
                      <!-- @click="fetchDropdown" -->
                      <el-option label="大樓" value="大樓">大樓</el-option>
                      <el-option label="透天" value="透天">透天</el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  是否有電梯</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="isElevator">
                    <el-select
                      v-model="localFormData.isElevator"
                      placeholder="請選擇是否有電梯"
                      name="isElevator"
                      as="select"
                      size="large"
                    >
                      <!-- @click="fetchDropdown" -->
                      <el-option label="是" value="是">是</el-option>
                      <el-option label="否" value="否">否</el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  電梯大小</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="elevator">
                    <el-input
                      v-model="localFormData.elevator"
                      placeholder=""
                      name="elevator"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  室內總坪數(坪)</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="TotalPin">
                    <el-input
                      v-model="localFormData.totalPin"
                      placeholder=""
                      name="totalPin"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  格局</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="Format">
                    <el-input
                      v-model="localFormData.format"
                      placeholder=""
                      name="format"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">
                <label class="d-flex align-items-center fs-6 fw-semobold mb-4">
                  物件地址</label
                >
              </td>
              <td class="fw-bold">
                <div class="d-flex align-items-center w-100">
                  <el-form-item class="w-100" prop="ContactEmail">
                    <el-input
                      v-model="localFormData.ContactEmail"
                      placeholder=""
                      name="ContactEmail"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, watchEffect } from "vue";

export default {
  name: "Tab3Component",
  props: {
    formData: Object,
  },
  setup(props, { emit }) {
    const localFormData = ref({ ...props.formData });

    // 當 props.formData 變化時，更新 localFormData
    watchEffect(() => {
      localFormData.value = { ...props.formData };
    });

    // 當 localFormData 變化時，通知父组件
    watch(
      localFormData,
      (newVal) => {
        emit("update:formData", newVal);
      },
      { deep: true }
    );

    return {
      localFormData,
    };
  },
};
</script>
