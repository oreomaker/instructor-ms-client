<template>
  <a-card id="work-info" title="工作履历">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="workInfo" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 工作履历编辑 </template>
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
  import { WorkInfo, getWorkInfo } from '@/api/work-info';

  const props = defineProps({
    idNumber: {
      type: Number,
      required: true,
    },
  });

  const workInfo = ref([] as WorkInfo[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getWorkInfo(props.idNumber);
    // for each in data
    data.forEach((element) => {
      element.start_time =
        element.start_time === null ? '' : element.start_time.slice(0, 10);
      element.end_time =
        element.end_time === null ? '' : element.end_time.slice(0, 10);
    });
    workInfo.value = data;
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
      title: '国家',
      dataIndex: 'country',
    },
    {
      title: '省份',
      dataIndex: 'province',
    },
    {
      title: '工作单位',
      dataIndex: 'workplace',
    },
    {
      title: '校内工作单位',
      dataIndex: 'department',
    },
    {
      title: '岗位',
      dataIndex: 'position',
    },
    {
      title: '职务',
      dataIndex: 'duty',
    },
    {
      title: '工作岗位性质',
      dataIndex: 'position_type',
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
