<template>
  <div class="container">
    <a-card title="模块选择" class="general-card">
      <a-select
        v-model="value"
        style="width: 400px; margin-bottom: 16px"
        placeholder="选择查找模块"
      >
        <a-option
          v-for="item of optionData"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </a-select>
      {{ value }}

      <a-form :model="form">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item field="value1" label="Value 1" label-col-flex="100px">
              <a-input v-model="form.value1" placeholder="please enter..." />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="value2" label="Value 2" label-col-flex="80px">
              <a-input v-model="form.value2" placeholder="please enter..." />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="value3" label="Value 3" label-col-flex="80px">
              <a-input v-model="form.value3" placeholder="please enter..." />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="16">
            <a-form-item field="value4" label="Value 4" label-col-flex="100px">
              <a-input v-model="form.value4" placeholder="please enter..." />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="value5" label="Value 5" label-col-flex="80px">
              <a-input v-model="form.value5" placeholder="please enter..." />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-card>

    <div class="content">
      <a-card title="搜索结果" class="general-card">
        <template #extra>
          <a-button type="outline" size="small">
            <template #icon>
              <icon-export />
            </template>
            导出
          </a-button>
        </template>

        <FamilyInfo v-if="value == 'family-info'" :id-number="8504" />
        <StudyInfo v-if="value == 'study-info'" :id-number="8504" />
        <WorkInfo v-if="value == 'work-info'" />
        <AdministrationInfo v-if="value == 'administration-info'" />
        <JobTitle v-if="value == 'job-title'" />
        <WorkTraining1More v-if="value == 'work-training-1-more'" />
        <WorkTraining1Less v-if="value == 'work-training-1-less'" />
        <Award v-if="value == 'award'" />
        <Qualification v-if="value == 'qualification'" />
        <AnnualAssess v-if="value == 'annual-assess'" />
        <InstructorAssess v-if="value == 'instructor-assess'" />
        <TeachingInfo v-if="value == 'teaching-info'" />
        <ResearchProject v-if="value == 'research-project'" />
        <RdAchievement v-if="value == 'rd-achievement'" />
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import optionData from './data/option-data';

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

  const value = ref('');
  const form = reactive({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
  });
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px;
    width: 100%;
  }

  .content {
    display: flex;
  }

  .general-card {
    margin-top: 16px;
    width: 100%;
  }
</style>
