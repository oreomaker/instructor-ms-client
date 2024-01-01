<template>
  <a-card id="award" title="表彰奖励">
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
      <template #title> 表彰奖励编辑 </template>
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
  import awardData from '../data/award';

  const props = defineProps({
    idNumber: {
      type: Number,
      required: true,
    },
  });

  const columns = [
    {
      title: '获奖时间',
      dataIndex: 'awarding_time',
    },
    {
      title: '奖项级别',
      dataIndex: 'award_level',
    },
    {
      title: '奖项名称',
      dataIndex: 'award_name',
    },
    {
      title: '本人位次',
      dataIndex: 'author_rank',
    },
    {
      title: '表彰部门',
      dataIndex: 'awarding_dept',
    },
    {
      title: '备注',
      dataIndex: 'note',
    },
  ];
  const data = reactive(awardData);

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
