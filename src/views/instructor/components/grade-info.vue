<template>
  <a-card id="grade-info" title="成绩信息">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-card title="平时成绩与思测">
      <a-table
        :columns="annualGradeColumn"
        :data="annualGrade"
        :pagination="false"
      />
    </a-card>
    <a-card title="学习成绩">
      <a-table
        :columns="courseGradeColumn"
        :data="courseGrade"
        :pagination="false"
      />
    </a-card>
    <a-card title="四六级成绩">
      <a-descriptions :data="cetGrade" bordered />
    </a-card>
    <a-card title="宿舍成绩">
      <a-table
        :columns="dormitoryGradeColumn"
        :data="dormitoryGrade"
        :pagination="false"
      />
    </a-card>

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 成绩信息编辑 </template>
      <a-form ref="baseInfoFormRef" layout="vertical" :model="baseInfo">
        <a-row :gutter="80">
          <a-col :span="8">
            <a-form-item label="联系人姓名" name="contactName">
              <a-input :value="baseInfo.contactName" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="预计到岗时间" name="estimateTime">
              <a-date-picker :value="baseInfo.estimateTime" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="预计到岗时间" name="estimateTime">
              <a-date-picker :value="baseInfo.estimateTime" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const annualGradeColumn = [
    {
      title: '学年',
      dataIndex: 'academic_year',
    },
    {
      title: '学习成绩',
      dataIndex: 'academic_score',
    },
    {
      title: '学习排名',
      dataIndex: 'academic_rank',
    },
    {
      title: '思测成绩',
      dataIndex: 'cognitive_score',
    },
    {
      title: '思测排名',
      dataIndex: 'cognitive_rank',
    },
    {
      title: '人数',
      dataIndex: 'number_of_students',
    },
  ];
  const annualGrade = ref([
    {
      academic_year: '2020-2021',
      academic_score: '90',
      academic_rank: '1',
      cognitive_score: '90',
      cognitive_rank: '1',
      number_of_students: '100',
    },
    {
      academic_year: '2020-2021',
      academic_score: '90',
      academic_rank: '1',
      cognitive_score: '90',
      cognitive_rank: '1',
      number_of_students: '100',
    },
  ]);

  const courseGradeColumn = [
    {
      title: '学年学期',
      dataIndex: 'academic_semester',
    },
    {
      title: '课程名',
      dataIndex: 'course_name',
    },
    {
      title: '课程号',
      dataIndex: 'course_code',
    },
    {
      title: '学分',
      dataIndex: 'credits',
    },
    {
      title: '最终成绩',
      dataIndex: 'final_score',
    },
    {
      title: '课程属性',
      dataIndex: 'course_attribute',
    },
    {
      title: '修读方式',
      dataIndex: 'study_mode',
    },
  ];
  const courseGrade = ref([
    {
      academic_semester: '2020-2021',
      course_name: '高等数学',
      course_code: '123456',
      credits: '4',
      final_score: '90',
      course_attribute: '必修',
      study_mode: '正常',
    },
    {
      academic_semester: '2020-2021',
      course_name: '高等数学',
      course_code: '123456',
      credits: '4',
      final_score: '90',
      course_attribute: '必修',
      study_mode: '正常',
    },
  ]);

  const cetGrade = [
    {
      label: '四级成绩',
      value: '600',
    },
    {
      label: '六级成绩',
      value: '500',
    },
  ];

  const dormitoryGradeColumn = [
    {
      title: '个人分数',
      dataIndex: 'personal_score',
    },
    {
      title: '宿舍分数',
      dataIndex: 'dormitory_score',
    },
    {
      title: '检查日期',
      dataIndex: 'inspection_date',
    },
  ];
  const dormitoryGrade = ref([
    {
      personal_score: '90',
      dormitory_score: '90',
      inspection_date: '2020-01-01',
    },
    {
      personal_score: '90',
      dormitory_score: '90',
      inspection_date: '2020-01-01',
    },
  ]);

  const visible = ref(false);
  const handleClick = () => {
    // TODO: 使用表格中的编辑按钮进行操作
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const baseInfoFormRef = ref<FormInstance>();
  const baseInfo = ref({
    contactName: '',
    estimateTime: '',
  });
</script>
