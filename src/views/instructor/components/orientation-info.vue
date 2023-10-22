<template>
  <a-card id="orientation-info" title="迎新数据">
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
      <template #title> 迎新数据编辑 </template>
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
      label: '是否申请绿色通道',
      value: '是',
    },
    {
      label: '是否申请助学贷款',
      value: '是',
    },
    {
      label: '崇拜的偶像',
      value: 'Donald Trump',
    },
    {
      label: '特长爱好',
      value: '',
    },
    {
      label: '高中担任职务及获奖',
      value: '',
    },
    {
      label: '希望担任何种班级职务',
      value: '班长',
    },
    {
      label: '对自己的性格描述',
      value: '',
    },
    {
      label: '对自己的家庭描述',
      value: '',
    },
    {
      label: '大学的期望和目标',
      value: '',
    },
    {
      label: '对辅导员想说的话',
      value: '',
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
