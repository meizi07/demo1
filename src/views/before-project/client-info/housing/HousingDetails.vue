<template>
  <div class="toolbtn container-xxl d-flex align-items-center gap-2 gap-lg-3">
    <!-- 暫時隱藏 -->
    <!-- <button type="submit" class="btn btn-sm fw-bold btn-success">送簽</button> -->

    <router-link
      :to="`/befort-project/client-info/housing-list`"
      class="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
    >
      編輯
    </router-link>
  </div>

  <div class="d-flex flex-column gap-7 gap-lg-10">
    <div class="d-flex flex-wrap flex-stack gap-5 gap-lg-10">
      <div class="common_tab w-100 pt-3">
        <ul
          class="nav nav-pills nav-pills-custom row position-relative mx-0 mb-3"
        >
          <li
            v-for="(tab, index) in HOUSING_TABS"
            :key="tab.id"
            class="nav-item p-0"
          >
            <a
              class="nav-link d-flex justify-content-center w-100 border-0 h-100"
              :class="{ active: index === 0 }"
              data-bs-toggle="tab"
              role="tab"
              :href="`#${tab.id}`"
            >
              <span class="nav-text text-gray-800 fw-bold fs-6 mb-3">
                {{ tab.title }}
              </span>
              <span
                class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="tab-content">
      <div
        v-for="(tab, index) in HOUSING_TABS"
        :key="tab.id"
        class="tab-pane fade show"
        :class="{ active: index === 0 }"
        :id="tab.id"
        role="tabpanel"
      >
        <template v-if="index === 0">
          <ViewProjectInfo />
          <ViewArea />
        </template>

        <template v-if="index === 1">
          <ViewMeasuringRecord />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useHousingStore } from "@/stores/housing";
import ViewProjectInfo from "@/components/housing/ViewProjectInfo.vue";
import ViewArea from "@/components/housing/ViewArea.vue";
import ViewMeasuringRecord from "@/components/housing/ViewMeasuringRecord.vue";
import { HOUSING_TABS } from "@/constants/housing";

const route = useRoute();
const projectId = route.params.projectId;
const housingStore = useHousingStore();

housingStore.fetchSingleHousingData(projectId as string);
</script>
