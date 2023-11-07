<template>
  <el-form
    id="new_case_form"
    @submit.prevent="submit()"
    :model="targetData"
    :rules="rules"
    ref="formRef"
    class="form"
  >
    <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
      <button
        :data-kt-indicator="loading ? 'on' : null"
        type="submit"
        class="btn btn-sm fw-bold btn-primary"
      >
        <span v-if="!loading" class="indicator-label"> 儲存 </span>
        <span v-if="loading" class="indicator-progress">
          請稍等...
          <span
            class="spinner-border spinner-border-sm align-middle ms-2"
          ></span>
        </span>
      </button>
      <router-link
        :to="`/befort-project/client-info/client-list`"
        class="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
      >
        取消
      </router-link>
    </div>
    <div class="d-flex flex-column gap-7 gap-lg-10">
      <div class="d-flex flex-wrap flex-stack gap-5 gap-lg-10">
        <div class="common_tab w-100 pt-3">
          <ul
            class="nav nav-pills nav-pills-custom row position-relative mx-0 mb-3"
          >
            <li
              class="nav-item p-0"
              v-for="(tab, tabIndex) in tabs"
              :key="tabIndex"
            >
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                :class="{ active: tabIndex === activeTab }"
                data-bs-toggle="pill"
                :href="'#demand_add_pane_' + (tabIndex + 1)"
                @click="setActiveTab(tabIndex)"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3">{{
                  tab.label
                }}</span>
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px"
                  :class="{
                    'bg-primary': tabIndex === activeTab,
                    'bg-light': tabIndex !== activeTab,
                  }"
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="demandAdd">
        <div
          class="tab-pane fade show active"
          id="demand_add_pane_1"
          role="tabpanel"
        >
          <div class="card mb-5 mb-xl-10">
            <div class="card-body d-flex flex-column p-9">
              <div class="table-responsive">
                <table
                  class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
                >
                  <tbody class="fw-semibold text-gray-800">
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          案件編號</label
                        >
                      </td>
                      <td class="fw-bold"><!-- {{ - }} -->-</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                          >訪談日期</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div
                          class="position-relative d-flex align-items-center date_right_icon w-100"
                        >
                          <el-form-item class="w-100" prop="contactDate">
                            <el-date-picker
                              v-model="targetData.contactDate"
                              type="date"
                              placeholder="請選擇日期"
                              size="large"
                              :display-format="'yyyy-MM-dd'"
                              :value-format="'YYYY-MM-DD'"
                            />
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <InfoCard :tableData="tab1tableData2"></InfoCard>
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_2" role="tabpanel">
          <TableCard :tableHeaders="tab2HeaderData" :tableData="apiData2" />
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_3" role="tabpanel">
          <div class="card">
            <div class="card-body d-flex flex-column p-9">
              <div class="table-responsive">
                <table
                  class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
                >
                  <tbody class="fw-semibold text-gray-800">
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          房屋資料</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="CustomerSource">
                            <el-select
                              v-model="targetData.CustomerSource"
                              placeholder="請選擇房屋資料"
                              name="CustomerSource"
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
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                          >屋齡(年)</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="CustomerName">
                            <el-input
                              v-model="targetData.CustomerName"
                              placeholder=""
                              name="CustomerName"
                              size="large"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          大樓/透天</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="CustomerSource">
                            <el-select
                              v-model="targetData.CustomerSource"
                              placeholder="大樓/透天"
                              name="CustomerSource"
                              as="select"
                              size="large"
                            >
                              <!-- @click="fetchDropdown" -->
                              <el-option label="大樓" value="大樓"
                                >大樓</el-option
                              >
                              <el-option label="透天" value="透天"
                                >透天</el-option
                              >
                            </el-select>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          是否有電梯</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="CustomerSource">
                            <el-select
                              v-model="targetData.CustomerSource"
                              placeholder="請選擇是否有電梯"
                              name="CustomerSource"
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
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          電梯大小</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="ContactMobile">
                            <el-input
                              v-model="targetData.ContactMobile"
                              placeholder=""
                              name="ContactMobile"
                              size="large"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          室內總坪數(坪)</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="ContactAddress">
                            <el-input
                              v-model="targetData.ContactAddress"
                              placeholder=""
                              name="ContactAddress"
                              size="large"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          格局</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="ContactEmail">
                            <el-input
                              v-model="targetData.ContactEmail"
                              placeholder=""
                              name="ContactEmail"
                              size="large"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <label
                          class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >
                          物件地址</label
                        >
                      </td>
                      <td class="fw-bold">
                        <div class="d-flex align-items-center w-100">
                          <el-form-item class="w-100" prop="ContactEmail">
                            <el-input
                              v-model="targetData.ContactEmail"
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
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_4" role="tabpanel">
          <div class="card mb-5 mb-xl-10">
            <div class="card-body d-flex flex-column p-9">
              <div class="mb-0 fs-6 gy-5">
                <div id="kt_ecommerce_add_product_options">
                  <div class="form-group">
                    <div class="d-flex flex-column gap-8">
                      <div
                        class="form-group d-flex align-items-center gap-5 client_add_repeater_item"
                        v-for="(item, index) in formItems"
                        :key="index"
                      >
                        <div
                          class="w-100 position-relative"
                          v-for="field in fields"
                          :key="field.name"
                        >
                          <label class="form-label">{{ field.label }}</label>
                          <div class="w-100">
                            <template v-if="field.type === 'select'">
                              <el-form-item class="w-100">
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
                              <el-form-item class="w-100">
                                <el-input
                                  v-model="item[field.name]"
                                  :placeholder="field.label"
                                  :name="field.name"
                                  size="large"
                                ></el-input>
                              </el-form-item>
                            </template>
                          </div>
                        </div>
                        <div>
                          <label class="d-block form-label">刪除</label>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-8">
                    <button
                      type="button"
                      @click="addItem"
                      class="btn btn-sm btn-light-primary"
                    >
                      <i class="ki-duotone ki-plus fs-2"></i>新增項目
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_5" role="tabpanel">
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
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_6" role="tabpanel">
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
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_7" role="tabpanel">
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
                          name="屋主裝修工程預算"
                          placeholder=""
                          size="large"
                        ></el-input>
                      </el-form-item>
                    </div>
                    <div class="ms-3 fw-semibold text-gray-800 fs-6 mb-4">
                      元
                    </div>
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
                            value="0"
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
                          v-model="item.quantity"
                          size="large"
                          placeholder=""
                        ></el-input>
                      </td>
                      <td>
                        <el-input
                          type="number"
                          v-model="item.price"
                          size="large"
                          placeholder=""
                        ></el-input>
                      </td>
                      <td class="pt-8 text-nowrap">
                        {{ item.quantity * item.price || 0 }}元
                      </td>
                      <td class="pt-5">
                        <el-input
                          v-model="item.description"
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
        </div>
        <div class="tab-pane fade show" id="demand_add_pane_8" role="tabpanel">
          <!-- <div class="card mb-5 mb-xl-10">
            <div class="card-body d-flex flex-column p-9">
              <div class="mb-0 fs-6 gy-5">
                <div id="kt_ecommerce_add_product_options">
                  <div class="form-group">
                    <div class="d-flex flex-column gap-8">
                      <div
                        v-for="(item, index) in tab8formItems"
                        :key="index"
                        data-repeater-item
                        class="form-group d-flex align-items-center gap-5 demand_add_info_repeater_item"
                      >
                        <div class="w-100">
                          <label class="form-label">檔案類型</label>
                          <select
                            class="form-select"
                            v-model="item.fileType"
                            @change="
                              updateInputType(index, $event.target.value)
                            "
                          >
                            <option value="參考資料">參考資料</option>
                            <option value="參考網址">參考網址</option>
                          </select>
                        </div>
                        <div class="w-100">
                          <label class="form-label">檔案名稱</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="item.fileName"
                            placeholder="檔案名稱"
                          />
                        </div>
                        <div class="w-100">
                          <label class="form-label">附件</label>
                          <input
                            v-if="item.fileType === '參考資料'"
                            type="file"
                            class="form-control w-100"
                            v-model="item.attachment"
                          />
                          <input
                            v-else
                            type="text"
                            class="form-control"
                            v-model="item.referenceUrl"
                            placeholder="參考網址"
                          />
                        </div>

                        <div>
                          <button
                            type="button"
                            @click="removeItem(index)"
                            class="btn btn-sm btn-icon text-muted text-hover-danger"
                          >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-8">
                    <button
                      type="button"
                      @click="refAddItem()"
                      class="btn btn-sm btn-light-primary"
                    >
                      <i class="ki-duotone ki-plus fs-2"></i>新增項目
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted, computed, watch } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import { useRoute } from "vue-router";

