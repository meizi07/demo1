<template>
  <!--begin::Wrapper-->
  <div class="">
    <!--begin::Form-->
    <VForm
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
      :initial-values="{
        orgId: 'O20230601',
        account: 'admin',
        password: 'admin',
      }"
    >
      <!--begin::Heading-->
      <div class="row g-3 mb-5">
        <div class="col-md-12 text-center signin_logo">
          <img
            :src="getAssetPath('media/logos/sign-in-logo.svg')"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <div class="text-center mb-11">
        <!--begin::Title-->
        <!-- <h1 class="text-dark fw-bolder mb-3">天禧設計</h1> -->
        <!--end::Title-->

        <!--begin::Link-->
        <!-- <div class="text-gray-400 fw-semobold fs-4">
          New Here?

          <router-link to="/sign-up" class="link-primary fw-bold">
            Create an Account
          </router-link>
        </div> -->
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-dark">企業碼</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          tabindex="1"
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="orgId"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="orgId" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-dark">帳號</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          tabindex="1"
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="account"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="account" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-dark fs-6 mb-0">密碼</label>
          <!--end::Label-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <Field
          tabindex="2"
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password"
          autocomplete="off"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
        <!--begin::Link-->
        <div
          class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10 mt-5"
        >
          <router-link to="/password-reset" class="link-primary fs-6">
            忘記密碼?
          </router-link>
          <div>
            <label class="form-check form-check-inline mx-0">
              <input
                class="form-check-input"
                type="checkbox"
                name="toc"
                value="1"
              />
              <span class="form-check-label text-gray-600 fs-6">記住我</span>
            </label>
          </div>
        </div>
        <!--end::Link-->
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button
          tabindex="3"
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> 登入 </span>

          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Submit button-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      orgId: Yup.string().min(4).required().label("orgId"),
      account: Yup.string().min(4).required().label("account"),
      password: Yup.string().min(4).required().label("password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();
      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      // Send login request
      await store.login(formData);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        Swal.fire({
          text: "登入成功",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "繼續",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(() => {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "再試一次!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
