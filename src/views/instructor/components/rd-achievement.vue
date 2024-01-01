<template>
  <a-card id="rd-achievement" title="科研成果(论文)">
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>

    <a-table :columns="columns" :data="achievements" :pagination="false" />

    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 科研成果(论文) </template>
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
  import { RDAchievement, getRDAchievement } from '@/api/rd-achievement';

  const achievements = ref([] as RDAchievement[]);
  const fetchData = async () => {
    // todo: get from user info
    const data = await getRDAchievement(8504);
    // for each in data
    data.forEach((element) => {
      element.publication_date =
        element.publication_date === null
          ? ''
          : element.publication_date.slice(0, 10);
    });
    achievements.value = data;
  };
  fetchData();

  const columns = [
    {
      title: '题目',
      dataIndex: 'project_title',
    },
    {
      title: '期刊名称',
      dataIndex: 'journal_name',
    },
    {
      title: '期刊国内标准刊号(CN)',
      dataIndex: 'CN_number',
    },
    {
      title: '期刊类型',
      dataIndex: 'journal_type',
    },
    {
      title: '发表时间',
      dataIndex: 'publication_date',
    },
    {
      title: '本人位次',
      dataIndex: 'author_rank',
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
