<template>
  <div class="container">
    <a-card class="central-card">
      <a-input-search
        v-model="searchValue"
        size="large"
        :style="{ width: '400px' }"
        placeholder="输入辅导员姓名或工号"
        search-button
      />
      {{ searchValue }}
    </a-card>

    <div v-if="searchValue == ''" class="content">
      <a-card style="width: 100%">
        <a-skeleton>
          <a-space direction="vertical" :style="{ width: '100%' }" size="large">
            <a-skeleton-line :rows="3" />
            <a-skeleton-shape />
          </a-space>
        </a-skeleton>
      </a-card>
    </div>
    <div v-else-if="searchValue != ''" class="content">
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
          <Award class="general-card" />
          <Qualification class="general-card" />
          <AnnualAssess class="general-card" />
          <InstructorAssess class="general-card" />
          <TeachingInfo class="general-card" />
          <ResearchProject class="general-card" />
          <RdAchievement class="general-card" />
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
              >培训情况1个月以内</a-anchor-link
            >
            <a-anchor-link href="#award">表彰奖励</a-anchor-link>
            <a-anchor-link href="#qualification">职业资格</a-anchor-link>
            <a-anchor-link href="#annual-assess">学校年度考核</a-anchor-link>
            <a-anchor-link href="#instructor-assess">辅导员考核</a-anchor-link>
            <a-anchor-link href="#teaching-info">教学情况</a-anchor-link>
            <a-anchor-link href="#research-project">研究项目</a-anchor-link>
            <a-anchor-link href="#rd-achievement">科研成果(论文)</a-anchor-link>
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

<script setup lang="ts">
  import { ref } from 'vue';
  import BaseInfo from './components/base-info.vue';
  import FamilyInfo from './components/family-info.vue';
  import StudyInfo from './components/study-info.vue';
  import WorkInfo from './components/work-info.vue';
  import AdministrationInfo from './components/administration-info.vue';
  import JobTitle from './components/job-title.vue';
  import WorkTraining1More from './components/work-training-1-more.vue';
  import WorkTraining1Less from './components/work-training-1-less.vue';
  import Award from './components/award.vue';
  import Qualification from './components/qualification.vue';
  import AnnualAssess from './components/annual-assess.vue';
  import InstructorAssess from './components/instructor-assess.vue';
  import TeachingInfo from './components/teaching-info.vue';
  import ResearchProject from './components/research-project.vue';
  import RdAchievement from './components/rd-achievement.vue';

  const searchValue = ref('');
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px;
    width: 100%;
  }

  .central-card {
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
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
