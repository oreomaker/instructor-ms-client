<template>
  <a-card id="i18n-exch-info" title="国际交流">
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
      <template #title> 国际交流信息编辑 </template>
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

  const columns = [
    {
      title: '办理时间(年月)',
      dataIndex: 'processing_date',
    },
    {
      title: '交流国别',
      dataIndex: 'exchange_country',
    },
    {
      title: '交流单位',
      dataIndex: 'exchange_institution',
    },
    {
      title: '交流形式',
      dataIndex: 'exchange_mode',
    },
    {
      title: '交流时间段',
      dataIndex: 'exchange_duration',
    },
    {
      title: '学习专业',
      dataIndex: 'study_major',
    },
    {
      title: '最后资质（学位、证书、互换学分、其他）',
      dataIndex: 'final_qualification',
    },
  ];
  const data = reactive([]);

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
