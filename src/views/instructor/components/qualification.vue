<template>
  <a-card id="qualification" title="职业资格">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="qualifications" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 职业资格编辑 </template>
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
  import { Qualification, getQualification } from '@/api/qualification';

  const qualifications = ref([] as Qualification[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getQualification(8504);
    // for each in data
    data.forEach((element) => {
      element.awarding_time =
        element.awarding_time === null
          ? ''
          : element.awarding_time.slice(0, 10);
    });
    qualifications.value = data;
  };
  fetchData();

  const columns = [
    {
      title: '证书名称',
      dataIndex: 'certificate_name',
    },
    {
      title: '授予单位',
      dataIndex: 'awarding_dept',
    },
    {
      title: '获取时间',
      dataIndex: 'awarding_time',
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
