<template>
  <a-card id="research-project" title="研究项目">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="projects" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 研究项目编辑 </template>
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
  import { ResearchProject, getResearchProject } from '@/api/research-project';

  const projects = ref([] as ResearchProject[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getResearchProject(8504);
    // for each in data
    data.forEach((element) => {
      element.start_time =
        element.start_time === null ? '' : element.start_time.slice(0, 10);
      element.end_time =
        element.end_time === null ? '' : element.end_time.slice(0, 10);
    });
    projects.value = data;
  };
  fetchData();

  const columns = [
    {
      title: '项目级别',
      dataIndex: 'project_level',
    },
    {
      title: '项目名称',
      dataIndex: 'project_name',
    },
    {
      title: '项目编号',
      dataIndex: 'project_id',
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
      title: '实到经费(万元)',
      dataIndex: 'actual_funding',
    },
    {
      title: '本人位次',
      dataIndex: 'author_rank',
    },
    {
      title: '批准部门',
      dataIndex: 'approve_dept',
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
