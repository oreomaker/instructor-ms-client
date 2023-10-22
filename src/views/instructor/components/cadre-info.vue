<template>
  <a-card id="cadre-info" title="干部信息">
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
      <template #title> 干部信息编辑 </template>
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

  const columns = [
    {
      title: '班级/学生组织/社团',
      dataIndex: 'organization_name',
    },
    {
      title: '职务名称',
      dataIndex: 'position',
    },
    {
      title: '开始时间',
      dataIndex: 'start_date',
    },
    {
      title: '结束时间',
      dataIndex: 'end_date',
    },
  ];
  const data = [
    {
      key: '1',
      organization_name: '测试',
      position: '测试',
      start_date: '2021-01',
      end_date: '2021-01',
    },
    {
      key: '2',
      organization_name: '测试',
      position: '测试',
      start_date: '2021-01',
      end_date: '2021-01',
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
