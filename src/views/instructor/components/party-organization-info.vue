<template>
  <a-card id="party-organization-info" title="组织信息">
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
      label: '入党时间',
      value: '2000年1月1日',
    },
    {
      label: '预备/正式',
      value: '预备党员',
    },
    {
      label: '支部职务',
      value: '支部书记',
    },
    {
      label: '党籍状态',
      value: '在籍',
    },
    {
      label: '所属党支部',
      value: '北京交通大学党支部',
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
