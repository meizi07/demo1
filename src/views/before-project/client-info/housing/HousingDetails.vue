<template>
  <div>housing details page</div>
  <h1>projectID: {{ projectId }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useHousingStore } from "@/stores/housing";

const route = useRoute();
const projectId = route.params.projectId;
const housingStore = useHousingStore();

housingStore.fetchSingleHousingData(projectId as string);
</script>
