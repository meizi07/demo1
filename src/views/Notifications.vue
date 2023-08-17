<template>
  <Widget1></Widget1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Widget1 from "@/components/widgets/lists/Widget1.vue";

export default defineComponent({
  name: "main-notifications",
  components: {
    Widget1,
  },
});
</script>
