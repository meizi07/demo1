<template>
  <el-form
    id="new_case_form"
    @submit.prevent="submit()"
    :model="targetData"
    :rules="rules"
    ref="formRef"
    class="form"
  >
    <div class="toolbtn d-flex align-items-center gap-2 gap-lg-3">
      <button
        type="submit"
        id="project_edit_submit"
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
        :to="`/befort-project/case-management/management`"
        class="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
      >
        取消
      </router-link>
    </div>
    <div class="card mb-5 mb-xl-10">
      <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
          <div class="me-7 mb-4">
            <div
              class="image-input image-input-outline"
              data-kt-image-input="true"
              :style="{
                backgroundImage: `url(${getAssetPath(
                  '/public/media/avatars/blank.png'
                )})`,
              }"
            >
              <!--begin::Preview existing avatar-->
              <div
                class="image-input-wrapper w-125px h-125px"
                :style="`background-image: url(${getAssetPath(
                  '/public/media/avatars/blank.png'
                )})`"
              ></div>
              <!--end::Preview existing avatar-->

              <!--begin::Label-->
              <label
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="change"
                data-bs-toggle="tooltip"
                title="Change avatar"
              >
                <i class="bi bi-pencil-fill fs-7"></i>

                <!--begin::Inputs-->
                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                <input type="hidden" name="avatar_remove" />
                <!--end::Inputs-->
              </label>
              <!--end::Label-->

              <!--begin::Remove-->
              <span
                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="remove"
                data-bs-toggle="tooltip"
                title="Remove avatar"
              >
                <!-- @click="removeImage()" -->

                <i class="bi bi-x fs-2"></i>
              </span>
              <!--end::Remove-->
            </div>
          </div>
        </div>

        <div class="d-flex overflow-auto h-55px">
          <ul
            class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
          >
            <li class="nav-item">
              <a
                class="nav-link text-active-primary active me-6"
                data-bs-toggle="tab"
                role="tab"
                href="#addCase_tab_pane_1"
              >
                案件資訊
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-active-primary me-6"
                data-bs-toggle="tab"
                role="tab"
                href="#addCase_tab_pane_2"
              >
                客戶資料
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab-content" id="addCase_tab">
      <div
        class="tab-pane fade show active"
        id="addCase_tab_pane_1"
        role="tabpanel"
      >
        <div class="card mb-5 mb-xl-10">
          <div class="card-header">
            <div class="card-title m-0">
              <h3 class="fw-bold m-0">案件類型</h3>
            </div>
          </div>
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
                        >案件類型</label
                      >
                    </td>
                    <td class="fw-bold">
                      <el-form-item class="w-100" prop="targetTitle">
                        <el-select
                          placeholder="請選擇案件類型"
                          name="assign"
                          as="select"
                          size="large"
                        >
                          <el-option value="0">Select user...</el-option>
                          <el-option label="Karina Clark" value="1"
                            >Karina Clark</el-option
                          >
                        </el-select>
                      </el-form-item>
                    </td>
                  </tr>
                  <tr class="pj_link_engineering">
                    <td class="text-muted">
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold mb-4"
                        >設計案件編號</label
                      >
                    </td>
                    <td class="fw-bold">
                      <div class="d-flex align-items-center w-100">
                        <el-form-item class="w-100" prop="targetTitle">
                          <el-select
                            placeholder="請選擇設計案件編號"
                            name="assign"
                            as="select"
                            size="large"
                          >
                            <el-option value="0">Select user...</el-option>
                            <el-option label="Karina Clark" value="1"
                              >Karina Clark</el-option
                            >
                          </el-select>
                        </el-form-item>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-title m-0">
              <h3 class="fw-bold m-0">案件狀態</h3>
            </div>
          </div>
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
                        >案件名稱</label
                      >
                    </td>
                    <td class="fw-bold">
                      <el-form-item prop="targetTitle">
                        <el-input
                          v-model="targetData.targetTitle"
                          placeholder="案件名稱"
                          name="targetTitle"
                        ></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">物件地址</td>
                    <td class="fw-bold">
                      <input
                        type="text"
                        name="pj_addr"
                        class="form-control"
                        placeholder="物件地址"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">預計開始日</td>
                    <td class="fw-bold">
                      <div
                        class="position-relative d-flex align-items-center date_right_icon w-100"
                      >
                        <input
                          class="form-control single_datepicker"
                          name="pj_start"
                          placeholder="預計開始日"
                          value=""
                        />
                        <i
                          class="ki-duotone ki-calendar-8 position-absolute mx-4 mb-1 fs-2"
                          ><span class="path1"></span><span class="path2"></span
                          ><span class="path3"></span><span class="path4"></span
                          ><span class="path5"></span><span class="path6"></span
                        ></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">預計結束日</td>
                    <td class="fw-bold">
                      <div
                        class="position-relative d-flex align-items-center date_right_icon w-100"
                      >
                        <input
                          class="form-control single_datepicker"
                          name="pj_end"
                          placeholder="預計結束日"
                          value=""
                        />
                        <i
                          class="ki-duotone ki-calendar-8 position-absolute mx-4 mb-1 fs-2"
                          ><span class="path1"></span><span class="path2"></span
                          ><span class="path3"></span><span class="path4"></span
                          ><span class="path5"></span><span class="path6"></span
                        ></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted">案件負責人</td>
                    <td class="fw-bold">
                      <select
                        class="form-select"
                        name="pj_principal"
                        data-control="select2"
                        data-hide-search="true"
                        data-placeholder="請選擇案件負責人"
                      >
                        <option></option>
                        <option value="0">林佳儀</option>
                        <option value="1">負責人2</option>
                        <option value="2">負責人3</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade show" id="addCase_tab_pane_2" role="tabpanel">
        <div class="card mb-5 mb-xl-10">
          <div class="card-header align-items-center border-0">
            <div class="card-title m-0">
              <h3 class="fw-bold m-0"></h3>
            </div>
            <button
              type="button"
              class="btn btn-sm fw-bold bg-light btn-color-gray-700 btn-active-color-primary"
              data-bs-toggle="modal"
              data-bs-target="#modal_project_type"
            >
              選擇客戶
            </button>
          </div>
          <div class="card-body d-flex flex-column p-9 pt-0">
            <div class="table-responsive">
              <table
                class="table align-middle table-row-bordered mb-0 fs-6 gy-5 table_half_col"
              >
                <tbody class="fw-semibold text-gray-800">
                  <tr>
                    <td class="text-muted">客戶編號</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">客戶來源</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">業主姓名</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">服務項目</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">連絡電話</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">連絡手機</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">聯絡地址</td>
                    <td class="fw-bold">-</td>
                  </tr>
                  <tr>
                    <td class="text-muted">聯絡信箱</td>
                    <td class="fw-bold">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";

interface NewAddressData {
  targetTitle: string;
  assign: string;
  dueDate: string;
  targetDetails: string;
  tags: Array<string>;
}

export default {
  name: "bj-case-add",
  components: {},
  setup() {
    const authStore = useAuthStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref<boolean>(false);

    const targetData = ref<NewAddressData>({
      targetTitle: "",
      assign: "",
      dueDate: "",
      targetDetails: "",
      tags: ["important", "urgent"],
    });

    const rules = ref({
      targetTitle: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      assign: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      dueDate: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      tags: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
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

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {});
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    // async function fetchData() {
    //   try {
    //     const formData = new FormData();
    //     formData.append("orgId", authStore.user.orgId);
    //     formData.append("account", authStore.user.account);
    //     formData.append("token", authStore.user.token);
    //     const response = await ApiService.post(
    //       "/projectBefore/getProjectInfo",
    //       formData
    //     );
    //     const bacicInfo = response.data.success.ProjectInfo;
    //     // 使用 responseData.ProjectInfo 更新数据
    //     responseData.ProjectInfo = bacicInfo;
    //   } catch (error) {
    //     console.error("API 請求錯誤：", error);
    //   }
    // }

    // const removeImage = () => {
    //   profileDetails.value.avatar = "/media/avatars/blank.png";
    // };

    onMounted(() => {
      // fetchData();
    });

    return {
      getAssetPath,
      // responseData,
      // removeImage,
      submit,
      targetData,
      loading,
      formRef,
      rules,
    };
  },
};
</script>
