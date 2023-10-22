<template>
  <a-card id="grad-project-info" title="毕业设计">
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
      <template #title> 毕业设计编辑 </template>
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
      label: '论文题目',
      value: '基于vue的毕业设计',
    },
    {
      label: '题目类型',
      value: '毕业设计',
    },
    {
      label: '题目来源',
      value: '自拟',
    },
    {
      label: '指导老师',
      value: '测试',
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
