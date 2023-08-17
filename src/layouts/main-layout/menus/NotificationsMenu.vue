<template>
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
    data-kt-menu="true"
  >
    <!--begin::Heading-->
    <div class="menu-item px-3p">
      <h3 class="text-dark fw-semobold px-9 mt-10 mb-6">
        提醒 <span class="fs-8 ps-3">24 項提醒</span>
      </h3>
    </div>
    <!--end::Heading-->
    <div class="separator opacity-100"></div>

    <div class="menu-item px-3">
      <!--begin::Items-->
      <div class="scroll-y mh-325px my-5 px-8">
        <template v-for="(item, index) in data2" :key="index">
          <!--begin::Item-->
          <div class="d-flex flex-stack py-4">
            <!--begin::Section-->
            <div class="d-flex align-items-center me-2">
              <!--begin::Title-->
              <router-link
                to="/notifications"
                class="text-gray-800 text-hover-primary fw-semobold menu_notifi_wrap"
                >{{ item.message }}</router-link
              >
              <!--end::Title-->
            </div>
            <!--end::Section-->

            <!--begin::Label-->
            <span class="badge badge-light fs-8">{{ item.time }}</span>
            <!--end::Label-->
          </div>
          <!--end::Item-->
        </template>
        <!--end::Items-->

        <div class="py-3 text-center border-top">
          <router-link
            to="/notifications"
            class="btn btn-color-gray-600 btn-active-color-primary"
          >
            查看全部
            <KTIcon icon-name="arrow-right" icon-class="fs-5" />
          </router-link>
        </div>
      </div>
      <!--end::Items-->
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "notifications-menu",
  components: {},
  setup() {
    const data2 = [
      {
        message:
          "提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容提醒內容",
        time: "Just now",
      },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "2 hrs" },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "5 hrs",
      },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "2 days" },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "1 week",
      },
      {
        message: "提醒內容提醒內容提醒內容提醒內容",
        time: "Mar 5",
      },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "May 15" },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "Apr 3" },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "Jun 30" },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "Jul 10" },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "Sep 10" },
      { message: "提醒內容提醒內容提醒內容提醒內容", time: "Dec 10" },
    ];

    return {
      data2,
      getAssetPath,
    };
  },
});
</script>
<style scoped lang="scss">
.menu_notifi_wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
