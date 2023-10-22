<template>
  <a-card id="base-info" title="组织信息">
    <a-descriptions :data="data" bordered />
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>
    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 组织信息编辑 </template>
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

  const data = [
    {
      label: '姓名',
      value: '测试',
    },
    {
      label: '民族',
      value: '汉族',
    },
    {
      label: '姓名拼音',
      value: 'ceshi',
    },
    {
      label: '曾用名',
      value: '',
    },
    {
      label: '出生日期',
      value: '2000年1月1日',
    },
    {
      label: '婚姻状态',
      value: '未婚',
    },
    {
      label: '国籍',
      value: '中国',
    },
    {
      label: '籍贯',
      value: '河北',
    },
    {
      label: '政治面貌',
      value: '团员',
    },
    {
      label: '证件类型',
      value: '身份证',
    },
    {
      label: '证件号码',
      value: '123456789',
    },
    {
      label: '生源地',
      value: '北京',
    },
    {
      label: '宗教信仰',
      value: '无',
    },
    {
      label: '身高(cm)',
      value: '170',
    },
    {
      label: '健康状况',
      value: '良好',
    },
    {
      label: '体重(kg)',
      value: '70',
    },
  ];

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
