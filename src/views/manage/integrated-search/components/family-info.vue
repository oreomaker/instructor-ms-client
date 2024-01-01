<template>
  <a-card id="family-info" title="家庭信息">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="familyInfo" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 家庭信息编辑 </template>
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
  import { FamilyInfo, getFamilyInfo } from '@/api/family-info';

  const props = defineProps({
    idNumber: {
      type: Number,
      required: true,
    },
  });

  const familyInfo = ref([] as FamilyInfo[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getFamilyInfo(props.idNumber);
    // for each in data
    // data.forEach((element) => {
    //   element.grad_date =
    //     element.grad_date === null ? '' : element.grad_date.slice(0, 10);
    // });
    familyInfo.value = data;
  };
  fetchData();

  const columns = [
    {
      title: '关系',
      dataIndex: 'relationship',
    },
    {
      title: '成员姓名',
      dataIndex: 'name',
    },
    {
      title: '成员性别',
      dataIndex: 'gender',
    },
    {
      title: '成员出生日期',
      dataIndex: 'birthday',
    },
    {
      title: '成员文化程度',
      dataIndex: 'education_degree',
    },
    {
      title: '成员民族',
      dataIndex: 'ethnicity',
    },
    {
      title: '政治面貌',
      dataIndex: 'political_status',
    },
    {
      title: '成员学习或工作单位',
      dataIndex: 'workplace',
    },
    {
      title: '成员职务',
      dataIndex: 'position',
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
