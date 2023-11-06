<template>
  <div class="container">
    <UserInfoHeader />

    <div class="content">
      <div class="content-left">
        <a-space direction="vertical" size="medium" fill>
          <BaseInfo class="general-card" />
          <FamilyInfo class="general-card" />
          <StudyInfo class="general-card" />
          <WorkInfo class="general-card" />
          <AdministrationInfo class="general-card" />
          <JobTitle class="general-card" />
          <WorkTraining1More class="general-card" />
          <WorkTraining1Less class="general-card" />
        </a-space>
      </div>
      <div class="content-right">
        <a-affix :offset-top="60">
          <a-anchor boundary="center">
            <a-anchor-link href="#base-info">基本信息</a-anchor-link>
            <a-anchor-link href="#family-info">家庭信息</a-anchor-link>
            <a-anchor-link href="#study-info">学习经历</a-anchor-link>
            <a-anchor-link href="#work-info">工作履历</a-anchor-link>
            <a-anchor-link href="#administration-info">行政职务</a-anchor-link>
            <a-anchor-link href="#job-title">职称信息</a-anchor-link>
            <a-anchor-link href="#work-training-1-more"
              >岗位锻炼1个月以上</a-anchor-link
            >
            <a-anchor-link href="#work-training-1-less"
              >培训情况一个月以内</a-anchor-link
            >
            <a-anchor-link href="#award-loan-info">表彰奖励</a-anchor-link>
            <a-anchor-link href="#award-practice-info">职业资格</a-anchor-link>
            <a-anchor-link href="#major-change-info"
              >学校年度考核</a-anchor-link
            >
            <a-anchor-link href="#orientation-info">辅导员考核</a-anchor-link>
            <a-anchor-link href="#grad-project-info">教学情况</a-anchor-link>
            <a-anchor-link href="#employment-info">研究项目</a-anchor-link>
            <a-anchor-link href="#tech-innov-info"
              >科研成果(论文)</a-anchor-link
            >
          </a-anchor>
        </a-affix>
      </div>
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

<script lang="ts" setup>
  import UserInfoHeader from './components/user-info-header.vue';
  import BaseInfo from './components/base-info.vue';
  import FamilyInfo from './components/family-info.vue';
  import StudyInfo from './components/study-info.vue';
  import WorkInfo from './components/work-info.vue';
  import AdministrationInfo from './components/administration-info.vue';
  import JobTitle from './components/job-title.vue';
  import WorkTraining1More from './components/work-training-1-more.vue';
  import WorkTraining1Less from './components/work-training-1-less.vue';
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
      width: 130px;
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
</style>
