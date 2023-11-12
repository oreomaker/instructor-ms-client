<template>
  <a-card id="study-info" title="学习经历">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="data" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 学习经历编辑 </template>
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
  import { ref, reactive } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  // TODO: remove
  import studyInfoData from '../data/study-info';

  const columns = [
    {
      title: '学历类型',
      dataIndex: 'studying_level',
    },
    {
      title: '入学时间',
      dataIndex: 'enroll_date',
    },
    {
      title: '院校国家',
      dataIndex: 'studying_country',
    },
    {
      title: '毕业学校',
      dataIndex: 'university',
    },
    {
      title: '专业',
      dataIndex: 'major',
    },
    {
      title: '毕业时间',
      dataIndex: 'grad_date',
    },
    {
      title: '学制',
      dataIndex: 'studying_year',
    },
    {
      title: '学历取得方式',
      dataIndex: 'degree_type',
    },
    {
      title: '学位',
      dataIndex: 'degree',
    },
    {
      title: '学位授予时间',
      dataIndex: 'degree_date',
    },
    {
      title: '学位取得方式',
      dataIndex: 'studying_type',
    },
    {
      title: '毕业学校类别',
      dataIndex: 'school_type',
    },
  ];
  const data = reactive(studyInfoData);

  const visible = ref(false);
  const handleClick = () => {
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
