<template>
  <div class="container">
    <a-card class="general-card">
      <a-input-search
        size="large"
        :style="{ width: '400px' }"
        placeholder="输入辅导员姓名或工号"
        search-button
      />
    </a-card>

    <div class="content">
      <div class="content-left">
        <a-space direction="vertical" size="medium" fill> </a-space>
      </div>
      <div class="content-right"> </div>
    </div>
    <div class="absolute">
      <a-button type="outline">
        <template #icon>
          <icon-export />
        </template>
        导出
      </a-button>
    </div>
  </div>
</template>

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

  .absolute {
    position: fixed;
    bottom: 30px;
    right: 24px;
  }

  .general-card {
    display: flex;
    justify-content: space-around;
    padding-top: 16px;
    margin-top: 16px;
  }
</style>
