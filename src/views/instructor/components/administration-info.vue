<template>
  <a-card id="administration-info" title="行政职务">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table
      :columns="columns"
      :data="administrationInfo"
      :pagination="false"
    />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 行政职务编辑 </template>
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
  import {
    AdministrationInfo,
    getAdministrationInfo,
  } from '@/api/administration-info';

  const administrationInfo = ref([] as AdministrationInfo[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getAdministrationInfo(8504);
    // for each in data
    data.forEach((element) => {
      element.start_time =
        element.start_time === null ? '' : element.start_time.slice(0, 10);
      element.end_time =
        element.end_time === null ? '' : element.end_time.slice(0, 10);
    });
    administrationInfo.value = data;
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
      title: '行政级别',
      dataIndex: 'administration_level',
    },
    {
      title: '任职部门',
      dataIndex: 'administration_dept',
    },
    {
      title: '行政职务名称',
      dataIndex: 'administration_name',
    },
    {
      title: '任免文号',
      dataIndex: 'administration_number',
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