import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useIdStore } from "@/stores/useId";

import InfoCard from "@/components/customers/cards/overview/InfoCard.vue";
import TableCard from "@/components/customers/cards/overview/TableCard.vue";
import type {
  Customer,
  Housing,
  ClientDetailsSuccessData,
} from "@/utils/share";
import {
  getSequence,
  getGenderLabel,
  getAgeLabel,
  getSpecialDemandLabel,
} from "@/utils/function";

interface AddClientData {
  projectID: string;
  contactDate: string;
  CustomerSource: string;
  CustomerName: string;
  ServiceItem: string;
  ContactTel: string;
  ContactMobile: string;
  ContactAddress: string;
  ContactEmail: string;
}

export default {
  name: "bj-demand-add",
  components: { InfoCard, TableCard },
  setup() {
    const authStore = useAuthStore();
    const useId = useIdStore();
    const responseData = ref<null | Object>(null);
    const housingData = ref<Housing[] | null>(null);
    const formRef = ref<null | HTMLFormElement>(null);
    const formItems = ref<any[]>([]);
    const tab5formItems = ref<any[]>([]);
    const tab6formItems = ref<any[]>([]);
    const tab7formItems = ref<any[]>([]);
    const tab8formItems = ref<any[]>([]);
    const loading = ref<boolean>(false);

    const clientData = ref<Customer | null>(null);
    clientData.value = useId.selectedClient;

    const targetData = ref<AddClientData>({
      projectID: "",
      contactDate: "",
      CustomerSource: "",
      CustomerName: "",
      ServiceItem: "",
      ContactTel: "",
      ContactMobile: "",
      ContactAddress: "",
      ContactEmail: "",
    });

    // 建立頁籤
    const tabs = ref([
      { label: "客戶資料" },
      { label: "居住成員" },
      { label: "房屋資料" },
      { label: "居住需求" },
      { label: "風格材質" },
      { label: "安全形式" },
      { label: "預算分析" },
      { label: "參考資料" },
    ]);
    const activeTab = ref(0);

    function setActiveTab(tabIndex: number) {
      activeTab.value = tabIndex;
    }

    // 取得客戶資料
    async function fetchData() {
      try {
        const formData = new FormData();
        formData.append("orgId", authStore.user.orgId);
        formData.append("account", authStore.user.account);
        formData.append("token", authStore.user.token);
        if (clientData.value?.CustomerID) {
          formData.append("customerID", clientData.value?.CustomerID);
        }

        const response = await ApiService.post(
          "/projectBefore/getCustInfoByID",
          formData
        );

        responseData.value = response.data;

        const successData = response.data.success as ClientDetailsSuccessData;
        console.log(successData);

        // 更新 tableData2
        if (clientData.value) {
          tab1tableData2.value[0].value = clientData.value?.CustomerID;
          tab1tableData2.value[1].value = clientData.value?.CustomerSource;
          tab1tableData2.value[2].value = clientData.value?.Name;
          tab1tableData2.value[3].value = clientData.value?.ServiceItem;
          tab1tableData2.value[4].value = clientData.value?.Telephone;
          tab1tableData2.value[5].value = clientData.value?.Mobile;
          tab1tableData2.value[6].value = clientData.value?.ContactAddress;
          tab1tableData2.value[7].value = clientData.value?.Email;
        }

        // 獲取 Housing 數據
        const housingDataArray = successData.Housing as Housing[];
        const processedHousingData = housingDataArray.map((housing) => ({
          ...housing,
          Sequence: getSequence(housing.Sequence),
          Sex: getGenderLabel(housing.Sex),
          Age: getAgeLabel(housing.Age),
          SpecialDemand: getSpecialDemandLabel(housing.SpecialDemand),
        }));

        housingData.value = processedHousingData;
        apiData2.value = housingData.value;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const tab1tableData2 = ref([
      { label: "客戶編號", value: "" },
      { label: "客戶來源", value: "" },
      { label: "業主姓名", value: "" },
      { label: "服務項目", value: "" },
      { label: "連絡電話", value: "" },
      { label: "連絡手機", value: "" },
      { label: "聯絡地址", value: "" },
      { label: "聯絡信箱", value: "" },
    ]);

    const tab2HeaderData = ref([
      { label: "編號", field: "Sequence" },
      { label: "性別", field: "Sex" },
      { label: "年齡", field: "Age" },
      { label: "特殊需求", field: "SpecialDemand" },
      { label: "備註", field: "Remark" },
    ]);
    const apiData2 = ref<Housing[]>([]);

    // 風格材質欄位
    const styleFields = [
      {
        name: "編號",
        label: "編號",
        type: "item-number",
        class: "w-25",
      },
      {
        name: "材質",
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
        name: "用途",
        label: "用途",
        type: "input",
        class: "w-100",
      },
      {
        name: "補充說明",
        label: "補充說明",
        type: "input",
        class: "w-100",
      },
    ];

    const styleAddItem = () => {
      tab5formItems.value.push({
        編號: "",
        材質: "",
        用途: "",
        補充說明: "",
      });
    };

    // 安全形式欄位
    const securityFields = [
      {
        name: "編號",
        label: "編號",
        type: "item-number",
        class: "w-25",
      },
      {
        name: "項目",
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
        name: "用途",
        label: "用途",
        type: "input",
        class: "w-100",
      },
      {
        name: "補充說明",
        label: "補充說明",
        type: "input",
        class: "w-100",
      },
    ];
    const securityAddItem = () => {
      tab6formItems.value.push({
        編號: "",
        材質: "",
        用途: "",
        補充說明: "",
      });
    };

    const budget = ref("");
    const totalBudgetAddItem = () => {
      tab7formItems.value.push({
        fileType: "參考資料",
        fileName: "",
        attachment: "",
        referenceUrl: "",
      });
    };

    const refAddItem = () => {
      tab8formItems.value.push({
        性別: "",
        年齡: "",
        特殊需求: "",
        備註: "",
      });
    };

    const addItem = () => {
      formItems.value.push({
        性別: "",
        年齡: "",
        特殊需求: "",
        備註: "",
      });
    };

    const removeItem = (index: number) => {
      // 根据索引删除表单项
      formItems.value.splice(index, 1);
    };

    const rules = ref({
      projectID: [
        {
          required: true,
        },
      ],
      contactDate: [
        {
          required: true,
          message: "請選擇訪談日期",
          trigger: "blur",
        },
      ],
      CustomerSource: [
        {
          required: true,
        },
      ],
      CustomerName: [
        {
          required: true,
          message: "請輸入客戶名稱",
          trigger: "blur",
        },
      ],
      ServiceItem: [
        {
          required: true,
        },
      ],
      ContactTel: [
        {
          required: true,
        },
      ],
      ContactMobile: [
        {
          required: true,
        },
      ],
      ContactAddress: [
        {
          required: true,
        },
      ],
      ContactEmail: [
        {
          required: true,
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;

          const formData = new FormData();
          formData.append("orgId", authStore.user.orgId);
          formData.append("account", authStore.user.account);
          formData.append("token", authStore.user.token);

          for (const key in targetData.value) {
            if (Object.prototype.hasOwnProperty.call(targetData.value, key)) {
              formData.append(key, targetData.value[key]);
            }
          }

          const members = formItems.value.map((item: any) => ({
            Sex: item.性別,
            Age: item.年齡,
            SpecialDemand: item.特殊需求,
            Remark: item.備註,
          }));

          formData.append("Member", JSON.stringify(members));

          for (const [key, value] of formData.entries()) {
            console.log(`Key: ${key}, Value: ${value}`);
          }

          ApiService.post("/projectBefore/addCustomerInfo", formData)
            .then((response) => {
              loading.value = false;
              if (response.data.success) {
                console.log(response);
                Swal.fire({
                  text: "送出成功",
                  icon: "success",
                  buttonsStyling: false,
                  confirmButtonText: "繼續",
                  heightAuto: false,
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then(() => {});
              } else {
                console.log(response.data);
                Swal.fire({
                  text: "送出失敗，請檢查資料是否正確",
                  icon: "error",
                  buttonsStyling: false,
                  confirmButtonText: "繼續",
                  heightAuto: false,
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                });
              }
            })
            .catch((error) => {
              loading.value = false;
              console.error("API 请求错误：", error);
            });
        } else {
          Swal.fire({
            text: "請檢查是否有未填欄位",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "繼續",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    onMounted(() => {
      fetchData();
    });

    return {
      getAssetPath,
      setActiveTab,
      tabs,
      activeTab,
      styleFields,
      securityFields,
      budget,
      formItems,
      tab5formItems,
      tab6formItems,
      tab7formItems,
      tab8formItems,
      submit,
      targetData,
      loading,
      formRef,
      rules,
      addItem,
      styleAddItem,
      securityAddItem,
      totalBudgetAddItem,
      refAddItem,
      removeItem,
      tab1tableData2,
      tab2HeaderData,
      apiData2,
    };
  },
};
</script>
