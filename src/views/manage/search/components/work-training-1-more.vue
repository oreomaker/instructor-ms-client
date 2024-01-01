<template>
  <a-card id="work-training-1-more" title="岗位锻炼1个月以上">
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
      <template #title> 岗位锻炼1个月以上编辑 </template>
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
  import workTrainingData from '../data/work-training-1-more';

  const props = defineProps({
    idNumber: {
      type: Number,
      required: true,
    },
  });

  const columns = [
    {
      title: '锻炼性质',
      dataIndex: 'training_type',
    },
    {
      title: '起始时间',
      dataIndex: 'start_time',
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
    },
    {
      title: '组织单位',
      dataIndex: 'organizing_dept',
    },
    {
      title: '接收单位',
      dataIndex: 'receiving_dept',
    },
    {
      title: '岗位名称',
      dataIndex: 'job_name',
    },
    {
      title: '借调事由',
      dataIndex: 'secondment_reason',
    },
    {
      title: '备注',
      dataIndex: 'note',
    },
  ];
  const data = reactive(workTrainingData);

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
