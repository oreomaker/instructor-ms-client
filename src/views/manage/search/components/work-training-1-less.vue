<template>
  <a-card id="work-training-1-less" title="岗位锻炼1个月以内">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="workTraining1Less" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 岗位锻炼1个月以下编辑 </template>
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
  import { WorkTraining1Less, getWorkTraining1Less } from '@/api/work-training';

  const props = defineProps({
    idNumber: {
      type: Number,
      required: true,
    },
  });

  const workTraining1Less = ref([] as WorkTraining1Less[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getWorkTraining1Less(props.idNumber);
    // for each in data
    data.forEach((element) => {
      element.start_time =
        element.start_time === null ? '' : element.start_time.slice(0, 10);
      element.end_time =
        element.end_time === null ? '' : element.end_time.slice(0, 10);
    });
    workTraining1Less.value = data;
  };
  fetchData();

  const columns = [
    {
      title: '起始时间',
      dataIndex: 'start_time',
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
    },
    {
      title: '培训级别',
      dataIndex: 'training_level',
    },
    {
      title: '组织单位',
      dataIndex: 'organizing_dept',
    },
    {
      title: '培训名称',
      dataIndex: 'training_name',
    },
    {
      title: '培训性质',
      dataIndex: 'training_type',
    },
    {
      title: '培训地点',
      dataIndex: 'training_location',
    },
    {
      title: '备注',
      dataIndex: 'note',
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
