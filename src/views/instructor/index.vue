<template>
  <UserInfoHeader />
  <div class="container">
    <a-space direction="vertical" size="large" fill>
      <BaseInfo class="general-card" />
      <SchoolRollInfo class="general-card" />
    </a-space>
  </div>
</template>

<script lang="ts" setup>
  import UserInfoHeader from './components/user-info-header.vue';
  import BaseInfo from './components/base-info.vue';
  import SchoolRollInfo from './components/school-roll-info.vue';
</script>

<style scoped lang="less">
  .container {
    padding: 20px 20px 0 20px;
  }
</style>
