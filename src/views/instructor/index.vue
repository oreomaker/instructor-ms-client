<template>
  <div class="container">
    <UserInfoHeader />

    <div class="content">
      <div class="content-left">
        <a-space direction="vertical" size="medium" fill>
          <BaseInfo class="general-card" />
          <SchoolRollInfo class="general-card" />
          <ContactInfo class="general-card" />
          <ClassInfo class="general-card" />
          <HouseholdRegInfo class="general-card" />
          <CadreInfo class="general-card" />
          <PartyOrganizationInfo class="general-card" />
          <GradeInfo class="general-card" />
          <AwardLoanInfo class="general-card" />
          <AwardPracticeInfo class="general-card" />
          <MajorChangeInfo class="general-card" />
          <OrientationInfo class="general-card" />
          <GradProjectInfo class="general-card" />
          <EmploymentInfo class="general-card" />
          <TechInnovInfo class="general-card" />
          <I18nExchInfo class="general-card" />
          <NoteInfo class="general-card" />
          <RelatedNavInfo class="general-card" />
        </a-space>
      </div>
      <div class="content-right">
        <a-affix :offset-top="60">
          <a-anchor boundary="center">
            <a-anchor-link href="#base-info">基本信息</a-anchor-link>
            <a-anchor-link href="#school-roll-info">学籍信息</a-anchor-link>
            <a-anchor-link href="#contact-info">联系方式</a-anchor-link>
            <a-anchor-link href="#class-info">班级信息</a-anchor-link>
            <a-anchor-link href="#household-reg-info">户籍信息</a-anchor-link>
            <a-anchor-link href="#cadre-info">干部信息</a-anchor-link>
            <a-anchor-link href="#party-organization-info"
              >组织信息</a-anchor-link
            >
            <a-anchor-link href="#grade-info">成绩信息</a-anchor-link>
            <a-anchor-link href="#award-loan-info">奖惩助贷信息</a-anchor-link>
            <a-anchor-link href="#award-practice-info"
              >奖励培训信息</a-anchor-link
            >
            <a-anchor-link href="#major-change-info">转专业信息</a-anchor-link>
            <a-anchor-link href="#orientation-info">迎新数据</a-anchor-link>
            <a-anchor-link href="#grad-project-info">毕设信息</a-anchor-link>
            <a-anchor-link href="#employment-info">就业信息</a-anchor-link>
            <a-anchor-link href="#tech-innov-info">科创信息</a-anchor-link>
            <a-anchor-link href="#i18n-exch-info">国际交流</a-anchor-link>
            <a-anchor-link href="#note-info">人员备注备</a-anchor-link>
            <a-anchor-link href="#related-nav-info">相关导航</a-anchor-link>
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
  import SchoolRollInfo from './components/school-roll-info.vue';
  import ContactInfo from './components/contact-info.vue';
  import ClassInfo from './components/class-info.vue';
  import HouseholdRegInfo from './components/household-reg-info.vue';
  import CadreInfo from './components/cadre-info.vue';
  import PartyOrganizationInfo from './components/party-organization-info.vue';
  import GradeInfo from './components/grade-info.vue';
  import AwardLoanInfo from './components/award-loan-info.vue';
  import AwardPracticeInfo from './components/award-practice-info.vue';
  import MajorChangeInfo from './components/major-change-info.vue';
  import OrientationInfo from './components/orientation-info.vue';
  import GradProjectInfo from './components/grad-project-info.vue';
  import EmploymentInfo from './components/employment-info.vue';
  import TechInnovInfo from './components/tech-innov-info.vue';
  import I18nExchInfo from './components/i18n-exch-info.vue';
  import NoteInfo from './components/note-info.vue';
  import RelatedNavInfo from './components/related-nav-info.vue';
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

  .absolute {
    position: fixed;
    bottom: 30px;
    right: 24px;
  }
</style>
