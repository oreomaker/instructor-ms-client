<template>
  <UserInfoHeader />
  <div class="container">
    <a-card class="general-card">
      <BaseInfo />
    </a-card>
    <a-card class="general-card">
      <SchoolRollInfo />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import BaseInfo from './components/base-info.vue';
  import UserInfoHeader from './components/user-info-header.vue';
  import SchoolRollInfo from './components/school-roll-info.vue';
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
  }

  .general-card {
    margin-bottom: 20px;
    padding-top: 10px;
  }
</style>
