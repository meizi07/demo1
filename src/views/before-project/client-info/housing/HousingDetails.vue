<template>
  <h1>housing details page</h1>
  <h2>projectID: {{ projectId }}</h2>
  <br />
  <pre>{{ singleHousingData }}</pre>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useHousingStore } from "@/stores/housing";

const route = useRoute();
const projectId = route.params.projectId;
const housingStore = useHousingStore();
const { singleHousingData } = storeToRefs(housingStore);

housingStore.fetchSingleHousingData(projectId as string);
</script>
