<template>
  <UserInfoHeader />
  <div class="container">
    <a-card class="general-card">
      <BaseInfo />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import BaseInfo from './components/base-info.vue';
  import UserInfoHeader from './components/user-info-header.vue';
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
  }

  .general-card {
    padding-top: 10px;
  }
</style>
