<template>
  <div class="container">
    <UserInfoHeader />

    <div class="content">
      <div class="content-left">
        <a-space direction="vertical" size="large" fill>
          <BaseInfo class="general-card" />
          <SchoolRollInfo class="general-card" />
        </a-space>
      </div>
      <div class="content-right">
        <a-affix :offset-top="80">
          <a-anchor :change-hash="false">
            <a-anchor-link href="#base-info">基本信息</a-anchor-link>
            <a-anchor-link href="#school-roll-info">学籍信息</a-anchor-link>
          </a-anchor>
        </a-affix>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import UserInfoHeader from './components/user-info-header.vue';
  import BaseInfo from './components/base-info.vue';
  import SchoolRollInfo from './components/school-roll-info.vue';
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px;
    width: 100%;
  }

  .content {
    display: flex;
    margin-top: 12px;

    &-left {
      flex: 1;
      margin-right: 16px;
      overflow: hidden;
      // background-color: var(--color-bg-2);
      :deep(.arco-tabs-nav-tab) {
        margin-left: 16px;
      }
    }

    &-right {
      width: 100px;
    }

    .tab-pane-wrapper {
      padding: 0 16px 16px;
    }
  }

  .mobile {
    .content {
      display: block;

      &-left {
        margin-right: 0;
        margin-bottom: 16px;
      }

      &-right {
        width: 100%;
      }
    }
  }
</style>
