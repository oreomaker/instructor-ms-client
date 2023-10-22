<template>
  <a-card id="contact-info" title="联系方式">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-descriptions :data="data" bordered />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 联系方式 </template>
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
  <a-card title="家庭信息">
    <a-table :columns="columns" :data="familyContact" :pagination="false" />
  </a-card>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const data = [
    {
      label: '手机',
      value: '19999999999',
    },
    {
      label: '微信号',
      value: 'ceshi',
    },
    {
      label: '宿舍号',
      value: 'z16-101',
    },
    {
      label: '紧急联系人',
      value: '张三',
    },
    {
      label: '联系人电话',
      value: '19999999999',
    },
    {
      label: '电子邮箱',
      value: 'example@test.com',
    },
    {
      label: '家庭电话',
      value: '',
    },
    {
      label: '家庭住址',
      value: '北京市海淀区',
    },
  ];
  const columns = [
    {
      title: '关系',
      dataIndex: 'relation',
    },
    {
      title: '所在单位',
      dataIndex: 'workplace',
    },
    {
      title: '职务',
      dataIndex: 'position',
    },
    {
      title: '联系方式',
      dataIndex: 'contact',
    },
  ];
  const familyContact = reactive([
    {
      key: '1',
      relation: 'Jane Doe',
      workplace: 'Morgan Stanley',
      position: 'Staff',
      contact: 'New York No. 1 Lake Park',
    },
  ]);

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
