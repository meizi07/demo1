<template>
  <div>
    <h1>客户详情页</h1>
    <p>Customer ID: {{ $route.params.customerId }}</p>
    <!-- 在此处加载客户的详细信息 -->
  </div>
</template>

<script lang="ts">
export default {
  name: "bj-client-details",
  mounted() {
    // 在此处根据 this.$route.params.customerId 加载客户的详细信息
  },
};
</script>
