<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-header border-0">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">個人資訊</h3>
      </div>
    </div>
    <div id="kt_account_settings_profile_details" class="collapse show">
      <form id="kt_account_profile_details_form" class="form">
        <div class="card-body border-top p-9">
          <div class="row mb-6">
            <label class="col-lg-4 col-form-label fw-semibold fs-6">照片</label>
            <div class="col-lg-8">
              <div
                class="image-input image-input-outline"
                data-kt-image-input="true"
                style="
                  background-image: url('assets/media/svg/avatars/blank.svg');
                "
              >
                <div
                  class="image-input-wrapper w-125px h-125px"
                  style="background-image: url(media/avatars/300-1.jpg)"
                ></div>
                <label
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="修改頭像"
                >
                  <i class="ki-duotone ki-pencil fs-7">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="avatar_remove" />
                </label>
                <span
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="cancel"
                  data-bs-toggle="tooltip"
                  title="取消頭像"
                >
                  <i class="ki-duotone ki-cross fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <span
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  title="刪除頭像"
                >
                  <i class="ki-duotone ki-cross fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
              </div>
              <div class="form-text">
                檔案格式：png, jpg, jpeg. 檔案上限：10MB
              </div>
            </div>
          </div>
          <div class="row mb-6 align-items-center">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >姓名</label
            >
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-12 fv-row fs-6">林佳儀</div>
              </div>
            </div>
          </div>
          <div class="row mb-6 align-items-center">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >職稱</label
            >
            <div class="col-lg-8 fv-row fs-6">設計助理</div>
          </div>
          <div class="row mb-6 align-items-center">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >聯絡電話</label
            >
            <div class="col-lg-8 fv-row fs-6">0912345678</div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="submit"
            class="btn btn-sm btn-primary me-2"
            id="kt_account_profile_details_submit"
          >
            儲存變更
          </button>
          <button
            type="reset"
            class="btn btn-sm btn-light btn-active-light-primary"
          >
            捨棄變更
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="card mb-5 mb-xl-10">
    <div class="card-header border-0">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">帳號資訊</h3>
      </div>
    </div>
    <div id="kt_account_settings_signin_method" class="collapse show">
      <div class="card-body border-top p-9">
        <div class="d-flex flex-wrap align-items-center">
          <div id="kt_signin_email">
            <div class="fs-6 fw-bold mb-1">帳號</div>
            <div class="fw-semibold text-gray-600">abc123@gmail.com</div>
          </div>
        </div>
        <div class="separator separator-bordered my-6"></div>
        <div class="d-flex flex-wrap align-items-center">
          <div id="kt_signin_password">
            <div class="fs-6 fw-bold mb-1">密碼</div>
            <div class="fw-semibold text-gray-600">************</div>
          </div>
          <div id="kt_signin_password_edit" class="flex-row-fluid d-none">
            <form id="kt_signin_change_password" class="form" novalidate="true">
              <div class="row mb-1">
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="currentpassword"
                      class="form-label fs-6 fw-bold mb-3"
                      >目前密碼</label
                    >
                    <input
                      type="password"
                      class="form-control form-control-lg form-control-solid"
                      name="currentpassword"
                      id="currentpassword"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="newpassword"
                      class="form-label fs-6 fw-bold mb-3"
                      >新密碼</label
                    >
                    <input
                      type="password"
                      class="form-control form-control-lg form-control-solid"
                      name="newpassword"
                      id="newpassword"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="confirmpassword"
                      class="form-label fs-6 fw-bold mb-3"
                      >再次輸入新密碼</label
                    >
                    <input
                      type="password"
                      class="form-control form-control-lg form-control-solid"
                      name="confirmpassword"
                      id="confirmpassword"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                  id="kt_password_submit"
                  type="button"
                  class="btn btn-primary me-2 px-6"
                >
                  儲存變更
                </button>
                <button
                  id="kt_password_cancel"
                  type="button"
                  class="btn btn-color-gray-400 btn-active-light-primary px-6"
                >
                  捨棄變更
                </button>
              </div>
            </form>
          </div>
          <div id="kt_signin_password_button" class="ms-auto">
            <button class="btn btn-sm btn-light btn-active-light-primary">
              變更密碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header border-0">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">郵件通知</h3>
      </div>
    </div>
    <div id="kt_account_settings_signin_method" class="collapse show">
      <div class="card-body border-top p-9">
        <div
          class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6"
        >
          <i class="ki-duotone ki-sms fs-2tx text-primary me-4">
            <i class="path1"></i>
            <i class="path2"></i>
          </i>
          <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
            <div class="mb-3 mb-md-0 fw-semibold">
              <h4 class="text-gray-900 fw-bold">
                是否需要通知時寄發郵件到信箱
              </h4>
              <div class="fs-6 text-gray-700 pe-7">
                開：所有系統通知同時寄發郵件通知到您的信箱。<br />關：關閉系統通知寄發郵件通知到您的信箱。
              </div>
            </div>
            <div
              class="form-check form-check-solid form-check-custom form-switch"
            >
              <input
                class="form-check-input w-45px h-30px"
                type="checkbox"
                id="slackswitch"
                checked
              />
              <label class="form-check-label" for="slackswitch"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-end py-6 px-9">
        <button
          type="submit"
          class="btn btn-sm btn-primary me-2"
          id="kt_account_profile_details_submit"
        >
          儲存變更
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-settings-user",
  components: {},
});
</script>
