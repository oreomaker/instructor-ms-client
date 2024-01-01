<template>
  <a-card id="teaching-info" title="教学情况">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="teachingInfo" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 教学情况编辑 </template>
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
  import { TeachingInfo, getTeachingInfo } from '@/api/teaching-info';

  const props = defineProps({
    idNumber: {
      type: Number,
      required: true,
    },
  });

  const teachingInfo = ref([] as TeachingInfo[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getTeachingInfo(props.idNumber);
    // for each in data
    data.forEach((element) => {
      element.start_time =
        element.start_time === null ? '' : element.start_time.slice(0, 10);
      element.end_time =
        element.end_time === null ? '' : element.end_time.slice(0, 10);
    });
    teachingInfo.value = data;
  };
  fetchData();

  const columns = [
    {
      title: '课程名称',
      dataIndex: 'course_name',
    },
    {
      title: '课程类型',
      dataIndex: 'course_type',
    },
    {
      title: '课程性质',
      dataIndex: 'course_character',
    },
    {
      title: '课时量',
      dataIndex: 'course_period',
    },
    {
      title: '授课人数',
      dataIndex: 'course_volumn',
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
